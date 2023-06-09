import { ChainId } from "@layerzerolabs/lz-sdk"
import { PoolId } from "../enums"
import JSBI from "jsbi"
import { SHARE_DECIMALS } from "../constants/pool"
import { invariant as assert } from "../utils/invariantHelper"
import { FeeObj, FeeV01, FeeV02 } from "./fee"
import { Currency, CurrencyAmount, Fraction, Token } from "@layerzerolabs/ui-core"

//Pool Fee
export interface PoolFee {
    mintFeeRate: Fraction
}

export interface ChainPath {
    chainId: ChainId // immutable
    poolId: PoolId // immutable
    ready: boolean
    balance: CurrencyAmount
    idealBalance: CurrencyAmount
    lkb: CurrencyAmount
    credit: CurrencyAmount
    weight: number
}

export type ChainPaths = { [chainId: number]: { [poolId: number]: ChainPath } }

export class Pool {
    public readonly liquidityToken: Token
    public readonly token: Currency
    public fee: FeeV01 | FeeV02 | undefined
    public readonly poolFee: PoolFee
    public readonly chainPaths: ChainPaths

    public constructor(lpToken: Token, token: Currency, poolFee: PoolFee, chainPaths: ChainPaths) {
        this.liquidityToken = lpToken
        this.token = token
        this.poolFee = poolFee
        this.chainPaths = chainPaths
    }

    public setFee(_fee: FeeV01 | FeeV02) {
        this.fee = _fee
    }

    public getChainId(): number {
        return this.token.chainId
    }

    getChainPath(chainId: ChainId, poolId: PoolId): ChainPath | undefined {
        return this.chainPaths[chainId]?.[poolId]
    }

    amountLDtoSD(amountLD: CurrencyAmount): CurrencyAmount {
        return CurrencyAmount.fromRawAmount(
            this.liquidityToken,
            amountLD.multiply(JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(SHARE_DECIMALS))).divide(amountLD.decimalScale).quotient
        )
    }

    amountSDtoLD(amountSD: CurrencyAmount): CurrencyAmount {
        return CurrencyAmount.fromRawAmount(
            this.token,
            amountSD.multiply(JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(this.token.decimals))).divide(amountSD.decimalScale).quotient
        )
    }

    // swap
    public getSwapOutputAmount(
        inputAmount: CurrencyAmount,
        minAmount: CurrencyAmount,
        dstChainId: ChainId,
        dstPoolId: PoolId,
        tokenBalance: CurrencyAmount,
        totalLiquidity: CurrencyAmount,
        eqFeePool: CurrencyAmount
    ): { outputAmount: CurrencyAmount; fee: FeeObj } {
        assert(inputAmount.currency.equals(this.token), "TOKEN")
        assert(minAmount.currency.equals(this.token), "TOKEN")
        assert(tokenBalance.currency.equals(this.token), "TOKEN")
        assert(totalLiquidity.currency.equals(this.liquidityToken), "LIQUIDITY")
        assert(eqFeePool.currency.equals(this.liquidityToken), "LIQUIDITY")
        assert(this.fee != undefined, "FEE")

        const cp = this.getChainPath(dstChainId, dstPoolId)
        assert(cp, "NO_CHAIN_PATH")

        // fee library
        let fee: FeeObj
        if (this.fee?.version.split(".")[0] == "1") {
            fee = (<FeeV01>this.fee).getFees(inputAmount)
        } else {
            fee = (<FeeV02>this.fee).getFees(cp.idealBalance, cp.balance, tokenBalance, totalLiquidity, eqFeePool, inputAmount)
        }

        const amount = inputAmount.subtract(fee.eqFee).subtract(fee.protocolFee).subtract(fee.lpFee)
        assert(JSBI.greaterThanOrEqual(amount.add(fee.eqReward).quotient, minAmount.quotient), "SLIPPAGE_TOO_HIGH")

        const lkbRemove = this.amountLDtoSD(inputAmount.subtract(fee.lpFee))
        assert(JSBI.greaterThanOrEqual(cp.balance.quotient, lkbRemove.quotient), "DST_BALANCE_TOO_LOW")

        return {
            outputAmount: amount.add(fee.eqReward),
            fee,
        }
    }

    //add liquidity
    public getLiquidityMinted(
        totalSupply: CurrencyAmount, //token LP
        totalLiquidity: CurrencyAmount, //token LP
        tokenAmount: CurrencyAmount, //token
        feeOn: boolean = false
    ): CurrencyAmount {
        assert(tokenAmount.currency.equals(this.token), "TOKEN")
        assert(totalSupply.currency.equals(this.liquidityToken), "LIQUIDITY")
        assert(totalLiquidity.currency.equals(this.liquidityToken), "LIQUIDITY")

        let amountSD = this.amountLDtoSD(tokenAmount).quotient
        if (feeOn) {
            const mintFee = JSBI.divide(JSBI.multiply(amountSD, this.poolFee.mintFeeRate.numerator), this.poolFee.mintFeeRate.denominator)
            amountSD = JSBI.subtract(amountSD, mintFee)
        }

        let amountLPTokens = amountSD
        if (JSBI.notEqual(totalSupply.quotient, JSBI.BigInt(0))) {
            amountLPTokens = JSBI.divide(JSBI.multiply(amountSD, totalSupply.quotient), totalLiquidity.quotient)
        }
        return CurrencyAmount.fromRawAmount(this.liquidityToken, amountLPTokens)
    }

    //remove liquidity A
    //redeem local instant
    public getRedeemLocalInstant(
        totalSupply: CurrencyAmount, //token LP
        totalLiquidity: CurrencyAmount, //token Pool
        deltaCredit: CurrencyAmount, //token Pool
        lpTokenAmount: CurrencyAmount //token LP / Pool, both are in SHARED_DECIMAL
    ): [CurrencyAmount, CurrencyAmount] {
        assert(totalSupply.currency.equals(this.liquidityToken), "LIQUIDITY")
        assert(totalLiquidity.currency.equals(this.liquidityToken), "LIQUIDITY")
        assert(deltaCredit.currency.equals(this.liquidityToken), "LIQUIDITY")
        assert(lpTokenAmount.currency.equals(this.liquidityToken), "LIQUIDITY")

        let amountLP = lpTokenAmount
        let amountSD = lpTokenAmount.multiply(totalLiquidity).divide(totalSupply)
        if (JSBI.lessThanOrEqual(deltaCredit.quotient, amountSD.quotient)) {
            amountSD = deltaCredit
            amountLP = amountSD.multiply(totalSupply).divide(totalLiquidity)
        }
        amountSD = amountLP.multiply(totalLiquidity).divide(totalSupply)
        const amountLD = this.amountSDtoLD(amountSD)
        return [CurrencyAmount.fromRawAmount(this.token, amountLD.quotient), amountLP]
    }

    //remove liquidity A->B
    //redeem remote
    //todo: how much lp one should redeem
    public getRedeemRemote(
        dstChainId: ChainId,
        dstPoolId: PoolId,
        totalSupply: CurrencyAmount,
        totalLiquidity: CurrencyAmount,
        lpTokenAmount: CurrencyAmount,
        minAmount: CurrencyAmount,
        tokenBalance: CurrencyAmount,
        eqFeePool: CurrencyAmount
    ): [CurrencyAmount, CurrencyAmount] {
        assert(totalSupply.currency.equals(this.liquidityToken), "LIQUIDITY")
        assert(totalLiquidity.currency.equals(this.liquidityToken), "LIQUIDITY")
        assert(lpTokenAmount.currency.equals(this.liquidityToken), "LIQUIDITY")
        assert(eqFeePool.currency.equals(this.liquidityToken), "LIQUIDITY")
        assert(minAmount.currency.equals(this.token), "TOKEN")
        assert(tokenBalance.currency.equals(this.token), "TOKEN")

        //check that pool has enough liquidity
        assert(
            JSBI.greaterThanOrEqual(totalLiquidity.quotient, lpTokenAmount.multiply(totalLiquidity).divide(totalSupply).quotient),
            "POOL DOES NOT HAVE ENOUGH LIQUIDITY"
        )

        const amountSD = lpTokenAmount.multiply(totalLiquidity).divide(totalSupply)
        const amountLD = this.amountSDtoLD(amountSD)
        return [
            this.getSwapOutputAmount(
                CurrencyAmount.fromRawAmount(this.token, amountLD.quotient),
                minAmount,
                dstChainId,
                dstPoolId,
                tokenBalance,
                totalLiquidity,
                eqFeePool
            ).outputAmount,
            CurrencyAmount.fromRawAmount(this.token, 0),
        ]
    }

    //remove liquidity A->B->A
    //redeem local
    public getRedeemLocal(
        dstChainId: ChainId,
        dstPoolId: PoolId,
        totalSupply: CurrencyAmount,
        totalLiquidity: CurrencyAmount,
        lpTokenAmount: CurrencyAmount
    ): [CurrencyAmount, CurrencyAmount] {
        assert(totalSupply.currency.equals(this.liquidityToken), "LIQUIDITY")
        assert(totalLiquidity.currency.equals(this.liquidityToken), "LIQUIDITY")
        assert(lpTokenAmount.currency.equals(this.liquidityToken), "LIQUIDITY")

        const cp = this.getChainPath(dstChainId, dstPoolId)
        assert(cp, "NO_CHAIN_PATH")
        let amountSD = lpTokenAmount.multiply(totalLiquidity).divide(totalSupply)
        const available = cp.lkb.add(cp.credit)
        if (JSBI.greaterThanOrEqual(amountSD.quotient, available.quotient)) {
            amountSD = available
        }
        const lpAmount = amountSD.multiply(totalSupply).divide(totalLiquidity)
        const amountLD = this.amountSDtoLD(amountSD)
        return [amountLD, lpAmount]
    }

    /**
     * Get the price of lpTokenAmount
     * @param totalSupply Total LP Tokens
     * @param totalLiquidity Total Tokens shared in the pool
     * @param lpTokenAmount LP Amount
     * @returns price
     */
    public getPrice(totalSupply: CurrencyAmount, totalLiquidity: CurrencyAmount, lpTokenAmount: CurrencyAmount) {
        assert(totalSupply.currency.equals(this.liquidityToken), "LIQUIDITY")
        assert(totalLiquidity.currency.equals(this.liquidityToken), "LIQUIDITY")
        assert(lpTokenAmount.currency.equals(this.liquidityToken), "LIQUIDITY")

        return this.amountSDtoLD(totalLiquidity.multiply(lpTokenAmount).divide(totalSupply))
    }

    /**
     * Static method version of getPrice.
     * @param totalSupply Total LP Tokens
     * @param totalLiquidity Total Tokens shared in the pool
     * @param lpTokenAmount LP Amount
     * @param token Token
     * @returns price
     */
    public static getPriceStatic(totalSupply: CurrencyAmount, totalLiquidity: CurrencyAmount, lpTokenAmount: CurrencyAmount, token: Currency) {
        const lpPrice = totalLiquidity.multiply(lpTokenAmount).divide(totalSupply)
        return CurrencyAmount.fromRawAmount(
            token,
            lpPrice.multiply(JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(token.decimals))).divide(lpPrice.decimalScale).quotient
        )
    }
}

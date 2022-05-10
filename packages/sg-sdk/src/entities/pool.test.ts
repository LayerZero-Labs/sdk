import { ChainPaths, Pool, PoolFee } from "./pool"
import { CurrencyAmount, Fraction } from "./fractions"
import { Token } from "./token"
import { TokenSymbol } from "../enums"
import { ChainId } from "@layerzerolabs/core-sdk"
import JSBI from "jsbi"
import { POOL_ADDRESS } from "../constants/addresses"
import { FeeV01 } from "./fee"

describe("Pool", () => {
    const chainId = ChainId.FUJI_SANDBOX
    const dstChainId = 1
    const dstPoolId = 1
    const token = new Token(chainId, "0x0000000000000000000000000000000000000000", 18, TokenSymbol.USDC)
    const liquidityToken = new Token(chainId, "0x0000000000000000000000000000000000000000", 6, TokenSymbol.SLP)
    const fraction = new Fraction(100, 10000) // 1%

    const poolFee: PoolFee = {
        mintFeeRate: fraction,
    }

    const chainPaths: ChainPaths = {
        1: {
            1: {
                chainId: dstChainId,
                poolId: dstPoolId,
                ready: true,
                balance: CurrencyAmount.fromRawAmount(liquidityToken, 100e6),
                idealBalance: CurrencyAmount.fromRawAmount(liquidityToken, 100e6),
                lkb: CurrencyAmount.fromRawAmount(liquidityToken, 100e6),
                credit: CurrencyAmount.fromRawAmount(liquidityToken, 0),
            },
        },
    }

    describe("#tokens", () => {
        it("#token", () => {
            expect(new Pool(token, poolFee, chainPaths).token).toEqual(token)
        })
        it("#liquidityToken", () => {
            expect(new Pool(token, poolFee, chainPaths).liquidityToken).toEqual(
                new Token(chainId, POOL_ADDRESS[TokenSymbol.USDC]![chainId], 6, "S*USDC", "STG-USDC LP")
            )
        })
    })

    describe("#chainId", () => {
        it("returns correct chainId", () => {
            expect(new Pool(token, poolFee, chainPaths).getChainId()).toEqual(chainId)
        })
    })

    describe("#getSwapOutputAmount", () => {
        it("slippage too high", () => {
            // all fees are 1%
            // user swaps 100 and gets max 98  (2% fee)
            const pool = new Pool(token, poolFee, chainPaths)
            pool.setFee(
                new FeeV01(
                    {
                        version: "1.0.0",
                        eqFeeRate: fraction,
                        eqRewardRate: fraction,
                        lpFeeRate: fraction,
                        protocolFeeRate: fraction,
                    },
                    pool.token,
                    pool.liquidityToken
                )
            )
            const inputAmount = CurrencyAmount.fromRawAmount(token, 100e18)
            const minAmount = CurrencyAmount.fromRawAmount(token, 100e18)

            expect(() =>
                pool.getSwapOutputAmount(
                    inputAmount,
                    minAmount,
                    1,
                    1,
                    CurrencyAmount.fromRawAmount(pool.token, JSBI.BigInt(0)),
                    CurrencyAmount.fromRawAmount(pool.liquidityToken, JSBI.BigInt(0)),
                    CurrencyAmount.fromRawAmount(pool.liquidityToken, JSBI.BigInt(0))
                )
            ).toThrow("SLIPPAGE_TOO_HIGH")
        })

        it("returns correct amount", () => {
            // all fees are 1%
            // user swaps 100 and gets 98  (2% fee)
            //  sub lpFee and protocolFee and eqFee (-3%)
            //  add eqReward (+1%)
            const pool = new Pool(token, poolFee, chainPaths)
            pool.setFee(
                new FeeV01(
                    {
                        version: "1.0.0",
                        eqFeeRate: fraction,
                        eqRewardRate: fraction,
                        lpFeeRate: fraction,
                        protocolFeeRate: fraction,
                    },
                    pool.token,
                    pool.liquidityToken
                )
            )

            const inputAmount = CurrencyAmount.fromRawAmount(token, 100e18)
            const minAmount = CurrencyAmount.fromRawAmount(token, 100e17)

            expect(
                pool
                    .getSwapOutputAmount(
                        inputAmount,
                        minAmount,
                        1,
                        1,
                        CurrencyAmount.fromRawAmount(pool.token, JSBI.BigInt(0)),
                        CurrencyAmount.fromRawAmount(pool.liquidityToken, JSBI.BigInt(0)),
                        CurrencyAmount.fromRawAmount(pool.liquidityToken, JSBI.BigInt(0))
                    )
                    .outputAmount.toExact()
            ).toEqual(CurrencyAmount.fromRawAmount(token, 98e18).toExact())
        })
    })

    describe("#getLiquidityMinted", () => {
        it("no fees - returns correct values", () => {
            //100:100 supply and liquidity
            //user adds 200 token and gets 200 liquidity
            const pool = new Pool(token, poolFee, chainPaths)
            const totalSupply = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
            const totalLiquidity = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
            const tokenAmount = CurrencyAmount.fromRawAmount(token, 200e18)

            expect(pool.getLiquidityMinted(totalSupply, totalLiquidity, tokenAmount, false)).toEqual(
                CurrencyAmount.fromRawAmount(pool.liquidityToken, 200e6)
            )
        })

        it("with fees - returns correct values", () => {
            // all fees are 1%
            // 100:100 supply and liquidity
            // user adds 200 token and gets 198 liquidity, 1% mint fee
            const pool = new Pool(token, poolFee, chainPaths)
            const totalSupply = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
            const totalLiquidity = CurrencyAmount.fromRawAmount(pool.liquidityToken, 1e6)
            const tokenAmount = CurrencyAmount.fromRawAmount(token, 2e18)

            expect(pool.getLiquidityMinted(totalSupply, totalLiquidity, tokenAmount, true)).toEqual(
                CurrencyAmount.fromRawAmount(pool.liquidityToken, 198e6)
            )
        })
    })

    describe("#getRedeemLocalInstant", () => {
        it("amount > deltaCredit, capped at deltaCredit", () => {
            //available = deltaCredit = 20 token
            //user has 40 tokens (in shares) and 100 lp
            const pool = new Pool(token, poolFee, chainPaths)
            const totalSupply = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
            const totalLiquidity = CurrencyAmount.fromRawAmount(pool.liquidityToken, 40e6)
            const deltaCredit = CurrencyAmount.fromRawAmount(pool.liquidityToken, 20e6)
            const lpTokenAmount = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)

            //trys to instant redeem 100 lp for 40 tokens
            //but redeemed 50lp for 20 tokens
            expect(pool.getRedeemLocalInstant(totalSupply, totalLiquidity, deltaCredit, lpTokenAmount)[0]).toEqual(
                CurrencyAmount.fromRawAmount(pool.token, 20e18)
            )
            expect(pool.getRedeemLocalInstant(totalSupply, totalLiquidity, deltaCredit, lpTokenAmount)[1].toExact()).toEqual(
                CurrencyAmount.fromRawAmount(pool.liquidityToken, 50e6).toExact()
            )
        })

        it("amount <= deltaCredit", () => {
            //available = deltaCredit = 20 token
            //user has 10 tokens (in shares) and 100 lp
            const pool = new Pool(token, poolFee, chainPaths)
            const totalSupply = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
            const totalLiquidity = CurrencyAmount.fromRawAmount(pool.liquidityToken, 10e6)
            const deltaCredit = CurrencyAmount.fromRawAmount(pool.liquidityToken, 20e6)
            const lpTokenAmount = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)

            //trys to instant redeem 100lp for 10 tokens
            expect(pool.getRedeemLocalInstant(totalSupply, totalLiquidity, deltaCredit, lpTokenAmount)[0]).toEqual(
                CurrencyAmount.fromRawAmount(pool.token, 10e18)
            )
            expect(pool.getRedeemLocalInstant(totalSupply, totalLiquidity, deltaCredit, lpTokenAmount)[1].toExact()).toEqual(
                CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6).toExact()
            )
        })
    })

    describe("#getRedeemRemote", () => {
        //todo: how much lp one should redeem
        //currently capped by swappable, need to trial and error to get a more precise amount
        it("amount <= available", () => {
            const pool = new Pool(token, poolFee, chainPaths)
            pool.setFee(
                new FeeV01(
                    {
                        version: "1.0.0",
                        eqFeeRate: fraction,
                        eqRewardRate: fraction,
                        lpFeeRate: fraction,
                        protocolFeeRate: fraction,
                    },
                    pool.token,
                    pool.liquidityToken
                )
            )
            const totalSupply = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
            const totalLiquidity = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
            const lpTokenAmount = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
            const minAmount = CurrencyAmount.fromRawAmount(pool.token, 10e6)

            expect(
                pool
                    .getRedeemRemote(
                        dstChainId,
                        dstPoolId,
                        totalSupply,
                        totalLiquidity,
                        lpTokenAmount,
                        minAmount,
                        CurrencyAmount.fromRawAmount(pool.token, JSBI.BigInt(0)),
                        CurrencyAmount.fromRawAmount(pool.liquidityToken, JSBI.BigInt(0))
                    )[0]
                    .toExact()
            ).toEqual(CurrencyAmount.fromRawAmount(token, 98e18).toExact())
        })

        it("amount > available", () => {
            const pool = new Pool(token, poolFee, chainPaths)
            pool.setFee(
                new FeeV01(
                    {
                        version: "1.0.0",
                        eqFeeRate: fraction,
                        eqRewardRate: fraction,
                        lpFeeRate: fraction,
                        protocolFeeRate: fraction,
                    },
                    pool.token,
                    pool.liquidityToken
                )
            )
            const totalSupply = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
            const totalLiquidity = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
            const lpTokenAmount = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
            const minAmount = CurrencyAmount.fromRawAmount(pool.token, 10e6)

            expect(
                pool
                    .getRedeemRemote(
                        dstChainId,
                        dstPoolId,
                        totalSupply,
                        totalLiquidity,
                        lpTokenAmount,
                        minAmount,
                        CurrencyAmount.fromRawAmount(pool.token, JSBI.BigInt(0)),
                        CurrencyAmount.fromRawAmount(pool.liquidityToken, JSBI.BigInt(0))
                    )[0]
                    .toExact()
            ).toEqual(CurrencyAmount.fromRawAmount(token, 98e18).toExact())
        })
    })

    describe("#getRedeemLocal", function () {
        describe("Fee Library V01", () => {
            it("amount <= available", () => {
                //available = lkb+credit = 100 token
                //user has 100 tokens (in shares) and 100 lp
                const pool = new Pool(token, poolFee, chainPaths)
                const totalSupply = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
                const totalLiquidity = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
                const lpTokenAmount = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)

                //trys to redeem 100lp for 100 tokens and succeeds
                expect(pool.getRedeemLocal(dstChainId, dstPoolId, totalSupply, totalLiquidity, lpTokenAmount)[0]).toEqual(
                    CurrencyAmount.fromRawAmount(token, 100e18)
                )
                expect(pool.getRedeemLocal(dstChainId, dstPoolId, totalSupply, totalLiquidity, lpTokenAmount)[1].toExact()).toEqual(
                    CurrencyAmount.fromRawAmount(liquidityToken, 100e6).toExact()
                )
            })

            it("amount > available", () => {
                //available = lkb+credit = 100 token
                //user has 200 tokens (in shares) and 100lp
                const pool = new Pool(token, poolFee, chainPaths)
                const totalSupply = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
                const totalLiquidity = CurrencyAmount.fromRawAmount(pool.liquidityToken, 200e6)
                const lpTokenAmount = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)

                //trys to redeem 100lp for 200 tokens
                //can only redeem 50lp for 100 tokens
                expect(pool.getRedeemLocal(dstChainId, dstPoolId, totalSupply, totalLiquidity, lpTokenAmount)[0]).toEqual(
                    CurrencyAmount.fromRawAmount(token, 100e18)
                )
                expect(pool.getRedeemLocal(dstChainId, dstPoolId, totalSupply, totalLiquidity, lpTokenAmount)[1].toExact()).toEqual(
                    CurrencyAmount.fromRawAmount(liquidityToken, 50e6).toExact()
                )
            })
        })

        describe("Fee Library V02", () => {})
    })

    describe("getPrice", function () {
        const pool = new Pool(token, poolFee, chainPaths)
        const totalSupply = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
        const totalLiquidity = CurrencyAmount.fromRawAmount(pool.liquidityToken, 1000e6)
        const lpTokenAmount = CurrencyAmount.fromRawAmount(pool.liquidityToken, 10e6)
        const fiatValue = pool.getPrice(totalSupply, totalLiquidity, lpTokenAmount)
        const result = JSBI.BigInt(fiatValue.toFixed(0))
        it("Should be > 0", () => {
            expect(JSBI.greaterThan(result, JSBI.BigInt(0))).toBeTruthy()
        })

        it("Should should return expected value", () => {
            // 10 % of pool sharing $1000 should equal $100
            expect(JSBI.equal(result, JSBI.BigInt(100))).toBeTruthy()
        })

        it("Should return the original token", () => {
            const originalDecimals = token.decimals
            expect(originalDecimals === fiatValue.currency.decimals).toBeTruthy()
            expect(token.symbol === fiatValue.currency.symbol).toBeTruthy()
        })
    })

    describe("getPriceStatic", function () {
        const pool = new Pool(token, poolFee, chainPaths)
        const totalSupply = CurrencyAmount.fromRawAmount(pool.liquidityToken, 100e6)
        const totalLiquidity = CurrencyAmount.fromRawAmount(pool.liquidityToken, 1000e6)
        const lpTokenAmount = CurrencyAmount.fromRawAmount(pool.liquidityToken, 10e6)
        const fiatValue = Pool.getPriceStatic(totalSupply, totalLiquidity, lpTokenAmount, token)
        const result = JSBI.BigInt(fiatValue.toFixed(0))
        it("Should be > 0", () => {
            expect(JSBI.greaterThan(result, JSBI.BigInt(0))).toBeTruthy()
        })

        it("Should should return expected value", () => {
            // 10 % of pool sharing $1000 should equal $100
            expect(JSBI.equal(result, JSBI.BigInt(100))).toBeTruthy()
        })

        it("Should return the original token", () => {
            const originalDecimals = token.decimals
            expect(originalDecimals === fiatValue.currency.decimals).toBeTruthy()
            expect(token.symbol === fiatValue.currency.symbol).toBeTruthy()
        })
    })
})

import JSBI from "jsbi"
import { CurrencyAmount, Fraction } from "./fractions"
import { invariant as assert } from "../utils/invariantHelper"
import { Currency } from "./currency"

const ZERO: JSBI = JSBI.BigInt(0)
const TWO: JSBI = JSBI.BigInt(2)

export class Bonding {
    public readonly stargateToken: Currency
    public readonly stableCoinToken: Currency
    public readonly slope: Fraction
    public readonly initialPrice: CurrencyAmount
    public readonly totalStargateForBonding: CurrencyAmount
    public readonly totalStargateBonded: CurrencyAmount
    public readonly quota: CurrencyAmount
    public readonly convertRate: JSBI

    public constructor(
        _stargateToken: Currency,
        _stableCoinToken: Currency,
        _slope: Fraction,
        _initialPrice: CurrencyAmount, //stargate token
        _totalStargateForBonding: CurrencyAmount, //stargate token
        _totalStargateBonded: CurrencyAmount //stargate token
    ) {
        assert(_stargateToken.decimals >= _stableCoinToken.decimals, "DECIMALS")
        this.stargateToken = _stargateToken
        this.stableCoinToken = _stableCoinToken

        this.slope = _slope

        assert(_initialPrice.currency.equals(this.stargateToken), "TOKEN")
        assert(_initialPrice.greaterThan(ZERO), "PRICE_ZERO")
        this.initialPrice = _initialPrice

        assert(_totalStargateForBonding.currency.equals(this.stargateToken), "TOKEN")
        this.totalStargateForBonding = _totalStargateForBonding

        assert(_totalStargateBonded.currency.equals(this.stargateToken), "TOKEN")
        this.totalStargateBonded = _totalStargateBonded

        this.quota = this.totalStargateForBonding.subtract(this.totalStargateBonded)
        this.convertRate = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(this.stargateToken.decimals - this.stableCoinToken.decimals))
    }

    public computeCostFromQuantity(_quantity: CurrencyAmount): CurrencyAmount {
        assert(_quantity.currency.equals(this.stargateToken), "TOKEN")
        let quantity = _quantity
        if (_quantity.greaterThan(this.quota)) {
            quantity = this.quota
        }
        assert(quantity.greaterThan(ZERO), "QUANTITY_ZERO")

        const startPrice = this.totalStargateBonded.multiply(this.slope.numerator).divide(this.slope.denominator).add(this.initialPrice)
        const endPrice = startPrice.add(quantity.multiply(this.slope.numerator).divide(this.slope.denominator))
        const avgPrice = startPrice.add(endPrice).divide(TWO)

        return CurrencyAmount.fromFractionalAmount(
            this.stableCoinToken,
            this.toStableCoinDecimals(avgPrice.multiply(quantity)).quotient,
            JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(this.stargateToken.decimals))
        )
    }

    public computeQuantityFromCost(_cost: CurrencyAmount): CurrencyAmount {
        assert(_cost.currency.equals(this.stableCoinToken), "TOKEN")
        assert(_cost.greaterThan(ZERO), "COST_ZERO")
        const _startPrice = this.totalStargateBonded.multiply(this.slope.numerator).divide(this.slope.denominator).add(this.initialPrice)

        const startPrice = parseFloat(_startPrice.toSignificant(this.stargateToken.decimals))
        const cost = parseFloat(_cost.toSignificant(this.stableCoinToken.decimals))
        const slope = parseFloat(this.slope.toSignificant(this.stargateToken.decimals))

        const quantity = CurrencyAmount.fromRawAmount(
            this.stargateToken,
            JSBI.multiply(
                JSBI.BigInt(
                    parseInt(((Math.sqrt(startPrice ** 2 + 2 * slope * cost) - startPrice) / slope).toFixed(this.stableCoinToken.decimals))
                ),
                JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(this.stargateToken.decimals))
            )
        )

        if (quantity.greaterThan(this.quota)) {
            return this.quota
        }
        return quantity
    }

    toStableCoinDecimals(amount: CurrencyAmount): CurrencyAmount {
        assert(amount.currency.equals(this.stargateToken), "TOKEN")
        return CurrencyAmount.fromFractionalAmount(this.stableCoinToken, amount.quotient, this.convertRate)
    }

    /**
     * Get the current price of the token in the bonding curve
     * @param initialPrice Initial price of the bonding curve
     * @param totalBonded Total tokens bonded
     * @param slope slope of the bonding curve
     * @returns current price of the stablecoin passed in the initialPrice Token
     */
    public static getCurrentPrice(initialPrice: CurrencyAmount, totalBonded: CurrencyAmount, slope: Fraction) {
        const token = initialPrice.currency
        const price = slope.multiply(totalBonded).add(initialPrice)
        return CurrencyAmount.fromFractionalAmount(token, price.numerator, price.denominator)
    }
}

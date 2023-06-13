import { ChainId } from "@layerzerolabs/lz-sdk"
import { USDC, STG } from "../constants/token"
import { Bonding } from "./bonding"
import { TokenSymbol } from "../enums"
import { describe, it, expect } from "vitest"
import { CurrencyAmount, Fraction, Token } from "@layerzerolabs/ui-core"

describe("Bonding", () => {
    const chainId = ChainId.FUJI_SANDBOX
    const stargateToken = STG[chainId]
    const stableCoin = USDC[chainId]
    const initialPrice = BigInt(5) * BigInt(10) ** BigInt(17) // 0.5
    const oneMilllionSTG = BigInt(1000000) * BigInt(10) ** BigInt(18)
    const totalstargateTokenForBonding = BigInt(50000000) * BigInt(10) ** BigInt(18) //50m
    const bonding = new Bonding(
        stargateToken,
        stableCoin,
        new Fraction(5, 100000000),
        CurrencyAmount.fromRawAmount(stargateToken, initialPrice),
        CurrencyAmount.fromRawAmount(stargateToken, totalstargateTokenForBonding),
        CurrencyAmount.fromRawAmount(stargateToken, oneMilllionSTG) //1mil already sold
    )

    describe("#computeCostFromQuantity", function () {
        it("quantity = 0", function () {
            const quantity = BigInt(0)
            expect(() => bonding.computeCostFromQuantity(CurrencyAmount.fromRawAmount(stargateToken, quantity))).toThrow("QUANTITY_ZERO")
        })

        it("quantity < quota", function () {
            const cost = bonding.computeCostFromQuantity(CurrencyAmount.fromRawAmount(stargateToken, oneMilllionSTG))
            expect(cost.currency).toEqual(stableCoin)
            expect(cost.toExact()).toEqual("575000")
        })

        it("quantity = quota", function () {
            const quantity = BigInt(49000000) * BigInt(10) ** BigInt(18) //25m
            const cost = bonding.computeCostFromQuantity(CurrencyAmount.fromRawAmount(stargateToken, quantity))
            expect(cost.currency).toEqual(stableCoin)

            expect(cost.toExact()).toEqual("86975000")
        })

        it("quantity > quota", function () {
            const quantity = BigInt(50000000) * BigInt(10) ** BigInt(18) //51m
            const cost = bonding.computeCostFromQuantity(CurrencyAmount.fromRawAmount(stargateToken, quantity))
            expect(cost.currency).toEqual(stableCoin)
            expect(cost.toExact()).toEqual("86975000")
        })
    })

    describe("#computeQuantityFromCost", function () {
        it("cost = 0", function () {
            const cost = BigInt(0)
            expect(() => bonding.computeQuantityFromCost(CurrencyAmount.fromRawAmount(stableCoin, cost))).toThrow("COST_ZERO")
        })

        it("cost < quota", function () {
            const cost = BigInt(575000) * BigInt(10) ** BigInt(6)
            const quantity = bonding.computeQuantityFromCost(CurrencyAmount.fromRawAmount(stableCoin, cost))
            expect(quantity.currency).toEqual(stargateToken)
            expect(quantity.toExact()).toEqual("1000000") //1m
        })

        it("cost = quota", function () {
            const cost = BigInt(86975000) * BigInt(10) ** BigInt(6)
            const quantity = bonding.computeQuantityFromCost(CurrencyAmount.fromRawAmount(stableCoin, cost))
            expect(quantity.currency).toEqual(stargateToken)
            expect(quantity.toExact()).toEqual("49000000") //1m
        })

        it("cost > quota", function () {
            const cost = BigInt(87500000) * BigInt(10) ** BigInt(6)
            const quantity = bonding.computeQuantityFromCost(CurrencyAmount.fromRawAmount(stableCoin, cost))
            expect(quantity.currency).toEqual(stargateToken)
            expect(quantity.toExact()).toEqual("49000000") //1m
        })
    })

    describe("getCurrentPrice", () => {
        const chainId = ChainId.FUJI_SANDBOX
        const stableCoin = new Token(chainId, "0x0000000000000000000000000000000000000000", 18, TokenSymbol.USDC)
        const token = new Token(chainId, "0x0000000000000000000000000000000000000000", 18, TokenSymbol.STG)

        const slope = new Fraction(5, 100000000)
        const initialPrice = CurrencyAmount.fromRawAmount(stableCoin, 0.5e18)
        let totalBonded = CurrencyAmount.fromRawAmount(token, 1000000e18)
        let curPrice = Bonding.getCurrentPrice(initialPrice, totalBonded, slope)

        it("returns expected price", () => {
            expect(parseFloat(curPrice.toSignificant(4)).toFixed(2)).toEqual("0.55")

            totalBonded = CurrencyAmount.fromRawAmount(stableCoin, 2000000e18)
            curPrice = Bonding.getCurrentPrice(initialPrice, totalBonded, slope)
            expect(parseFloat(curPrice.toSignificant(4)).toFixed(2)).toEqual("0.60")
        })

        it("returns the stablecoin token", () => {
            expect(curPrice.currency.symbol).toEqual("USDC")
        })
    })
})

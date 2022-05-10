import { getFarmApr, getFarmApy } from "./getFarmApy"
import farmingData from "./data/farming.json"
import { CurrencyAmount } from "../entities/fractions"
import { ChainId } from "@layerzerolabs/core-sdk"
import { USDC, LPTOKEN, STG } from "../constants/token"
import { PoolId } from "../enums"
import JSBI from "jsbi"

function approx(a: number, b: number, precision: number = 1e-10) {
    if (a == b && a == 0) {
        return true
    }
    return (2 * Math.abs(a - b)) / (a + b) <= precision
}

describe("getApy", () => {
    const data = farmingData.farming

    const chainId = ChainId.RINKEBY
    const poolId = PoolId.USDC

    it.only("Expected Apr should match", () => {
        data.forEach((testCase) => {
            // total allocation is 1 per pool contract per chain
            const { stgPrice, stgPerBlock, avgBlockTime, alloc, expectedApr, totalLiquidity, totalFarmLp, totalLp } = testCase

            const rewardPrice = CurrencyAmount.fromRawAmount(USDC[chainId], JSBI.BigInt(stgPrice * 10 ** 6))

            const rewardPerBlock = CurrencyAmount.fromRawAmount(STG[chainId], JSBI.BigInt(stgPerBlock * 10 ** 18))

            const totalLiq = CurrencyAmount.fromRawAmount(USDC[chainId], JSBI.BigInt(Math.round(totalLiquidity * 10 ** 6)))
            const totalFLp = CurrencyAmount.fromRawAmount(LPTOKEN[chainId][poolId], JSBI.BigInt(Math.round(totalFarmLp * 10 ** 6)))
            const totalPLp = CurrencyAmount.fromRawAmount(LPTOKEN[chainId][poolId], JSBI.BigInt(Math.round(totalLp * 10 ** 6)))
            const apr = getFarmApr(rewardPrice, rewardPerBlock, alloc, 1, avgBlockTime, totalLiq, totalFLp, totalPLp)
            expect(approx(apr, expectedApr, 2)).toBeTruthy()
        })
    })

    it("Expected Apy should match", () => {
        data.forEach((testCase) => {
            // total allocation is 1 per pool contract per chain
            const { stgPrice, stgPerBlock, avgBlockTime, alloc, expectedApy, totalLiquidity, totalFarmLp, totalLp } = testCase

            const rewardPrice = CurrencyAmount.fromRawAmount(USDC[chainId], JSBI.BigInt(stgPrice * 10 ** 6))
            const rewardPerBlock = CurrencyAmount.fromRawAmount(STG[chainId], JSBI.BigInt(stgPerBlock * 10 ** 18))

            const totalLiq = CurrencyAmount.fromRawAmount(USDC[chainId], JSBI.BigInt(totalLiquidity * 10 ** 6))
            const totalFLp = CurrencyAmount.fromRawAmount(LPTOKEN[chainId][poolId], JSBI.BigInt(Math.round(totalFarmLp * 10 ** 6)))
            const totalPLp = CurrencyAmount.fromRawAmount(LPTOKEN[chainId][poolId], JSBI.BigInt(Math.round(totalLp * 10 ** 6)))

            const apy = getFarmApy(rewardPrice, rewardPerBlock, alloc, 1, avgBlockTime, totalLiq, totalFLp, totalPLp)
            expect(approx(apy, expectedApy, 2)).toBeTruthy()
        })
    })
})

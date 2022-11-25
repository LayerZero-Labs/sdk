import { getFarmApr, getFarmApy, getTokenFarmApr, getTokenFarmApy } from './getFarmApy'
import farmingData from './data/farming.json'
import { CurrencyAmount } from '../entities/fractions'
import { ChainId } from '@layerzerolabs/lz-sdk'
import { USDC, LPTOKEN, STG } from '../constants/token'
import { PoolId } from '../enums'
import JSBI from 'jsbi'

function approx(a: number, b: number, precision: number = 1e-10) {
    if (a == b && a == 0) {
        return true
    }
    return (2 * Math.abs(a - b)) / (a + b) <= precision
}

describe('getApy', () => {
    const data = farmingData.farming

    const chainId = ChainId.FUJI
    const poolId = PoolId.USDC

    it('Expected Apr should match', () => {
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

    it.only('Expected Apr should match NEW', () => {
        // total allocation is 1 per pool contract per chain
        // const {stgPrice, stgPerBlock, avgBlockTime, alloc, expectedApr, totalLiquidity, totalFarmLp, totalLp} = testCase
        const ethPoolTestCases = [
            {
                // ethereum
                allocPoint: 325,
                avgBlockTime: 13.21448276,
                chainId: 101,
                rewardPrice: 0.384747,
                stgPerBlock: 4.906029642,
                totalAllocPoint: 1326,
                totalLiquidity: 1602.760003024600000001,
                totalSupply: 1602.756057244699177932,
                lpBalance: 1537.246218374302799112,
                tokenPrice: 1100,
                expectedApr: 0.6529266610153618,
                expectedApy: 0.9211551793241914,
            },
            // optimism
            {
                allocPoint: 84,
                avgBlockTime: 1.458,
                chainId: 111,
                lpBalance: 146.447991419022073661,
                rewardPrice: 0.386418,
                stgPerBlock: 0.03372,
                totalAllocPoint: 1000,
                totalLiquidity: 156.870178410000000001,
                totalSupply: 156.867969526539025598,
                tokenPrice: 1100,
                expectedApr: 0.14695726281950983,
                expectedApy: 0.15830445930529802,
            },
            // arbitrum
            {
                allocPoint: 32,
                avgBlockTime: 13.21448276,
                chainId: 110,
                lpBalance: 207.069515769678625158,
                rewardPrice: 0.386418,
                stgPerBlock: 2.662852115,
                totalAllocPoint: 1033,
                totalLiquidity: 217.5901843223,
                totalSupply: 217.589492269291255445,
                tokenPrice: 1100,
                expectedApr: 0.33396439031848696,
                expectedApy: 0.3964934140033758,
            },
        ]

        for (let testCase of ethPoolTestCases) {
            const totalFarmLp = testCase.lpBalance
            const totalLp = testCase.totalSupply

            const tokenPriceSD = CurrencyAmount.fromRawAmount(USDC[testCase.chainId], JSBI.BigInt(testCase.tokenPrice))

            const rewardPrice = CurrencyAmount.fromRawAmount(USDC[testCase.chainId], JSBI.BigInt(testCase.rewardPrice * 10 ** 6))

            const rewardPerBlock = CurrencyAmount.fromRawAmount(STG[testCase.chainId], JSBI.BigInt(Math.round(testCase.stgPerBlock * 10 ** 18)))

            const totalLiq = CurrencyAmount.fromRawAmount(USDC[testCase.chainId], JSBI.BigInt(Math.round(testCase.totalLiquidity * 10 ** 6)))
            const totalFLp = CurrencyAmount.fromRawAmount(LPTOKEN[testCase.chainId][poolId], JSBI.BigInt(Math.round(totalFarmLp * 10 ** 6)))
            const totalPLp = CurrencyAmount.fromRawAmount(LPTOKEN[testCase.chainId][poolId], JSBI.BigInt(Math.round(totalLp * 10 ** 6)))
            const apr = getTokenFarmApr(
                rewardPrice,
                rewardPerBlock,
                testCase.allocPoint,
                testCase.totalAllocPoint,
                testCase.avgBlockTime,
                totalLiq,
                totalFLp,
                totalPLp,
                tokenPriceSD
            )
            expect(approx(apr, testCase.expectedApr, 2)).toBeTruthy()
            const apy = getTokenFarmApy(
                rewardPrice,
                rewardPerBlock,
                testCase.allocPoint,
                testCase.totalAllocPoint,
                testCase.avgBlockTime,
                totalLiq,
                totalFLp,
                totalPLp,
                tokenPriceSD
            )
            console.log(`chainId: ${testCase.chainId}, total apr: ${apr}, total apy: ${apy}`)
        }
    })

    it('Expected Apy should match', () => {
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

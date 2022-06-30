import { YEAR } from "./constants"
import { CurrencyAmount, Percent } from "../entities/fractions"
import { Token } from "../entities/token"
import JSBI from "jsbi"

/**
 * Get APR for a Farm
 * @param rewardPrice Price of STG
 * @param stgPerBlock STG Reward per block
 * @param allocPoint Weight of the pool
 * @param totalAllocPoint Total weights of all pools in the contract
 * @param avgBlockTime Average block time
 * @param totalLiquidity Total liquidity deposited in Pool
 * @param totalFarmLp Total LP in the Farm
 * @param totalPoolLp Total LP in the Pool
 * @returns APR
 */
export function getFarmApr(
    rewardPrice: CurrencyAmount<Token>,
    stgPerBlock: CurrencyAmount<Token>,
    allocPoint: number,
    totalAllocPoint: number,
    avgBlockTime: number,
    totalLiquidity: CurrencyAmount<Token>,
    totalFarmLp: CurrencyAmount<Token>,
    totalPoolLp: CurrencyAmount<Token>,
) {
    const rewardPerBlock = stgPerBlock.multiply(new Percent(allocPoint * 10000, totalAllocPoint * 10000))
    const tvl = totalLiquidity.multiply(totalFarmLp).divide(totalPoolLp)
    const roiPerBlock = rewardPerBlock.multiply(rewardPrice).divide(tvl)
    const blocksPerYear = JSBI.BigInt(Math.floor(YEAR / avgBlockTime))
    const roiPerYear = roiPerBlock.multiply(blocksPerYear)
    return parseFloat(roiPerYear.toExact())
}

/**
 * Get APY for a Farm
 * @param rewardPrice Price of STG
 * @param stgPerBlock STG Reward per block
 * @param allocPoint Weight of the pool
 * @param totalAllocPoint Total weights of all pools in the contract
 * @param avgBlockTime Average block time
 * @param totalLiquidity Total liquidity deposited in Pool
 * @param totalFarmLp Total LP in the Farm
 * @param totalPoolLp Total LP in the Pool
 * @returns APY
 */
export function getFarmApy(
    rewardPrice: CurrencyAmount<Token>,
    stgPerBlock: CurrencyAmount<Token>,
    allocPoint: number,
    totalAllocPoint: number,
    avgBlockTime: number,
    totalLiquidity: CurrencyAmount<Token>,
    totalFarmLp: CurrencyAmount<Token>,
    totalPoolLp: CurrencyAmount<Token>,
) {
    const apr = getFarmApr(rewardPrice, stgPerBlock, allocPoint, totalAllocPoint, avgBlockTime, totalLiquidity, totalFarmLp, totalPoolLp)
    const apy = Math.E ** apr - 1
    return apy
}

/**
 * Get APR for a Farm
 * @param rewardPrice Price of STG
 * @param stgPerBlock STG Reward per block
 * @param allocPoint Weight of the pool
 * @param totalAllocPoint Total weights of all pools in the contract
 * @param avgBlockTime Average block time
 * @param totalLiquidity Total liquidity deposited in Pool
 * @param totalFarmLp Total LP in the Farm
 * @param totalPoolLp Total LP in the Pool
 * @param tokenPrice Token Price in USD
 * @returns APR
 */
export function getTokenFarmApr(
    rewardPrice: CurrencyAmount<Token>,
    stgPerBlock: CurrencyAmount<Token>,
    allocPoint: number,
    totalAllocPoint: number,
    avgBlockTime: number,
    totalLiquidity: CurrencyAmount<Token>,
    totalFarmLp: CurrencyAmount<Token>,
    totalPoolLp: CurrencyAmount<Token>,
    tokenPrice: CurrencyAmount<Token>
) {
    const rewardPerBlock = stgPerBlock.multiply(new Percent(allocPoint * 10000, totalAllocPoint * 10000))
    const tvl = totalLiquidity.multiply(totalFarmLp).divide(totalPoolLp)
    const blocksPerYear = JSBI.BigInt(Math.floor(YEAR / avgBlockTime))
    const tvlUsd = tvl.multiply(tokenPrice)
    const roiPerBlockUsd =  rewardPerBlock.multiply(rewardPrice).divide(tvlUsd)
    const roiPerYear = roiPerBlockUsd.multiply(blocksPerYear)

    console.log(`test: ${rewardPerBlock.multiply(rewardPrice).toExact()}`)
    console.log(`
    rewardPrice: ${rewardPrice.toExact()} 
    stgPerBlock: ${stgPerBlock.toExact()}  
    rewardPerBlock: ${rewardPerBlock.toExact()}, 
    totalLiquidity: ${totalLiquidity.toExact()} 
    totalFarmLp: ${totalFarmLp.toExact()}  
    totalPoolLp: ${totalPoolLp.toExact()}
    tvl: ${tvl.toExact()}
    tvlUsd: ${tvlUsd.toExact()}
    roiPerBlockUsd: ${roiPerBlockUsd.toExact()}
    blocksPerYear: ${blocksPerYear.toString()}, 
    roiPerYear: ${roiPerYear.toExact()}`)
    return parseFloat(roiPerYear.toExact())
}

/**
 * Get APY for a Farm
 * @param rewardPrice Price of STG
 * @param stgPerBlock STG Reward per block
 * @param allocPoint Weight of the pool
 * @param totalAllocPoint Total weights of all pools in the contract
 * @param avgBlockTime Average block time
 * @param totalLiquidity Total liquidity deposited in Pool
 * @param totalFarmLp Total LP in the Farm
 * @param totalPoolLp Total LP in the Pool
 * @returns APY
 */
export function getTokenFarmApy(
    rewardPrice: CurrencyAmount<Token>,
    stgPerBlock: CurrencyAmount<Token>,
    allocPoint: number,
    totalAllocPoint: number,
    avgBlockTime: number,
    totalLiquidity: CurrencyAmount<Token>,
    totalFarmLp: CurrencyAmount<Token>,
    totalPoolLp: CurrencyAmount<Token>,
    tokenPrice: CurrencyAmount<Token>,
) {
    const apr = getTokenFarmApr(rewardPrice, stgPerBlock, allocPoint, totalAllocPoint, avgBlockTime, totalLiquidity, totalFarmLp, totalPoolLp, tokenPrice)
    const apy = Math.E ** apr - 1
    return apy
}
import { ChainId } from "@layerzerolabs/lz-sdk"
import { TokenSymbol } from "../enums/TokenSymbol"
import { Token } from "../entities/token"
import {
    DAI_ADDRESS,
    STG_ADDRESS,
    USDC_ADDRESS,
    USDT_ADDRESS,
    VESTG_ADDRESS,
    SVESTG_ADDRESS,
    POOL_ADDRESS,
    BUSD_ADDRESS,
    WHITELIST_AUCTION_ADDRESS,
    USDD_ADDRESS,
    SGETH_ADDRESS,
} from "./addresses"
import * as TEST from "./testToken"
import { PoolId } from "../enums"
import {SGETH_SHARE_DECIMALS, USDD_SHARE_DECIMALS} from "./pool"

export const BUSD: { [chainId: number]: Token } = {
    [ChainId.BSC]: new Token(ChainId.BSC, BUSD_ADDRESS[ChainId.BSC], 18, "BUSD", "BUSD Coin"),
    [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, BUSD_ADDRESS[ChainId.BSC_TESTNET], 18, "BUSD", "BUSD Coin"),
}

// prettier-ignore
export const DAI: { [chainId: number]: Token } = {
  ...TEST.DAI,
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, DAI_ADDRESS[ChainId.ETHEREUM], 6, 'DAI', 'DAI'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, DAI_ADDRESS[ChainId.RINKEBY], 6, 'DAI', 'DAI'),
  [ChainId.BSC]: new Token(ChainId.BSC, DAI_ADDRESS[ChainId.BSC], 18, 'DAI', 'DAI'),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, DAI_ADDRESS[ChainId.BSC_TESTNET], 18, 'DAI', 'DAI'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, DAI_ADDRESS[ChainId.AVALANCHE], 6, 'DAI', 'DAI'),
  [ChainId.FUJI]: new Token(ChainId.FUJI, DAI_ADDRESS[ChainId.FUJI], 6, 'DAI', 'DAI'),
  [ChainId.POLYGON]: new Token(ChainId.POLYGON, DAI_ADDRESS[ChainId.POLYGON], 6, 'DAI', 'DAI'),
  [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, DAI_ADDRESS[ChainId.MUMBAI], 6, 'DAI', 'DAI'),
  [ChainId.ARBITRUM]: new Token(ChainId.ARBITRUM, DAI_ADDRESS[ChainId.ARBITRUM], 6, 'DAI', 'DAI'),
  [ChainId.ARBITRUM_RINKEBY]: new Token(ChainId.ARBITRUM_RINKEBY, DAI_ADDRESS[ChainId.ARBITRUM_RINKEBY], 6, 'DAI', 'DAI'),
  [ChainId.OPTIMISM]: new Token(ChainId.OPTIMISM, DAI_ADDRESS[ChainId.OPTIMISM], 6, 'DAI', 'DAI'),
  [ChainId.OPTIMISM_KOVAN]: new Token(ChainId.OPTIMISM_KOVAN, DAI_ADDRESS[ChainId.OPTIMISM_KOVAN], 6, 'DAI', 'DAI'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, DAI_ADDRESS[ChainId.FANTOM], 6, 'DAI', 'DAI'),
  [ChainId.FANTOM_TESTNET]: new Token(ChainId.FANTOM_TESTNET, DAI_ADDRESS[ChainId.FANTOM_TESTNET], 6, 'DAI', 'DAI'),
}

export const SLP: { [chainId: number]: Token } = {}

// prettier-ignore
export const STG: { [chainId: number]: Token } = {
  ...TEST.STG,
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, STG_ADDRESS[ChainId.ETHEREUM], 18, 'STG', 'StargateToken'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, STG_ADDRESS[ChainId.RINKEBY], 18, 'STG', 'StargateToken'),
  [ChainId.BSC]: new Token(ChainId.BSC, STG_ADDRESS[ChainId.BSC], 18, 'STG', 'StargateToken'),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, STG_ADDRESS[ChainId.BSC_TESTNET], 18, 'STG', 'StargateToken'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, STG_ADDRESS[ChainId.AVALANCHE], 18, 'STG', 'StargateToken'),
  [ChainId.FUJI]: new Token(ChainId.FUJI, STG_ADDRESS[ChainId.FUJI], 18, 'STG', 'StargateToken'),
  [ChainId.POLYGON]: new Token(ChainId.POLYGON, STG_ADDRESS[ChainId.POLYGON], 18, 'STG', 'StargateToken'),
  [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, STG_ADDRESS[ChainId.MUMBAI], 18, 'STG', 'StargateToken'),
  [ChainId.ARBITRUM]: new Token(ChainId.ARBITRUM, STG_ADDRESS[ChainId.ARBITRUM], 18, 'STG', 'StargateToken'),
  [ChainId.ARBITRUM_RINKEBY]: new Token(ChainId.ARBITRUM_RINKEBY, STG_ADDRESS[ChainId.ARBITRUM_RINKEBY], 18, 'STG', 'StargateToken'),
  [ChainId.OPTIMISM]: new Token(ChainId.OPTIMISM, STG_ADDRESS[ChainId.OPTIMISM], 18, 'STG', 'StargateToken'),
  [ChainId.OPTIMISM_KOVAN]: new Token(ChainId.OPTIMISM_KOVAN, STG_ADDRESS[ChainId.OPTIMISM_KOVAN], 18, 'STG', 'StargateToken'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, STG_ADDRESS[ChainId.FANTOM], 18, 'STG', 'StargateToken'),
  [ChainId.FANTOM_TESTNET]: new Token(ChainId.FANTOM_TESTNET, STG_ADDRESS[ChainId.FANTOM_TESTNET], 18, 'STG', 'StargateToken'),
}

// prettier-ignore
export const VESTG: { [chainId: number]: Token } = {
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, VESTG_ADDRESS[ChainId.ETHEREUM], 18, TokenSymbol.veSTG, 'veStargateToken'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, VESTG_ADDRESS[ChainId.RINKEBY], 18, TokenSymbol.veSTG, 'veStargateToken'),
  [ChainId.BSC]: new Token(ChainId.BSC, VESTG_ADDRESS[ChainId.BSC], 18, TokenSymbol.veSTG, 'veStargateToken'),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, VESTG_ADDRESS[ChainId.BSC_TESTNET], 18, TokenSymbol.veSTG, 'veStargateToken'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, VESTG_ADDRESS[ChainId.AVALANCHE], 18, TokenSymbol.veSTG, 'veStargateToken'),
  [ChainId.FUJI]: new Token(ChainId.FUJI, VESTG_ADDRESS[ChainId.FUJI], 18, TokenSymbol.veSTG, 'veStargateToken'),
  [ChainId.POLYGON]: new Token(ChainId.POLYGON, VESTG_ADDRESS[ChainId.POLYGON], 18, TokenSymbol.veSTG, 'veStargateToken'),
  [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, VESTG_ADDRESS[ChainId.MUMBAI], 18, TokenSymbol.veSTG, 'veStargateToken'),
  [ChainId.ARBITRUM]: new Token(ChainId.ARBITRUM, VESTG_ADDRESS[ChainId.ARBITRUM], 18, TokenSymbol.veSTG, 'veStargateToken'),
  [ChainId.ARBITRUM_RINKEBY]: new Token(ChainId.ARBITRUM_RINKEBY, VESTG_ADDRESS[ChainId.ARBITRUM_RINKEBY], 18, TokenSymbol.veSTG, 'veStargateToken'),
  [ChainId.OPTIMISM]: new Token(ChainId.OPTIMISM, VESTG_ADDRESS[ChainId.OPTIMISM], 18, TokenSymbol.veSTG, 'veStargateToken'),
  [ChainId.OPTIMISM_KOVAN]: new Token(ChainId.OPTIMISM_KOVAN, VESTG_ADDRESS[ChainId.OPTIMISM_KOVAN], 18, TokenSymbol.veSTG, 'veStargateToken'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, VESTG_ADDRESS[ChainId.FANTOM], 18, TokenSymbol.veSTG, 'veStargateToken'),
  [ChainId.FANTOM_TESTNET]: new Token(ChainId.FANTOM_TESTNET, VESTG_ADDRESS[ChainId.FANTOM_TESTNET], 18, TokenSymbol.veSTG, 'veStargateToken'),
}

// prettier-ignore
export const SVESTG: { [chainId: number]: Token } = {
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, SVESTG_ADDRESS[ChainId.ETHEREUM], 18, 'sveSTG', 'sveStargateToken'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, SVESTG_ADDRESS[ChainId.RINKEBY], 18, 'sveSTG', 'sveStargateToken'),
}

export const AASTG: { [chainId: number]: Token } = {
    [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, WHITELIST_AUCTION_ADDRESS[ChainId.ETHEREUM] as string, 6, "aaSTG", "aaStargateToken"),
    [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, WHITELIST_AUCTION_ADDRESS[ChainId.RINKEBY] as string, 6, "aaSTG", "aaStargateToken"),
}

// prettier-ignore
export const USDC: { [chainId: number]: Token } = {
  ...TEST.USDC,
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, USDC_ADDRESS[ChainId.ETHEREUM], 6, 'USDC', 'USD Coin'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, USDC_ADDRESS[ChainId.RINKEBY], 6, 'USDC', 'USD Coin'),
  [ChainId.BSC]: new Token(ChainId.BSC, USDC_ADDRESS[ChainId.BSC], 18, 'USDC', 'USD Coin'),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, USDC_ADDRESS[ChainId.BSC_TESTNET], 18, 'USDC', 'USD Coin'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, USDC_ADDRESS[ChainId.AVALANCHE], 6, 'USDC', 'USD Coin'),
  [ChainId.FUJI]: new Token(ChainId.FUJI, USDC_ADDRESS[ChainId.FUJI], 6, 'USDC', 'USD Coin'),
  [ChainId.POLYGON]: new Token(ChainId.POLYGON, USDC_ADDRESS[ChainId.POLYGON], 6, 'USDC', 'USD Coin'),
  [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, USDC_ADDRESS[ChainId.MUMBAI], 6, 'USDC', 'USD Coin'),
  [ChainId.ARBITRUM]: new Token(ChainId.ARBITRUM, USDC_ADDRESS[ChainId.ARBITRUM], 6, 'USDC', 'USD Coin'),
  [ChainId.ARBITRUM_RINKEBY]: new Token(ChainId.ARBITRUM_RINKEBY, USDC_ADDRESS[ChainId.ARBITRUM_RINKEBY], 6, 'USDC', 'USD Coin'),
  [ChainId.OPTIMISM]: new Token(ChainId.OPTIMISM, USDC_ADDRESS[ChainId.OPTIMISM], 6, 'USDC', 'USD Coin'),
  [ChainId.OPTIMISM_KOVAN]: new Token(ChainId.OPTIMISM_KOVAN, USDC_ADDRESS[ChainId.OPTIMISM_KOVAN], 6, 'USDC', 'USD Coin'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, USDC_ADDRESS[ChainId.FANTOM], 6, 'USDC', 'USD Coin'),
  [ChainId.FANTOM_TESTNET]: new Token(ChainId.FANTOM_TESTNET, USDC_ADDRESS[ChainId.FANTOM_TESTNET], 6, 'USDC', 'USD Coin'),
}

export const USDT: { [chainId: number]: Token } = {
    ...TEST.USDT,
    [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, USDT_ADDRESS[ChainId.ETHEREUM], 6, "USDT", "USD Tether"),
    [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, USDT_ADDRESS[ChainId.RINKEBY], 6, "USDT", "USD Tether"),
    [ChainId.BSC]: new Token(ChainId.BSC, USDT_ADDRESS[ChainId.BSC], 18, "USDT", "USD Tether"),
    [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, USDT_ADDRESS[ChainId.BSC_TESTNET], 18, "USDT", "USD Tether"),
    [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, USDT_ADDRESS[ChainId.AVALANCHE], 6, "USDT", "USD Tether"),
    [ChainId.FUJI]: new Token(ChainId.FUJI, USDT_ADDRESS[ChainId.FUJI], 6, "USDT", "USD Tether"),
    [ChainId.POLYGON]: new Token(ChainId.POLYGON, USDT_ADDRESS[ChainId.POLYGON], 6, "USDT", "USD Tether"),
    [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, USDT_ADDRESS[ChainId.MUMBAI], 6, "USDT", "USD Tether"),
    [ChainId.ARBITRUM]: new Token(ChainId.ARBITRUM, USDT_ADDRESS[ChainId.ARBITRUM], 6, "USDT", "USD Tether"),
    [ChainId.ARBITRUM_RINKEBY]: new Token(ChainId.ARBITRUM_RINKEBY, USDT_ADDRESS[ChainId.ARBITRUM_RINKEBY], 6, "USDT", "USD Tether"),
    [ChainId.OPTIMISM]: new Token(ChainId.OPTIMISM, USDT_ADDRESS[ChainId.OPTIMISM], 6, "USDT", "USD Tether"),
    [ChainId.OPTIMISM_KOVAN]: new Token(ChainId.OPTIMISM_KOVAN, USDT_ADDRESS[ChainId.OPTIMISM_KOVAN], 6, "USDT", "USD Tether"),
    [ChainId.FANTOM]: new Token(ChainId.FANTOM, USDT_ADDRESS[ChainId.FANTOM], 6, "USDT", "USD Tether"),
    [ChainId.FANTOM_TESTNET]: new Token(ChainId.FANTOM_TESTNET, USDT_ADDRESS[ChainId.FANTOM_TESTNET], 6, "USDT", "USD Tether"),
}

export const LPTOKEN: { [chainId: number]: { [poolId: number]: Token } } = {
    ...TEST.LPTOKEN,
    [ChainId.ETHEREUM]: {
        [PoolId.USDC]: new Token(ChainId.ETHEREUM, POOL_ADDRESS[TokenSymbol.USDC][ChainId.ETHEREUM], 6, "S*USDC", "STG-USDC LP"),
        [PoolId.USDT]: new Token(ChainId.ETHEREUM, POOL_ADDRESS[TokenSymbol.USDT][ChainId.ETHEREUM], 6, "S*USDT", "STG-USDT LP"),
    },
    [ChainId.RINKEBY]: {
        [PoolId.USDC]: new Token(ChainId.RINKEBY, POOL_ADDRESS[TokenSymbol.USDC][ChainId.RINKEBY], 6, "S*USDC", "STG-USDC LP"),
        [PoolId.USDT]: new Token(ChainId.RINKEBY, POOL_ADDRESS[TokenSymbol.USDT][ChainId.RINKEBY], 6, "S*USDT", "STG-USDT LP"),
        [PoolId.USDD]: new Token(ChainId.RINKEBY, POOL_ADDRESS[TokenSymbol.USDD][ChainId.RINKEBY], USDD_SHARE_DECIMALS, "S*USDD", "STG-USDD LP"),
        [PoolId.SGETH]: new Token(ChainId.RINKEBY, POOL_ADDRESS[TokenSymbol.SGETH][ChainId.RINKEBY], SGETH_SHARE_DECIMALS, "S*SGETH", "STG-SGETH LP"),
    },
    [ChainId.BSC]: {
        [PoolId.BUSD]: new Token(ChainId.BSC, POOL_ADDRESS[TokenSymbol.BUSD][ChainId.BSC], 6, "S*BUSD", "STG-BUSD LP"),
        [PoolId.USDT]: new Token(ChainId.BSC, POOL_ADDRESS[TokenSymbol.USDT][ChainId.BSC], 6, "S*USDT", "STG-USDT LP"),
    },
    [ChainId.BSC_TESTNET]: {
        [PoolId.BUSD]: new Token(ChainId.BSC_TESTNET, POOL_ADDRESS[TokenSymbol.BUSD][ChainId.BSC_TESTNET], 6, "S*BUSD", "STG-BUSD LP"),
        [PoolId.USDT]: new Token(ChainId.BSC_TESTNET, POOL_ADDRESS[TokenSymbol.USDT][ChainId.BSC_TESTNET], 6, "S*USDT", "STG-USDT LP"),
        [PoolId.USDD]: new Token(ChainId.BSC_TESTNET, POOL_ADDRESS[TokenSymbol.USDD][ChainId.BSC_TESTNET], USDD_SHARE_DECIMALS, "S*USDD", "STG-USDD LP"),
    },
    [ChainId.AVALANCHE]: {
        [PoolId.USDC]: new Token(ChainId.AVALANCHE, POOL_ADDRESS[TokenSymbol.USDC][ChainId.AVALANCHE], 6, "S*USDC", "STG-USDCe LP"),
        [PoolId.USDT]: new Token(ChainId.AVALANCHE, POOL_ADDRESS[TokenSymbol.USDT][ChainId.AVALANCHE], 6, "S*USDT", "STG-USDTe LP"),
    },
    [ChainId.FUJI]: {
        [PoolId.USDC]: new Token(ChainId.FUJI, POOL_ADDRESS[TokenSymbol.USDC][ChainId.FUJI], 6, "S*USDC", "STG-USDC LP"),
        [PoolId.USDT]: new Token(ChainId.FUJI, POOL_ADDRESS[TokenSymbol.USDT][ChainId.FUJI], 6, "S*USDT", "STG-USDT LP"),
    },
    [ChainId.POLYGON]: {
        [PoolId.USDC]: new Token(ChainId.POLYGON, POOL_ADDRESS[TokenSymbol.USDC][ChainId.POLYGON], 6, "S*USDC", "STG-USDC LP"),
        [PoolId.USDT]: new Token(ChainId.POLYGON, POOL_ADDRESS[TokenSymbol.USDT][ChainId.POLYGON], 6, "S*USDT", "STG-USDT LP"),
    },
    [ChainId.MUMBAI]: {
        [PoolId.USDC]: new Token(ChainId.MUMBAI, POOL_ADDRESS[TokenSymbol.USDC][ChainId.MUMBAI], 6, "S*USDC", "STG-USDC LP"),
        [PoolId.USDT]: new Token(ChainId.MUMBAI, POOL_ADDRESS[TokenSymbol.USDT][ChainId.MUMBAI], 6, "S*USDT", "STG-USDT LP"),
    },
    [ChainId.ARBITRUM]: {
        [PoolId.USDC]: new Token(ChainId.ARBITRUM, POOL_ADDRESS[TokenSymbol.USDC][ChainId.ARBITRUM], 6, "S*USDC", "STG-USDC LP"),
        [PoolId.USDT]: new Token(ChainId.ARBITRUM, POOL_ADDRESS[TokenSymbol.USDT][ChainId.ARBITRUM], 6, "S*USDT", "STG-USDT LP"),
    },
    [ChainId.ARBITRUM_RINKEBY]: {
        [PoolId.USDC]: new Token(ChainId.ARBITRUM_RINKEBY, POOL_ADDRESS[TokenSymbol.USDC][ChainId.ARBITRUM_RINKEBY], 6, "S*USDC", "STG-USDC LP"),
        [PoolId.USDT]: new Token(ChainId.ARBITRUM_RINKEBY, POOL_ADDRESS[TokenSymbol.USDT][ChainId.ARBITRUM_RINKEBY], 6, "S*USDT", "STG-USDT LP"),
        [PoolId.SGETH]: new Token(ChainId.ARBITRUM_RINKEBY, POOL_ADDRESS[TokenSymbol.SGETH][ChainId.ARBITRUM_RINKEBY], SGETH_SHARE_DECIMALS, "S*SGETH", "STG-SGETH LP"),
    },
    [ChainId.OPTIMISM]: {
        [PoolId.USDC]: new Token(ChainId.OPTIMISM, POOL_ADDRESS[TokenSymbol.USDC][ChainId.OPTIMISM], 6, "S*USDC", "STG-USDC LP"),
    },
    [ChainId.OPTIMISM_KOVAN]: {
        [PoolId.USDC]: new Token(ChainId.OPTIMISM_KOVAN, POOL_ADDRESS[TokenSymbol.USDC][ChainId.OPTIMISM_KOVAN], 6, "S*USDC", "STG-USDC LP"),
        [PoolId.SGETH]: new Token(ChainId.OPTIMISM_KOVAN, POOL_ADDRESS[TokenSymbol.SGETH][ChainId.OPTIMISM_KOVAN], SGETH_SHARE_DECIMALS, "S*SGETH", "STG-SGETH LP"),
    },
    [ChainId.FANTOM]: {
        [PoolId.USDC]: new Token(ChainId.FANTOM, POOL_ADDRESS[TokenSymbol.USDC][ChainId.FANTOM], 6, "S*USDC", "STG-USDC LP"),
    },
    [ChainId.FANTOM_TESTNET]: {
        [PoolId.USDC]: new Token(ChainId.FANTOM_TESTNET, POOL_ADDRESS[TokenSymbol.USDC][ChainId.FANTOM_TESTNET], 6, "S*USDC", "STG-USDC LP"),
    },
}

export const SGETH: { [chainId: number]: Token } = {
    [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, SGETH_ADDRESS[ChainId.RINKEBY], 18, "SGETH", "SGETH"),
    [ChainId.ARBITRUM_RINKEBY]: new Token(ChainId.ARBITRUM_RINKEBY, SGETH_ADDRESS[ChainId.ARBITRUM_RINKEBY], 18, "SGETH", "SGETH"),
    [ChainId.OPTIMISM_KOVAN]: new Token(ChainId.OPTIMISM_KOVAN, SGETH_ADDRESS[ChainId.OPTIMISM_KOVAN], 18, "SGETH", "SGETH"),
}

export const USDD: { [chainId: number]: Token } = {
    [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, USDD_ADDRESS[ChainId.RINKEBY], 18, "USDD", "USDD"),
    [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, USDD_ADDRESS[ChainId.BSC_TESTNET], 18, "USDD", "USDD"),
}
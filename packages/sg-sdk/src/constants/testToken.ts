import { ChainId } from "@layerzerolabs/lz-sdk"
import { PoolId, TokenSymbol } from "../enums"
import { Token } from "../entities/token"
import { DAI_ADDRESS, POOL_ADDRESS, STG_ADDRESS, USDC_ADDRESS, USDT_ADDRESS, WETH_ADDRESS } from "./addresses"

export const DAI: { [chainId: number]: Token } = {
    [ChainId.RINKEBY_SANDBOX]: new Token(ChainId.RINKEBY_SANDBOX, DAI_ADDRESS[ChainId.RINKEBY_SANDBOX], 6, "DAI", "DAT"),
    [ChainId.BSC_TESTNET_SANDBOX]: new Token(ChainId.BSC_TESTNET_SANDBOX, DAI_ADDRESS[ChainId.BSC_TESTNET_SANDBOX], 6, "DAI", "DAI"),
    [ChainId.FUJI_SANDBOX]: new Token(ChainId.FUJI_SANDBOX, DAI_ADDRESS[ChainId.FUJI_SANDBOX], 6, "DAI", "DAI"),
}

export const STG: { [chainId: number]: Token } = {
    [ChainId.RINKEBY_SANDBOX]: new Token(ChainId.RINKEBY_SANDBOX, STG_ADDRESS[ChainId.RINKEBY_SANDBOX], 18, "STG", "StargateToken"),
    [ChainId.BSC_TESTNET_SANDBOX]: new Token(ChainId.BSC_TESTNET_SANDBOX, STG_ADDRESS[ChainId.BSC_TESTNET_SANDBOX], 18, "STG", "StargateToken"),
    [ChainId.FUJI_SANDBOX]: new Token(ChainId.FUJI_SANDBOX, STG_ADDRESS[ChainId.FUJI_SANDBOX], 18, "STG", "StargateToken"),
}

export const USDC: { [chainId: number]: Token } = {
    [ChainId.RINKEBY_SANDBOX]: new Token(ChainId.RINKEBY_SANDBOX, USDC_ADDRESS[ChainId.RINKEBY_SANDBOX], 6, "USDC", "USD Coin"),
    [ChainId.BSC_TESTNET_SANDBOX]: new Token(ChainId.BSC_TESTNET_SANDBOX, USDC_ADDRESS[ChainId.BSC_TESTNET_SANDBOX], 6, "USDC", "USD Coin"),
    [ChainId.FUJI_SANDBOX]: new Token(ChainId.FUJI_SANDBOX, USDC_ADDRESS[ChainId.FUJI_SANDBOX], 6, "USDC", "USD Coin"),
}

export const USDT: { [chainId: number]: Token } = {
    [ChainId.RINKEBY_SANDBOX]: new Token(ChainId.RINKEBY_SANDBOX, USDT_ADDRESS[ChainId.RINKEBY_SANDBOX], 6, "USDT", "USD Tether"),
    [ChainId.BSC_TESTNET_SANDBOX]: new Token(ChainId.BSC_TESTNET_SANDBOX, USDT_ADDRESS[ChainId.BSC_TESTNET_SANDBOX], 6, "USDT", "USD Tether"),
    [ChainId.FUJI_SANDBOX]: new Token(ChainId.FUJI_SANDBOX, USDT_ADDRESS[ChainId.FUJI_SANDBOX], 6, "USDT", "USD Tether"),
}

export const LPTOKEN: { [chainId: number]: { [poolId: number]: Token } } = {
    [ChainId.RINKEBY_SANDBOX]: {
        [PoolId.USDC]: new Token(ChainId.RINKEBY_SANDBOX, POOL_ADDRESS[TokenSymbol.USDC][ChainId.RINKEBY_SANDBOX], 6, "S*USDC", "STG-USDC LP"),
        [PoolId.USDT]: new Token(ChainId.RINKEBY_SANDBOX, POOL_ADDRESS[TokenSymbol.USDT][ChainId.RINKEBY_SANDBOX], 6, "S*USDT", "STG-USDT LP"),
    },
    [ChainId.BSC_TESTNET_SANDBOX]: {
        [PoolId.BUSD]: new Token(
            ChainId.BSC_TESTNET_SANDBOX,
            POOL_ADDRESS[TokenSymbol.USDC][ChainId.BSC_TESTNET_SANDBOX],
            6,
            "S*BUSD",
            "STG-BUSD LP"
        ),
        [PoolId.USDT]: new Token(
            ChainId.BSC_TESTNET_SANDBOX,
            POOL_ADDRESS[TokenSymbol.USDT][ChainId.BSC_TESTNET_SANDBOX],
            6,
            "S*USDT",
            "STG-USDT LP"
        ),
    },
    [ChainId.FUJI_SANDBOX]: {
        [PoolId.USDC]: new Token(ChainId.FUJI_SANDBOX, POOL_ADDRESS[TokenSymbol.USDC][ChainId.FUJI_SANDBOX], 6, "S*USDC", "STG-USDC LP"),
        [PoolId.USDT]: new Token(ChainId.FUJI_SANDBOX, POOL_ADDRESS[TokenSymbol.USDT][ChainId.FUJI_SANDBOX], 6, "S*USDT", "STG-USDT LP"),
    },
    [ChainId.MUMBAI_SANDBOX]: {
        [PoolId.USDC]: new Token(ChainId.MUMBAI_SANDBOX, POOL_ADDRESS[TokenSymbol.USDC][ChainId.MUMBAI_SANDBOX], 6, "S*USDC", "STG-USDC LP"),
        [PoolId.USDT]: new Token(ChainId.MUMBAI_SANDBOX, POOL_ADDRESS[TokenSymbol.USDT][ChainId.MUMBAI_SANDBOX], 6, "S*USDT", "STG-USDT LP"),
    },
    [ChainId.ARBITRUM_RINKEBY_SANDBOX]: {
        [PoolId.USDC]: new Token(
            ChainId.ARBITRUM_RINKEBY_SANDBOX,
            POOL_ADDRESS[TokenSymbol.USDC][ChainId.ARBITRUM_RINKEBY_SANDBOX],
            6,
            "S*USDC",
            "STG-USDC LP"
        ),
        [PoolId.USDT]: new Token(
            ChainId.ARBITRUM_RINKEBY_SANDBOX,
            POOL_ADDRESS[TokenSymbol.USDT][ChainId.ARBITRUM_RINKEBY_SANDBOX],
            6,
            "S*USDT",
            "STG-USDT LP"
        ),
    },
    [ChainId.OPTIMISM_KOVAN_SANDBOX]: {
        [PoolId.USDC]: new Token(
            ChainId.OPTIMISM_KOVAN_SANDBOX,
            POOL_ADDRESS[TokenSymbol.USDC][ChainId.OPTIMISM_KOVAN_SANDBOX],
            6,
            "S*USDC",
            "STG-USDC LP"
        ),
    },
    [ChainId.FANTOM_TESTNET_SANDBOX]: {
        [PoolId.USDC]: new Token(
            ChainId.FANTOM_TESTNET_SANDBOX,
            POOL_ADDRESS[TokenSymbol.USDC][ChainId.FANTOM_TESTNET_SANDBOX],
            6,
            "S*USDC",
            "STG-USDC LP"
        ),
    },
}

export const WETH: { [chainId: number]: Token } = {
    [ChainId.RINKEBY_SANDBOX]: new Token(ChainId.RINKEBY_SANDBOX, WETH_ADDRESS[ChainId.RINKEBY_SANDBOX], 18, "WETH", "WETH"),
    [ChainId.ARBITRUM_RINKEBY_SANDBOX]: new Token(
        ChainId.ARBITRUM_RINKEBY_SANDBOX,
        WETH_ADDRESS[ChainId.ARBITRUM_RINKEBY_SANDBOX],
        18,
        "WETH",
        "WETH"
    ),
    [ChainId.OPTIMISM_KOVAN_SANDBOX]: new Token(
        ChainId.OPTIMISM_KOVAN_SANDBOX,
        WETH_ADDRESS[ChainId.OPTIMISM_KOVAN_SANDBOX],
        18,
        "WETH",
        "WETH"
    ),
}

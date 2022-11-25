import { ChainId } from '@layerzerolabs/lz-sdk'
import { PoolId, TokenSymbol } from '../enums'
import { Token } from '../entities/token'
import { POOL_ADDRESS, STG_ADDRESS, USDC_ADDRESS, USDT_ADDRESS } from './addresses'

export const STG: { [chainId: number]: Token } = {
    [ChainId.GOERLI_SANDBOX]: new Token(ChainId.GOERLI_SANDBOX, STG_ADDRESS[ChainId.GOERLI_SANDBOX], 18, 'STG', 'StargateToken'),
    [ChainId.BSC_TESTNET_SANDBOX]: new Token(ChainId.BSC_TESTNET_SANDBOX, STG_ADDRESS[ChainId.BSC_TESTNET_SANDBOX], 18, 'STG', 'StargateToken'),
    [ChainId.FUJI_SANDBOX]: new Token(ChainId.FUJI_SANDBOX, STG_ADDRESS[ChainId.FUJI_SANDBOX], 18, 'STG', 'StargateToken'),
}

export const USDC: { [chainId: number]: Token } = {
    [ChainId.GOERLI_SANDBOX]: new Token(ChainId.GOERLI_SANDBOX, USDC_ADDRESS[ChainId.GOERLI_SANDBOX], 6, 'USDC', 'USD Coin'),
    [ChainId.BSC_TESTNET_SANDBOX]: new Token(ChainId.BSC_TESTNET_SANDBOX, USDC_ADDRESS[ChainId.BSC_TESTNET_SANDBOX], 6, 'USDC', 'USD Coin'),
    [ChainId.FUJI_SANDBOX]: new Token(ChainId.FUJI_SANDBOX, USDC_ADDRESS[ChainId.FUJI_SANDBOX], 6, 'USDC', 'USD Coin'),
}

export const USDT: { [chainId: number]: Token } = {
    [ChainId.GOERLI_SANDBOX]: new Token(ChainId.GOERLI_SANDBOX, USDT_ADDRESS[ChainId.GOERLI_SANDBOX], 6, 'USDT', 'USD Tether'),
    [ChainId.BSC_TESTNET_SANDBOX]: new Token(ChainId.BSC_TESTNET_SANDBOX, USDT_ADDRESS[ChainId.BSC_TESTNET_SANDBOX], 6, 'USDT', 'USD Tether'),
    [ChainId.FUJI_SANDBOX]: new Token(ChainId.FUJI_SANDBOX, USDT_ADDRESS[ChainId.FUJI_SANDBOX], 6, 'USDT', 'USD Tether'),
}

export const LPTOKEN: { [chainId: number]: { [poolId: number]: Token } } = {
    [ChainId.GOERLI_SANDBOX]: {
        [PoolId.USDC]: new Token(ChainId.GOERLI_SANDBOX, POOL_ADDRESS[TokenSymbol.USDC][ChainId.GOERLI_SANDBOX], 6, 'S*USDC', 'STG-USDC LP'),
        [PoolId.USDT]: new Token(ChainId.GOERLI_SANDBOX, POOL_ADDRESS[TokenSymbol.USDT][ChainId.GOERLI_SANDBOX], 6, 'S*USDT', 'STG-USDT LP'),
    },
    [ChainId.BSC_TESTNET_SANDBOX]: {
        [PoolId.BUSD]: new Token(
            ChainId.BSC_TESTNET_SANDBOX,
            POOL_ADDRESS[TokenSymbol.USDC][ChainId.BSC_TESTNET_SANDBOX],
            6,
            'S*BUSD',
            'STG-BUSD LP'
        ),
        [PoolId.USDT]: new Token(
            ChainId.BSC_TESTNET_SANDBOX,
            POOL_ADDRESS[TokenSymbol.USDT][ChainId.BSC_TESTNET_SANDBOX],
            6,
            'S*USDT',
            'STG-USDT LP'
        ),
    },
    [ChainId.FUJI_SANDBOX]: {
        [PoolId.USDC]: new Token(ChainId.FUJI_SANDBOX, POOL_ADDRESS[TokenSymbol.USDC][ChainId.FUJI_SANDBOX], 6, 'S*USDC', 'STG-USDC LP'),
        [PoolId.USDT]: new Token(ChainId.FUJI_SANDBOX, POOL_ADDRESS[TokenSymbol.USDT][ChainId.FUJI_SANDBOX], 6, 'S*USDT', 'STG-USDT LP'),
    },
    [ChainId.MUMBAI_SANDBOX]: {
        [PoolId.USDC]: new Token(ChainId.MUMBAI_SANDBOX, POOL_ADDRESS[TokenSymbol.USDC][ChainId.MUMBAI_SANDBOX], 6, 'S*USDC', 'STG-USDC LP'),
        [PoolId.USDT]: new Token(ChainId.MUMBAI_SANDBOX, POOL_ADDRESS[TokenSymbol.USDT][ChainId.MUMBAI_SANDBOX], 6, 'S*USDT', 'STG-USDT LP'),
    },
    [ChainId.FANTOM_TESTNET_SANDBOX]: {
        [PoolId.USDC]: new Token(
            ChainId.FANTOM_TESTNET_SANDBOX,
            POOL_ADDRESS[TokenSymbol.USDC][ChainId.FANTOM_TESTNET_SANDBOX],
            6,
            'S*USDC',
            'STG-USDC LP'
        ),
    },
}

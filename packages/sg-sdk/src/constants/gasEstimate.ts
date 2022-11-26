import { ChainId } from "@layerzerolabs/lz-sdk"

export const REVERT_REDEEM_LOCAL: { [chainId in ChainId]?: number } = {
    [ChainId.ETHEREUM]: 120000,
    [ChainId.BSC]: 120000,
    [ChainId.BSC_TESTNET]: 120000,
    [ChainId.AVALANCHE]: 120000,
    [ChainId.FUJI]: 120000,
    [ChainId.POLYGON]: 120000,
    [ChainId.MUMBAI]: 120000,
    [ChainId.ARBITRUM]: 705000,
    [ChainId.OPTIMISM]: 120000,
    [ChainId.FANTOM]: 120000,
    [ChainId.FANTOM_TESTNET]: 120000,
}

export const ERC20_TRANSFER: { [chainId in ChainId]?: number } = {
    [ChainId.ETHEREUM]: 65000,
    [ChainId.BSC]: 65000,
    [ChainId.BSC_TESTNET]: 65000,
    [ChainId.AVALANCHE]: 65000,
    [ChainId.FUJI]: 65000,
    [ChainId.POLYGON]: 65000,
    [ChainId.MUMBAI]: 65000,
    [ChainId.ARBITRUM]: 390000,
    [ChainId.OPTIMISM]: 65000,
    [ChainId.FANTOM]: 65000,
    [ChainId.FANTOM_TESTNET]: 65000,
}

export const ERC20_APPROVE: { [chainId in ChainId]?: number } = {
    [ChainId.ETHEREUM]: 47000,
    [ChainId.BSC]: 47000,
    [ChainId.BSC_TESTNET]: 47000,
    [ChainId.AVALANCHE]: 47000,
    [ChainId.FUJI]: 47000,
    [ChainId.POLYGON]: 47000,
    [ChainId.MUMBAI]: 47000,
    [ChainId.ARBITRUM]: 282000,
    [ChainId.OPTIMISM]: 47000,
    [ChainId.FANTOM]: 47000,
    [ChainId.FANTOM_TESTNET]: 47000,
}

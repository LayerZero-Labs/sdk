import { ChainId } from "../enums"

// in seconds
export const AVERAGE_BLOCK_TIME: { [chainId in ChainId]?: number } = {
    [ChainId.ETHEREUM]: 13.5,
    [ChainId.GOERLI]: 15,
    [ChainId.GOERLI_SANDBOX]: 15,
    [ChainId.AVALANCHE]: 2.1,
    [ChainId.FUJI]: 2.1,
    [ChainId.FUJI_SANDBOX]: 2.1,
    [ChainId.BSC]: 3.1,
    [ChainId.BSC_TESTNET]: 3.1,
    [ChainId.BSC_TESTNET_SANDBOX]: 3.1,
    [ChainId.POLYGON]: 2.5,
    [ChainId.MUMBAI]: 3.5,
    [ChainId.MUMBAI_SANDBOX]: 3.5,
    [ChainId.ARBITRUM]: 13.5,
    [ChainId.ARBITRUM_GOERLI]: 15.2,
    [ChainId.OPTIMISM]: 2,
    [ChainId.OPTIMISM_GOERLI]: 1,
    [ChainId.FANTOM]: 1,
    [ChainId.FANTOM_TESTNET]: 3.5,
    [ChainId.FANTOM_TESTNET_SANDBOX]: 3.5,
    [ChainId.APTOS]: 0.5,
    [ChainId.APTOS_TESTNET]: 0.5,
    [ChainId.APTOS_TESTNET_SANDBOX]: 0.5,
}

import { ChainKey } from '../enums'
import { ChainListId } from '../enums'

export const CHAIN_LIST_ID: { [chainKey in ChainKey]?: ChainListId } = {
    [ChainKey.ETHEREUM]: ChainListId.ETHEREUM,
    [ChainKey.GOERLI]: ChainListId.GOERLI,
    [ChainKey.GOERLI_SANDBOX]: ChainListId.GOERLI_SANDBOX,
    [ChainKey.BSC]: ChainListId.BSC,
    [ChainKey.BSC_TESTNET]: ChainListId.BSC_TESTNET,
    [ChainKey.BSC_TESTNET_SANDBOX]: ChainListId.BSC_TESTNET_SANDBOX,
    [ChainKey.AVALANCHE]: ChainListId.AVALANCHE,
    [ChainKey.FUJI]: ChainListId.FUJI,
    [ChainKey.FUJI_SANDBOX]: ChainListId.FUJI_SANDBOX,
    [ChainKey.POLYGON]: ChainListId.POLYGON,
    [ChainKey.MUMBAI]: ChainListId.MUMBAI,
    [ChainKey.MUMBAI_SANDBOX]: ChainListId.MUMBAI_SANDBOX,
    [ChainKey.ARBITRUM]: ChainListId.ARBITRUM,
    [ChainKey.ARBITRUM_GOERLI]: ChainListId.ARBITRUM_GOERLI,
    [ChainKey.OPTIMISM]: ChainListId.OPTIMISM,
    [ChainKey.OPTIMISM_GOERLI]: ChainListId.OPTIMISM_GOERLI,
    [ChainKey.FANTOM]: ChainListId.FANTOM,
    [ChainKey.FANTOM_TESTNET]: ChainListId.FANTOM_TESTNET,
    [ChainKey.FANTOM_TESTNET_SANDBOX]: ChainListId.FANTOM_TESTNET_SANDBOX,
    [ChainKey.APTOS]: ChainListId.APTOS,
    [ChainKey.APTOS_TESTNET]: ChainListId.APTOS_TESTNET,
    [ChainKey.APTOS_TESTNET_SANDBOX]: ChainListId.APTOS_TESTNET_SANDBOX,
}

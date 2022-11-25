import { ChainId, ChainKey, ChainStage } from '../enums'

export const ULN_V1_CHAINS = [
    ChainId.ETHEREUM,
    ChainId.GOERLI,
    ChainId.GOERLI_SANDBOX,
    ChainId.BSC,
    ChainId.BSC_TESTNET,
    ChainId.BSC_TESTNET_SANDBOX,
    ChainId.AVALANCHE,
    ChainId.FUJI,
    ChainId.FUJI_SANDBOX,
    ChainId.POLYGON,
    ChainId.MUMBAI,
    ChainId.MUMBAI_SANDBOX,
    ChainId.ARBITRUM,
    ChainId.OPTIMISM,
    ChainId.FANTOM,
    ChainId.FANTOM_TESTNET,
    ChainId.FANTOM_TESTNET_SANDBOX,
    ChainId.SWIMMER,
    ChainId.SWIMMER_TESTNET,
    ChainId.SWIMMER_TESTNET_SANDBOX,
    ChainId.DFK,
    ChainId.DFK_TESTNET,
    ChainId.DFK_TESTNET_SANDBOX,
    ChainId.HARMONY,
    ChainId.HARMONY_TESTNET,
    ChainId.HARMONY_TESTNET_SANDBOX,
    ChainId.MOONBEAM,
    ChainId.MOONBEAM_TESTNET,
    ChainId.MOONBEAM_TESTNET_SANDBOX,
    ChainId.ARCANA_TESTNET,
    ChainId.ARCANA_TESTNET_SANDBOX,
    ChainId.DEXALOT_TESTNET,
    ChainId.DEXALOT_TESTNET_SANDBOX,
    ChainId.CASTLECRUSH_TESTNET,
    ChainId.CASTLECRUSH_TESTNET_SANDBOX,
    ChainId.CELO_TESTNET,
    ChainId.CELO_TESTNET_SANDBOX,
    ChainId.BOBA_TESTNET,
    ChainId.BOBA_TESTNET_SANDBOX,
    ChainId.PORTAL_TESTNET,
    ChainId.PORTAL_TESTNET_SANDBOX,
    ChainId.INTAIN_TESTNET,
    ChainId.INTAIN_TESTNET_SANDBOX,
]

// Override is required if enum key does not match
// common convention: {chainName}_{stage}
//      i.e. BSC, BSC_TESTNET, BSC_TESTNET_SANDBOX
// Uncommon Convention
//      i.e. ETHEREUM, GOERLI, GOERLI_SANDBOX
export const OVERRIDE_CHAIN_NAME: { [chainKey: string]: { [chainStage: number]: number } } = {
    [ChainKey.ETHEREUM]: {
        [ChainStage.TESTNET]: ChainId.GOERLI,
        [ChainStage.TESTNET_SANDBOX]: ChainId.GOERLI_SANDBOX,
    },
    [ChainKey.AVALANCHE]: {
        [ChainStage.TESTNET]: ChainId.FUJI,
        [ChainStage.TESTNET_SANDBOX]: ChainId.FUJI_SANDBOX,
    },
    [ChainKey.POLYGON]: {
        [ChainStage.TESTNET]: ChainId.MUMBAI,
        [ChainStage.TESTNET_SANDBOX]: ChainId.MUMBAI_SANDBOX,
    },
    [ChainKey.ARBITRUM]: {
        [ChainStage.TESTNET]: ChainId.ARBITRUM_GOERLI,
    },
    [ChainKey.OPTIMISM]: {
        [ChainStage.TESTNET]: ChainId.OPTIMISM_GOERLI,
    },
}

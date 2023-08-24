import { ChainId } from "../enums"

// in seconds
// keep list sorted alphabetically
// @deprecated
export const AVERAGE_BLOCK_TIME: { [chainId in ChainId]: number } = {
    [ChainId.AAVEGOTCHI_TESTNET]: 5,
    [ChainId.APTOS_TESTNET_SANDBOX]: 1,
    [ChainId.APTOS_TESTNET]: 1,
    [ChainId.APTOS]: 1,
    [ChainId.ARBITRUM_GOERLI_SANDBOX]: 15.2,
    [ChainId.ARBITRUM_GOERLI]: 15.2,
    [ChainId.ARBITRUM_RINKEBY_SANDBOX]: 15.2,
    [ChainId.ARBITRUM_RINKEBY]: 15.2,
    [ChainId.ARBITRUM]: 13.5,
    [ChainId.ARCANA_TESTNET_SANDBOX]: 2,
    [ChainId.ARCANA_TESTNET]: 2,
    [ChainId.ARCANA]: 1,
    [ChainId.ASTAR_TESTNET_SANDBOX]: 1,
    [ChainId.ASTAR_TESTNET]: 1,
    [ChainId.ASTAR]: 1,
    [ChainId.AURORA_TESTNET_SANDBOX]: 2,
    [ChainId.AURORA_TESTNET]: 2,
    [ChainId.AURORA]: 2,
    [ChainId.AVALANCHE]: 2.1,
    [ChainId.BASE]: 1,
    [ChainId.BASE_TESTNET]: 1,
    [ChainId.BOBA_TESTNET_SANDBOX]: 2,
    [ChainId.BOBA_TESTNET]: 2,
    [ChainId.BOBA]: 2,
    [ChainId.BSC_TESTNET_SANDBOX]: 3.1,
    [ChainId.BSC_TESTNET]: 3.1,
    [ChainId.BSC]: 3.1,
    [ChainId.CANTO]: 8,
    [ChainId.CANTO_TESTNET]: 8,
    [ChainId.CASTLECRUSH_TESTNET_SANDBOX]: 5,
    [ChainId.CASTLECRUSH_TESTNET]: 5,
    [ChainId.CASTLECRUSH]: 5,
    [ChainId.CELO_TESTNET_SANDBOX]: 5,
    [ChainId.CELO_TESTNET]: 5,
    [ChainId.CELO]: 5,
    [ChainId.COREDAO_TESTNET]: 5,
    [ChainId.COREDAO]: 5,
    [ChainId.DEXALOT_TESTNET_SANDBOX]: 10,
    [ChainId.DEXALOT_TESTNET]: 10,
    [ChainId.DEXALOT]: 10,
    [ChainId.DFK_TESTNET_SANDBOX]: 10,
    [ChainId.DFK_TESTNET]: 10,
    [ChainId.DFK]: 2.5,
    [ChainId.DOS_TESTNET]: 1,
    [ChainId.DOS]: 1,
    [ChainId.ETHEREUM]: 13.5,
    [ChainId.FANTOM_TESTNET_SANDBOX]: 3.5,
    [ChainId.FANTOM_TESTNET]: 3.5,
    [ChainId.FANTOM]: 1,
    [ChainId.FUJI_SANDBOX]: 2.1,
    [ChainId.FUJI]: 2.1,
    [ChainId.FUSE_TESTNET_SANDBOX]: 5,
    [ChainId.FUSE_TESTNET]: 5,
    [ChainId.FUSE]: 5,
    [ChainId.GNOSIS_TESTNET_SANDBOX]: 12.5,
    [ChainId.GNOSIS_TESTNET]: 12.5,
    [ChainId.GNOSIS]: 12.5,
    [ChainId.GOERLI_MAINNET]: 1,
    [ChainId.GOERLI_SANDBOX]: 15,
    [ChainId.GOERLI]: 15,
    [ChainId.HARMONY_TESTNET_SANDBOX]: 2,
    [ChainId.HARMONY_TESTNET]: 2,
    [ChainId.HARMONY]: 2,
    [ChainId.INTAIN_TESTNET_SANDBOX]: 1,
    [ChainId.INTAIN_TESTNET]: 1,
    [ChainId.INTAIN]: 1,
    [ChainId.KAVA]: 1,
    [ChainId.KAVA_TESTNET]: 1,
    [ChainId.KLAYTN_TESTNET]: 1,
    [ChainId.KLAYTN]: 1,
    [ChainId.KOVAN_SANDBOX]: 4.2,
    [ChainId.KOVAN]: 4.2,
    [ChainId.LOOT]: 2,
    [ChainId.LOOT_TESTNET]: 2,
    [ChainId.MANTLE]: 5,
    [ChainId.MANTLE_TESTNET]: 7,
    [ChainId.METER_TESTNET]: 1,
    [ChainId.METER]: 1,
    [ChainId.METIS_TESTNET]: 1,
    [ChainId.METIS]: 1,
    [ChainId.MOONBEAM_TESTNET_SANDBOX]: 12,
    [ChainId.MOONBEAM_TESTNET]: 12,
    [ChainId.MOONBEAM]: 12,
    [ChainId.MOONRIVER_TESTNET]: 15,
    [ChainId.MOONRIVER]: 15,
    [ChainId.MUMBAI_SANDBOX]: 3.5,
    [ChainId.MUMBAI]: 3.5,
    [ChainId.NOVA]: 1,
    [ChainId.OKX_TESTNET]: 1,
    [ChainId.OKX]: 1,
    [ChainId.OPTIMISM_GOERLI_SANDBOX]: 1,
    [ChainId.OPTIMISM_GOERLI]: 1,
    [ChainId.OPTIMISM_KOVAN_SANDBOX]: 1,
    [ChainId.OPTIMISM_KOVAN]: 1,
    [ChainId.OPTIMISM]: 2,
    [ChainId.POLYGON]: 2.5,
    [ChainId.PORTAL_TESTNET_SANDBOX]: 2,
    [ChainId.PORTAL_TESTNET]: 2,
    [ChainId.PORTAL]: 1,
    [ChainId.RINKEBY_SANDBOX]: 15.2,
    [ChainId.RINKEBY]: 15.2,
    [ChainId.SEPOLIA_TESTNET]: 13,
    [ChainId.SEPOLIA]: 13,
    [ChainId.SHRAPNEL_TESTNET]: 1,
    [ChainId.SHRAPNEL]: 1,
    [ChainId.SOLANA_TESTNET]: 1,
    [ChainId.SOLANA]: 1,
    [ChainId.SWIMMER_TESTNET_SANDBOX]: 5,
    [ChainId.SWIMMER_TESTNET]: 5,
    [ChainId.SWIMMER]: 5,
    [ChainId.TELOS_TESTNET]: 1, // They don't actually produce blocks at regular intervals
    [ChainId.TENET]: 3.5,
    [ChainId.TENET_TESTNET]: 3.7,
    [ChainId.TOMO_TESTNET]: 3,
    [ChainId.ZKCONSENSYS]: 1,
    [ChainId.ZKCONSENSYS_TESTNET]: 1,
    [ChainId.ZKPOLYGON_TESTNET]: 2,
    [ChainId.ZKPOLYGON]: 2,
    [ChainId.ZKSYNC_TESTNET]: 1.4,
    [ChainId.ZKSYNC]: 1.6,
    [ChainId.BLOCKGEN_TESTNET]: 1,
    [ChainId.BEAM]: 1,
    [ChainId.BEAM_TESTNET]: 1,
    [ChainId.ZORA_TESTNET]: 1.8,
}

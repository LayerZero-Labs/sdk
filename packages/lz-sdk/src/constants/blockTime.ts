import { ChainId } from '../enums'

// in seconds
export const AVERAGE_BLOCK_TIME: { [chainId in ChainId]: number } = {
  [ChainId.ETHEREUM]: 13.5,
  [ChainId.RINKEBY]: 15.2,
  [ChainId.RINKEBY_SANDBOX]: 15.2,
  [ChainId.KOVAN]: 4.2,
  [ChainId.KOVAN_SANDBOX]: 4.2,
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
  [ChainId.ARBITRUM_RINKEBY]: 15.2,
  [ChainId.ARBITRUM_GOERLI]: 15.2,
  [ChainId.ARBITRUM_RINKEBY_SANDBOX]: 15.2,
  [ChainId.OPTIMISM]: 2,
  [ChainId.OPTIMISM_KOVAN]: 1,
  [ChainId.OPTIMISM_GOERLI]: 1,
  [ChainId.OPTIMISM_KOVAN_SANDBOX]: 1,
  [ChainId.FANTOM]: 1,
  [ChainId.FANTOM_TESTNET]: 3.5,
  [ChainId.FANTOM_TESTNET_SANDBOX]: 3.5,
  [ChainId.SWIMMER]: 5,
  [ChainId.SWIMMER_TESTNET]: 5,
  [ChainId.SWIMMER_TESTNET_SANDBOX]: 5,
  [ChainId.HARMONY]: 2,
  [ChainId.HARMONY_TESTNET]: 2,
  [ChainId.HARMONY_TESTNET_SANDBOX]: 2,
  [ChainId.ARCANA_TESTNET]: 2,
  [ChainId.ARCANA_TESTNET_SANDBOX]: 2,
  [ChainId.DEXALOT_TESTNET]: 10,
  [ChainId.DEXALOT_TESTNET_SANDBOX]: 10,
  [ChainId.DFK]: 2.5,
  [ChainId.DFK_TESTNET]: 10,
  [ChainId.DFK_TESTNET_SANDBOX]: 10,
  [ChainId.CASTLECRUSH_TESTNET]: 5,
  [ChainId.CASTLECRUSH_TESTNET_SANDBOX]: 5,
  [ChainId.CELO]: 5,
  [ChainId.CELO_TESTNET]: 5,
  [ChainId.CELO_TESTNET_SANDBOX]: 5,
  [ChainId.MOONBEAM]: 12,
  [ChainId.MOONBEAM_TESTNET]: 12,
  [ChainId.MOONBEAM_TESTNET_SANDBOX]: 12,
  [ChainId.GNOSIS_TESTNET]: 12.5,
  [ChainId.GNOSIS_TESTNET_SANDBOX]: 12.5,
  [ChainId.BOBA]: 2,
  [ChainId.BOBA_TESTNET]: 2,
  [ChainId.BOBA_TESTNET_SANDBOX]: 2,
  [ChainId.PORTAL_TESTNET]: 2,
  [ChainId.PORTAL_TESTNET_SANDBOX]: 2,
  [ChainId.AURORA]: 2,
  [ChainId.AURORA_TESTNET]: 2,
  [ChainId.AURORA_TESTNET_SANDBOX]: 2,
  [ChainId.APTOS]: 1,
  [ChainId.APTOS_TESTNET]: 1,
  [ChainId.APTOS_TESTNET_SANDBOX]: 1,
  // todo: verify
  [ChainId.METIS]: 1,  
  [ChainId.METIS_TESTNET]: 1,  
  [ChainId.COREDAO]: 1,
  [ChainId.COREDAO_TESTNET]: 1,
  [ChainId.COREDAO_TESTNET_SANDBOX]: 1,
}

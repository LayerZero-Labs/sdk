import { ChainId } from '../enums'

export const WEBSOCKETS: { [chainId in ChainId]: string[] } = {
  [ChainId.ETHEREUM]: [],
  [ChainId.RINKEBY]: ['wss://rinkeby-light.eth.linkpool.io/ws'],
  [ChainId.RINKEBY_SANDBOX]: ['wss://rinkeby-light.eth.linkpool.io/ws'],
  [ChainId.KOVAN]: [
    'ws://kovan.poa.network:8546'
  ],
  [ChainId.KOVAN_SANDBOX]: [
    'ws://kovan.poa.network:8546'
  ],
  [ChainId.GOERLI]: [

  ],
  [ChainId.GOERLI_SANDBOX]: [

  ],
  [ChainId.BSC]: ['wss://bsc-ws-node.nariox.org:443'],
  [ChainId.BSC_TESTNET]: [],
  [ChainId.BSC_TESTNET_SANDBOX]: [],
  [ChainId.AVALANCHE]: [],
  [ChainId.FUJI]: [],
  [ChainId.FUJI_SANDBOX]: [],
  [ChainId.POLYGON]: [],
  [ChainId.MUMBAI]: [],
  [ChainId.MUMBAI_SANDBOX]: [],
  [ChainId.ARBITRUM]: ['wss://arb1.arbitrum.io/ws'],
  [ChainId.ARBITRUM_RINKEBY]: ['wss://rinkeby.arbitrum.io/ws'],
  [ChainId.ARBITRUM_RINKEBY_SANDBOX]: ['wss://rinkeby.arbitrum.io/ws'],
  [ChainId.OPTIMISM]: ['wss://ws-mainnet.optimism.io'],
  [ChainId.OPTIMISM_KOVAN]: ['wss://ws-kovan.optimism.io'],
  [ChainId.OPTIMISM_KOVAN_SANDBOX]: ['wss://ws-kovan.optimism.io'],
  [ChainId.FANTOM]: ['wss://wsapi.fantom.network/'],
  [ChainId.FANTOM_TESTNET]: [],
  [ChainId.FANTOM_TESTNET_SANDBOX]: [],
  [ChainId.SWIMMER]: ['wss://subnets.avax.network/swimmer/mainnet/ws'],
  [ChainId.SWIMMER_TESTNET]: ['wss://subnets.avax.network/swimmer/testnet/ws'],
  [ChainId.SWIMMER_TESTNET_SANDBOX]: ['wss://subnets.avax.network/swimmer/testnet/ws'],
  [ChainId.DFK]: ['wss://subnets.avax.network/defi-kingdoms/dfk-chain/ws'],
  [ChainId.DFK_TESTNET]: ['wss://subnets.avax.network/defi-kingdoms/dfk-chain-testnet/ws'],
  [ChainId.DFK_TESTNET_SANDBOX]: ['wss://subnets.avax.network/defi-kingdoms/dfk-chain-testnet/ws'],
  [ChainId.HARMONY]: ['wss://ws.s0.t.hmny.io/'],
  [ChainId.HARMONY_TESTNET]: ['wss://ws.s0.pops.one/', 'wss://ws.s0.pga.hmny.io/'],
  [ChainId.HARMONY_TESTNET_SANDBOX]: ['wss://ws.s0.pops.one/', 'wss://ws.s0.pga.hmny.io/'],
  [ChainId.ARCANA_TESTNET]: ['ws://blockchain-dev.arcana.network/ws'],
  [ChainId.ARCANA_TESTNET_SANDBOX]: ['ws://blockchain-dev.arcana.network/ws'],
  [ChainId.DEXALOT_TESTNET]: ['wss://subnets.avax.network/dexalot/testnet/ws'],
  [ChainId.DEXALOT_TESTNET_SANDBOX]: ['wss://subnets.avax.network/dexalot/testnet/ws'],
  [ChainId.CASTLECRUSH_TESTNET]: ['wss://subnets.avax.network/castle-crush/testnet/ws'],
  [ChainId.CASTLECRUSH_TESTNET_SANDBOX]: ['wss://subnets.avax.network/castle-crush/testnet/ws'],
  [ChainId.CELO]: ['wss://forno.celo.org/ws'],
  [ChainId.CELO_TESTNET]: ['wss://alfajores-forno.celo-testnet.org/ws'],
  [ChainId.CELO_TESTNET_SANDBOX]: ['wss://alfajores-forno.celo-testnet.org/ws'],
  [ChainId.MOONBEAM]: [
    'wss://wss.api.moonbeam.network',
    'wss://moonbeam.public.blastapi.io',
    'wss://moonbeam-rpc.dwellir.com',
    'wss://moonbeam.api.onfinality.io/public-ws'
  ],
  [ChainId.MOONBEAM_TESTNET]: [
    'wss://moonbase-alpha.public.blastapi.io',
    'wss://moonbeam-alpha.api.onfinality.io/public-ws',
    'wss://wss.api.moonbase.moonbeam.network'
  ],
  [ChainId.MOONBEAM_TESTNET_SANDBOX]: [
    'wss://moonbase-alpha.public.blastapi.io',
    'wss://moonbeam-alpha.api.onfinality.io/public-ws',
    'wss://wss.api.moonbase.moonbeam.network'
  ],
  [ChainId.GNOSIS_TESTNET]: [
    'wss://optimism.gnosischain.com/wss'
  ],
  [ChainId.GNOSIS_TESTNET_SANDBOX]: [
    'wss://optimism.gnosischain.com/wss'
  ],
  [ChainId.BOBA]: ['wss://wss.mainnet.boba.network'],
  [ChainId.BOBA_TESTNET]: ['wss://wss.rinkeby.boba.network'],
  [ChainId.BOBA_TESTNET_SANDBOX]: ['wss://wss.rinkeby.boba.network'],
  [ChainId.PORTAL_TESTNET]: [''],
  [ChainId.PORTAL_TESTNET_SANDBOX]: [''],
  [ChainId.AURORA]: ['wss://mainnet.aurora.dev'],
  [ChainId.AURORA_TESTNET]: ['wss://testnet.aurora.dev/'],
  [ChainId.AURORA_TESTNET_SANDBOX]: ['wss://testnet.aurora.dev/'],
  [ChainId.APTOS]: [''],
  [ChainId.APTOS_TESTNET]: [''],
  [ChainId.APTOS_TESTNET_SANDBOX]: ['']
}

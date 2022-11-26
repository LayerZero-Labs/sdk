import { ChainKey } from "@layerzerolabs/lz-sdk"

export function getStargateNetworksForEnv(chainStage: string) {
    if (chainStage == "sandbox") {
        return [ChainKey.BSC_TESTNET_SANDBOX, ChainKey.FUJI_SANDBOX, ChainKey.MUMBAI_SANDBOX, ChainKey.FANTOM_TESTNET_SANDBOX]
    } else if (chainStage == "testnet") {
        return [ChainKey.BSC_TESTNET, ChainKey.FUJI, ChainKey.MUMBAI, ChainKey.FANTOM_TESTNET]
    } else if (chainStage == "mainnet") {
        return [ChainKey.ETHEREUM, ChainKey.BSC, ChainKey.AVALANCHE, ChainKey.POLYGON, ChainKey.ARBITRUM, ChainKey.OPTIMISM, ChainKey.FANTOM]
    } else {
        throw new Error(`getStargateNetworksForEnv() - invalid environment: ${chainStage}`)
    }
}

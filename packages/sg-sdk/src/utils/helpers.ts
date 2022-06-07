import {ChainKey} from "@layerzerolabs/lz-sdk";

export function getStargateNetworksForEnv(chainStage: string) {
    if(chainStage == 'sandbox'){
        return [
            ChainKey.RINKEBY_SANDBOX,
            ChainKey.BSC_TESTNET_SANDBOX,
            ChainKey.FUJI_SANDBOX,
            ChainKey.MUMBAI_SANDBOX,
            ChainKey.ARBITRUM_RINKEBY_SANDBOX,
            ChainKey.OPTIMISM_KOVAN_SANDBOX,
            ChainKey.FANTOM_TESTNET_SANDBOX
        ]
    } else if(chainStage == 'testnet'){
        return [
            ChainKey.RINKEBY,
            ChainKey.BSC_TESTNET,
            ChainKey.FUJI,
            ChainKey.MUMBAI,
            ChainKey.ARBITRUM_RINKEBY,
            ChainKey.OPTIMISM_KOVAN,
            ChainKey.FANTOM_TESTNET
        ]
    } else if(chainStage == 'mainnet'){
        return [
            ChainKey.ETHEREUM,
            ChainKey.BSC,
            ChainKey.AVALANCHE,
            ChainKey.POLYGON,
            ChainKey.ARBITRUM,
            ChainKey.OPTIMISM,
            ChainKey.FANTOM
        ]
    } else {
        throw new Error(`getStargateNetworksForEnv() - invalid environment: ${chainStage}`)
    }

}
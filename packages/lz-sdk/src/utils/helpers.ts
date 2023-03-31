import { ChainId, ChainKey, ChainStage } from "../enums"
import { CHAIN_ID, CHAIN_KEY, CHAIN_STAGE } from "../constants"

export function getNetworkNameByEndpointId(endpointId: ChainId | number): ChainKey {
    return CHAIN_KEY[endpointId as ChainId]
}

export function getEndpointIdByName(networkName: ChainKey | string): ChainId {
    return CHAIN_ID[networkName as ChainKey]
}

export function getNetworksForEnv(chainStage: string) {
    if (chainStage === "sandbox") {
        chainStage = "testnet_sandbox"
    }
    let networks: string[] = []
    for (const chainKey in ChainKey) {
        if (ChainStage[chainStage.toUpperCase() as keyof typeof ChainStage] == CHAIN_STAGE[ChainKey[chainKey as keyof typeof ChainKey]]) {
            networks.push(chainKey.toLowerCase().replace(/_/g, "-"))
        }
    }
    return networks
}

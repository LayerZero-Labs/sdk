import { ChainId, ChainKey, ChainStage } from "../enums"

// @deprecated - use getChainKey
export function getNetworkNameByEndpointId(endpointId: ChainId | number): ChainKey {
    return getChainKey(endpointId)
}

// @deprecated - use getChainIdByChainKey
export function getEndpointIdByName(networkName: ChainKey | string): ChainId {
    return getChainIdByChainKey(networkName as ChainKey)
}

export function getNetworksForEnv(chainStage: string) {
    const networks: ChainKey[] = []
    for (const chainIdAsString in ChainId) {
        const chainId = Number(chainIdAsString)
        if (!Number.isFinite(chainId)) continue
        if (getChainStage(chainId) === (chainStage as any)) {
            networks.push(getChainKey(chainId))
        }
    }
    return networks
}

export function getChainStage(chainId: number): ChainStage {
    if (chainId < 10000) return ChainStage.MAINNET
    if (chainId < 20000) return ChainStage.TESTNET
    return ChainStage.TESTNET_SANDBOX
}

export function getChainKey(chainId: ChainId): ChainKey {
    for (const [key, chainIdOrString] of Object.entries(ChainId)) {
        if (chainIdOrString === chainId) {
            //@ts-ignore
            const chainKey: ChainKey = ChainKey[key]
            if (chainKey) return chainKey
        }
    }
    throw new Error(`No ChainKey for ${chainId}`)
}

export function getChainIdByChainKey(chainKey: ChainKey) {
    for (const [key, value] of Object.entries(ChainKey)) {
        if (value === chainKey) {
            //@ts-ignore
            const chainId: ChainId = ChainId[key]
            if (chainId !== undefined) return chainId
        }
    }
    throw new Error(`No ChainId for ${chainKey}`)
}

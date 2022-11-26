import { ChainId, ChainKey, ChainStage } from "../enums"
import { CHAIN_ID, CHAIN_KEY, CHAIN_STAGE, ULN_V1_CHAINS, OVERRIDE_CHAIN_NAME } from "../constants"

export function getNetworkNameByEndpointId(endpointId: ChainId | number): ChainKey {
    return CHAIN_KEY[endpointId as ChainId]
}

export function getEndpointIdByName(networkName: ChainKey | string): ChainId {
    return CHAIN_ID[networkName as ChainKey]
    // throw `DEPRECATED - use getChainIdForNetwork() in place of getEndpointIdByName() for ${networkName} moving forward`
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

const ULN_V1_BIAS = 100

export function getChainIdForNetwork(chainName: string, env: string, ulnVersion: string): string {
    const stageName = env === "sandbox" ? "TESTNET_SANDBOX" : env.toUpperCase()
    const stage = ChainStage[stageName as keyof typeof ChainStage]
    const chainKey = stage === ChainStage.MAINNET ? chainName : `${chainName}-${stageName.toLowerCase().replace("_", "-")}`
    let chainId = CHAIN_ID[chainKey as ChainKey]
    if (chainName in OVERRIDE_CHAIN_NAME && stage in OVERRIDE_CHAIN_NAME[chainName]) {
        chainId = OVERRIDE_CHAIN_NAME[chainName][stage]
    }
    return (ulnVersion == "1" ? chainId - ULN_V1_BIAS : chainId).toString()
}

function getChainNameOverride(): { [chainId: number]: string } {
    const override: { [chainId: number]: string } = {}
    for (const key in OVERRIDE_CHAIN_NAME) {
        for (const stage in OVERRIDE_CHAIN_NAME[key]) {
            override[OVERRIDE_CHAIN_NAME[key][stage]] = key
        }
    }
    return override
}

export function getNetworkForChainId(targetChainId: number) {
    const chainNameOverride = getChainNameOverride()
    for (const chainIdType in ChainId) {
        const chainId = ChainId[chainIdType as keyof typeof ChainId]
        const chainKey = CHAIN_KEY[chainId]
        const chainName = chainId in chainNameOverride ? chainNameOverride[chainId] : chainIdType.split("_")[0].toLowerCase()

        if (chainId === (targetChainId as ChainId)) {
            // uln v2
            const stage = ChainStage[CHAIN_STAGE[chainKey]].split("_")
            const env = stage[stage.length - 1].toLowerCase()
            return {
                chainName,
                env,
                ulnVersion: "2",
            }
        } else if (ULN_V1_CHAINS.includes(targetChainId + ULN_V1_BIAS) && chainId === targetChainId + ULN_V1_BIAS) {
            // uln v1
            const stage = ChainStage[CHAIN_STAGE[chainKey]].split("_")
            const env = stage[stage.length - 1].toLowerCase()
            return {
                chainName,
                env,
                ulnVersion: "1",
            }
        }
    }
    throw new Error(`Unknown chainId: ${targetChainId}`)
}

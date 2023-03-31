import { ChainId, ChainKey } from "../enums"
import { RPCS } from "../constants"
import { getChainKey, getChainListId } from "./helpers"

export function getMnemonic(networkName?: string) {
    if (networkName) {
        const mnemonic = process.env["MNEMONIC_" + networkName.toUpperCase()]
        if (mnemonic && mnemonic !== "") {
            return mnemonic
        }
    }

    const mnemonic = process.env.MNEMONIC
    if (!mnemonic || mnemonic === "") {
        return "test test test test test test test test test test test junk"
    }
    return mnemonic
}

export function accounts(chainKey?: string) {
    return { mnemonic: getMnemonic(chainKey) }
}

//https://hardhat.org/hardhat-network/reference/#config
//accounts and chainId set by setupNetwork
export type HardhatNetwork = { [network: string]: any }
export type HardhatNetworks = { [chainKey in ChainKey]?: any }

export function setupNetwork(networkConfig: any, chainIds: ChainId[]): HardhatNetworks {
    const networks: HardhatNetworks = {}

    for (let chainId of chainIds) {
        const chainKey = getChainKey(chainId)
        if (chainKey === undefined) {
            throw new Error("ChainId not setup in core-sdk")
        }

        const chainListId = getChainListId(chainId)
        networks[chainKey] = {
            ...networkConfig,
            chainId: chainListId,
            accounts: accounts(chainKey),
        }
    }
    return networks
}

export function setupNetworks(chainIds: [ChainId, { rpcIndex?: number }][]): HardhatNetworks {
    const networks: HardhatNetworks = {}

    for (let [chainId, config] of chainIds) {
        const rpcIndex = config.rpcIndex ? config.rpcIndex : 0

        const chainKey = getChainKey(chainId)
        if (chainKey === undefined) {
            throw new Error("ChainId not setup in core-sdk")
        }

        const chainListId = getChainListId(chainId)
        const url = RPCS[chainId]?.[rpcIndex]
        if (!url) {
            throw new Error("ChainId not setup in core-sdk")
        }

        networks[chainKey] = {
            chainId: chainListId,
            accounts: accounts(chainKey),
            url,
        }
    }
    return networks
}

import { getChainIdByChainKey, getChainKey, getChainListId } from "./helpers"
import { ChainId } from "../enums/ChainId"
import { ChainKey } from "../enums/ChainKey"

const chainIds: ChainId[] = Object.values(ChainId)
    .map((string) => Number(string))
    .filter((number) => Number.isFinite(number))

describe("getChainListId", () => {
    const exceptions = [
        //
        ChainId.ARCANA,
        ChainId.ASTAR_TESTNET_SANDBOX,
        ChainId.ASTAR_TESTNET,
        ChainId.BASE_TESTNET,
        ChainId.CASTLECRUSH_TESTNET_SANDBOX,
        ChainId.CASTLECRUSH_TESTNET,
        ChainId.CASTLECRUSH,
        ChainId.FUSE_TESTNET_SANDBOX,
        ChainId.FUSE_TESTNET,
        ChainId.INTAIN_TESTNET_SANDBOX,
        ChainId.INTAIN_TESTNET,
        ChainId.INTAIN,
        ChainId.MOONRIVER_TESTNET,
        ChainId.OKX_TESTNET,
        ChainId.PORTAL_TESTNET_SANDBOX,
        ChainId.PORTAL_TESTNET,
        ChainId.PORTAL,
        ChainId.SEPOLIA_TESTNET,
        ChainId.SHRAPNEL_TESTNET,
        ChainId.SHRAPNEL,
        ChainId.ZKCONSENSYS_TESTNET,
        ChainId.ZKPOLYGON_TESTNET,
        ChainId.ZKPOLYGON,
    ]
    it("Should return values for all chains", () => {
        for (const chainId of chainIds) {
            if (exceptions.includes(chainId)) continue

            const chainListId = getChainListId(chainId)
            expect(chainListId).toBeDefined()
        }
    })
})

describe("getChainKey", () => {
    it("Should return values for all chains", () => {
        for (const chainId of chainIds) {
            const chainKey = getChainKey(chainId)
            expect(chainKey).toBeDefined()
        }
    })
})

describe("getChainIdByChainKey", () => {
    it("Should return values for all chains", () => {
        for (const chainKeyOrString in ChainKey) {
            const isUppercase = chainKeyOrString.toUpperCase() === chainKeyOrString
            if (isUppercase) continue
            const chainKey = chainKeyOrString as ChainKey
            const chainId = getChainIdByChainKey(chainKey)
            expect(chainId).toBeDefined()
        }
    })
})

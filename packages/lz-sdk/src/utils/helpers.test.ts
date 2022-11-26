import { getChainIdForNetwork, getNetworkForChainId } from "./helpers"

describe("SDK helpers", () => {
    it("should return the correct network for a given chainId", () => {
        const input: { chainName: string; env: string; ulnVersion: string }[] = [
            { chainName: "ethereum", env: "mainnet", ulnVersion: "1" },
            { chainName: "ethereum", env: "mainnet", ulnVersion: "2" },
            { chainName: "ethereum", env: "testnet", ulnVersion: "1" },
            { chainName: "ethereum", env: "sandbox", ulnVersion: "2" },
            { chainName: "arbitrum", env: "mainnet", ulnVersion: "1" },
            { chainName: "arbitrum", env: "testnet", ulnVersion: "2" },
            { chainName: "aptos", env: "mainnet", ulnVersion: "2" },
        ]
        const expected: string[] = ["1", "101", "10021", "20121", "10", "10143", "108"]

        for (let i = 0; i < input.length; i++) {
            expect(getChainIdForNetwork(input[i].chainName, input[i].env, input[i].ulnVersion)).toEqual(expected[i])
        }
    })

    it("should return the correct chainId for a given network", () => {
        const input: number[] = [1, 101, 10021, 20121, 10, 10143, 108]
        const expected: { chainName: string; env: string; ulnVersion: string }[] = [
            { chainName: "ethereum", env: "mainnet", ulnVersion: "1" },
            { chainName: "ethereum", env: "mainnet", ulnVersion: "2" },
            { chainName: "ethereum", env: "testnet", ulnVersion: "1" },
            { chainName: "ethereum", env: "sandbox", ulnVersion: "2" },
            { chainName: "arbitrum", env: "mainnet", ulnVersion: "1" },
            { chainName: "arbitrum", env: "testnet", ulnVersion: "2" },
            { chainName: "aptos", env: "mainnet", ulnVersion: "2" },
        ]

        for (let i = 0; i < input.length; i++) {
            expect(getNetworkForChainId(input[i])).toEqual(expected[i])
        }
    })
})

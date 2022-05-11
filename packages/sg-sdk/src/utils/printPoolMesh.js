const { USDC_ADDRESS, USDT_ADDRESS, BUSD_ADDRESS } = require("../../dist")
const { POOLS, PoolId } = require("../../dist")
const { CHAIN_ID, ChainId, getNetworksForEnv } = require("@layerzerolabs/lz-sdk")
const poolIdKeys = Object.keys(PoolId)

const tokenLinks = {
    ethereum: "https://etherscan.io/token/",
    bsc: "https://bscscan.com/token/",
    avalanche: "https://snowtrace.io/token/",
    polygon: "https://polygonscan.com/token/",
    arbitrum: "https://arbiscan.io/token/",
    optimism: "https://optimistic.etherscan.io/token/",
    fantom: "https://ftmscan.com/token/",
}

function returnNSpaces(n) {
    let counter = 0
    let returnString = ""
    while (counter !== n) {
        returnString = returnString + "\xa0"
        counter++
    }
    return returnString
}

function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value)
}

function printPoolMesh() {
    const networks = getNetworksForEnv("MAINNET")
    let meshArray = []
    networks.map((network) => {
        let counter = 0
        poolIdKeys.map((poolId) => {
            let mesh = []
            const mapping = POOLS[network][poolId]?.chainPaths
            if (mapping === undefined) {
                return
            }
            let tokenUrlString = ""
            mapping.map((row) => {
                if (tokenUrlString === "") {
                    if (PoolId[poolId] === "USDC") {
                        tokenUrlString = USDC_ADDRESS[CHAIN_ID[network]]
                    } else if (PoolId[poolId] === "USDT") {
                        tokenUrlString = USDT_ADDRESS[CHAIN_ID[network]]
                    } else if (PoolId[poolId] === "BUSD") {
                        tokenUrlString = BUSD_ADDRESS[CHAIN_ID[network]]
                    }
                }

                if (tokenUrlString !== "0x0000000000000000000000000000000000000000") {
                    if (mesh[`${network.toUpperCase()}-${PoolId[poolId]} -- ${tokenLinks[network]}` + `${tokenUrlString}`] === undefined) {
                        mesh[`${network.toUpperCase()}-${PoolId[poolId]} -- ${tokenLinks[network]}` + `${tokenUrlString}`] = {}
                    }
                    mesh[returnNSpaces(counter)] = {
                        "Chain-Token": `${getKeyByValue(ChainId, row.dstChainId)}-${getKeyByValue(PoolId, row.dstPoolId)}`,
                        Weight: row.weight,
                    }
                    counter++
                }
            })
            if (Object.keys(mesh).length > 0) {
                meshArray.push(mesh)
            }
        })
    })
    meshArray.map((mesh) => {
        console.table(mesh)
    })
}

printPoolMesh()

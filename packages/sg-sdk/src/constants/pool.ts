import { ChainKey, ChainId } from "@layerzerolabs/lz-sdk"
import { PoolId } from "../enums"
import {
    USDC_ADDRESS,
    USDT_ADDRESS,
    BUSD_ADDRESS,
    USDD_ADDRESS,
    SGETH_ADDRESS
} from "./addresses"

export const SHARE_DECIMALS = 6
export const SGETH_SHARE_DECIMALS = 18
export const USDD_SHARE_DECIMALS = 18

export const POOLS: {
    [chainKey in ChainKey]?: {
        [poolId in PoolId]?: {
            info: { sharedDecimals: number; address: string }
            chainPaths: {
                weight: number
                dstChainId: ChainId
                dstPoolId: PoolId
            }[]
        }
    }
} = {

    ///////// MAINNET /////////

    [ChainKey.ETHEREUM]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.ETHEREUM]
            },
            chainPaths : [
                // -------------------------- loopback --------------------------------------------
                {"weight" : 0, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},

                // -------------------------- BSC --------------------------------------------
                {"weight" : 4, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 6, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 21, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 7, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 5, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 5, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 22, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 4, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 8, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 17, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.ETHEREUM]
            },
            chainPaths: [
                // -------------------------- loopback --------------------------------------------
                {"weight" : 0, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},

                // -------------------------- BSC --------------------------------------------
                {"weight" : 3, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 7, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 8, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 34, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 2, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 4, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 7, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 27, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 3, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 4, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.SGETH]: {
            info: {
                "sharedDecimals": SGETH_SHARE_DECIMALS,
                "address": SGETH_ADDRESS[ChainId.ETHEREUM]
            },
            chainPaths: [
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.SGETH},
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.SGETH},
            ]
        },

        [PoolId.USDD]: {
            info: {
                "sharedDecimals": USDD_SHARE_DECIMALS,
                "address": USDD_ADDRESS[ChainId.ETHEREUM]
            },
            chainPaths: [
                {"weight" : 1, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDD}
            ]
        }

    },

    [ChainKey.BSC]: {

        [PoolId.BUSD]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": BUSD_ADDRESS[ChainId.BSC]
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 13, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 21, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 10, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 9, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 6, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 9, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 5, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 4, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 7, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 16, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.BSC]
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 26, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 25, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 14, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 6, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 7, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 3, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 2, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 10, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 3, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 4, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDD]: {
            info: {
                "sharedDecimals": USDD_SHARE_DECIMALS,
                "address": USDD_ADDRESS[ChainId.BSC]
            },
            chainPaths: [
                {"weight" : 1, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDD}
            ]
        }
    },

    [ChainKey.AVALANCHE]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.AVALANCHE]
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 44, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 11, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 7, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 3, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 6, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 5, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 6, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 4, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 5, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 9, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.AVALANCHE]
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 9, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 41, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 8, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 12, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 2, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 9, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 2, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 11, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 2, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 5, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        }
    },

    [ChainKey.POLYGON]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.POLYGON]
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 19, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 20, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 4, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 8, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 13, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 10, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 6, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 4, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 7, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 9, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.POLYGON]
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 4, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 20, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 9, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 20, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 10, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 11, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 2, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 21, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 2, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 2, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        }
    },

    [ChainKey.ARBITRUM]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.ARBITRUM]
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 26, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 18, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 5, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 10, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 12, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 9, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 6, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 6, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 5, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 4, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.ARBITRUM]
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 21, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 39, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 2, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 13, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 2, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 3, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 2, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 2, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 4, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 13, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.SGETH]: {
            info: {
                "sharedDecimals": SGETH_SHARE_DECIMALS,
                "address": SGETH_ADDRESS[ChainId.ARBITRUM]
            },
            chainPaths: [
                {"weight" : 90, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.SGETH},
                {"weight" : 10, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.SGETH},
            ]
        }
    },

    [ChainKey.OPTIMISM]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.OPTIMISM]
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 28, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 12, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 5, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 11, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 12, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 6, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 6, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 6, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 8, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 2, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 5, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.SGETH]: {
            info: {
                "sharedDecimals": SGETH_SHARE_DECIMALS,
                "address": SGETH_ADDRESS[ChainId.OPTIMISM]
            },
            chainPaths: [
                {"weight" : 90, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.SGETH},
                {"weight" : 10, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.SGETH},
            ]
        }

    },

    [ChainKey.FANTOM]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.FANTOM]
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 19, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 17, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 8, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 8, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 19, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 9, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 6, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 6, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 3, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 3, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 2, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC}
            ]
        },

    },

    ///////// TESTNET /////////

    [ChainKey.RINKEBY]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.RINKEBY]
            },
            chainPaths : [
                // test of loopback USDC <> USDT chainPaths for local chain rebalancing
                {"weight" : 0, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDT}, // local USDC to local USDT

                // -------------------------- BSC_TESTNET --------------------------------------------
                {"weight" : 1200, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.BUSD},
                {"weight" : 800, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1600, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDC},
                {"weight" : 900, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1300, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDC},
                {"weight" : 700, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 800, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 400, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 800, "dstChainId": ChainId.OPTIMISM_KOVAN, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1500, "dstChainId": ChainId.FANTOM_TESTNET, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.RINKEBY]
            },
            chainPaths: [
                // test of loopback USDC <> USDT chainPaths for local chain rebalancing
                {"weight" : 525, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDC}, // local USDT to local USDC

                // -------------------------- BSC_TESTNET --------------------------------------------
                {"weight" : 1200, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.BUSD},
                {"weight" : 800, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1600, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDC},
                {"weight" : 900, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1300, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDC},
                {"weight" : 700, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 800, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 400, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 800, "dstChainId": ChainId.OPTIMISM_KOVAN, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1500, "dstChainId": ChainId.FANTOM_TESTNET, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.SGETH]: {
            info: {
                "sharedDecimals": SGETH_SHARE_DECIMALS,
                "address": SGETH_ADDRESS[ChainId.RINKEBY]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.SGETH},
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN, "dstPoolId": PoolId.SGETH},
            ]
        },

        [PoolId.USDD]: {
            info: {
                "sharedDecimals": USDD_SHARE_DECIMALS,
                "address": USDD_ADDRESS[ChainId.RINKEBY]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.USDD},
            ]
        },
    },

    [ChainKey.BSC_TESTNET]: {

        [PoolId.BUSD]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": BUSD_ADDRESS[ChainId.BSC_TESTNET]
            },
            chainPaths : [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 2500, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 1500, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1200, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDC},
                {"weight" : 600, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1000, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDC},
                {"weight" : 600, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 300, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 500, "dstChainId": ChainId.OPTIMISM_KOVAN, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1600, "dstChainId": ChainId.FANTOM_TESTNET, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.BSC_TESTNET]
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 2500, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 1500, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1200, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDC},
                {"weight" : 600, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1000, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDC},
                {"weight" : 600, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 300, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 500, "dstChainId": ChainId.OPTIMISM_KOVAN, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1600, "dstChainId": ChainId.FANTOM_TESTNET, "dstPoolId": PoolId.USDC}
            ]
        },
        [PoolId.USDD]: {
            info: {
                "sharedDecimals": USDD_SHARE_DECIMALS,
                "address": USDD_ADDRESS[ChainId.BSC_TESTNET]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDD},
            ]
        },

    },

    [ChainKey.FUJI]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.FUJI]
            },
            chainPaths : [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 999, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 888, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 777, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.BUSD},
                {"weight" : 666, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 555, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDC},
                {"weight" : 444, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 333, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 222, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 111, "dstChainId": ChainId.OPTIMISM_KOVAN, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1111, "dstChainId": ChainId.FANTOM_TESTNET, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.FUJI]
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 999, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 888, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 777, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.BUSD},
                {"weight" : 666, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 555, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDC},
                {"weight" : 666, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 777, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 888, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 999, "dstChainId": ChainId.OPTIMISM_KOVAN, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1111, "dstChainId": ChainId.FANTOM_TESTNET, "dstPoolId": PoolId.USDC}
            ]
        }
    },

    [ChainKey.MUMBAI]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.MUMBAI]
            },
            chainPaths : [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 555, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 666, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 555, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.BUSD},
                {"weight" : 666, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1299, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDC},
                {"weight" : 699, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 700, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 400, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 500, "dstChainId": ChainId.OPTIMISM_KOVAN, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1000, "dstChainId": ChainId.FANTOM_TESTNET, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.MUMBAI]
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 2399, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 1399, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 900, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.BUSD},
                {"weight" : 600, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1300, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDC},
                {"weight" : 700, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 700, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 400, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 500, "dstChainId": ChainId.OPTIMISM_KOVAN, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1000, "dstChainId": ChainId.FANTOM_TESTNET, "dstPoolId": PoolId.USDC}
            ]
        }
    },

    [ChainKey.ARBITRUM_RINKEBY]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.ARBITRUM_RINKEBY]
            },
            chainPaths : [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 2500, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 1500, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 900, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.BUSD},
                {"weight" : 600, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 999, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDC},
                {"weight" : 499, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 998, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDC},
                {"weight" : 497, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 500, "dstChainId": ChainId.OPTIMISM_KOVAN, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1000, "dstChainId": ChainId.FANTOM_TESTNET, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.ARBITRUM_RINKEBY]
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 2500, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 1500, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 900, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.BUSD},
                {"weight" : 600, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1000, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDC},
                {"weight" : 500, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1000, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDC},
                {"weight" : 500, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 500, "dstChainId": ChainId.OPTIMISM_KOVAN, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1000, "dstChainId": ChainId.FANTOM_TESTNET, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.SGETH]: {
            info: {
                "sharedDecimals": SGETH_SHARE_DECIMALS,
                "address": SGETH_ADDRESS[ChainId.ARBITRUM_RINKEBY]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.SGETH},
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN, "dstPoolId": PoolId.SGETH},
            ]
        },

    },

    [ChainKey.OPTIMISM_KOVAN]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.OPTIMISM_KOVAN]
            },
            chainPaths : [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 2500, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 1500, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 900, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.BUSD},
                {"weight" : 600, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1000, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDC},
                {"weight" : 500, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1000, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDC},
                {"weight" : 500, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 300, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1000, "dstChainId": ChainId.FANTOM_TESTNET, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.SGETH]: {
            info: {
                "sharedDecimals": SGETH_SHARE_DECIMALS,
                "address": SGETH_ADDRESS[ChainId.OPTIMISM_KOVAN]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.SGETH},
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.SGETH},
            ]
        },

    },

    [ChainKey.FANTOM_TESTNET]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.FANTOM_TESTNET]
            },
            chainPaths : [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 2500, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 1500, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 900, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.BUSD},
                {"weight" : 600, "dstChainId": ChainId.BSC_TESTNET, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1300, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDC},
                {"weight" : 700, "dstChainId": ChainId.FUJI, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1000, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDC},
                {"weight" : 500, "dstChainId": ChainId.MUMBAI, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 300, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 500, "dstChainId": ChainId.OPTIMISM_KOVAN, "dstPoolId": PoolId.USDC}
            ]
        },
    },




    ///////// SANDBOX /////////

    [ChainKey.RINKEBY_SANDBOX]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.RINKEBY_SANDBOX]
            },
            chainPaths : [
                // -------------------------- BSC_TESTNET --------------------------------------------
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.BUSD},
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN_SANDBOX, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FANTOM_TESTNET_SANDBOX, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.RINKEBY_SANDBOX]
            },
            chainPaths: [
                // -------------------------- BSC_TESTNET --------------------------------------------
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.BUSD},
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN_SANDBOX, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FANTOM_TESTNET_SANDBOX, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.SGETH]: {
            info: {
                "sharedDecimals": SGETH_SHARE_DECIMALS,
                "address": SGETH_ADDRESS[ChainId.RINKEBY_SANDBOX]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.SGETH},
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN_SANDBOX, "dstPoolId": PoolId.SGETH},
            ]
        },

        [PoolId.USDD]: {
            info: {
                "sharedDecimals": USDD_SHARE_DECIMALS,
                "address": USDD_ADDRESS[ChainId.RINKEBY_SANDBOX]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.USDD},
            ]
        }

    },

    [ChainKey.BSC_TESTNET_SANDBOX]: {

        [PoolId.BUSD]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": BUSD_ADDRESS[ChainId.BSC_TESTNET_SANDBOX]
            },
            chainPaths : [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN_SANDBOX, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FANTOM_TESTNET_SANDBOX, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.BSC_TESTNET_SANDBOX]
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN_SANDBOX, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FANTOM_TESTNET_SANDBOX, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDD]: {
            info: {
                "sharedDecimals": USDD_SHARE_DECIMALS,
                "address": USDD_ADDRESS[ChainId.BSC_TESTNET_SANDBOX]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDD},
            ]
        }

    },

    [ChainKey.FUJI_SANDBOX]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.FUJI_SANDBOX]
            },
            chainPaths : [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.BUSD},
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN_SANDBOX, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FANTOM_TESTNET_SANDBOX, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.FUJI_SANDBOX]
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.BUSD},
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN_SANDBOX, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FANTOM_TESTNET_SANDBOX, "dstPoolId": PoolId.USDC}
            ]
        }
    },

    [ChainKey.MUMBAI_SANDBOX]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.MUMBAI_SANDBOX]
            },
            chainPaths : [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.BUSD},
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN_SANDBOX, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FANTOM_TESTNET_SANDBOX, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.MUMBAI_SANDBOX]
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.BUSD},
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN_SANDBOX, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FANTOM_TESTNET_SANDBOX, "dstPoolId": PoolId.USDC}
            ]
        }
    },

    [ChainKey.ARBITRUM_RINKEBY_SANDBOX]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.ARBITRUM_RINKEBY_SANDBOX]
            },
            chainPaths : [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.BUSD},
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN_SANDBOX, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FANTOM_TESTNET_SANDBOX, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.ARBITRUM_RINKEBY_SANDBOX]
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.BUSD},
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN_SANDBOX, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FANTOM_TESTNET_SANDBOX, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.SGETH]: {
            info: {
                "sharedDecimals": SGETH_SHARE_DECIMALS,
                "address": SGETH_ADDRESS[ChainId.ARBITRUM_RINKEBY_SANDBOX]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.SGETH},
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN_SANDBOX, "dstPoolId": PoolId.SGETH},
            ]
        },

    },

    [ChainKey.OPTIMISM_KOVAN_SANDBOX]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.OPTIMISM_KOVAN_SANDBOX]
            },
            chainPaths : [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.BUSD},
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- FANTOM_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FANTOM_TESTNET_SANDBOX, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.SGETH]: {
            info: {
                "sharedDecimals": SGETH_SHARE_DECIMALS,
                "address": SGETH_ADDRESS[ChainId.OPTIMISM_KOVAN_SANDBOX]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.SGETH},
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.SGETH},
            ]
        },

    },

    [ChainKey.FANTOM_TESTNET_SANDBOX]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.FANTOM_TESTNET_SANDBOX]
            },
            chainPaths : [
                // -------------------------- RINKEBY --------------------------------------------
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC_TESTNET --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.BUSD},
                {"weight" : 1, "dstChainId": ChainId.BSC_TESTNET_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- FUJI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.FUJI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- MUMBAI --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.MUMBAI_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDC},
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN_SANDBOX, "dstPoolId": PoolId.USDC}
            ]
        },
    }

}

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
            deltaParams: {
                batched: boolean,
                swapDeltaBP: number,
                lpDeltaBP: number,
                defaultSwapMode: boolean,
                defaultLPMode: boolean,
            }
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths : [
                // -------------------------- loopback --------------------------------------------
                {"weight" : 0, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},

                // -------------------------- BSC --------------------------------------------
                {"weight" : 205, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 630, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 3101, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 1050, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 631, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 1218, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 665, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 1544, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 756, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.ETHEREUM]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- loopback --------------------------------------------
                {"weight" : 0, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},

                // -------------------------- BSC --------------------------------------------
                {"weight" : 200, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 1162, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 1005, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 2748, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 459, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 248, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 445, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 1830, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 1704, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.SGETH]: {
            info: {
                "sharedDecimals": SGETH_SHARE_DECIMALS,
                "address": SGETH_ADDRESS[ChainId.ETHEREUM]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 1402, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 364, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 2123, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 0, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 568, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 2638, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 637, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 1868, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.BSC]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 200, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 4478, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 2210, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 1894, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 189, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 229, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDD]: {
            info: {
                "sharedDecimals": USDD_SHARE_DECIMALS,
                "address": USDD_ADDRESS[ChainId.BSC]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 3169, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 491, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 2649, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 2635, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 211, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 245, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.AVALANCHE]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 2969, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 1407, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 786, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 2020, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 925, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 567, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 450, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 476, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.POLYGON]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 200, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 3786, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 295, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 3232, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 196, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 1491, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        }
    },

    [ChainKey.ARBITRUM]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.ARBITRUM]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 3645, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 231, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 384, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 200, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 3337, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 755, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 843, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 204, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.ARBITRUM]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 382, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 446, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 200, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 5022, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 2951, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.SGETH]: {
            info: {
                "sharedDecimals": SGETH_SHARE_DECIMALS,
                "address": SGETH_ADDRESS[ChainId.ARBITRUM]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 1694, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 743, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 791, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 1071, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 3160, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 402, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 638, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 467, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 631, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 203, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.SGETH]: {
            info: {
                "sharedDecimals": SGETH_SHARE_DECIMALS,
                "address": SGETH_ADDRESS[ChainId.OPTIMISM]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 2200, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 409, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 200, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 1609, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 452, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 1827, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 1792, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 911, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC}
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 5000,
                lpDeltaBP: 5000,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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
            deltaParams: {
                batched: true,
                swapDeltaBP: 250,
                lpDeltaBP: 250,
                defaultSwapMode: false,
                defaultLPMode: false,
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

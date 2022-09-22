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
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths : [
                // -------------------------- loopback --------------------------------------------
                {"weight" : 0, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},

                // -------------------------- BSC --------------------------------------------
                {"weight" : 258, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 276, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 2472, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 457, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 898, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 271, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 2745, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 358, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 1510, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 754, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.ETHEREUM]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- loopback --------------------------------------------
                {"weight" : 0, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},

                // -------------------------- BSC --------------------------------------------
                {"weight" : 260, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 1156, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 1693, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 1396, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 869, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 1200, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 573, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 1048, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 1558, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 246, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.SGETH]: {
            info: {
                "sharedDecimals": SGETH_SHARE_DECIMALS,
                "address": SGETH_ADDRESS[ChainId.ETHEREUM]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
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
                swapDeltaBP: 500,
                lpDeltaBP: 500,
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
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 2212, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 274, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 2579, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 1595, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 1402, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 1097, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 241, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.BSC]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 1509, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 1725, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 2927, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 1604, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 762, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 365, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 507, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDD]: {
            info: {
                "sharedDecimals": USDD_SHARE_DECIMALS,
                "address": USDD_ADDRESS[ChainId.BSC]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
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
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 3830, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 608, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 1775, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 1851, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 898, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.AVALANCHE]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 2665, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 1203, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 3088, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 200, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 897, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 499, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 848, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
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
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 2563, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 327, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 262, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 2184, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 1763, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 1277, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 1024, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.POLYGON]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 838, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 547, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 2702, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 402, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 2802, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 1043, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 636, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 631, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
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
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 4253, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 234, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 200, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 2026, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 907, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 1579, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.ARBITRUM]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 771, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 235, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 1747, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 200, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 2885, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 2173, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 234, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 1179, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 375, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.SGETH]: {
            info: {
                "sharedDecimals": SGETH_SHARE_DECIMALS,
                "address": SGETH_ADDRESS[ChainId.ARBITRUM]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                {"weight" : 8213, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.SGETH},
                {"weight" : 1787, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.SGETH},
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
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 3081, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 322, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 418, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 618, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 2133, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 275, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 992, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 209, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 1455, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 296, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.SGETH]: {
            info: {
                "sharedDecimals": SGETH_SHARE_DECIMALS,
                "address": SGETH_ADDRESS[ChainId.OPTIMISM]
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                {"weight" : 6266, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.SGETH},
                {"weight" : 3734, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.SGETH},
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
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 233, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 334, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 429, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 2143, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 1129, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 2280, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 611, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 299, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 1067, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 1275, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC}
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

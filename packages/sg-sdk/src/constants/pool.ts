import { ChainKey, ChainId } from "@layerzerolabs/lz-sdk"
import { PoolId } from "../enums"
import {
    USDC_ADDRESS,
    USDT_ADDRESS,
    BUSD_ADDRESS,
    USDD_ADDRESS,
    STARGATE_ETH_VAULT_ADDRESS
} from "./addresses"

export const SHARE_DECIMALS = 6
export const ETH_SHARE_DECIMALS = 18
export const USDD_SHARE_DECIMALS = 18

export const POOLS = {

    ///////// MAINNET /////////

    [ChainKey.ETHEREUM]: {

        [PoolId.USDC]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDC_ADDRESS[ChainId.ETHEREUM]
            },
            chainPaths : [
                // -------------------------- BSC --------------------------------------------
                {"weight" : 326, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 533, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 2020, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 751, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 450, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 450, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 2345, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 400, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 867, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 1858, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.ETHEREUM]
            },
            chainPaths: [
                // -------------------------- BSC --------------------------------------------
                {"weight" : 200, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 529, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 902, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 3859, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 426, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 554, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 2930, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.WETH]: {
            info: {
                "sharedDecimals": ETH_SHARE_DECIMALS,
                "address": STARGATE_ETH_VAULT_ADDRESS[ChainId.ETHEREUM]
            },
            chainPaths: [
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.WETH},
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.WETH},
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
                {"weight" : 1420, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 2059, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 854, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 868, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 683, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 923, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 468, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 392, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 647, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 1678, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.BSC]
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 2727, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 3130, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 1100, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 476, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 327, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 256, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 1091, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 492, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
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
                {"weight" : 4422, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 1102, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 306, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 696, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 684, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 455, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 624, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 376, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 393, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 944, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.AVALANCHE]
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 747, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 4198, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 810, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 1212, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 998, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 934, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 500, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
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
                {"weight" : 2005, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 2102, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 426, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 714, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 1371, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 944, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 554, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 409, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 621, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 854, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.POLYGON]
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 308, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 2104, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 845, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 1958, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 1019, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 974, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 2191, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
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
            chainPaths : [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 2749, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 1795, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 471, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 1000, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 1230, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 810, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 565, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 517, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 421, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 441, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.USDT]: {
            info: {
                "sharedDecimals": SHARE_DECIMALS,
                "address": USDT_ADDRESS[ChainId.ARBITRUM]
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                {"weight" : 475, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 3591, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 519, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 2940, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 367, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 598, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 200, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 359, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 699, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 251, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.WETH]: {
            info: {
                "sharedDecimals": ETH_SHARE_DECIMALS,
                "address": STARGATE_ETH_VAULT_ADDRESS[ChainId.ARBITRUM]
            },
            chainPaths: [
                {"weight" : 90, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.WETH},
                {"weight" : 10, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.WETH},
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
                {"weight" : 2726, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 1165, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 678, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 984, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 1186, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 544, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 658, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 497, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 816, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 200, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- FANTOM --------------------------------------
                {"weight" : 544, "dstChainId": ChainId.FANTOM, "dstPoolId": PoolId.USDC}
            ]
        },

        [PoolId.WETH]: {
            info: {
                "sharedDecimals": ETH_SHARE_DECIMALS,
                "address": STARGATE_ETH_VAULT_ADDRESS[ChainId.OPTIMISM]
            },
            chainPaths: [
                {"weight" : 90, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.WETH},
                {"weight" : 10, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.WETH},
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
                {"weight" : 1909, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDC},
                {"weight" : 1639, "dstChainId": ChainId.ETHEREUM, "dstPoolId": PoolId.USDT},
                // -------------------------- BSC --------------------------------------
                {"weight" : 853, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.BUSD},
                {"weight" : 803, "dstChainId": ChainId.BSC, "dstPoolId": PoolId.USDT},
                // -------------------------- AVALANCHE --------------------------------------
                {"weight" : 1972, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDC},
                {"weight" : 787, "dstChainId": ChainId.AVALANCHE, "dstPoolId": PoolId.USDT},
                // -------------------------- POLYGON --------------------------------------
                {"weight" : 631, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDC},
                {"weight" : 600, "dstChainId": ChainId.POLYGON, "dstPoolId": PoolId.USDT},
                // -------------------------- ARBITRUM --------------------------------------
                {"weight" : 300, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDC},
                {"weight" : 286, "dstChainId": ChainId.ARBITRUM, "dstPoolId": PoolId.USDT},
                // -------------------------- OPTIMISM --------------------------------------
                {"weight" : 221, "dstChainId": ChainId.OPTIMISM, "dstPoolId": PoolId.USDC}
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

        [PoolId.WETH]: {
            info: {
                "sharedDecimals": ETH_SHARE_DECIMALS,
                "address": STARGATE_ETH_VAULT_ADDRESS[ChainId.RINKEBY]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.WETH},
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN, "dstPoolId": PoolId.WETH},
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

        [PoolId.WETH]: {
            info: {
                "sharedDecimals": ETH_SHARE_DECIMALS,
                "address": STARGATE_ETH_VAULT_ADDRESS[ChainId.ARBITRUM_RINKEBY]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.WETH},
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN, "dstPoolId": PoolId.WETH},
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

        [PoolId.WETH]: {
            info: {
                "sharedDecimals": ETH_SHARE_DECIMALS,
                "address": STARGATE_ETH_VAULT_ADDRESS[ChainId.OPTIMISM_KOVAN]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.RINKEBY, "dstPoolId": PoolId.WETH},
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY, "dstPoolId": PoolId.WETH},
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

        [PoolId.WETH]: {
            info: {
                "sharedDecimals": ETH_SHARE_DECIMALS,
                "address": STARGATE_ETH_VAULT_ADDRESS[ChainId.RINKEBY_SANDBOX]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.WETH},
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN_SANDBOX, "dstPoolId": PoolId.WETH},
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

        [PoolId.WETH]: {
            info: {
                "sharedDecimals": ETH_SHARE_DECIMALS,
                "address": STARGATE_ETH_VAULT_ADDRESS[ChainId.ARBITRUM_RINKEBY_SANDBOX]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.WETH},
                {"weight" : 1, "dstChainId": ChainId.OPTIMISM_KOVAN_SANDBOX, "dstPoolId": PoolId.WETH},
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

        [PoolId.WETH]: {
            info: {
                "sharedDecimals": ETH_SHARE_DECIMALS,
                "address": STARGATE_ETH_VAULT_ADDRESS[ChainId.OPTIMISM_KOVAN_SANDBOX]
            },
            chainPaths : [
                {"weight" : 1, "dstChainId": ChainId.RINKEBY_SANDBOX, "dstPoolId": PoolId.WETH},
                {"weight" : 1, "dstChainId": ChainId.ARBITRUM_RINKEBY_SANDBOX, "dstPoolId": PoolId.WETH},
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

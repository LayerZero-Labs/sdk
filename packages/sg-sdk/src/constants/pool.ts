import { ChainKey, ChainId } from "@layerzerolabs/lz-sdk"
import { PoolId } from "../enums"
import { USDC_ADDRESS, USDT_ADDRESS, BUSD_ADDRESS } from "./addresses"

export const SHARE_DECIMALS = 6

export const POOLS = {
    ///////// MAINNET /////////

    [ChainKey.ETHEREUM]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.ETHEREUM],
            },
            chainPaths: [
                // -------------------------- BSC --------------------------------------------
                { weight: 1200, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 800, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 1625, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 875, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 1300, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 700, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 780, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 420, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 800, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 1500, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.ETHEREUM],
            },
            chainPaths: [
                // -------------------------- BSC --------------------------------------------
                { weight: 1200, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 800, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 1625, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 875, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 1300, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 700, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 780, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 420, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 800, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 1500, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.BSC]: {
        [PoolId.BUSD]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: BUSD_ADDRESS[ChainId.BSC],
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 2500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 1170, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 630, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 1040, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 560, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 325, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 175, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 1600, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.BSC],
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 2500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 1170, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 630, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 1040, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 560, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 325, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 175, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 1600, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.AVALANCHE]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.AVALANCHE],
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 2500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 975, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 525, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 650, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 350, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 1500, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.AVALANCHE],
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 2500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 975, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 525, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 650, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 350, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 1500, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.POLYGON]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.POLYGON],
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 2500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 1300, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 700, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 650, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 350, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 1000, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.POLYGON],
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 2500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 1300, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 700, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 650, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 350, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 1000, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.ARBITRUM]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.ARBITRUM],
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 2500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 975, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 525, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 975, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 525, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 1000, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.ARBITRUM],
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 2500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 975, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 525, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 975, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 525, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 1000, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.OPTIMISM]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.OPTIMISM],
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 2500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 975, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 525, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 975, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 525, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 325, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 175, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- FANTOM --------------------------------------
                { weight: 1000, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.FANTOM]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.FANTOM],
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 2500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 1300, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 700, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 975, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 525, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 325, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 175, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
            ],
        },
    },

    ///////// TESTNET /////////

    [ChainKey.RINKEBY]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.RINKEBY],
            },
            chainPaths: [
                // -------------------------- BSC_TESTNET --------------------------------------------
                { weight: 1200, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 800, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1600, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 900, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1300, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 700, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 800, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 400, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 800, dstChainId: ChainId.OPTIMISM_KOVAN, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1500, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.RINKEBY],
            },
            chainPaths: [
                // -------------------------- BSC_TESTNET --------------------------------------------
                { weight: 1200, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 800, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1600, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 900, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1300, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 700, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 800, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 400, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 800, dstChainId: ChainId.OPTIMISM_KOVAN, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1500, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.BSC_TESTNET]: {
        [PoolId.BUSD]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: BUSD_ADDRESS[ChainId.BSC_TESTNET],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1200, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 600, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1000, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 600, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 300, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_KOVAN, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1600, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.BSC_TESTNET],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1200, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 600, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1000, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 600, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 300, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_KOVAN, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1600, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.FUJI]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.FUJI],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1000, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 500, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 700, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 400, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_KOVAN, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1500, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.FUJI],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1000, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 500, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 700, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 400, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_KOVAN, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1500, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.MUMBAI]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.MUMBAI],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1300, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 700, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 700, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 400, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_KOVAN, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1000, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.MUMBAI],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1300, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 700, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 700, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 400, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_KOVAN, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1000, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.ARBITRUM_RINKEBY]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.ARBITRUM_RINKEBY],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1000, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 500, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1000, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 500, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_KOVAN, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1000, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.ARBITRUM_RINKEBY],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1000, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 500, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1000, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 500, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_KOVAN, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1000, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.OPTIMISM_KOVAN]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.OPTIMISM_KOVAN],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1000, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 500, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1000, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 500, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 300, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1000, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.FANTOM_TESTNET]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.FANTOM_TESTNET],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1300, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 700, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1000, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 500, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 300, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ARBITRUM_RINKEBY, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_KOVAN, dstPoolId: PoolId.USDC },
            ],
        },
    },

    ///////// TESTNET /////////

    [ChainKey.RINKEBY_SANDBOX]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.RINKEBY_SANDBOX],
            },
            chainPaths: [
                // -------------------------- BSC_TESTNET --------------------------------------------
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.BUSD },
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 1, dstChainId: ChainId.OPTIMISM_KOVAN_SANDBOX, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.FANTOM_TESTNET_SANDBOX, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.RINKEBY_SANDBOX],
            },
            chainPaths: [
                // -------------------------- BSC_TESTNET --------------------------------------------
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.BUSD },
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 1, dstChainId: ChainId.OPTIMISM_KOVAN_SANDBOX, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.FANTOM_TESTNET_SANDBOX, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.BSC_TESTNET_SANDBOX]: {
        [PoolId.BUSD]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: BUSD_ADDRESS[ChainId.BSC_TESTNET_SANDBOX],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 1, dstChainId: ChainId.OPTIMISM_KOVAN_SANDBOX, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.FANTOM_TESTNET_SANDBOX, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.BSC_TESTNET_SANDBOX],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 1, dstChainId: ChainId.OPTIMISM_KOVAN_SANDBOX, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.FANTOM_TESTNET_SANDBOX, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.FUJI_SANDBOX]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.FUJI_SANDBOX],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.BUSD },
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 1, dstChainId: ChainId.OPTIMISM_KOVAN_SANDBOX, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.FANTOM_TESTNET_SANDBOX, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.FUJI_SANDBOX],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.BUSD },
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 1, dstChainId: ChainId.OPTIMISM_KOVAN_SANDBOX, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.FANTOM_TESTNET_SANDBOX, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.MUMBAI_SANDBOX]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.MUMBAI_SANDBOX],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.BUSD },
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 1, dstChainId: ChainId.OPTIMISM_KOVAN_SANDBOX, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.FANTOM_TESTNET_SANDBOX, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.MUMBAI_SANDBOX],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.BUSD },
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 1, dstChainId: ChainId.OPTIMISM_KOVAN_SANDBOX, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.FANTOM_TESTNET_SANDBOX, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.ARBITRUM_RINKEBY_SANDBOX]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.ARBITRUM_RINKEBY_SANDBOX],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.BUSD },
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 1, dstChainId: ChainId.OPTIMISM_KOVAN_SANDBOX, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.FANTOM_TESTNET_SANDBOX, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.ARBITRUM_RINKEBY_SANDBOX],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.BUSD },
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 1, dstChainId: ChainId.OPTIMISM_KOVAN_SANDBOX, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.FANTOM_TESTNET_SANDBOX, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.OPTIMISM_KOVAN_SANDBOX]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.OPTIMISM_KOVAN_SANDBOX],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.BUSD },
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.FANTOM_TESTNET_SANDBOX, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.FANTOM_TESTNET_SANDBOX]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.FANTOM_TESTNET_SANDBOX],
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.BUSD },
                { weight: 1, dstChainId: ChainId.BSC_TESTNET_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.FUJI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.MUMBAI_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_RINKEBY --------------------------------------
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDC },
                { weight: 1, dstChainId: ChainId.ARBITRUM_RINKEBY_SANDBOX, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_KOVAN --------------------------------------
                { weight: 1, dstChainId: ChainId.OPTIMISM_KOVAN_SANDBOX, dstPoolId: PoolId.USDC },
            ],
        },
    },
}

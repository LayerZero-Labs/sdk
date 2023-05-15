// @ts-nocheck
import axios, { Axios } from "axios"

export namespace Covalent {
    export enum ChainId {
        ETHEREUM = 1,
        ETHEREUM_KOVAN = 42,
        POLYGON = 137,
        POLYGON_MUMBAI = 80001,
        AVALANCHE = 43114,
        AVALANCHE_FUJI = 43113,
        BSC = 56,
        BSC_TESTNET = 97,
        FANTOM = 250,
        FANTOM_TESTNET = 4002,
        RONIN = 2020,
        MOONBEAM_TESTNET = 1287,
        MOONBEAM_POLKADOT = 1284,
        MOONRIVER_KUSAMA = 1285,
        RSK_MAINNET = 30,
        RSK_TESTNET = 31,
        ARBITRUM_MAINNET = 42161,
        ARBITRUM_TESTNET = 421611,
        PALM_MAINNET = 11297108109,
        PALM_TESTNET = 11297108099,
        KLAYTN_MAINNET_CYPRESS = 8217,
        HECO_MAINNET = 128,
        HECO_TESTNET = 256,
        POLYJUICE_TESTNET = 71393,
        IOTEX_MAINNET = 4689,
        IOTEX_TESTNET = 4690,
        EVMOS_TESTNET = 9000,
        ASTAR_MAINNET = 592,
        ASTAR_TESTNET = 81,
        SHIDEN = 336,
        HARMONY_MAINNET = 1666600000,
        AURORA_MAINNET = 1313161554,
        CRONOS_MAINNET = 25,
        SOLANA = 1399811149,
    }

    export class Client {
        private http: Axios
        constructor(private apiKey: string, private baseURL = "https://api.covalenthq.com") {
            this.http = axios.create({
                baseURL,
                params: {
                    key: apiKey,
                },
            })
        }

        /**
         * Given `:chain_id` and `:contract_addresses`, return their historical prices. Can filter by date ranges and convert to `:quote_currency`. Only daily granularity is supported.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param contractAddresses - Passing in an `ENS` resolves automatically.
         * @param quoteCurrency - The requested fiat currency.
         * @param from - The start day of the historical price range. (YYYY-MM-DD)
         * @param to - The end day of the historical price range. (YYYY-MM-DD)
         * @param pricesAtAsc - Sort the prices in chronological ascending order. By default, it's set to `false` and returns prices in chronological descending order.
         * @param format - If `format=csv`, return a flat CSV instead of JSON responses.
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         */
        async getHistoricalTokenPrices({
            chainId,
            contractAddresses,
            quoteCurrency,
            from,
            to,
            pricesAtAsc,
            format,
            pageNumber,
            pageSize,
        }: {
            chainId: ChainId
            contractAddresses: string
            quoteCurrency: string
            from?: string
            to?: string
            pricesAtAsc?: string
            format?: string
            pageNumber?: number
            pageSize?: number
        }) {
            const url = `/v1/pricing/historical_by_addresses_v2/${chainId}/${quoteCurrency}/${contractAddresses}/`
            const { data } = await this.http.get<CovalentResponse<AddressWithHistoricalPricesItem>>(url, {
                params: { from: from, to: to, "prices-at-asc": pricesAtAsc, format: format, "page-number": pageNumber, "page-size": pageSize },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id` and wallet `:address`, return current token balances along with their spot prices. This endpoint supports a variety of token standards like ERC20, ERC721 and ERC1155. As a special case, network native tokens like ETH on Ethereum are also returned even though it's not a token contract.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param address - Passing in an `ENS` resolves automatically.
         * @param nft - Set to `true` to return ERC721 and ERC1155 assets. Defaults to `false`.
         * @param noNftFetch - Set to `true` to skip fetching NFT metadata, which can result in faster responses. Defaults to `false` and only applies when `nft=true`.
         * @param quoteCurrency - The requested fiat currency.
         * @param format - If `format=csv`, return a flat CSV instead of JSON responses.
         */
        async getTokenBalancesForAddress({
            chainId,
            address,
            nft,
            noNftFetch,
            quoteCurrency,
            format,
        }: {
            chainId: ChainId
            address: string
            nft?: boolean
            noNftFetch?: boolean
            quoteCurrency?: string
            format?: string
        }) {
            const url = `/v1/${chainId}/address/${address}/balances_v2/`
            const { data } = await this.http.get<CovalentResponse<BalanceResponseType>>(url, {
                params: { nft: nft, "no-nft-fetch": noNftFetch, "quote-currency": quoteCurrency, format: format },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id` and wallet `:address`, return wallet value for the last 30 days at 24 hour interval timestamps.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param address - Passing in an `ENS` resolves automatically.
         * @param quoteCurrency - The requested fiat currency.
         * @param format - If `format=csv`, return a flat CSV instead of JSON responses.
         * @param days - The range of the historical portfolio in days, defaults to 30 days (max days = 2000).
         */
        async getHistoricalPortfolioValueOverTime({
            chainId,
            address,
            quoteCurrency,
            format,
            days,
        }: {
            chainId: ChainId
            address: string
            quoteCurrency?: string
            format?: string
            days?: string
        }) {
            const url = `/v1/${chainId}/address/${address}/portfolio_v2/`
            const { data } = await this.http.get<CovalentResponse<HistoricalPortfolioResponse>>(url, {
                params: { "quote-currency": quoteCurrency, format: format, days: days },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id` and wallet `:address`, return all transactions along with their decoded log events. This endpoint does a deep-crawl of the blockchain to retrieve all kinds of transactions that references the `:address` including indexed topics within the event logs.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param address - Passing in an `ENS` resolves automatically.
         * @param blockSignedAtAsc - Sort the transactions in chronological ascending order. By default, it's set to `false` and returns transactions in chronological descending order.
         * @param noLogs - Setting this to `true` will omit decoded event logs, resulting in lighter and faster responses. By default it's set to `false`.
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         * @param quoteCurrency - The requested fiat currency.
         * @param format - If `format=csv`, return a flat CSV instead of JSON responses.
         */
        async getTransactionsForAddress({
            chainId,
            address,
            blockSignedAtAsc,
            noLogs,
            pageNumber,
            pageSize,
            quoteCurrency,
            format,
        }: {
            chainId: ChainId
            address: string
            blockSignedAtAsc?: boolean
            noLogs?: boolean
            pageNumber?: number
            pageSize?: number
            quoteCurrency?: string
            format?: string
        }) {
            const url = `/v1/${chainId}/address/${address}/transactions_v2/`
            const { data } = await this.http.get<CovalentResponse<TransactionResponse>>(url, {
                params: {
                    "block-signed-at-asc": blockSignedAtAsc,
                    "no-logs": noLogs,
                    "page-number": pageNumber,
                    "page-size": pageSize,
                    "quote-currency": quoteCurrency,
                    format: format,
                },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id` and `:tx_hash`, return the transaction data with their decoded event logs.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param txHash - Hex encoded transaction hash.
         * @param noLogs - Setting this to `true` will omit decoded event logs, resulting in lighter and faster responses. By default it's set to `false`.
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         * @param quoteCurrency - The requested fiat currency.
         * @param format - If `format=csv`, return a flat CSV instead of JSON responses.
         */
        async getATransaction({
            chainId,
            txHash,
            noLogs,
            pageNumber,
            pageSize,
            quoteCurrency,
            format,
        }: {
            chainId: ChainId
            txHash: string
            noLogs?: boolean
            pageNumber?: number
            pageSize?: number
            quoteCurrency?: string
            format?: string
        }) {
            const url = `/v1/${chainId}/transaction_v2/${txHash}/`
            const { data } = await this.http.get<CovalentResponse<SingleTransactionResponse>>(url, {
                params: { "no-logs": noLogs, "page-number": pageNumber, "page-size": pageSize, "quote-currency": quoteCurrency, format: format },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id`, wallet `:address` and `:contract-address`, return all ERC20 token contract transfers along with their historical prices at the time of their transfer.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param address - Passing in an `ENS` resolves automatically.
         * @param contractAddress - Smart contract address.
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         * @param quoteCurrency - The requested fiat currency.
         * @param format - If `format=csv`, return a flat CSV instead of JSON responses.
         * @param startingBlock - Starting block to define a block range.
         * @param endingBlock - Ending block to define a block range.
         */
        async getErc20TokenTransfersForAddress({
            chainId,
            address,
            contractAddress,
            pageNumber,
            pageSize,
            quoteCurrency,
            format,
            startingBlock,
            endingBlock,
        }: {
            chainId: ChainId
            address: string
            contractAddress: string
            pageNumber?: number
            pageSize?: number
            quoteCurrency?: string
            format?: string
            startingBlock?: number
            endingBlock?: number
        }) {
            const url = `/v1/${chainId}/address/${address}/transfers_v2/`
            const { data } = await this.http.get<CovalentResponse<TransferResponse>>(url, {
                params: {
                    "contract-address": contractAddress,
                    "page-number": pageNumber,
                    "page-size": pageSize,
                    "quote-currency": quoteCurrency,
                    format: format,
                    "starting-block": startingBlock,
                    "ending-block": endingBlock,
                },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id` and `:block_height`, return a single block at `:block_height`. If `:block_height` is set to the value `latest`, return the latest block available.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param blockHeight - The height of the block.
         * @param quoteCurrency - The requested fiat currency.
         * @param format - If `format=csv`, return a flat CSV instead of JSON responses.
         */
        async getABlock({
            chainId,
            blockHeight,
            quoteCurrency,
            format,
        }: {
            chainId: ChainId
            blockHeight: string
            quoteCurrency?: string
            format?: string
        }) {
            const url = `/v1/${chainId}/block_v2/${blockHeight}/`
            const { data } = await this.http.get<CovalentResponse<SingleBlockResponse>>(url, {
                params: { "quote-currency": quoteCurrency, format: format },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id`, `:start_date` and `:end_date`, return all the block height(s) of a particular chain within a date range. If the `:end_date` is set to `latest`, return every block height from the `:start_date` to now.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param startDate - The start datetime of the block height(s). (yyyy-MM-ddTHH:mm:ssZ), eg: 2020-01-01 or 2020-01-01T03:36:50z
         * @param endDate - The ending datetime of the block height(s). (yyyy-MM-ddTHH:mm:ssZ), eg: 2020-01-02 or 2020-01-02T03:36:50z
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         * @param format - If `format=csv`, return a flat CSV instead of JSON responses.
         */
        async getBlockHeights({
            chainId,
            startDate,
            endDate,
            pageNumber,
            pageSize,
            format,
        }: {
            chainId: ChainId
            startDate: string
            endDate: string
            pageNumber?: number
            pageSize?: number
            format?: string
        }) {
            const url = `/v1/${chainId}/block_v2/${startDate}/${endDate}/`
            const { data } = await this.http.get<CovalentResponse<SingleBlockResponse>>(url, {
                params: { "page-number": pageNumber, "page-size": pageSize, format: format },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id` and `:dexname`, return pool information across all `XY=K` pools including LP token prices, reserves, exchange volumes and fees.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param dexname - One of `sushiswap`, `pancakeswap`, `quickswap`, `pangolin`, `spiritswap`, `spookyswap`.
         * @param contractAddresses - If `contract-addresses` (a comma separated list) is present, only return the pools that contain these contracts.
         * @param tickers - If `tickers` (a comma separated list) is present, only return the pools that contain these tickers.
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         * @param quoteCurrency - The requested fiat currency.
         */
        async getXyKPools({
            chainId,
            dexname,
            contractAddresses,
            tickers,
            pageNumber,
            pageSize,
            quoteCurrency,
        }: {
            chainId: ChainId
            dexname: string
            contractAddresses?: string
            tickers?: string
            pageNumber?: number
            pageSize?: number
            quoteCurrency?: string
        }) {
            const url = `/v1/${chainId}/xy=k/${dexname}/pools/`
            const { data } = await this.http.get<CovalentResponse<UniswapLikeExchangeListResponse>>(url, {
                params: {
                    "contract-addresses": contractAddresses,
                    tickers: tickers,
                    "page-number": pageNumber,
                    "page-size": pageSize,
                    "quote-currency": quoteCurrency,
                },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id` and contract `:address`, return a paginated list of decoded log events emitted by a particular smart contract.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param address - Passing in an `ENS` resolves automatically.
         * @param startingBlock - Starting block to define a block range.
         * @param endingBlock - Ending block to define a block range. Passing in `latest` uses the latest block height.
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         * @param quoteCurrency - The requested fiat currency.
         * @param format - If `format=csv`, return a flat CSV instead of JSON responses.
         */
        async getLogEventsByContractAddress({
            chainId,
            address,
            startingBlock,
            endingBlock,
            pageNumber,
            pageSize,
            quoteCurrency,
            format,
        }: {
            chainId: ChainId
            address: string
            startingBlock: string
            endingBlock: string
            pageNumber?: number
            pageSize?: number
            quoteCurrency?: string
            format?: string
        }) {
            const url = `/v1/${chainId}/events/address/${address}/`
            const { data } = await this.http.get<CovalentResponse<EventsListResponseType>>(url, {
                params: {
                    "starting-block": startingBlock,
                    "ending-block": endingBlock,
                    "page-number": pageNumber,
                    "page-size": pageSize,
                    "quote-currency": quoteCurrency,
                    format: format,
                },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id`, `:dexname` and `:address`, return pool information across all `XY=K` pools including LP token prices, reserves, exchange volumes and fees for address.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param dexname - One of `sushiswap`, `pancakeswap`, `quickswap`, `pangolin`, `spiritswap`, `spookyswap`.
         * @param address - Passing in an `ENS` resolves automatically.
         * @param tickers - If `tickers` (a comma separated list) is present, only return the pools that contain these tickers.
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         * @param quoteCurrency - The requested fiat currency.
         */
        async getXyKPoolsByAddress({
            chainId,
            dexname,
            address,
            tickers,
            pageNumber,
            pageSize,
            quoteCurrency,
        }: {
            chainId: ChainId
            dexname: string
            address: string
            tickers?: string
            pageNumber?: number
            pageSize?: number
            quoteCurrency?: string
        }) {
            const url = `/v1/${chainId}/xy=k/${dexname}/pools/address/${address}/`
            const { data } = await this.http.get<CovalentResponse<UniswapLikeExchangeListResponse>>(url, {
                params: { tickers: tickers, "page-number": pageNumber, "page-size": pageSize, "quote-currency": quoteCurrency },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id` and `:topic` hash(es), return a paginated list of decoded log events with one or more topic hashes separated by a comma.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param topic - Topic hash value from log records.
         * @param secondaryTopics - Additional topic hash(es) to filter on -- padded & unpadded address fields are supported.
         * @param startingBlock - Starting block to define a block range.
         * @param endingBlock - Ending block to define a block range. Passing in `latest` uses the latest block height.
         * @param senderAddress - The address of the sender.
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         * @param quoteCurrency - The requested fiat currency.
         * @param format - If `format=csv`, return a flat CSV instead of JSON responses.
         */
        async getLogEventsByTopicHashEs({
            chainId,
            topic,
            secondaryTopics,
            startingBlock,
            endingBlock,
            senderAddress,
            pageNumber,
            pageSize,
            quoteCurrency,
            format,
        }: {
            chainId: ChainId
            topic: string
            secondaryTopics?: string
            startingBlock: string
            endingBlock: string
            senderAddress?: string
            pageNumber?: number
            pageSize?: number
            quoteCurrency?: string
            format?: string
        }) {
            const url = `/v1/${chainId}/events/topics/${topic}/`
            const { data } = await this.http.get<CovalentResponse<EventsListResponseType>>(url, {
                params: {
                    "secondary-topics": secondaryTopics,
                    "starting-block": startingBlock,
                    "ending-block": endingBlock,
                    "sender-address": senderAddress,
                    "page-number": pageNumber,
                    "page-size": pageSize,
                    "quote-currency": quoteCurrency,
                    format: format,
                },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id`, `:dexname` and `:address`, return address exchange balances for a specific DEX.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param address - Passing in an `ENS` resolves automatically.
         * @param dexname - One of `sushiswap`, `pancakeswap`, `quickswap`, `pangolin`, `spiritswap`, `spookyswap`.
         * @param quoteCurrency - The requested fiat currency.
         */
        async getXyKAddressExchangeBalances({
            chainId,
            address,
            dexname,
            quoteCurrency,
        }: {
            chainId: ChainId
            address: string
            dexname: string
            quoteCurrency?: string
        }) {
            const url = `/v1/${chainId}/xy=k/${dexname}/address/${address}/balances/`
            const { data } = await this.http.get<CovalentResponse<BalanceResponseType>>(url, { params: { "quote-currency": quoteCurrency } })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id` and wallet `:address`, return a paginated list of token holders. If `:block-height` is omitted, the latest block is used.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param address - Passing in an `ENS` resolves automatically.
         * @param blockHeight - Ending block to define a block range. Passing in `latest` uses the latest block height.
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         * @param format - If `format=csv`, return a flat CSV instead of JSON responses.
         * @param quoteCurrency - The requested fiat currency.
         */
        async getTokenHoldersAsOfAnyBlockHeight({
            chainId,
            address,
            blockHeight,
            pageNumber,
            pageSize,
            format,
            quoteCurrency,
        }: {
            chainId: ChainId
            address: string
            blockHeight?: string
            pageNumber?: number
            pageSize?: number
            format?: string
            quoteCurrency?: string
        }) {
            const url = `/v1/${chainId}/tokens/${address}/token_holders/`
            const { data } = await this.http.get<CovalentResponse<TokenHolderResponse>>(url, {
                params: {
                    "block-height": blockHeight,
                    "page-number": pageNumber,
                    "page-size": pageSize,
                    format: format,
                    "quote-currency": quoteCurrency,
                },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id` and wallet `:address`, return a paginated list of token holders and their current/historical balances, where the token balance of the token holder changes between `:starting-block` and `:ending-block`.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param address - Passing in an `ENS` resolves automatically.
         * @param startingBlock - Starting block to define a block range.
         * @param endingBlock - Ending block to define a block range.
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         * @param quoteCurrency - The requested fiat currency.
         * @param format - If `format=csv`, return a flat CSV instead of JSON responses.
         */
        async getChangesInTokenHoldersBetweenTwoBlockHeights({
            chainId,
            address,
            startingBlock,
            endingBlock,
            pageNumber,
            pageSize,
            quoteCurrency,
            format,
        }: {
            chainId: ChainId
            address: string
            startingBlock: number
            endingBlock?: number
            pageNumber?: number
            pageSize?: number
            quoteCurrency?: string
            format?: string
        }) {
            const url = `/v1/${chainId}/tokens/${address}/token_holders_changes/`
            const { data } = await this.http.get<CovalentResponse<TokenHolderDiff>>(url, {
                params: {
                    "starting-block": startingBlock,
                    "ending-block": endingBlock,
                    "page-number": pageNumber,
                    "page-size": pageSize,
                    "quote-currency": quoteCurrency,
                    format: format,
                },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id` and `:dexname`, return network exchange tokens for a specific DEX.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param dexname - One of `sushiswap`, `pancakeswap`, `quickswap`, `pangolin`, `spiritswap`, `spookyswap`.
         * @param quoteCurrency - The requested fiat currency.
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         */
        async getXyKNetworkExchangeTokens({
            chainId,
            dexname,
            quoteCurrency,
            pageNumber,
            pageSize,
        }: {
            chainId: ChainId
            dexname: string
            quoteCurrency?: string
            pageNumber?: number
            pageSize?: number
        }) {
            const url = `/v1/${chainId}/xy=k/${dexname}/tokens/`
            const { data } = await this.http.get<CovalentResponse<NetworkExchangeTokenResponse>>(url, {
                params: { "quote-currency": quoteCurrency, "page-number": pageNumber, "page-size": pageSize },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
    * Returns a list of DEXes currently supported by the XY=K endpoints.
      
    */
        async getXyKSupportedDeXes() {
            const url = `/v1/xy=k/supported_dexes/`
            const { data } = await this.http.get<CovalentResponse<BalanceResponseType>>(url, { params: {} })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id` and `:contract_address`, return a list of all token IDs for the NFT contract on the blockchain.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param contractAddress - Smart contract address.
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         * @param format - If `format=csv`, return a flat CSV instead of JSON responses.
         */
        async getNftTokenIDsForContract({
            chainId,
            contractAddress,
            pageNumber,
            pageSize,
            format,
        }: {
            chainId: ChainId
            contractAddress: string
            pageNumber?: number
            pageSize?: number
            format?: string
        }) {
            const url = `/v1/${chainId}/tokens/${contractAddress}/nft_token_ids/`
            const { data } = await this.http.get<CovalentResponse<TokenIdResponseType>>(url, {
                params: { "page-number": pageNumber, "page-size": pageSize, format: format },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id`, `:dexname` and `:token_address`, return single network exchange token for a specific DEX.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param tokenAddress - token address
         * @param dexname - One of `sushiswap`, `pancakeswap`, `quickswap`, `pangolin`, `spiritswap`, `spookyswap`.
         * @param quoteCurrency - The requested fiat currency.
         * @param tickers - If `tickers` (a comma separated list) is present, only return the pools that contain these tickers.
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         */
        async getXyKSingleNetworkExchangeToken({
            chainId,
            tokenAddress,
            dexname,
            quoteCurrency,
            tickers,
            pageNumber,
            pageSize,
        }: {
            chainId: ChainId
            tokenAddress: string
            dexname: string
            quoteCurrency?: string
            tickers?: string
            pageNumber?: number
            pageSize?: number
        }) {
            const url = `/v1/${chainId}/xy=k/${dexname}/tokens/address/${tokenAddress}/`
            const { data } = await this.http.get<CovalentResponse<SingleNetworkExchangeTokenResponse>>(url, {
                params: { "quote-currency": quoteCurrency, tickers: tickers, "page-number": pageNumber, "page-size": pageSize },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id`, `:contract_address` and `:token_id`, return a list of transactions.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param contractAddress - Smart contract address.
         * @param tokenId - The token ID
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         * @param quoteCurrency - The requested fiat currency.
         * @param format - If `format=csv`, return a flat CSV instead of JSON responses.
         */
        async getNftTransactionsForContract({
            chainId,
            contractAddress,
            tokenId,
            pageNumber,
            pageSize,
            quoteCurrency,
            format,
        }: {
            chainId: ChainId
            contractAddress: string
            tokenId: string
            pageNumber?: number
            pageSize?: number
            quoteCurrency?: string
            format?: string
        }) {
            const url = `/v1/${chainId}/tokens/${contractAddress}/nft_transactions/${tokenId}/`
            const { data } = await this.http.get<CovalentResponse<NftTransactionsResponseType>>(url, {
                params: { "page-number": pageNumber, "page-size": pageSize, "quote-currency": quoteCurrency, format: format },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id`, `:dexname` and `:address`, return transactions for account address for a specific DEX.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param address - Passing in an `ENS` resolves automatically.
         * @param dexname - One of `sushiswap`, `pancakeswap`, `quickswap`, `pangolin`, `spiritswap`, `spookyswap`.
         * @param quoteCurrency - The requested fiat currency.
         */
        async getXyKTransactionsForAccountAddress({
            chainId,
            address,
            dexname,
            quoteCurrency,
        }: {
            chainId: ChainId
            address: string
            dexname: string
            quoteCurrency?: string
        }) {
            const url = `/v1/${chainId}/xy=k/${dexname}/address/${address}/transactions/`
            const { data } = await this.http.get<CovalentResponse<AccountAddressTransactionsResponse>>(url, {
                params: { "quote-currency": quoteCurrency },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id`, `:contract_address` and `:token_id`, fetch and return the external metadata. Both ERC721 as well as ERC1155 standards are supported.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param contractAddress - Smart contract address.
         * @param tokenId - The token ID
         * @param quoteCurrency - The requested fiat currency.
         * @param format - If `format=csv`, return a flat CSV instead of JSON responses.
         */
        async getNftExternalMetadataForContract({
            chainId,
            contractAddress,
            tokenId,
            quoteCurrency,
            format,
        }: {
            chainId: ChainId
            contractAddress: string
            tokenId: string
            quoteCurrency?: string
            format?: string
        }) {
            const url = `/v1/${chainId}/tokens/${contractAddress}/nft_metadata/${tokenId}/`
            const { data } = await this.http.get<CovalentResponse<NFTMetaDataRsponseType>>(url, {
                params: { "quote-currency": quoteCurrency, format: format },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id`, `:dexname` and `:token_address`, return transactions for token address for a specific DEX.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param tokenAddress - token address
         * @param dexname - One of `sushiswap`, `pancakeswap`, `quickswap`, `pangolin`, `spiritswap`, `spookyswap`.
         * @param quoteCurrency - The requested fiat currency.
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         */
        async getXyKTransactionsForTokenAddress({
            chainId,
            tokenAddress,
            dexname,
            quoteCurrency,
            pageNumber,
            pageSize,
        }: {
            chainId: ChainId
            tokenAddress: string
            dexname: string
            quoteCurrency?: string
            pageNumber?: number
            pageSize?: number
        }) {
            const url = `/v1/${chainId}/xy=k/${dexname}/tokens/address/${tokenAddress}/transactions/`
            const { data } = await this.http.get<CovalentResponse<TokenAddressTransactionsResponse>>(url, {
                params: { "quote-currency": quoteCurrency, "page-number": pageNumber, "page-size": pageSize },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id`, `:dexname` and `:address`, return transactions for exchange for a specific DEX.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param address - Passing in an `ENS` resolves automatically.
         * @param dexname - One of `sushiswap`, `pancakeswap`, `quickswap`, `pangolin`, `spiritswap`, `spookyswap`.
         * @param quoteCurrency - The requested fiat currency.
         */
        async getXyKTransactionsForExchange({
            chainId,
            address,
            dexname,
            quoteCurrency,
        }: {
            chainId: ChainId
            address: string
            dexname: string
            quoteCurrency?: string
        }) {
            const url = `/v1/${chainId}/xy=k/${dexname}/pools/address/${address}/transactions/`
            const { data } = await this.http.get<CovalentResponse<ExchangeTransactionsResponse>>(url, {
                params: { "quote-currency": quoteCurrency },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id` and `:dexname`, return ecosystem chart data for a specific DEX.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param dexname - One of `sushiswap`, `pancakeswap`, `quickswap`, `pangolin`, `spiritswap`, `spookyswap`.
         * @param quoteCurrency - The requested fiat currency.
         */
        async getXyKEcosystemChartData({ chainId, dexname, quoteCurrency }: { chainId: ChainId; dexname: string; quoteCurrency?: string }) {
            const url = `/v1/${chainId}/xy=k/${dexname}/ecosystem/`
            const { data } = await this.http.get<CovalentResponse<EcosystemResponse>>(url, { params: { "quote-currency": quoteCurrency } })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
         * Given `:chain_id` and `:dexname`, return last synced block height data and latest block height for a specific DEX.
         * @param chainId - Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         * @param dexname - One of `sushiswap`, `pancakeswap`, `quickswap`, `pangolin`, `spiritswap`, `spookyswap`.
         * @param pageNumber - The specific page to be returned.
         * @param pageSize - The number of results per page.
         */
        async getXyKHealthData({
            chainId,
            dexname,
            pageNumber,
            pageSize,
        }: {
            chainId: ChainId
            dexname: string
            pageNumber?: number
            pageSize?: number
        }) {
            const url = `/v1/${chainId}/xy=k/${dexname}/health/`
            const { data } = await this.http.get<CovalentResponse<HealthDataResponse>>(url, {
                params: { "page-number": pageNumber, "page-size": pageSize },
            })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
    * Returns a list of all chains.
      
    */
        async getAllChains() {
            const url = `/v1/chains/`
            const { data } = await this.http.get<CovalentResponse<AllChainInfoResponse>>(url, { params: {} })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }

        /**
    * Returns a list of all chain statuses.
      
    */
        async getAllChainStatuses() {
            const url = `/v1/chains/status/`
            const { data } = await this.http.get<CovalentResponse<ChainStatusResponse>>(url, { params: {} })
            if (data.error) {
                throw new Error(data.error_message)
            }
            return data.data
        }
    }
    export type CovalentResponse<T> =
        | {
              data: T
              error: false
              error_code: null
              error_message: null
          }
        | {
              data: null
              error: true
              error_code: unknown
              error_message: string
          }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id` and `:contract_addresses`, return their historical prices. Can filter by date ranges and convert to `:quote_currency`. Only daily granularity is supported.
     */
    export interface AddressWithHistoricalPricesItem {
        /**
         * Smart contract decimals.
         */
        contract_decimals?: number
        /**
         * Smart contract name.
         */
        contract_name?: string
        /**
         * Smart contract ticker symbol.
         */
        contract_ticker_symbol?: string
        /**
         * Smart contract address.
         */
        contract_address?: string
        /**
         * The standard interface(s) supported for this token, eg: `ERC-20`.
         */
        supports_erc?: string[][]
        /**
         * Smart contract URL.
         */
        logo_url?: string
        update_at?: string
        quote_currency?: string
        prices?: HistoricalPriceItem[][]
        items?: {
            [k: string]: unknown
        }[][]
        [k: string]: unknown
    }
    export interface HistoricalPriceItem {
        contract_metadata?: ContractMetadata
        date?: string
        price?: number
        [k: string]: unknown
    }
    export interface ContractMetadata {
        /**
         * Smart contract decimals.
         */
        contract_decimals?: number
        /**
         * Smart contract name.
         */
        contract_name?: string
        /**
         * Smart contract ticker symbol.
         */
        contract_ticker_symbol?: string
        /**
         * Smart contract address.
         */
        contract_address?: string
        /**
         * The standard interface(s) supported for this token, eg: `ERC-20`.
         */
        supports_erc?: string[][]
        /**
         * Smart contract URL.
         */
        logo_url?: string
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id` and wallet `:address`, return current token balances along with their spot prices. This endpoint supports a variety of token standards like ERC20, ERC721 and ERC1155. As a special case, network native tokens like ETH on Ethereum are also returned even though it's not a token contract.
     */
    export interface BalanceResponseType {
        /**
         * The requested wallet address.
         */
        address?: string
        /**
         * The updated time.
         */
        updated_at?: string
        /**
         * The next updated time.
         */
        next_update_at?: string
        /**
         * The requested fiat currency.
         */
        quote_currency?: string
        items?: WalletBalanceItem[][]
        [k: string]: unknown
    }
    export interface WalletBalanceItem {
        /**
         * Smart contract decimals.
         */
        contract_decimals?: number
        /**
         * Smart contract name.
         */
        contract_name?: string
        /**
         * Smart contract ticker symbol.
         */
        contract_ticker_symbol?: string
        /**
         * Smart contract address.
         */
        contract_address?: string
        /**
         * The standard interface(s) supported for this token, eg: `ERC-20`.
         */
        supports_erc?: string[][]
        /**
         * Smart contract URL.
         */
        logo_url?: string
        /**
         * Last transferred date for a wallet
         */
        last_transferred_at?: string
        /**
         * Indicates if a token is the chain's native gas token, eg: ETH on Ethereum.
         */
        native_token?: boolean
        /**
         * One of `cryptocurrency`, `stablecoin`, `nft` or `dust`.
         */
        type?: string
        /**
         * The asset balance. Use `contract_decimals` to scale this balance for display purposes.
         */
        balance?: number
        /**
         * The asset balance 24 hours ago.
         */
        balance_24h?: number
        /**
         * The current spot exchange rate in `quote-currency`.
         */
        quote_rate?: number
        /**
         * The spot exchange rate in `quote-currency` as of 24 hours ago.
         */
        quote_rate_24h?: number
        /**
         * The current balance converted to fiat in `quote-currency`.
         */
        quote?: number
        /**
         * The current balance converted to fiat in `quote-currency` as of 24 hours ago.
         */
        quote_24h?: number
        /**
         * Array of NFTs that are held under this contract.
         */
        nft_data?: INFTMetadata[][]
        [k: string]: unknown
    }
    /**
     * Array of NFTs that are held under this contract.
     */
    export interface INFTMetadata {
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id` and wallet `:address`, return wallet value for the last 30 days at 24 hour interval timestamps.
     */
    export interface HistoricalPortfolioResponse {
        /**
         * The requested wallet address.
         */
        address?: string
        /**
         * The updated time.
         */
        updated_at?: string
        /**
         * The next updated time.
         */
        next_update_at?: string
        /**
         * The requested fiat currency.
         */
        quote_currency?: string
        /**
         * The requested chain ID.
         */
        chain_id?: number
        /**
         * List of tokens in portfolio
         */
        items?: {
            [k: string]: unknown
        }[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id` and wallet `:address`, return all transactions along with their decoded log events. This endpoint does a deep-crawl of the blockchain to retrieve all kinds of transactions that references the `:address` including indexed topics within the event logs.
     */
    export interface TransactionResponse {
        /**
         * The requested wallet address.
         */
        address?: string
        /**
         * The updated time.
         */
        updated_at?: string
        /**
         * The next updated time.
         */
        next_update_at?: string
        /**
         * The requested fiat currency.
         */
        quote_currency?: string
        /**
         * The requested chain ID.
         */
        chain_id?: number
        /**
         * The transactions.
         */
        items?: BlockTransactionWithLogEvents[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    /**
     * The transactions.
     */
    export interface BlockTransactionWithLogEvents {
        /**
         * The signed time of the block.
         */
        block_signed_at?: string
        /**
         * The height of the block.
         */
        block_height?: number
        /**
         * The transaction hash.
         */
        tx_hash?: string
        /**
         * The transaction offset.
         */
        tx_offset?: number
        /**
         * The transaction status.
         */
        successful?: boolean
        /**
         * The address where the transaction is from.
         */
        from_address?: string
        /**
         * The label of `from` address.
         */
        from_address_label?: string
        /**
         * The address where the transaction is to.
         */
        to_address?: string
        /**
         * The label of `to` address.
         */
        to_address_label?: string
        /**
         * The value attached to this tx.
         */
        value?: number
        /**
         * The value attached in `quote-currency` to this tx.
         */
        value_quote?: number
        /**
         * The gas offered for this tx.
         */
        gas_offered?: number
        /**
         * The gas spent for this tx.
         */
        gas_spent?: number
        /**
         * The gas price at the time of this tx.
         */
        gas_price?: number
        /**
         * The total transaction fees paid for this tx.
         */
        fees_paid?: number
        /**
         * The gas spent in `quote-currency` denomination.
         */
        gas_quote?: number
        /**
         * The gas exchange rate at the time of Tx in `quote_currency`.
         */
        gas_quote_rate?: number
        /**
         * The log events.
         */
        log_events?: LogEventItem[][]
        [k: string]: unknown
    }
    /**
     * The log events.
     */
    export interface LogEventItem {
        /**
         * The signed time of the block.
         */
        block_signed_at?: string
        /**
         * The height of the block.
         */
        block_height?: number
        /**
         * The transaction offset.
         */
        tx_offset?: number
        /**
         * The log offset.
         */
        log_offset?: number
        /**
         * The transaction hash.
         */
        tx_hash?: string
        raw_log_topics?: string[][]
        /**
         * Smart contract decimals.
         */
        sender_contract_decimals?: number
        /**
         * Smart contract name.
         */
        sender_name?: string
        /**
         * Smart contract ticker symbol.
         */
        sender_contract_ticker_symbol?: string
        /**
         * The address of the sender.
         */
        sender_address?: string
        /**
         * The label of the sender address.
         */
        sender_address_label?: string
        /**
         * Smart contract URL.
         */
        sender_logo_url?: string
        /**
         * The log events in raw.
         */
        raw_log_data?: string
        decoded?: DecodedItem
        [k: string]: unknown
    }
    /**
     * The decoded item.
     */
    export interface DecodedItem {
        /**
         * The name of the decoded item.
         */
        name?: string
        /**
         * The signature of the decoded item.
         */
        signature?: string
        /**
         * The parameters of the decoded item.
         */
        params?: DecodedParamItem[][]
        [k: string]: unknown
    }
    /**
     * The parameters of the decoded item.
     */
    export interface DecodedParamItem {
        /**
         * The name of the parameter.
         */
        name?: string
        /**
         * The type of the parameter.
         */
        type?: string
        /**
         * The index of the parameter.
         */
        indexed?: boolean
        /**
         * The decoded value of the parameter.
         */
        decoded?: boolean
        /**
         * The value of the parameter.
         */
        value?: {
            [k: string]: unknown
        }
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id` and `:tx_hash`, return the transaction data with their decoded event logs.
     */
    export interface SingleTransactionResponse {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: BlockTransactionWithLogEvents[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface BlockTransactionWithLogEvents {
        /**
         * The signed time of the block.
         */
        block_signed_at?: string
        /**
         * The height of the block.
         */
        block_height?: number
        /**
         * The transaction hash.
         */
        tx_hash?: string
        /**
         * The transaction offset.
         */
        tx_offset?: number
        /**
         * The transaction status.
         */
        successful?: boolean
        /**
         * The address where the transaction is from.
         */
        from_address?: string
        /**
         * The label of `from` address.
         */
        from_address_label?: string
        /**
         * The address where the transaction is to.
         */
        to_address?: string
        /**
         * The label of `to` address.
         */
        to_address_label?: string
        /**
         * The value attached to this tx.
         */
        value?: number
        /**
         * The value attached in `quote-currency` to this tx.
         */
        value_quote?: number
        /**
         * The gas offered for this tx.
         */
        gas_offered?: number
        /**
         * The gas spent for this tx.
         */
        gas_spent?: number
        /**
         * The gas price at the time of this tx.
         */
        gas_price?: number
        /**
         * The total transaction fees paid for this tx.
         */
        fees_paid?: number
        /**
         * The gas spent in `quote-currency` denomination.
         */
        gas_quote?: number
        /**
         * The gas exchange rate at the time of Tx in `quote_currency`.
         */
        gas_quote_rate?: number
        /**
         * The log events.
         */
        log_events?: LogEventItem[][]
        [k: string]: unknown
    }
    /**
     * The log events.
     */
    export interface LogEventItem {
        /**
         * The signed time of the block.
         */
        block_signed_at?: string
        /**
         * The height of the block.
         */
        block_height?: number
        /**
         * The transaction offset.
         */
        tx_offset?: number
        /**
         * The log offset.
         */
        log_offset?: number
        /**
         * The transaction hash.
         */
        tx_hash?: string
        raw_log_topics?: string[][]
        /**
         * Smart contract decimals.
         */
        sender_contract_decimals?: number
        /**
         * Smart contract name.
         */
        sender_name?: string
        /**
         * Smart contract ticker symbol.
         */
        sender_contract_ticker_symbol?: string
        /**
         * The address of the sender.
         */
        sender_address?: string
        /**
         * The label of the sender address.
         */
        sender_address_label?: string
        /**
         * Smart contract URL.
         */
        sender_logo_url?: string
        /**
         * The log events in raw.
         */
        raw_log_data?: string
        decoded?: DecodedItem
        [k: string]: unknown
    }
    /**
     * The decoded item.
     */
    export interface DecodedItem {
        /**
         * The name of the decoded item.
         */
        name?: string
        /**
         * The signature of the decoded item.
         */
        signature?: string
        /**
         * The parameters of the decoded item.
         */
        params?: DecodedParamItem[][]
        [k: string]: unknown
    }
    /**
     * The parameters of the decoded item.
     */
    export interface DecodedParamItem {
        /**
         * The name of the parameter.
         */
        name?: string
        /**
         * The type of the parameter.
         */
        type?: string
        /**
         * The index of the parameter.
         */
        indexed?: boolean
        /**
         * The decoded value of the parameter.
         */
        decoded?: boolean
        /**
         * The value of the parameter.
         */
        value?: {
            [k: string]: unknown
        }
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id`, wallet `:address` and `:contract-address`, return all ERC20 token contract transfers along with their historical prices at the time of their transfer.
     */
    export interface TransferResponse {
        /**
         * The requested wallet address.
         */
        address?: string
        /**
         * The updated time.
         */
        updated_at?: string
        /**
         * The next updated time.
         */
        next_update_at?: string
        /**
         * The requested fiat currency.
         */
        quote_currency?: string
        /**
         * The requested chain ID.
         */
        chain_id?: number
        /**
         * The transactions.
         */
        items?: BlockTransactionWithContractTransfers[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    /**
     * The transactions.
     */
    export interface BlockTransactionWithContractTransfers {
        /**
         * The signed time of the block.
         */
        block_signed_at?: string
        /**
         * The height of the block.
         */
        block_height?: number
        /**
         * The transaction hash.
         */
        tx_hash?: string
        /**
         * The transaction offset.
         */
        tx_offset?: number
        /**
         * The transaction status.
         */
        successful?: boolean
        /**
         * The address where the transaction is from.
         */
        from_address?: string
        /**
         * The label of `from` address.
         */
        from_address_label?: string
        /**
         * The address where the transaction is to.
         */
        to_address?: string
        /**
         * The label of `to` address.
         */
        to_address_label?: string
        /**
         * The value attached to this tx.
         */
        value?: number
        /**
         * The value attached in `quote-currency` to this tx.
         */
        value_quote?: number
        /**
         * The gas offered for this tx.
         */
        gas_offered?: number
        /**
         * The gas spent for this tx.
         */
        gas_spent?: number
        /**
         * The gas price at the time of this tx.
         */
        gas_price?: number
        /**
         * The total transaction fees paid for this tx.
         */
        fees_paid?: number
        /**
         * The gas spent in `quote-currency` denomination.
         */
        gas_quote?: number
        /**
         * The gas exchange rate at the time of Tx in `quote_currency`.
         */
        gas_quote_rate?: number
        /**
         * Transfer items.
         */
        transfers?: TokenTransferItem[][]
        [k: string]: unknown
    }
    /**
     * Transfer items.
     */
    export interface TokenTransferItem {
        /**
         * The signed time of the block.
         */
        block_signed_at?: string
        /**
         * The transaction hash.
         */
        tx_hash?: string
        /**
         * The address where the transfer is from.
         */
        from_address?: string
        /**
         * The label of `from` address.
         */
        from_address_label?: string
        /**
         * The address where the transfer is to.
         */
        to_address?: string
        /**
         * The label of `to` address.
         */
        to_address_label?: string
        /**
         * Smart contract decimals.
         */
        contract_decimals?: number
        /**
         * Smart contract name.
         */
        contract_name?: string
        /**
         * Smart contract ticker symbol.
         */
        contract_ticker_symbol?: string
        /**
         * Smart contract address.
         */
        contract_address?: string
        /**
         * Smart contract URL.
         */
        logo_url?: string
        /**
         * IN/OUT.
         */
        transfer_type?: string
        /**
         * The delta attached to this transfer.
         */
        delta?: number
        /**
         * The transfer balance. Use `contract_decimals` to scale this balance for display purposes.
         */
        balance?: number
        /**
         * The current spot exchange rate in `quote-currency`.
         */
        quote_rate?: number
        /**
         * The current delta converted to fiat in `quote-currency`.
         */
        delta_quote?: number
        /**
         * The current balance converted to fiat in `quote-currency`.
         */
        balance_quote?: number
        /**
         * Additional details on which transfer events were invoked. Defaults to `true`.
         */
        method_calls?: MethodCallsForTransfers[][]
        [k: string]: unknown
    }
    /**
     * Additional details on which transfer events were invoked. Defaults to `true`.
     */
    export interface MethodCallsForTransfers {
        /**
         * The address of the sender.
         */
        sender_address?: string
        /**
         * The name of the decoded item.
         */
        method?: string
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id` and `:block_height`, return a single block at `:block_height`. If `:block_height` is set to the value `latest`, return the latest block available.
     */
    export interface SingleBlockResponse {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: Block[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface Block {
        /**
         * The signed time of the block.
         */
        signed_at?: string
        /**
         * The height of the block.
         */
        height?: number
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id`, `:start_date` and `:end_date`, return all the block height(s) of a particular chain within a date range. If the `:end_date` is set to `latest`, return every block height from the `:start_date` to now.
     */
    export interface SingleBlockResponse {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: Block[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface Block {
        /**
         * The signed time of the block.
         */
        signed_at?: string
        /**
         * The height of the block.
         */
        height?: number
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id` and `:dexname`, return pool information across all `XY=K` pools including LP token prices, reserves, exchange volumes and fees.
     */
    export interface UniswapLikeExchangeListResponse {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: ExchangeVolumeV2[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface ExchangeVolumeV2 {
        exchange?: string
        swap_count_24h?: number
        total_liquidity_quote?: number
        volume_24h_quote?: number
        fee_24h_quote?: number
        total_supply?: number
        quote_rate?: number
        block_height?: number
        token_0?: TokenV2
        token_1?: TokenV2
        chain_name?: string
        chain_id?: string
        dex_name?: string
        volume_7d_quote?: number
        annualized_fee?: number
        [k: string]: unknown
    }
    export interface TokenV2 {
        contract_address?: string
        contract_name?: string
        volume_in_24h?: number
        volume_out_24h?: number
        quote_rate?: number
        reserve?: number
        logo_url?: string
        contract_ticker_symbol?: string
        contract_decimals?: number
        volume_in_7d?: number
        volume_out_7d?: number
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id` and contract `:address`, return a paginated list of decoded log events emitted by a particular smart contract.
     */
    export interface EventsListResponseType {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: LogEventItem[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface LogEventItem {
        /**
         * The signed time of the block.
         */
        block_signed_at?: string
        /**
         * The height of the block.
         */
        block_height?: number
        /**
         * The transaction offset.
         */
        tx_offset?: number
        /**
         * The log offset.
         */
        log_offset?: number
        /**
         * The transaction hash.
         */
        tx_hash?: string
        raw_log_topics?: string[][]
        /**
         * Smart contract decimals.
         */
        sender_contract_decimals?: number
        /**
         * Smart contract name.
         */
        sender_name?: string
        /**
         * Smart contract ticker symbol.
         */
        sender_contract_ticker_symbol?: string
        /**
         * The address of the sender.
         */
        sender_address?: string
        /**
         * The label of the sender address.
         */
        sender_address_label?: string
        /**
         * Smart contract URL.
         */
        sender_logo_url?: string
        /**
         * The log events in raw.
         */
        raw_log_data?: string
        decoded?: DecodedItem
        [k: string]: unknown
    }
    /**
     * The decoded item.
     */
    export interface DecodedItem {
        /**
         * The name of the decoded item.
         */
        name?: string
        /**
         * The signature of the decoded item.
         */
        signature?: string
        /**
         * The parameters of the decoded item.
         */
        params?: DecodedParamItem[][]
        [k: string]: unknown
    }
    /**
     * The parameters of the decoded item.
     */
    export interface DecodedParamItem {
        /**
         * The name of the parameter.
         */
        name?: string
        /**
         * The type of the parameter.
         */
        type?: string
        /**
         * The index of the parameter.
         */
        indexed?: boolean
        /**
         * The decoded value of the parameter.
         */
        decoded?: boolean
        /**
         * The value of the parameter.
         */
        value?: {
            [k: string]: unknown
        }
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id`, `:dexname` and `:address`, return pool information across all `XY=K` pools including LP token prices, reserves, exchange volumes and fees for address.
     */
    export interface UniswapLikeExchangeListResponse {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: ExchangeVolumeV2[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface ExchangeVolumeV2 {
        exchange?: string
        swap_count_24h?: number
        total_liquidity_quote?: number
        volume_24h_quote?: number
        fee_24h_quote?: number
        total_supply?: number
        quote_rate?: number
        block_height?: number
        token_0?: TokenV2
        token_1?: TokenV2
        chain_name?: string
        chain_id?: string
        dex_name?: string
        volume_7d_quote?: number
        annualized_fee?: number
        [k: string]: unknown
    }
    export interface TokenV2 {
        contract_address?: string
        contract_name?: string
        volume_in_24h?: number
        volume_out_24h?: number
        quote_rate?: number
        reserve?: number
        logo_url?: string
        contract_ticker_symbol?: string
        contract_decimals?: number
        volume_in_7d?: number
        volume_out_7d?: number
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id` and `:topic` hash(es), return a paginated list of decoded log events with one or more topic hashes separated by a comma.
     */
    export interface EventsListResponseType {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: LogEventItem[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface LogEventItem {
        /**
         * The signed time of the block.
         */
        block_signed_at?: string
        /**
         * The height of the block.
         */
        block_height?: number
        /**
         * The transaction offset.
         */
        tx_offset?: number
        /**
         * The log offset.
         */
        log_offset?: number
        /**
         * The transaction hash.
         */
        tx_hash?: string
        raw_log_topics?: string[][]
        /**
         * Smart contract decimals.
         */
        sender_contract_decimals?: number
        /**
         * Smart contract name.
         */
        sender_name?: string
        /**
         * Smart contract ticker symbol.
         */
        sender_contract_ticker_symbol?: string
        /**
         * The address of the sender.
         */
        sender_address?: string
        /**
         * The label of the sender address.
         */
        sender_address_label?: string
        /**
         * Smart contract URL.
         */
        sender_logo_url?: string
        /**
         * The log events in raw.
         */
        raw_log_data?: string
        decoded?: DecodedItem
        [k: string]: unknown
    }
    /**
     * The decoded item.
     */
    export interface DecodedItem {
        /**
         * The name of the decoded item.
         */
        name?: string
        /**
         * The signature of the decoded item.
         */
        signature?: string
        /**
         * The parameters of the decoded item.
         */
        params?: DecodedParamItem[][]
        [k: string]: unknown
    }
    /**
     * The parameters of the decoded item.
     */
    export interface DecodedParamItem {
        /**
         * The name of the parameter.
         */
        name?: string
        /**
         * The type of the parameter.
         */
        type?: string
        /**
         * The index of the parameter.
         */
        indexed?: boolean
        /**
         * The decoded value of the parameter.
         */
        decoded?: boolean
        /**
         * The value of the parameter.
         */
        value?: {
            [k: string]: unknown
        }
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id`, `:dexname` and `:address`, return address exchange balances for a specific DEX.
     */
    export interface BalanceResponseType {
        address?: string
        updated_at?: string
        next_update_at?: string
        quote_currency?: string
        uniswap_v2?: ContainerU
        [k: string]: unknown
    }
    export interface ContainerU {
        balances?: UniswapV2BalanceItem[][]
        [k: string]: unknown
    }
    export interface UniswapV2BalanceItem {
        token_0?: UniswapToken
        token_1?: UniswapToken
        pool_token?: UniswapTokenWithSupply
        [k: string]: unknown
    }
    export interface UniswapToken {
        /**
         * Smart contract decimals.
         */
        contract_decimals?: number
        /**
         * Smart contract ticker symbol.
         */
        contract_ticker_symbol?: string
        /**
         * Smart contract address.
         */
        contract_address?: string
        /**
         * Smart contract URL.
         */
        logo_url?: string
        /**
         * Current balance.
         */
        balance?: number
        /**
         * The current balance converted to fiat in `quote-currency`.
         */
        quote?: number
        /**
         * The current spot exchange rate in `quote-currency`.
         */
        quote_rate?: number
        [k: string]: unknown
    }
    export interface UniswapTokenWithSupply {
        /**
         * Smart contract decimals.
         */
        contract_decimals?: number
        /**
         * Smart contract ticker symbol.
         */
        contract_ticker_symbol?: string
        /**
         * Smart contract address.
         */
        contract_address?: string
        /**
         * Smart contract URL.
         */
        logo_url?: string
        /**
         * Current balance.
         */
        balance?: number
        /**
         * The current balance converted to fiat in `quote-currency`.
         */
        quote?: number
        /**
         * The current spot exchange rate in `quote-currency`.
         */
        quote_rate?: number
        /**
         * Total supply of this pool token.
         */
        total_supply?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id` and wallet `:address`, return a paginated list of token holders. If `:block-height` is omitted, the latest block is used.
     */
    export interface TokenHolderResponse {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: TokenHolder[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface TokenHolder {
        /**
         * Smart contract decimals.
         */
        contract_decimals?: number
        /**
         * Smart contract name.
         */
        contract_name?: string
        /**
         * Smart contract ticker symbol.
         */
        contract_ticker_symbol?: string
        /**
         * Smart contract address.
         */
        contract_address?: string
        /**
         * The standard interface(s) supported for this token, eg: `ERC-20`.
         */
        supports_erc?: string[][]
        /**
         * Smart contract URL.
         */
        logo_url?: string
        /**
         * The address of token holder.
         */
        address?: string
        /**
         * The balance of token holder.
         */
        balance?: number
        /**
         * The total supply of the token.
         */
        total_supply?: number
        /**
         * The height of the block.
         */
        block_height?: number
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id` and wallet `:address`, return a paginated list of token holders and their current/historical balances, where the token balance of the token holder changes between `:starting-block` and `:ending-block`.
     */
    export interface TokenHolderDiff {
        /**
         * The token holder.
         */
        token_holder?: string
        /**
         * The starting block balance.
         */
        prev_balance?: number
        /**
         * The starting block height.
         */
        prev_block_height?: number
        /**
         * The ending block balance.
         */
        next_balance?: number
        /**
         * The ending block height.
         */
        next_block_height?: number
        /**
         * The difference of the balance.
         */
        diff?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id` and `:dexname`, return network exchange tokens for a specific DEX.
     */
    export interface NetworkExchangeTokenResponse {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: TokenV2Volume[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface TokenV2Volume {
        chain_name?: string
        chain_id?: string
        dex_name?: string
        contract_address?: string
        contract_name?: string
        total_liquidity?: number
        total_volume_24h?: number
        logo_url?: string
        contract_ticker_symbol?: string
        contract_decimals?: number
        swap_count_24h?: number
        quote_rate?: number
        total_liquidity_quote?: number
        total_volume_24h_quote?: number
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Returns a list of DEXes currently supported by the XY=K endpoints.
     */
    export interface BalanceResponseType {
        address?: string
        updated_at?: string
        next_update_at?: string
        quote_currency?: string
        uniswap_v2?: ContainerU
        [k: string]: unknown
    }
    export interface ContainerU {
        balances?: UniswapV2BalanceItem[][]
        [k: string]: unknown
    }
    export interface UniswapV2BalanceItem {
        token_0?: UniswapToken
        token_1?: UniswapToken
        pool_token?: UniswapTokenWithSupply
        [k: string]: unknown
    }
    export interface UniswapToken {
        /**
         * Smart contract decimals.
         */
        contract_decimals?: number
        /**
         * Smart contract ticker symbol.
         */
        contract_ticker_symbol?: string
        /**
         * Smart contract address.
         */
        contract_address?: string
        /**
         * Smart contract URL.
         */
        logo_url?: string
        /**
         * Current balance.
         */
        balance?: number
        /**
         * The current balance converted to fiat in `quote-currency`.
         */
        quote?: number
        /**
         * The current spot exchange rate in `quote-currency`.
         */
        quote_rate?: number
        [k: string]: unknown
    }
    export interface UniswapTokenWithSupply {
        /**
         * Smart contract decimals.
         */
        contract_decimals?: number
        /**
         * Smart contract ticker symbol.
         */
        contract_ticker_symbol?: string
        /**
         * Smart contract address.
         */
        contract_address?: string
        /**
         * Smart contract URL.
         */
        logo_url?: string
        /**
         * Current balance.
         */
        balance?: number
        /**
         * The current balance converted to fiat in `quote-currency`.
         */
        quote?: number
        /**
         * The current spot exchange rate in `quote-currency`.
         */
        quote_rate?: number
        /**
         * Total supply of this pool token.
         */
        total_supply?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id` and `:contract_address`, return a list of all token IDs for the NFT contract on the blockchain.
     */
    export interface TokenIdResponseType {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: TokenIdResponse[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface TokenIdResponse {
        /**
         * Smart contract decimals.
         */
        contract_decimals?: number
        /**
         * Smart contract name.
         */
        contract_name?: string
        /**
         * Smart contract ticker symbol.
         */
        contract_ticker_symbol?: string
        /**
         * Smart contract address.
         */
        contract_address?: string
        /**
         * The standard interface(s) supported for this token, eg: `ERC-20`.
         */
        supports_erc?: string[][]
        /**
         * Smart contract URL.
         */
        logo_url?: string
        /**
         * The list of token ids under the contract address.
         */
        token_id?: number
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id`, `:dexname` and `:token_address`, return single network exchange token for a specific DEX.
     */
    export interface SingleNetworkExchangeTokenResponse {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: ExchangeVolumeWithVolumeAndLiquidityTimeseries[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface ExchangeVolumeWithVolumeAndLiquidityTimeseries {
        dex_name?: string
        chain_id?: string
        exchange?: string
        swap_count_24h?: number
        total_liquidity_quote?: number
        volume_24h_quote?: number
        fee_24h_quote?: number
        volume_7d_quote?: number
        annualized_fee?: number
        total_supply?: number
        quote_rate?: number
        quote_currency?: string
        block_height?: number
        token_0?: TokenV2
        token_1?: TokenV2
        token0_reserve_quote?: number
        token1_reserve_quote?: number
        volume_timeseries_7d?: UniswapLikeVolumeChartWithQuote[][]
        volume_timeseries_30d?: UniswapLikeVolumeChartWithQuote[][]
        liquidity_timeseries_7d?: UniswapLikeLiquidityChartWithQuote[][]
        liquidity_timeseries_30d?: UniswapLikeLiquidityChartWithQuote[][]
        price_timeseries_7d?: UniswapLikePriceChartWithQuote[][]
        price_timeseries_30d?: UniswapLikePriceChartWithQuote[][]
        [k: string]: unknown
    }
    export interface TokenV2 {
        contract_address?: string
        contract_name?: string
        volume_in_24h?: number
        volume_out_24h?: number
        quote_rate?: number
        reserve?: number
        logo_url?: string
        contract_ticker_symbol?: string
        contract_decimals?: number
        volume_in_7d?: number
        volume_out_7d?: number
        [k: string]: unknown
    }
    export interface UniswapLikeVolumeChartWithQuote {
        dex_name?: string
        chain_id?: string
        dt?: string
        exchange?: string
        sum_amount0in?: number
        sum_amount0out?: number
        sum_amount1in?: number
        sum_amount1out?: number
        volume_quote?: number
        token0_quote_rate?: number
        token1_quote_rate?: number
        swap_count_24?: number
        [k: string]: unknown
    }
    export interface UniswapLikeLiquidityChartWithQuote {
        dex_name?: string
        chain_id?: string
        dt?: string
        exchange?: string
        r0_c?: number
        r1_c?: number
        liquidity_quote?: number
        token0_quote_rate?: number
        token1_quote_rate?: number
        [k: string]: unknown
    }
    export interface UniswapLikePriceChartWithQuote {
        dex_name?: string
        chain_id?: string
        dt?: string
        exchange?: string
        price_of_token0_in_token1?: number
        price_of_token0_in_token1_description?: string
        price_of_token1_in_token0?: number
        price_of_token1_in_token0_description?: string
        quote_currency?: string
        price_of_token0_in_quote_currency?: number
        price_of_token1_in_quote_currency?: number
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id`, `:contract_address` and `:token_id`, return a list of transactions.
     */
    export interface NftTransactionsResponseType {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: NftTransactionsResponse[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface NftTransactionsResponse {
        /**
         * Smart contract decimals.
         */
        contract_decimals?: number
        /**
         * Smart contract name.
         */
        contract_name?: string
        /**
         * Smart contract ticker symbol.
         */
        contract_ticker_symbol?: string
        /**
         * Smart contract address.
         */
        contract_address?: string
        /**
         * The standard interface(s) supported for this token, eg: `ERC-20`.
         */
        supports_erc?: string[][]
        /**
         * Smart contract URL.
         */
        logo_url?: string
        /**
         * One of `cryptocurrency`, `stablecoin`, `nft` or `dust`.
         */
        type?: string
        /**
         * The nft transactions.
         */
        nft_transactions?: BlockTransactionWithLogEvents[][]
        [k: string]: unknown
    }
    /**
     * The nft transactions.
     */
    export interface BlockTransactionWithLogEvents {
        /**
         * The signed time of the block.
         */
        block_signed_at?: string
        /**
         * The height of the block.
         */
        block_height?: number
        /**
         * The transaction hash.
         */
        tx_hash?: string
        /**
         * The transaction offset.
         */
        tx_offset?: number
        /**
         * The transaction status.
         */
        successful?: boolean
        /**
         * The address where the transaction is from.
         */
        from_address?: string
        /**
         * The label of `from` address.
         */
        from_address_label?: string
        /**
         * The address where the transaction is to.
         */
        to_address?: string
        /**
         * The label of `to` address.
         */
        to_address_label?: string
        /**
         * The value attached to this tx.
         */
        value?: number
        /**
         * The value attached in `quote-currency` to this tx.
         */
        value_quote?: number
        /**
         * The gas offered for this tx.
         */
        gas_offered?: number
        /**
         * The gas spent for this tx.
         */
        gas_spent?: number
        /**
         * The gas price at the time of this tx.
         */
        gas_price?: number
        /**
         * The total transaction fees paid for this tx.
         */
        fees_paid?: number
        /**
         * The gas spent in `quote-currency` denomination.
         */
        gas_quote?: number
        /**
         * The gas exchange rate at the time of Tx in `quote_currency`.
         */
        gas_quote_rate?: number
        /**
         * The log events.
         */
        log_events?: LogEventItem[][]
        [k: string]: unknown
    }
    /**
     * The log events.
     */
    export interface LogEventItem {
        /**
         * The signed time of the block.
         */
        block_signed_at?: string
        /**
         * The height of the block.
         */
        block_height?: number
        /**
         * The transaction offset.
         */
        tx_offset?: number
        /**
         * The log offset.
         */
        log_offset?: number
        /**
         * The transaction hash.
         */
        tx_hash?: string
        raw_log_topics?: string[][]
        /**
         * Smart contract decimals.
         */
        sender_contract_decimals?: number
        /**
         * Smart contract name.
         */
        sender_name?: string
        /**
         * Smart contract ticker symbol.
         */
        sender_contract_ticker_symbol?: string
        /**
         * The address of the sender.
         */
        sender_address?: string
        /**
         * The label of the sender address.
         */
        sender_address_label?: string
        /**
         * Smart contract URL.
         */
        sender_logo_url?: string
        /**
         * The log events in raw.
         */
        raw_log_data?: string
        decoded?: DecodedItem
        [k: string]: unknown
    }
    /**
     * The decoded item.
     */
    export interface DecodedItem {
        /**
         * The name of the decoded item.
         */
        name?: string
        /**
         * The signature of the decoded item.
         */
        signature?: string
        /**
         * The parameters of the decoded item.
         */
        params?: DecodedParamItem[][]
        [k: string]: unknown
    }
    /**
     * The parameters of the decoded item.
     */
    export interface DecodedParamItem {
        /**
         * The name of the parameter.
         */
        name?: string
        /**
         * The type of the parameter.
         */
        type?: string
        /**
         * The index of the parameter.
         */
        indexed?: boolean
        /**
         * The decoded value of the parameter.
         */
        decoded?: boolean
        /**
         * The value of the parameter.
         */
        value?: {
            [k: string]: unknown
        }
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id`, `:dexname` and `:address`, return transactions for account address for a specific DEX.
     */
    export interface AccountAddressTransactionsResponse {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: ExchangeTransaction[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface ExchangeTransaction {
        block_signed_at?: string
        tx_hash?: string
        act?: string
        address?: string
        amount_0?: number
        amount_1?: number
        amount_0_in?: number
        amount_1_in?: number
        amount_0_out?: number
        amount_1_out?: number
        to_address?: string
        from_address?: string
        sender_address?: string
        total_quote?: number
        quote_currency?: string
        token_0?: ContractMetadata
        token_1?: ContractMetadata
        token_0_quote_rate?: number
        token_1_quote_rate?: number
        [k: string]: unknown
    }
    export interface ContractMetadata {
        /**
         * Smart contract decimals.
         */
        contract_decimals?: number
        /**
         * Smart contract name.
         */
        contract_name?: string
        /**
         * Smart contract ticker symbol.
         */
        contract_ticker_symbol?: string
        /**
         * Smart contract address.
         */
        contract_address?: string
        /**
         * The standard interface(s) supported for this token, eg: `ERC-20`.
         */
        supports_erc?: string[][]
        /**
         * Smart contract URL.
         */
        logo_url?: string
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id`, `:contract_address` and `:token_id`, fetch and return the external metadata. Both ERC721 as well as ERC1155 standards are supported.
     */
    export interface NFTMetaDataRsponseType {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: WalletBalanceItem[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface WalletBalanceItem {
        /**
         * Smart contract decimals.
         */
        contract_decimals?: number
        /**
         * Smart contract name.
         */
        contract_name?: string
        /**
         * Smart contract ticker symbol.
         */
        contract_ticker_symbol?: string
        /**
         * Smart contract address.
         */
        contract_address?: string
        /**
         * The standard interface(s) supported for this token, eg: `ERC-20`.
         */
        supports_erc?: string[][]
        /**
         * Smart contract URL.
         */
        logo_url?: string
        /**
         * Last transferred date for a wallet
         */
        last_transferred_at?: string
        /**
         * Indicates if a token is the chain's native gas token, eg: ETH on Ethereum.
         */
        native_token?: boolean
        /**
         * One of `cryptocurrency`, `stablecoin`, `nft` or `dust`.
         */
        type?: string
        /**
         * The asset balance. Use `contract_decimals` to scale this balance for display purposes.
         */
        balance?: number
        /**
         * The asset balance 24 hours ago.
         */
        balance_24h?: number
        /**
         * The current spot exchange rate in `quote-currency`.
         */
        quote_rate?: number
        /**
         * The spot exchange rate in `quote-currency` as of 24 hours ago.
         */
        quote_rate_24h?: number
        /**
         * The current balance converted to fiat in `quote-currency`.
         */
        quote?: number
        /**
         * The current balance converted to fiat in `quote-currency` as of 24 hours ago.
         */
        quote_24h?: number
        /**
         * Array of NFTs that are held under this contract.
         */
        nft_data?: INFTMetadata[][]
        [k: string]: unknown
    }
    /**
     * Array of NFTs that are held under this contract.
     */
    export interface INFTMetadata {
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id`, `:dexname` and `:token_address`, return transactions for token address for a specific DEX.
     */
    export interface TokenAddressTransactionsResponse {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: ExchangeTransaction[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface ExchangeTransaction {
        block_signed_at?: string
        tx_hash?: string
        act?: string
        address?: string
        amount_0?: number
        amount_1?: number
        amount_0_in?: number
        amount_1_in?: number
        amount_0_out?: number
        amount_1_out?: number
        to_address?: string
        from_address?: string
        sender_address?: string
        total_quote?: number
        quote_currency?: string
        token_0?: ContractMetadata
        token_1?: ContractMetadata
        token_0_quote_rate?: number
        token_1_quote_rate?: number
        [k: string]: unknown
    }
    export interface ContractMetadata {
        /**
         * Smart contract decimals.
         */
        contract_decimals?: number
        /**
         * Smart contract name.
         */
        contract_name?: string
        /**
         * Smart contract ticker symbol.
         */
        contract_ticker_symbol?: string
        /**
         * Smart contract address.
         */
        contract_address?: string
        /**
         * The standard interface(s) supported for this token, eg: `ERC-20`.
         */
        supports_erc?: string[][]
        /**
         * Smart contract URL.
         */
        logo_url?: string
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id`, `:dexname` and `:address`, return transactions for exchange for a specific DEX.
     */
    export interface ExchangeTransactionsResponse {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: ExchangeTransaction[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface ExchangeTransaction {
        block_signed_at?: string
        tx_hash?: string
        act?: string
        address?: string
        amount_0?: number
        amount_1?: number
        amount_0_in?: number
        amount_1_in?: number
        amount_0_out?: number
        amount_1_out?: number
        to_address?: string
        from_address?: string
        sender_address?: string
        total_quote?: number
        quote_currency?: string
        token_0?: ContractMetadata
        token_1?: ContractMetadata
        token_0_quote_rate?: number
        token_1_quote_rate?: number
        [k: string]: unknown
    }
    export interface ContractMetadata {
        /**
         * Smart contract decimals.
         */
        contract_decimals?: number
        /**
         * Smart contract name.
         */
        contract_name?: string
        /**
         * Smart contract ticker symbol.
         */
        contract_ticker_symbol?: string
        /**
         * Smart contract address.
         */
        contract_address?: string
        /**
         * The standard interface(s) supported for this token, eg: `ERC-20`.
         */
        supports_erc?: string[][]
        /**
         * Smart contract URL.
         */
        logo_url?: string
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id` and `:dexname`, return ecosystem chart data for a specific DEX.
     */
    export interface EcosystemResponse {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: UniswapLikeEcosystemCharts[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface UniswapLikeEcosystemCharts {
        dex_name?: string
        chain_id?: string
        quote_currency?: string
        gas_token_price_quote?: number
        total_swaps_24h?: number
        total_active_pairs_7d?: number
        total_fees_24h?: number
        volume_chart_7d?: UniswapLikeVolumeEcosystemChart[][]
        volume_chart_30d?: UniswapLikeVolumeEcosystemChart[][]
        liquidity_chart_7d?: UniswapLikeLiquidityEcosystemChart[][]
        liquidity_chart_30d?: UniswapLikeLiquidityEcosystemChart[][]
        [k: string]: unknown
    }
    export interface UniswapLikeVolumeEcosystemChart {
        dex_name?: string
        chain_id?: string
        dt?: string
        quote_currency?: string
        volume_quote?: number
        swap_count_24?: number
        [k: string]: unknown
    }
    export interface UniswapLikeLiquidityEcosystemChart {
        dex_name?: string
        chain_id?: string
        dt?: string
        quote_currency?: string
        liquidity_quote?: number
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Given `:chain_id` and `:dexname`, return last synced block height data and latest block height for a specific DEX.
     */
    export interface HealthDataResponse {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: HealthData[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface HealthData {
        synced_block_height?: number
        synced_block_signed_at?: string
        latest_block_height?: number
        latest_block_signed_at?: string
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Returns a list of all chains.
     */
    export interface AllChainInfoResponse {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: GenericChainInfoDisplay[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface GenericChainInfoDisplay {
        /**
         * Name of chain
         */
        name?: string
        /**
         * Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         */
        chain_id?: string
        is_testnet?: boolean
        db_schema_name?: string
        label?: string
        logo_url?: string
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }

    /* eslint-disable */
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Returns a list of all chain statuses.
     */
    export interface ChainStatusResponse {
        /**
         * The updated time.
         */
        updated_at?: string
        items?: GenericChainInfoStatusDisplay[][]
        pagination?: AppliedPagination
        [k: string]: unknown
    }
    export interface GenericChainInfoStatusDisplay {
        /**
         * Name of chain
         */
        name?: string
        /**
         * Chain ID of the Blockchain being queried. Currently supports `1` for Ethereum Mainnet, `137` for Polygon/Matic Mainnet, `80001` for Polygon/Matic Mumbai Testnet, `56` for Binance Smart Chain, `43114` for Avalanche C-Chain Mainnet, `43113` for Fuji C-Chain Testnet, and `250` for Fantom Opera Mainnet.
         */
        chain_id?: string
        is_testnet?: boolean
        logo_url?: string
        /**
         * The height of the block.
         */
        synced_block_height?: number
        synced_blocked_signed_at?: string
        [k: string]: unknown
    }
    export interface AppliedPagination {
        /**
         * `true` if we can  paginate to get more data.
         */
        has_more?: boolean
        /**
         * The specific page being returned.
         */
        page_number?: number
        /**
         * The number of results per page.
         */
        page_size?: number
        /**
         * Total number of entries.
         */
        total_count?: number
        [k: string]: unknown
    }
}

import { Currency } from "./currency"
import { invariant as assert } from "../utils/invariantHelper"

/**
 * A currency is any fungible financial instrument, including all ERC20 tokens
 */
export abstract class BaseCurrency {
    /**
     * The layerzero chain ID on which this currency resides
     */
    public readonly chainId: number
    /**
     * The decimals used in representing currency amounts
     */
    public readonly decimals: number
    /**
     * The symbol of the currency, i.e. a short textual non-unique identifier
     */
    public readonly symbol: string
    /**
     * The name of the currency, i.e. a descriptive textual non-unique identifier
     */
    public readonly name?: string

    /**
     * Constructs an instance of the base class `BaseCurrency`.
     * @param chainId the chain ID on which this currency resides
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor(chainId: number, decimals: number, symbol: string, name?: string) {
        assert(Number.isSafeInteger(chainId), "CHAIN_ID")
        assert(decimals >= 0 && decimals < 255 && Number.isInteger(decimals), "DECIMALS")

        this.chainId = chainId
        this.decimals = decimals
        // workaround
        this.symbol = symbol.toUpperCase()
        this.name = name
    }

    /**
     * Returns whether this currency is functionally equivalent to the other currency
     * @param other the other currency
     */
    public abstract equals(other: Currency): boolean
}

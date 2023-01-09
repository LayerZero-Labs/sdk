import { validateAndParseAddress } from "../utils/validateAndParseAddress"
import { BaseCurrency } from "./baseCurrency"

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends BaseCurrency {
    /**
     * The contract address on the chain on which this token lives
     */
    public readonly address: string

    public constructor(chainId: number, address: string, decimals: number, symbol: string, name?: string) {
        super(chainId, decimals, symbol, name)
        this.address = validateAndParseAddress(address)
    }

    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
     * @param other other token to compare
     */
    public equals(other: BaseCurrency): other is Token {
        if (!(other instanceof Token)) return false
        return this.chainId === other.chainId && this.address === other.address
    }
}

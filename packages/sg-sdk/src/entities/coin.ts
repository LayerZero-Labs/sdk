import { BaseCurrency } from './baseCurrency'
import { Currency } from './currency'

/**
 * Represents an Coin with some metadata.
 */
export class Coin extends BaseCurrency {
    public constructor(chainId: number, decimals: number, symbol: string, name?: string) {
        super(chainId, decimals, symbol, name)
    }
    /**
     * Returns true if the two Coins are equivalent, i.e. have the same chainId
     * @param other other currency to compare
     */
    public equals(other: Currency): boolean {
        if (!(other instanceof Coin)) return false
        return this.chainId === other.chainId
    }
}

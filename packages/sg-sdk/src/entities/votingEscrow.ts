import { CurrencyAmount } from './fractions'
import { invariant as assert } from '../utils/invariantHelper'
import JSBI from 'jsbi'
import { Currency } from './currency'

const WEEK = 604800
const MAXTIME = JSBI.BigInt(94608000)

export class VotingEscrow {
    public readonly token: Currency
    public readonly veToken: Currency

    public constructor(token: Currency, veToken: Currency) {
        this.token = token
        this.veToken = veToken
    }

    /**
     * Estimates the amount of veToken the user would get for staking token
     * @param _amount Amount of token to be staked
     * @param _unlock_time Seconds until unlocked
     * @returns CurrencyAmount of veToken
     */
    public estimateVe(_amount: CurrencyAmount, _unlock_time: number): CurrencyAmount {
        assert(_amount.currency.equals(this.token), 'TOKEN')
        let unlock_time = _unlock_time
        if (_unlock_time < 0) {
            unlock_time = 0
        }
        const ve_amount = _amount.divide(JSBI.BigInt(MAXTIME)).multiply(JSBI.BigInt(unlock_time))
        return CurrencyAmount.fromFractionalAmount(this.veToken, ve_amount.numerator, ve_amount.denominator)
    }

    /**
     * Convenience method to calculate veToken given current blocktime
     * @param _amount Amount of token to be staked
     * @param _current_ts Timestamp of current block time
     * @param _unlock_ts Timestamp of when token will be unlocked
     * @returns CurrencyAmount of veToken
     */
    public estimateVeWithTs(_amount: CurrencyAmount, _current_ts: number, _unlock_ts: number): CurrencyAmount {
        const diff = _unlock_ts - _current_ts
        return this.estimateVe(_amount, diff)
    }

    /**
     * The VotingEscrow contract's create_lock rounds the unlock time down to weeks.
     * This method does the same given an expected unlock time.
     * @param _unlock_ts timestamp of expected unlock time
     * @returns timestamp of rounded unlock time
     */
    public getUnlockTime(_unlock_ts: number): number {
        return Math.floor(_unlock_ts / WEEK) * WEEK
    }
}

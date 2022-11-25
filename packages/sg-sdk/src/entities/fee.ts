import { CurrencyAmount, Fraction } from './fractions'
import { invariant as assert } from '../utils/invariantHelper'
import JSBI from 'jsbi'
import { Currency } from './currency'

export interface FeeObj {
    eqFee: CurrencyAmount
    eqReward: CurrencyAmount
    lpFee: CurrencyAmount
    protocolFee: CurrencyAmount
}

interface FeeLibrary {
    version: string // `${number}.${number}.${number}`
}
//StargateFeeLibraryV01
export interface FeeLibraryV01 extends FeeLibrary {
    version: '1.0.0' // `1.${number}.${number}`
    lpFeeRate: Fraction
    protocolFeeRate: Fraction
    eqFeeRate: Fraction
    eqRewardRate: Fraction
}

//StargateFeeLibraryV02
export interface FeeLibraryV02 extends FeeLibrary {
    version: '2.0.0' // `2.${number}.${number}`
    delta1Rate: Fraction
    delta2Rate: Fraction
    lambda1Rate: Fraction
    lambda2Rate: Fraction
    lpFeeRate: Fraction
    protocolFeeRate: Fraction
    protocolSubsidyRate: Fraction
}

//StargateFeeLibraryV03
export interface FeeLibraryV03 extends FeeLibrary {
    version: '3.0.0' // `3.${number}.${number}`
    delta1Rate: Fraction
    delta2Rate: Fraction
    lambda1Rate: Fraction
    lambda2Rate: Fraction
    lpFeeRate: Fraction
    protocolFeeRate: Fraction
    protocolSubsidyRate: Fraction
}

export const FeeLibraryV02Defaults: FeeLibraryV02 = {
    version: '2.0.0',
    delta1Rate: new Fraction(60, 100),
    delta2Rate: new Fraction(5, 100),
    lambda1Rate: new Fraction(40, 10000),
    lambda2Rate: new Fraction(9960, 10000),
    lpFeeRate: new Fraction(45, 100000),
    protocolFeeRate: new Fraction(15, 100000),
    protocolSubsidyRate: new Fraction(3, 100000),
}

export const FeeLibraryV03Defaults: FeeLibraryV03 = {
    version: '3.0.0',
    delta1Rate: new Fraction(60, 100),
    delta2Rate: new Fraction(5, 100),
    lambda1Rate: new Fraction(40, 10000),
    lambda2Rate: new Fraction(9960, 10000),
    lpFeeRate: new Fraction(10, 100000),
    protocolFeeRate: new Fraction(50, 100000),
    protocolSubsidyRate: new Fraction(3, 100000),
}

abstract class Fee {
    version: string
    fee: FeeLibraryV01 | FeeLibraryV02 | FeeLibraryV03
    liquidityToken: Currency
    token: Currency

    public constructor(_fee: FeeLibraryV01 | FeeLibraryV02 | FeeLibraryV03, _token: Currency, _lpToken: Currency) {
        this.version = _fee.version
        this.fee = _fee
        this.token = _token
        this.liquidityToken = _lpToken
    }

    amountSDtoLD(amountSD: CurrencyAmount): CurrencyAmount {
        return CurrencyAmount.fromRawAmount(
            this.token,
            amountSD.multiply(JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(this.token.decimals))).divide(amountSD.decimalScale).quotient
        )
    }
}

export class FeeV01 extends Fee {
    public getFees(_amount: CurrencyAmount): FeeObj {
        const fee = <FeeLibraryV01>this.fee
        return {
            eqFee: _amount.multiply(fee.eqFeeRate),
            eqReward: _amount.multiply(fee.eqRewardRate),
            lpFee: _amount.multiply(fee.lpFeeRate),
            protocolFee: _amount.multiply(fee.protocolFeeRate),
        }
    }
}

const ZERO = new Fraction(0)
export class FeeV02 extends Fee {
    public getFees(
        _idealBalance: CurrencyAmount, // lpToken
        _beforeBalance: CurrencyAmount, // lpToken
        _poolTokenBalance: CurrencyAmount, //token (token.balanceOf(address(pool))
        _poolTotalLiquidity: CurrencyAmount, //lpToken
        _eqFeePool: CurrencyAmount, //lpToken
        _amount: CurrencyAmount //token
    ): FeeObj {
        if (!_idealBalance.currency.equals(this.liquidityToken)) console.log(_idealBalance.currency, this.liquidityToken)

        assert(_idealBalance.currency.equals(this.liquidityToken), 'LIQUIDITY')
        assert(_beforeBalance.currency.equals(this.liquidityToken), 'LIQUIDITY')
        assert(_poolTokenBalance.currency.equals(this.token), 'TOKEN')
        assert(_poolTotalLiquidity.currency.equals(this.liquidityToken), 'LIQUIDITY')
        assert(_eqFeePool.currency.equals(this.liquidityToken), 'LIQUIDITY')
        assert(_amount.currency.equals(this.token), 'TOKEN')

        const idealBalance = this.amountSDtoLD(_idealBalance)
        const beforeBalance = this.amountSDtoLD(_beforeBalance)
        const poolTotalLiquidity = this.amountSDtoLD(_poolTotalLiquidity)
        const eqFeePool = this.amountSDtoLD(_eqFeePool)
        // console.log('beforeBalance', beforeBalance, _amount)
        assert(beforeBalance.greaterThan(_amount) || beforeBalance.equalTo(_amount), 'not enough balance')

        const fee = <FeeLibraryV02>this.fee
        let protocolFee = _amount.multiply(fee.protocolFeeRate)

        // calculate the equilibrium fee
        let { eqFee, protocolSubsidy } = getEquilibriumFee(idealBalance, beforeBalance, _amount, fee)
        protocolFee = protocolFee.subtract(protocolSubsidy)

        // calculate the equilibrium reward
        let eqReward = getEquilibriumReward(_poolTokenBalance, poolTotalLiquidity, eqFeePool, _amount)

        return {
            eqFee,
            eqReward,
            lpFee: _amount.multiply(fee.lpFeeRate),
            protocolFee,
        }
    }
}

export class FeeV03 extends Fee {
    public getFees(
        _idealBalance: CurrencyAmount, // lpToken
        _beforeBalance: CurrencyAmount, // lpToken
        _poolTokenBalance: CurrencyAmount, //token (token.balanceOf(address(pool))
        _poolTotalLiquidity: CurrencyAmount, //lpToken
        _eqFeePool: CurrencyAmount, //lpToken
        _amount: CurrencyAmount //token
    ): FeeObj {
        if (!_idealBalance.currency.equals(this.liquidityToken)) console.log(_idealBalance.currency, this.liquidityToken)

        assert(_idealBalance.currency.equals(this.liquidityToken), 'LIQUIDITY')
        assert(_beforeBalance.currency.equals(this.liquidityToken), 'LIQUIDITY')
        assert(_poolTokenBalance.currency.equals(this.token), 'TOKEN')
        assert(_poolTotalLiquidity.currency.equals(this.liquidityToken), 'LIQUIDITY')
        assert(_eqFeePool.currency.equals(this.liquidityToken), 'LIQUIDITY')
        assert(_amount.currency.equals(this.token), 'TOKEN')

        const idealBalance = this.amountSDtoLD(_idealBalance)
        const beforeBalance = this.amountSDtoLD(_beforeBalance)
        const poolTotalLiquidity = this.amountSDtoLD(_poolTotalLiquidity)
        const eqFeePool = this.amountSDtoLD(_eqFeePool)
        // console.log('beforeBalance', beforeBalance, _amount)
        assert(beforeBalance.greaterThan(_amount) || beforeBalance.equalTo(_amount), 'not enough balance')

        const fee = <FeeLibraryV03>this.fee
        let protocolFee = _amount.multiply(fee.protocolFeeRate)

        // calculate the equilibrium fee
        let { eqFee, protocolSubsidy } = getEquilibriumFee(idealBalance, beforeBalance, _amount, fee)
        protocolFee = protocolFee.subtract(protocolSubsidy)

        // calculate the equilibrium reward
        let eqReward = getEquilibriumReward(_poolTokenBalance, poolTotalLiquidity, eqFeePool, _amount)

        return {
            eqFee,
            eqReward,
            lpFee: _amount.multiply(fee.lpFeeRate),
            protocolFee,
        }
    }
}

function getEquilibriumReward(
    _poolTokenBalance: CurrencyAmount,
    _poolTotalLiquidity: CurrencyAmount,
    _eqFeePool: CurrencyAmount,
    _amount: CurrencyAmount
): CurrencyAmount {
    if (_poolTotalLiquidity.greaterThan(_poolTokenBalance)) {
        // in deficit
        const poolDeficit = _poolTotalLiquidity.subtract(_poolTokenBalance)
        // reward capped at rewardPoolSize
        let eqRewards = _eqFeePool.multiply(_amount).divide(poolDeficit)
        if (eqRewards.greaterThan(_eqFeePool)) {
            eqRewards = _eqFeePool
        }
        return eqRewards
    }
    return CurrencyAmount.fromRawAmount(_amount.currency, JSBI.BigInt(0))
}

function getEquilibriumFee(
    _idealBalance: CurrencyAmount,
    _beforeBalance: CurrencyAmount,
    _amount: CurrencyAmount,
    _fee: FeeLibraryV02 | FeeLibraryV03
): { eqFee: CurrencyAmount; protocolSubsidy: CurrencyAmount } {
    const afterBalance = _beforeBalance.subtract(_amount)

    let safeZoneMaxCurrency = _idealBalance.multiply(_fee.delta1Rate)
    const safeZoneMax = new Fraction(safeZoneMaxCurrency.numerator, safeZoneMaxCurrency.denominator)
    const safeZoneMinCurrency = _idealBalance.multiply(_fee.delta2Rate)
    const safeZoneMin = new Fraction(safeZoneMinCurrency.numerator, safeZoneMinCurrency.denominator)
    const proxyBeforeBalanceCurrency = _beforeBalance.lessThan(safeZoneMax) ? _beforeBalance : safeZoneMax
    const proxyBeforeBalance = new Fraction(proxyBeforeBalanceCurrency.numerator, proxyBeforeBalanceCurrency.denominator)

    let eqFee = CurrencyAmount.fromRawAmount(_amount.currency, JSBI.BigInt(0))
    let protocolSubsidy = CurrencyAmount.fromRawAmount(_amount.currency, JSBI.BigInt(0))

    if (afterBalance.greaterThan(safeZoneMax) || afterBalance.equalTo(safeZoneMax)) {
        // no fee zone, protocol subsidezes it
        eqFee = _amount.multiply(_fee.protocolSubsidyRate)
        protocolSubsidy = eqFee
    } else if (afterBalance.greaterThan(safeZoneMin) || afterBalance.equalTo(safeZoneMin)) {
        // safe zone
        eqFee = getTrapezoidArea(_amount.currency, _fee.lambda1Rate, ZERO, safeZoneMax, safeZoneMin, proxyBeforeBalance, afterBalance)
    } else {
        // danger zone
        if (_beforeBalance.greaterThan(safeZoneMin) || _beforeBalance.equalTo(safeZoneMin)) {
            // across 2 or 3 zones
            // part 1
            eqFee = eqFee.add(
                getTrapezoidArea(_amount.currency, _fee.lambda1Rate, ZERO, safeZoneMax, safeZoneMin, proxyBeforeBalance, safeZoneMin)
            )
            // part 2
            eqFee = eqFee.add(
                getTrapezoidArea(_amount.currency, _fee.lambda2Rate, _fee.lambda1Rate, safeZoneMin, ZERO, safeZoneMin, afterBalance)
            )
        } else {
            // only in danger zone
            // part2 only
            eqFee = eqFee.add(
                getTrapezoidArea(_amount.currency, _fee.lambda2Rate, _fee.lambda1Rate, safeZoneMin, ZERO, _beforeBalance, afterBalance)
            )
        }
    }

    return {
        eqFee,
        protocolSubsidy,
    }
}

function getTrapezoidArea(
    _token: Currency,
    _lambda: Fraction,
    _yOffset: Fraction,
    _xUpperBound: Fraction,
    _xLowerBound: Fraction,
    _xStart: Fraction,
    _xEnd: Fraction
): CurrencyAmount {
    assert(_xEnd.greaterThan(_xLowerBound) || _xEnd.equalTo(_xLowerBound), 'out of bounds')
    assert(_xStart.lessThan(_xUpperBound) || _xStart.equalTo(_xUpperBound), 'out of bounds')

    const xBoundWidth = _xUpperBound.subtract(_xLowerBound)
    const yStart = _xUpperBound.subtract(_xStart).multiply(_lambda).divide(xBoundWidth).add(_yOffset)
    const yEnd = _xUpperBound.subtract(_xEnd).multiply(_lambda).divide(xBoundWidth).add(_yOffset)
    const deltaX = _xStart.subtract(_xEnd)
    const area = yStart.add(yEnd).multiply(deltaX).divide(2)

    return CurrencyAmount.fromFractionalAmount(_token, area.numerator, area.denominator)
}

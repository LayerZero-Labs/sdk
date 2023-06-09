import JSBI from "jsbi"
import { ERC20_APPROVE, ERC20_TRANSFER, REVERT_REDEEM_LOCAL } from "../constants/gasEstimate"
import { ChainId } from "@layerzerolabs/lz-sdk"
import { CurrencyAmount, Fraction, Percent } from "@layerzerolabs/ui-core"

export interface DstPrice {
    dstGasPriceInWei: CurrencyAmount
    dstPriceRatio: Fraction
}

export function estimateDstNativeAmtForRedeemLocal(
    _dstChainId: ChainId,
    _dstQuotedLayerZeroFee: CurrencyAmount, //in dst currency, from: dst Router.sol
    _srcRelayerDstConfig: DstPrice // from: src Relayer.sol
): CurrencyAmount {
    const dstCost = _srcRelayerDstConfig.dstGasPriceInWei.multiply(JSBI.BigInt(REVERT_REDEEM_LOCAL[_dstChainId]!))
    const totalCost = _dstQuotedLayerZeroFee.add(dstCost).divide(10e10)
    const bufferPerc = new Percent(120)
    return totalCost.multiply(bufferPerc)
}

export function estimateDstNativeAmtForERC20Transfer(
    _dstChainId: ChainId,
    _srcRelayerDstPrice: DstPrice //from: src Relayer.sol
): CurrencyAmount {
    return _srcRelayerDstPrice.dstGasPriceInWei.multiply(ERC20_TRANSFER[_dstChainId]!)
}

export function estimateDstNativeAmtForApprove(
    _dstChainId: ChainId,
    _srcRelayerDstPrice: DstPrice //from: src Relayer.sol
): CurrencyAmount {
    return _srcRelayerDstPrice.dstGasPriceInWei.multiply(ERC20_APPROVE[_dstChainId]!)
}

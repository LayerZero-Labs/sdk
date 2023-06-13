import { VotingEscrow } from "./votingEscrow"
import { STG, VESTG } from "../constants/token"
import { ChainId } from "@layerzerolabs/lz-sdk"
import { describe, it, expect } from "vitest"
import { CurrencyAmount } from "@layerzerolabs/ui-core"

describe("VotingEscrow", () => {
    const WEEK = 604800
    const MAXTIME = 94608000
    const chainId = ChainId.ETHEREUM
    const stargateToken = STG[chainId]
    const veToken = VESTG[chainId]
    const votingEscrow = new VotingEscrow(stargateToken, veToken)

    const unlockInSec = WEEK * 2
    const stgAmount = CurrencyAmount.fromRawAmount(stargateToken, 10000e18)
    const result = votingEscrow.estimateVe(stgAmount, unlockInSec)

    describe("estimateVe", () => {
        it("Should return VESTG given STG for currency", () => {
            expect(result.currency.symbol === "VESTG")
            expect(result.currency.name === "veStargateToken")
        })

        it("Should not return negative if unlock time is negative", () => {
            const amount = BigInt(stgAmount.toFixed().split(".")[0])
            const amountPerSec = amount / BigInt(MAXTIME)
            const expectedAmount = amountPerSec * BigInt(0)
            expect(votingEscrow.estimateVe(stgAmount, -100000).equalTo(expectedAmount))
        })

        it("Should return around the expected value", () => {
            const amount = BigInt(stgAmount.toFixed().split(".")[0])
            const amountPerSec = amount / BigInt(MAXTIME)
            const expectedAmount = amountPerSec * BigInt(unlockInSec)
            expect(votingEscrow.estimateVe(stgAmount, unlockInSec).equalTo(expectedAmount))
        })

        it("Should should properly estimate", () => {
            const rawAmount = CurrencyAmount.fromRawAmount(stargateToken, 160000e18)
            const d = 86400
            const m = d * 30
            const veAmount = votingEscrow.estimateVe(rawAmount, m * 36)
            console.log(veAmount.toExact())
        })
    })

    describe("estimateVeWithTs", () => {
        it("Should return same values as estimateVe given a timestamp", () => {
            const current = +new Date()
            const unlocked = current + WEEK
            const resultWithTs = votingEscrow.estimateVeWithTs(stgAmount, current, unlocked)
            const resultWithSec = votingEscrow.estimateVe(stgAmount, unlockInSec)
            expect(resultWithSec.currency.symbol === resultWithTs.currency.symbol)
            expect(resultWithSec.currency.name === resultWithTs.currency.name)
            expect(resultWithSec.toExact() === resultWithTs.toExact())
        })
    })

    describe("getUnlockTime", () => {
        it("Should return a rounded unlock time", () => {
            // beginning of a UTC week
            expect(votingEscrow.getUnlockTime(1645660800)).toEqual(1645660800)
            expect(votingEscrow.getUnlockTime(1645660800 + 1)).toEqual(1645660800)
            expect(votingEscrow.getUnlockTime(1645660800 + WEEK - 1)).toEqual(1645660800)
            expect(votingEscrow.getUnlockTime(1645660800 + WEEK)).toEqual(1646265600)
        })
    })
})

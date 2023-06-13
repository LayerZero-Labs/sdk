// exports for external consumption
export type BigintIsh = bigint | string | number

export enum Rounding {
    ROUND_DOWN,
    ROUND_HALF_UP,
    ROUND_UP,
}

export const MaxUint256 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
export * from "./constants/addresses"
export * from "./constants/token"
export * from "./constants/pool"

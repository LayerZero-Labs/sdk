export function invariant<T>(condition: T | false | undefined | null | '' | 0, message: string): asserts condition is T {
    if (!condition) throw new Error(message)
}

export type Nullable<T> = T | null | undefined

export function isNotNaN(value: any): boolean {
  return !isNaN(value)
}

export function isDef<T>(value: Nullable<T>): value is T {
  return value !== null && value !== undefined
}

export function isDefAndNotEmpty<T extends ArrayLike<any>>(
  value: Nullable<T>
): value is T {
  return !!(value && value.length)
}

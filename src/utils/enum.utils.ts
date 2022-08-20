export function getStrEnumValues<T>(obj: object): T[] {
  const result = []
  for (const key in obj) {
    result.push((obj as { [key: string]: T })[key] as T)
  }
  return result
}

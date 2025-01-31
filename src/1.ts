/**
 * Finds duplicate items in an array
 * @param arr Any array of elements
 * @returns Array containing only the duplicate elements
 */
export function findDuplicates<T>(arr: T[]): T[] {
  const seen = new Set<T>()
  const duplicates = new Set<T>()

  arr.forEach((item) => {
    if (seen.has(item)) {
      duplicates.add(item)
    }
    seen.add(item)
  })

  return Array.from(duplicates)
}

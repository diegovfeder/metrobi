/**
 * Finds duplicate items in an array
 * @param arr Any array of elements
 * @returns Array containing only the duplicate elements
 */
export function findDuplicates<T>(arr: T[]): T[] {
  const frequency = new Map<T, number>()
  const duplicates: T[] = []

  for (const item of arr) {
    const count = (frequency.get(item) || 0) + 1
    frequency.set(item, count)

    if (count === 2) {
      duplicates.push(item)
    }
  }

  return duplicates
}

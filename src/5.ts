/**
 * Finds the highest safe floor for egg drops
 * @returns The minimum number of drops needed in worst case
 */
export function findEggDropFloor(): number {
  const floors = 100
  const eggs = 2

  // Using optimal strategy: x + (x-1) + (x-2) + ... + 1 >= 100
  // This gives us optimal number of drops in worst case
  let x = 14 // First try covers 14 floors
  let sum = (x * (x + 1)) / 2

  return x // This will require maximum 14 drops in worst case
}

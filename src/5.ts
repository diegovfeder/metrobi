/*
 * @param {number} [floors=100] - The total number of floors to test (default: 100).
 * @returns {number} The minimal number of drops required in the worst-case scenario.
 *
 * @example
 * // Calculate drops for 100 floors
 * const drops = findEggDropFloor();
 * // Returns: 14
 */
export function findEggDropFloor(floors: number = 100): number {
  let drops = 0
  // Increment drops until the triangular number exceeds total floors
  while ((drops * (drops + 1)) / 2 < floors) {
    drops++
  }
  return drops
}

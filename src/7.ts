interface Carrot {
  kg: number
  price: number
}

/**
 * Solves unbounded knapsack problem for carrots
 * @param carrotTypes Array of carrot types with weights and prices
 * @param capacity Maximum capacity of the bag
 * @returns Maximum possible value
 * @throws Error if inputs are invalid
 */
export function getMaxValue(carrotTypes: Carrot[], capacity: number): number {
  // Input validation
  if (!Array.isArray(carrotTypes)) {
    throw new Error('Carrot types must be an array')
  }

  if (typeof capacity !== 'number' || isNaN(capacity)) {
    throw new Error('Capacity must be a valid number')
  }

  // Validate carrot types
  for (const carrot of carrotTypes) {
    if (typeof carrot.kg !== 'number' || typeof carrot.price !== 'number') {
      throw new Error('Invalid carrot type: weight and price must be numbers')
    }
    if (carrot.kg <= 0 || carrot.price < 0) {
      throw new Error(
        'Invalid carrot type: weight must be positive and price must be non-negative'
      )
    }
  }

  // Early return for edge cases
  if (carrotTypes.length === 0 || capacity <= 0) {
    return 0
  }

  const dp = new Array(capacity + 1).fill(0)

  for (let weight = 1; weight <= capacity; weight++) {
    for (const carrot of carrotTypes) {
      if (carrot.kg <= weight) {
        dp[weight] = Math.max(dp[weight], dp[weight - carrot.kg] + carrot.price)
      }
    }
  }

  return dp[capacity]
}

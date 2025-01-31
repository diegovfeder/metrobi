interface Carrot {
  kg: number
  price: number
}

/**
 * Solves unbounded knapsack problem for carrots
 * @param carrotTypes Array of carrot types with weights and prices
 * @param capacity Maximum capacity of the bag
 * @returns Maximum possible value
 */
export function getMaxValue(carrotTypes: Carrot[], capacity: number): number {
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

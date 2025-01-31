/**
 * Metrobi Interview Challenge Runner
 *
 * This file serves as the main entry point for running all challenge solutions.
 * To run a specific challenge, uncomment its execution line below.
 *
 * Running the challenges:
 * - For questions 1, 2, 4, 5, 7: Simply `bun start`
 * - For questions 3, 6 (React): Run `bun react`
 *
 * @example
 * bun run index.ts
 */

import { findDuplicates } from './src/1'
import { printWithDelay } from './src/2'
import { validateBrackets } from './src/4'
import { findEggDropFloor } from './src/5'
import { getMaxValue } from './src/7'

// Example usage for each solution
async function runExamples() {
  // Question 1
  console.log('Question 1 - Find Duplicates:')
  console.log(findDuplicates([1, 2, 3, 2, 4, 5, 5]))

  // Question 2
  console.log('\nQuestion 2 - Delayed Output:')
  await printWithDelay(['a', 'b', 'c', 'd'])

  // Question 4
  console.log('\nQuestion 4 - Validate Brackets:')
  console.log('"{[]}" ->', validateBrackets('{[]}'))
  console.log('{(])} ->', validateBrackets('{(])}'))

  // Question 5
  console.log('\nQuestion 5 - Egg Drop Problem:')
  console.log('Minimum drops needed:', findEggDropFloor())

  // Question 7
  console.log('\nQuestion 7 - Knapsack Problem:')
  const carrotTypes = [
    { kg: 5, price: 100 },
    { kg: 7, price: 150 },
    { kg: 3, price: 70 },
  ]
  const capacity = 36
  console.log('Maximum value:', getMaxValue(carrotTypes, capacity))
}

// Run the examples
runExamples().catch(console.error)

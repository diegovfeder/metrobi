// eggDrop.test.ts
import { expect, test } from 'vitest'
import { findEggDropFloor } from '../5' // Assuming the function is in eggDrop.ts

test('default 100 floors', () => {
  expect(findEggDropFloor()).toBe(14)
})

test('handles edge cases', () => {
  // Zero floors requires no drops
  expect(findEggDropFloor(0)).toBe(0)

  // Single floor only needs one test
  expect(findEggDropFloor(1)).toBe(1)

  // Minimal case with two floors
  expect(findEggDropFloor(2)).toBe(2)
})

test('exact triangular numbers', () => {
  // 5 drops covers 15 floors (5×6/2=15)
  expect(findEggDropFloor(15)).toBe(5)

  // 14 drops covers 105 floors (14×15/2=105)
  expect(findEggDropFloor(105)).toBe(14)
})

test('non-exact triangular numbers', () => {
  // Between triangular numbers 10 (55) and 11 (66)
  expect(findEggDropFloor(60)).toBe(11)

  // Just below triangular number threshold
  expect(findEggDropFloor(14)).toBe(5) // 5×6/2=15 covers 14
  expect(findEggDropFloor(54)).toBe(10) // 10×11/2=55 covers 54
})

test('large floor numbers', () => {
  expect(findEggDropFloor(500)).toBe(32) // 32×33/2=528 ≥500
  expect(findEggDropFloor(1000)).toBe(45) // 45×46/2=1035 ≥1000
})

test('decimal floor values', () => {
  // Handles fractional floors by ceiling effect
  expect(findEggDropFloor(14.9)).toBe(5) // Same as 14 floors
  expect(findEggDropFloor(100.1)).toBe(14) // Same as 101 floors
})

test('negative floors', () => {
  // Handled as zero valid floors
  expect(findEggDropFloor(-10)).toBe(0)
})

test('minimum test cases', () => {
  const testCases = [
    [3, 2], // 2 drops cover 3 floors
    [6, 3], // 3 drops cover 6 floors (3×4/2=6)
    [10, 4], // 4 drops cover 10 floors (4×5/2=10)
    [21, 6], // 6 drops cover 21 floors (6×7/2=21)
    [36, 8], // 8 drops cover 36 floors (8×9/2=36)
  ]

  for (const [floors, expected] of testCases) {
    expect(findEggDropFloor(floors)).toBe(expected)
  }
})

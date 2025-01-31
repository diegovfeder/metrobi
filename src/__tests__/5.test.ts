import { describe, it, expect } from 'vitest'
import { findEggDropFloor } from '../5'

describe('findEggDropFloor', () => {
  it('should return a number less than or equal to 14', () => {
    const result = findEggDropFloor()
    expect(result).toBeLessThanOrEqual(14)
    expect(typeof result).toBe('number')
  })

  it('should solve the problem optimally', () => {
    const result = findEggDropFloor()
    // The optimal solution requires 14 drops in worst case
    expect(result).toBe(14)
  })
})

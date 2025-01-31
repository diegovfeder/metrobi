import { describe, it, expect } from 'vitest'
import { getMaxValue } from '../7'

describe('getMaxValue', () => {
  it('should solve the example case correctly', () => {
    const carrotTypes = [
      { kg: 5, price: 100 },
      { kg: 7, price: 150 },
      { kg: 3, price: 70 },
    ]
    const capacity = 36
    expect(getMaxValue(carrotTypes, capacity)).toBe(840)
  })

  it('should handle empty carrot types', () => {
    expect(getMaxValue([], 10)).toBe(0)
  })

  it('should handle zero capacity', () => {
    const carrotTypes = [{ kg: 5, price: 100 }]
    expect(getMaxValue(carrotTypes, 0)).toBe(0)
  })
})

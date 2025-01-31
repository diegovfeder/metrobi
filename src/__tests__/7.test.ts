import { describe, it, expect } from 'vitest'
import { getMaxValue } from '../7'

describe('getMaxValue', () => {
  // Basic functionality
  it('solves the example case correctly', () => {
    const carrotTypes = [
      { kg: 5, price: 100 },
      { kg: 7, price: 150 },
      { kg: 3, price: 70 },
    ]
    const capacity = 36
    expect(getMaxValue(carrotTypes, capacity)).toBe(840)
  })

  // Edge Cases
  it('handles empty carrot types', () => {
    expect(getMaxValue([], 10)).toBe(0)
  })

  it('handles zero capacity', () => {
    const carrotTypes = [{ kg: 5, price: 100 }]
    expect(getMaxValue(carrotTypes, 0)).toBe(0)
  })

  it('handles capacity smaller than smallest carrot', () => {
    const carrotTypes = [
      { kg: 5, price: 100 },
      { kg: 7, price: 150 },
    ]
    expect(getMaxValue(carrotTypes, 4)).toBe(0)
  })

  // Optimization Cases
  it('chooses optimal combination with single type', () => {
    const carrotTypes = [{ kg: 5, price: 100 }]
    expect(getMaxValue(carrotTypes, 15)).toBe(300) // Should choose 3 carrots
  })

  it('handles cases where larger weight has better value', () => {
    const carrotTypes = [
      { kg: 1, price: 10 },
      { kg: 4, price: 50 }, // Better value per kg
    ]
    expect(getMaxValue(carrotTypes, 8)).toBe(100) // Should choose two 4kg carrots
  })

  it('handles cases where smaller weight has better value', () => {
    const carrotTypes = [
      { kg: 1, price: 15 }, // Better value per kg
      { kg: 4, price: 50 },
    ]
    expect(getMaxValue(carrotTypes, 4)).toBe(60) // Should choose four 1kg carrots
  })

  // Complex Cases
  it('handles multiple optimal combinations', () => {
    const carrotTypes = [
      { kg: 2, price: 40 },
      { kg: 4, price: 80 }, // Same value per kg
    ]
    expect(getMaxValue(carrotTypes, 10)).toBe(200)
  })

  it('handles large numbers', () => {
    const carrotTypes = [
      { kg: 1000, price: 1000000 },
      { kg: 1, price: 1000 },
    ]
    expect(getMaxValue(carrotTypes, 1000000)).toBe(1000000000)
  })

  // Performance Tests
  it('handles many carrot types efficiently', () => {
    const carrotTypes = Array.from({ length: 100 }, (_, i) => ({
      kg: i + 1,
      price: (i + 1) * 100,
    }))
    const result = getMaxValue(carrotTypes, 1000)
    expect(result).toBeGreaterThan(0)
    expect(typeof result).toBe('number')
  })

  // Value per Weight Ratio Tests
  it('optimizes based on value per weight ratio', () => {
    const carrotTypes = [
      { kg: 3, price: 30 }, // 10 per kg
      { kg: 2, price: 25 }, // 12.5 per kg
      { kg: 4, price: 35 }, // 8.75 per kg
    ]
    expect(getMaxValue(carrotTypes, 10)).toBe(125) // Should prefer the 2kg carrots
  })

  // Boundary Tests
  it('handles boundary values', () => {
    const carrotTypes = [
      { kg: Number.MAX_SAFE_INTEGER, price: Number.MAX_SAFE_INTEGER },
    ]
    expect(getMaxValue(carrotTypes, 1)).toBe(0)
  })

  it('handles fractional results correctly', () => {
    const carrotTypes = [
      { kg: 3, price: 10 },
      { kg: 2, price: 7 },
    ]
    expect(getMaxValue(carrotTypes, 5)).toBe(17) // Should handle division correctly
  })

  // Error Cases
  it('handles negative values gracefully', () => {
    const carrotTypes = [
      { kg: -1, price: 100 },
      { kg: 5, price: -100 },
    ]
    expect(() => getMaxValue(carrotTypes, 10)).toThrow()
  })

  it('validates input types', () => {
    expect(() => getMaxValue(null as any, 10)).toThrow()
    expect(() => getMaxValue(undefined as any, 10)).toThrow()
    expect(() => getMaxValue([] as any, 'invalid' as any)).toThrow()
  })
})

import { describe, it, expect } from 'vitest'
import { validateBrackets } from '../4'

describe('validateBrackets', () => {
  it('should validate properly nested brackets', () => {
    expect(validateBrackets('{[]}')).toBe(true)
    expect(validateBrackets('{{[]}}')).toBe(true)
    expect(validateBrackets('{()}')).toBe(true)
  })

  it('should invalidate improperly nested brackets', () => {
    expect(validateBrackets('{(])}')).toBe(false)
    expect(validateBrackets('{([)]}')).toBe(false)
    expect(validateBrackets('((())')).toBe(false)
  })

  it('should handle empty string', () => {
    expect(validateBrackets('')).toBe(true)
  })
})

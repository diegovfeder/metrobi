import { describe, it, expect } from 'vitest'
import { validateBrackets } from '../4'

describe('validateBrackets', () => {
  it('validates simple nested brackets', () => {
    expect(validateBrackets('{[]}')).toBe(true)
    expect(validateBrackets('{{[]}}')).toBe(true)
    expect(validateBrackets('{()}')).toBe(true)
    expect(validateBrackets('(()())')).toBe(true)
  })

  it('invalidates improperly nested brackets', () => {
    expect(validateBrackets('{(])}')).toBe(false)
    expect(validateBrackets('{([)]}')).toBe(false)
    expect(validateBrackets('((())')).toBe(false)
  })

  it('handles empty string', () => {
    expect(validateBrackets('')).toBe(true)
  })

  it('handles single brackets', () => {
    expect(validateBrackets('{')).toBe(false)
    expect(validateBrackets('}')).toBe(false)
    expect(validateBrackets('[')).toBe(false)
    expect(validateBrackets(']')).toBe(false)
    expect(validateBrackets('(')).toBe(false)
    expect(validateBrackets(')')).toBe(false)
  })

  it('handles incorrect closing order', () => {
    expect(validateBrackets('{[}]')).toBe(false)
    expect(validateBrackets('({)}')).toBe(false)
    expect(validateBrackets('[{]}')).toBe(false)
  })

  it('handles multiple incorrect brackets', () => {
    expect(validateBrackets('}{')).toBe(false)
    expect(validateBrackets(')()')).toBe(false)
    expect(validateBrackets('][[]')).toBe(false)
  })

  it('handles complex nested structures', () => {
    expect(validateBrackets('{[()()]}')).toBe(true)
    expect(validateBrackets('{{[[(())]]}}}')).toBe(false)
    expect(validateBrackets('{[()]}{[()]}')).toBe(true)
  })

  it('handles mixed with non-bracket characters', () => {
    expect(validateBrackets('a{b[c]d}e')).toBe(true)
    expect(validateBrackets('1(2[3)4]5')).toBe(false)
    expect(validateBrackets('x{y}z[w]')).toBe(true)
  })

  it('handles large inputs', () => {
    const largeValid = '({[]})'.repeat(1000)
    const largeInvalid = '({[]}){'.repeat(1000)
    expect(validateBrackets(largeValid)).toBe(true)
    expect(validateBrackets(largeInvalid)).toBe(false)
  })

  it('handles special cases', () => {
    expect(validateBrackets('[({})]')).toBe(true)
    expect(validateBrackets('[({)}]')).toBe(false)
    expect(validateBrackets('((()))(())')).toBe(true)
  })

  // Invalid Input Types
  it('handles invalid inputs', () => {
    expect(() => validateBrackets(null as any)).toThrow()
    expect(() => validateBrackets(undefined as any)).toThrow()
    expect(() => validateBrackets({} as any)).toThrow()
    expect(() => validateBrackets(42 as any)).toThrow()
  })
})

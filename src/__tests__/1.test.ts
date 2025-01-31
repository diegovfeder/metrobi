import { describe, it, expect } from 'vitest'
import { findDuplicates } from '../1'

describe('findDuplicates', () => {
  it('finds basic number duplicates', () => {
    expect(findDuplicates([1, 2, 3, 2, 4, 5, 5])).toEqual([2, 5])
  })

  it('handles empty array', () => {
    expect(findDuplicates([])).toEqual([])
  })

  it('handles array with no duplicates', () => {
    expect(findDuplicates([1, 2, 3, 4])).toEqual([])
  })

  it('handles array with all duplicates', () => {
    expect(findDuplicates([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3])
  })

  it('handles multiple occurrences (more than 2)', () => {
    expect(findDuplicates([1, 1, 1, 2, 2, 2])).toEqual([1, 2])
  })

  it('handles mixed types', () => {
    expect(findDuplicates(['1', 1, '1', 1])).toEqual(['1', 1])
  })

  it('handles objects and references', () => {
    const obj1 = { id: 1 }
    const obj2 = { id: 1 }
    const obj3 = obj1
    expect(findDuplicates([obj1, obj2, obj3])).toEqual([obj1])
  })

  it('handles special number values', () => {
    expect(findDuplicates([NaN, NaN, Infinity, Infinity, -0, 0])).toEqual([
      NaN,
      Infinity,
      0,
    ])
  })

  it('handles null and undefined', () => {
    expect(findDuplicates([null, null, undefined, undefined])).toEqual([
      null,
      undefined,
    ])
  })

  it('handles sparse arrays', () => {
    const sparseArray = Array(3)
    sparseArray[0] = 1
    sparseArray[2] = 1
    expect(findDuplicates(sparseArray)).toEqual([1])
  })

  it('handles object keys that could collide', () => {
    const result = findDuplicates([
      'toString',
      '__proto__',
      'constructor',
      'toString',
    ])
    expect(result).toEqual(['toString'])
  })
})

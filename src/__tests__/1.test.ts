import { describe, it, expect } from 'vitest'
import { findDuplicates } from '../1'

describe('findDuplicates', () => {
  it('should find duplicate numbers in an array', () => {
    expect(findDuplicates([1, 2, 3, 2, 4, 5, 5])).toEqual([2, 5])
  })

  it('should return empty array when no duplicates', () => {
    expect(findDuplicates([1, 2, 3, 4])).toEqual([])
  })

  it('should work with strings', () => {
    expect(findDuplicates(['a', 'b', 'a', 'c', 'c'])).toEqual(['a', 'c'])
  })
})

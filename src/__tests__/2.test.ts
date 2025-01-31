import { describe, it, expect, vi } from 'vitest'
import { printWithDelay } from '../2'

describe('printWithDelay', () => {
  it('should print items with exponential delays', async () => {
    const consoleSpy = vi.spyOn(console, 'log')
    const items = ['a', 'b', 'c', 'd']

    // Mock setTimeout to execute immediately
    vi.spyOn(global, 'setTimeout').mockImplementation((fn) => {
      fn()
      return 0 as any
    })

    await printWithDelay(items)

    expect(consoleSpy).toHaveBeenCalledTimes(4)
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 'a')
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 'b')
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 'c')
    expect(consoleSpy).toHaveBeenNthCalledWith(4, 'd')
  })
})

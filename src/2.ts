/**
 * Prints array items with exponentially increasing delays
 * @param arr Array of items to print
 * @returns Promise that resolves when all items are printed
 */
export async function printWithDelay<T>(arr: T[]): Promise<void> {
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  for (let i = 0; i < arr.length; i++) {
    const delay = Math.pow(2, i) * 1000 // 1s, 2s, 4s, 8s...
    await sleep(delay)
    console.log(arr[i])
  }
}

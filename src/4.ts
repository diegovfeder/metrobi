/**
 * Validates if brackets in a string are properly nested
 * @param str String containing brackets
 * @returns boolean indicating if brackets are properly nested
 */
export function validateBrackets(str: string): boolean {
  const stack: string[] = []
  const pairs: Record<string, string> = {
    '}': '{',
    ')': '(',
    ']': '[',
  }

  for (const char of str) {
    if ('{(['.includes(char)) {
      stack.push(char)
    } else if ('})]'.includes(char)) {
      if (stack.pop() !== pairs[char]) {
        return false
      }
    }
  }

  return stack.length === 0
}

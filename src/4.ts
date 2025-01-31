/**
 * Validates if brackets in a string are properly nested
 *
 * @param str Input string containing brackets
 * @returns boolean indicating if brackets are properly nested
 * @throws Error for invalid input types
 */
export function validateBrackets(str: string): boolean {
  // Input validation
  if (typeof str !== 'string') {
    throw new Error('Input must be a string')
  }

  // Early return for empty string
  if (!str) return true

  // Using array as stack is more performant than creating new Stack class
  const stack: string[] = []

  // Pre-define bracket pairs for O(1) lookup
  const bracketPairs: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  // Pre-define closing brackets set for O(1) lookup
  const closingBrackets = new Set([')', '}', ']'])

  // Single pass through the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    // Skip non-bracket characters
    if (!bracketPairs[char] && !closingBrackets.has(char)) {
      continue
    }

    // Opening bracket
    if (bracketPairs[char]) {
      stack.push(char)
      continue
    }

    // Closing bracket
    const lastOpening = stack.pop()
    if (!lastOpening || bracketPairs[lastOpening] !== char) {
      return false
    }
  }

  return stack.length === 0
}

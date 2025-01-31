# Metrobi Interview Challenge

This repository contains solutions to various algorithmic challenges, including:

1. Finding duplicates in an array
2. Printing with exponential delays
3. Flexbox layout implementation
4. Bracket validation
5. Egg drop problem
6. Zeno's paradox visualization
7. Unbounded knapsack (Carrot optimization)

## Setup

To install dependencies:

```bash
bun install
```

## Running Tests

Run all tests:

```bash
bun test
```

Run tests with coverage:

```bash
bun test --coverage
```

Run specific test file:

```bash
bun test src/__tests__/1.test.ts  # For duplicates
bun test src/__tests__/2.test.ts  # For delay printing
bun test src/__tests__/4.test.ts  # For bracket validation
bun test src/__tests__/5.test.ts  # For egg drop
bun test src/__tests__/7.test.ts  # For knapsack
```

Watch mode for development:

```bash
bun test --watch
```

## Running the React Challenges

To run the React challenges (Flexbox Layout and Zeno's Paradox):

```bash
bun run react-dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Challenge Descriptions

### 1. Find Duplicates

- Input: Array of elements
- Output: Array containing only the duplicate elements
- Time Complexity: O(n)

### 2. Print with Delay

- Prints array elements with exponentially increasing delays
- Delays: 1s, 2s, 4s, 8s, etc.

### 3. Flexbox Layout

- React component implementing a specific layout design
- Demonstrates flexbox mastery

### 4. Bracket Validation

- Validates proper nesting of brackets (), [], {}
- Returns boolean indicating validity

### 5. Egg Drop Problem

- Classic dynamic programming problem
- Finds minimum drops needed to determine breaking floor

### 6. Zeno's Paradox

- Interactive visualization of the famous paradox
- Demonstrates animation and mathematical concepts

### 7. Carrot Optimization (Knapsack)

- Unbounded knapsack problem implementation
- Optimizes carrot selection for maximum value

## Technologies Used

- TypeScript
- React
- Vitest for testing
- Bun as JavaScript runtime

## Development

This project uses Bun for package management and running scripts. Make sure you have Bun installed:

```bash
curl -fsSL https://bun.sh/install | bash
```

## Project Structure

```text
src/
├── __tests__/     # Test files
├── components/    # React components
├── 1.ts          # Duplicates solution
├── 2.ts          # Delay printing
├── 3.tsx         # Flexbox layout
├── 4.ts          # Bracket validation
├── 5.ts          # Egg drop
├── 6.tsx         # Zeno's paradox
└── 7.ts          # Knapsack problem
```

This project was created using `bun init` in bun v1.1.18. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# Metrobi Interview Challenge

## Questions

### 1. Find Duplicates in an Array

Write a JavaScript function that finds the duplicate items in any given array.

### 2. Async Function with Delayed Output

Write an async JavaScript function that writes every item in any given array with 1, 2, 4, 8, etc. seconds apart.

Example:

For ["a", "b", "c", "d"],
 • "a" is printed 1 second after the code runs.
 • "b" is printed 2 seconds after the code runs.
 • "c" is printed 4 seconds after the code runs.
 • "d" is printed 8 seconds after the code runs.

### 3. React Flexbox Layout

Write the necessary React code for generating the below figure using Flexbox.

(Figure not provided in the document.)

### 4. Validate Properly Nested Brackets

Write an efficient method that checks whether an input string with brackets ({}, (), []) is properly opened and closed.

Examples:
 • "{[]}" → true
 • "{(])}" → false
 • "{([)]}" → false

### 5. Egg Drop Problem - 100 Floors

A building has 100 floors. One of these floors is the highest floor an egg can be dropped from without breaking.
 • If an egg is dropped above that floor, it breaks.
 • If it is dropped from that floor or below, it remains undamaged and can be used again.

Given two eggs, find the highest floor an egg can be dropped from with as few drops as possible in the worst-case scenario.

### 6. Zeno's Paradox - Animation

Write the code that animates "Zeno's Paradox of Achilles and the Tortoise" on an interface.

(We would like to see the paradox demonstrated visually.)

### 7. Knapsack Problem - Carrots

You have an unlimited number of carrots, but a limited number of carrot types. You also have one bag with a maximum weight capacity.

Each type of carrot has:
 • A weight (kg)
 • A price ($)

Write a function that takes carrotTypes and capacity and returns the maximum value the bag can hold.

Example:

const carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}];
const capacity = 36; // kg

getMaxValue(carrotTypes, capacity);

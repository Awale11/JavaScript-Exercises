// Reduce()Method

// Use the reduce() method to multiply all the numbers in the array [1, 2, 3, 4, 5] together.

const numbers = [1, 2, 3, 4, 5];

const multiply = numbers.reduce((total, number) => total * number,1);

console.log(multiply)
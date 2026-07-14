// Spread and Rest Operators
//Use the spread operator to combine two arrays [1, 2, 3] and [4, 5, 6] into a single array.

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];

console.log(array2);

// Rest Operator
// Create a function multiply that takes any number of arguments and returns their product using the rest parameter.


function multiplay(...numbers) {
    return numbers.reduce((total,number) => total*number,1);
}

console.log(multiplay(5,6,4,9,11));
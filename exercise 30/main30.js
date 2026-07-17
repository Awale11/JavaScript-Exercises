// Understanding Callbacks
//  Expand on the example provided. Implement two more callback functions: multiply and divide. Use the operate function to perform these operations on two numbers.

console.log("Asc, ustaad Omar Tood")

function operate(a, b, callback) {
    return callback (a,b);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return (a/b);
}

console.log("Multiplacation:", operate(6, 5, multiply));

console.log("Division:", operate(49, 7, divide))


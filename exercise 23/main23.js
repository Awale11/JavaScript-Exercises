// Object Distructuring

// Use object destructuring to extract the make and model properties from the object { make: "Toyota", model: "Corolla", year: 2020 }.

const cars= {make: "Toyota", model: "Corolla", year: 2020};

const {make, model} = cars;

console.log(make);
console.log(model);
// For...in loop with an array of objects
// For...of and for...in together

const people = [
    {name: "Abdi", age: 30, city: "muqdisho"},
    {name: "Hodan", age: 28, city: "istanbul"},
    {name: "Asma", age: 25, city: "Hargaysa"},
];

console.log("Properties and values of each person")

for (const person of people) {
    for (const key in person) {
        console.log(key + " : " + person[key])
    }

    console.log("---")
}
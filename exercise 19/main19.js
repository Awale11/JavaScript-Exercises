// Higher-Order Array Methods
// forEach() Method

//Use the forEach() method to log each number in the array [1, 2, 3, 4, 5] to the console.

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
    console.log(number)
});

console.log("Or we can use this method")

numbers.forEach(function(number){
    console.log(number)
})
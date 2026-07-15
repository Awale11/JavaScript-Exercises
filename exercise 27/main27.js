// Introduction To Promise
// Task: Create a function that returns a Promise, which resolves after a 2-second delay with a success message. Handle the Promise using .then() to log the success message, and add a .catch() block to handle any potential errors.

function fetchUserPromise () {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const sax = true;
            if(sax) {
                resolve("if sax is true call back resolve");
            }else{
                reject("if sax is false callback reject");
            }

        },2000);
    })
}

fetchUserPromise()
    .then(fariin => console.log("user data:",fariin))
    .catch(error => console.log("user data:",error))
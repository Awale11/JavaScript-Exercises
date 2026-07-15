// Async and Await
// Rewrite the function from Exercise 27 to use async and await instead of .then() and .catch(). Ensure that the success message is logged only after the data is fetched.

function  fetchUserPromise() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const sax = true;
            if(sax) {
                resolve("if sax is true call back resolve");
            }else{
                reject("if sax is false callback reject");
            }
        },2000)
    })
}

async function dispalyAsyncAwait() {
    try {
        const sax = await fetchUserPromise();
        console.log(sax);
    }catch(error) {
        console.log(error)
    }
}

dispalyAsyncAwait();
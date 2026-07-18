// Making HTTP Requests Using the GET Method

// Task: Write a function that makes a GET request to fetch a list of users from an API using the fetch API. Log the response data, and handle any errors that occur.

async function getDataUsers() {

    try {
        console.log("Starts  Making HTTP GET Requests");

        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!response.ok) {
            throw new Error('HTTP error! status: ${response.status}');
        }
        console.log("Before json response:", response);

        const users = await response.json();

        console.log("After json response:", users)

    } catch (error) {
        console.log(error)
    }
}
getDataUsers();

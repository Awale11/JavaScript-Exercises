// Synchronous Programming
// Task: Implement a simple blocking function that simulates a delay of 2 seconds before returning a message. Then, implement a non-blocking version of the same function using setTimeout.

function syncBlocking() {
    alert("Fetching user data...");
    return " This Is Synchronous Blocking";
}

console.log("Here Starts Synchronous Blocking...");

const user = syncBlocking();

console.log("user data:", user);

console.log("Message-kan waxa xayiraya alert-ga illa user-ka ok uuka dhaho");

// Asynchronous Programming

function asyncNonBlocking(callback) {
    // simualate waiting for 2 seconds
  setTimeout(() => {
    const userData = { name: "Abdi", city: "Xamar", adress: 21389 };
    callback(userData);}, 
    2000);
}

console.log("Here Starts Asynchronous Non-Blocking");

asyncNonBlocking(function(user) {
    console.log("Information Of User Data:", user);
});

console.log("Message-kan masagayo 2-da second ee uu qaadanayo data-user-ka, wuukaso hormayaa")
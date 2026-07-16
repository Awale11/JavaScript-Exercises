// Task: Simulate fetching JSON data from a file by creating a function that returns a Promise resolving to a JSON object after a delay. Use fetch to simulate this behavior, and parse the JSON data to a JavaScript object. Ensure that other code can run while waiting for the JSON data to be fetched.

async function jsonFileData() {

    console.log("start fetching data");

    const response = await fetch('json.json');

    const data = await response.json();

    console.log("JsonFileData:", data)
    
}
jsonFileData();
console.log("json.json is working, no need json-placeholder Api")
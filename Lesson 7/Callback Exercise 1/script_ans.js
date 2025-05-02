function fetchData() {
    console.log("Fetching data...");
    // Simulate an asynchronous operation
    setTimeout(()=>{
        console.log("Data fetched");
        processData();
    }
    , 3000);
}

function processData() {
    console.log("Processing data");
};

fetchData();
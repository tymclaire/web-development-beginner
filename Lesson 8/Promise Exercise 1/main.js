function fetchData() {
    console.log("Fetching data...");
    // Simulate an asynchronous operation
    setTimeout(()=>{
        console.log("Data fetched");
    }
    , 3000);
}

fetchData();
//--------- Comment the code above to see the expected output -----------

//--------- Uncomment the code below to see the expected output -----------

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data fetched");
//         }, 3000);
//     });
// }

// fetchData().then(function(value) { 
//     console.log(value); 
// });
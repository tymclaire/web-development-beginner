function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 3000);
    });
}

fetchData().then(function(value) { 
    console.log(value); 
});
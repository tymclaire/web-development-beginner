let flipCoin = new Promise(function(resolve, reject) {
    let outcome = Math.random() > 0.5 ? "heads" : "tails";
    if (outcome === "heads") {
        resolve("The coin landed on heads!");
    }else{
        reject("The coin landed on tails!");
    }
});




//We will cover this part next
flipCoin.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});
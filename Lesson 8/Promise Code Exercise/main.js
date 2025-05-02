let flipCoin = new Promise(function(resolve, reject) {
    let outcome = Math.random() > 0.5 ? "heads" : "tails";
    if (outcome === "heads") {
        resolve(); // Changed the resolve value to "The coin landed on heads!"
    }else{
        reject(); // Changed the reject value to "The coin landed on tails!"
    }
});




//We will cover this part next
flipCoin.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});
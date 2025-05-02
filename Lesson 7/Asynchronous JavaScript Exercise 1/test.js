function delay_greeting() {
	setTimeout(function() { 
		console.log("Hello, Ninja!"); 
	}, 5000); // Wait for 5000 milliseconds, chnage the value to see the difference
} 
console.log("Start"); 
delay_greeting(); 
console.log("End");

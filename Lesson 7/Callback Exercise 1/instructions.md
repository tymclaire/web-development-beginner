# Callback Exercise 1

## Instructions

In this exercise, students are provided with a function fetchData() that logs a message indicating that data fetching has started. However, the implementation for simulating an asynchronous data fetch operation is missing.

- Complete the fetchData() function by adding a setTimeout function call.
- Inside the setTimeout, log the message "Data fetched" after a delay of 3 seconds.
- Once the data is fetched, call the processData() function to simulate processing the fetched data.

### Hint

Use the setTimeout function to introduce a delay of 3 seconds before logging the message "Data fetched" and invoking processData().

### Expected Behavior

When the code runs, the console should display the following messages in order:

```Fetching data...```

After a 3-second delay, ```Data fetched```

```Processing data```

## Running the Test

To test if your code is correct, run the test with the following commands in terminal: ```node script.js```

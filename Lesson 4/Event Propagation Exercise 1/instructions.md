# Adding Event Propagation Exercise 1

## Instructions

For the JavaScript to manipulate the DOM, we shall start with JavaScript code inside the HTML document
The JavaScript Code will be inside `<script> </script>` tags

Edit the code within the script tags

Note that the div element is the parent of the span element, which is the parent of the button

Try:

- Task 1: Open the html file in Chrome and click the button to see what happens
  - Note the order in which the alerts appear
  - The button one appears first, then the span and then the div, because all 3 have event listeners
  - Like we learnt earlier, JavaScript executes the event handlers as the event moves up the DOM tree, from the root element (button) to its parent elements (span and div)
  
## Running the Test

To test if your code is correct, open the HTML file in Chrome.
Now refresh the page!

# Adding Stop Event Propagation Exercise 1

## Instructions

For the JavaScript to manipulate the DOM, we shall start with JavaScript code inside the HTML document
The JavaScript Code will be inside `<script> </script>` tags

Edit the code within the script tags

Note that html is the same as the previous  the div element is the parent of the span element, which is the parent of the button

Try:

- Task 1: Open the html file in Chrome and click the button to see what happens
  - Notice that both events linked to the button element are still executed
  - event.stopPropagation() method stops the event from going to the next element
- Task 2: Replace the event.stopPropagation(); with  event.stopImmediatePropagation();
  - Save the file, open the html file in Chrome and click the button to see what happens
  - Notice that only the first alert is run
    - event.stopImmediatePropagation() method stops other listeners of the same event from being called.

## Running the Test

To test if your code is correct, open the HTML file in Chrome.
Now refresh the page!

# Web Storage Exercise 1

## Instructions

In this exercise, you will store the user’s name in localStorage and the user’s feelings in sessionStorage using JavaScript code. The stored data will then be displayed on the webpage. The HTML file has been completed for you. You need to modify the provided JavaScript code to implement the storage and display functionality.

### Adding These Functionalities to script.js

- Store Data:
  - Upon form submission, capture the user's name and feelings from the input fields.
  - Store the user's name in localStorage using ```localStorage.setItem('key', 'value')```
  - Store the user's feelings in sessionStorage using ```sessionStorage.setItem('key', 'value')```
- Display Stored Data:
  - After storing the data, update the content of #displayName and #displayFeelings to show the user's name and feelings.
  - Use ```localStorage.getItem('key')``` to retrieve the user's name and ```sessionStorage.getItem('key')``` to retrieve the user's feelings.
  - The data should be displayed immediately after form submission and also when the page loads (if there is already stored data).

## Running the Test

- After implementing the changes, open the HTML file in your web browser
- Enter your name and feelings in the form and click "Submit"
- Check that the name persists after refreshing the page, while the feelings are cleared when the page is closed and reopened
- The name you enter should be stored and displayed even after you close and reopen the browser
- The feelings you enter should be displayed only during the current session (i.e., the data will disappear when the browser tab is closed)

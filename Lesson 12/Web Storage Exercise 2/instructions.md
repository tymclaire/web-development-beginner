# Web Storage Exercise 2

## Instructions

In this exercise, you will expands on Exercise 1 and deepen your understanding of localStorage and sessionStorage through new challenges like removing, updating, and checking for stored data.

### Tasks

- Store Data:
  - Add code to save the user's name to `localStorage`.
  - Add code to save the user's feelings to `sessionStorage`.
  - Update the displayed data after storing.
- Clear Data:
  - Add functionality to clear all data from both `localStorage` and `sessionStorage`.
  - Ensure the displayed data updates to show that no data is stored.
- Check for Missing Data
  - Modify the `window.load` event to display `"No data stored"` if `localStorage` or `sessionStorage` is empty.
- (Optional) Enhance the UX:
  - Add a success message when data is saved.
  - Add a confirmation dialog before clearing data.

## Expected Behavior

- When the form is submitted, the name and feelings are stored and displayed on the page.
- When the `Clear Data` button is clicked, all stored data is deleted, and the displayed values are updated to show `"No data stored"`.
- If the page is refreshed, the stored data persists for `localStorage` (name) but not for `sessionStorage` (feelings).

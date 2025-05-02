document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the user's name and feelings from the form inputs
    let userName = document.getElementById('name').value;
    let userFeelings = document.getElementById('feelings').value;

    //!------------------- Modify the code below this -------------------
    // Store the user's name in localStorage
    // Store the user's feelings in sessionStorage
    // Display the stored information on the webpage
    //!------------------- Modify the code above this line -------------------
});

// Add functionality to clear the stored data
document.getElementById('clearData').addEventListener('click', function() {
    //!------------------- Modify the code below this -------------------
    // Clear all data from localStorage
    // Clear all data from sessionStorage
    // Update the webpage to reflect that no data is stored
    //!------------------- Modify the code above this line -------------------
});

// Check if there is already stored data and display it when the page loads
window.addEventListener('load', function() {
    if (localStorage.getItem('userName')) {
        document.getElementById('displayName').textContent = `Name: ${localStorage.getItem('userName')}`;
    } else {
        document.getElementById('displayName').textContent = 'Name: No data stored';
    }

    if (sessionStorage.getItem('userFeelings')) {
        document.getElementById('displayFeelings').textContent = `Feelings: ${sessionStorage.getItem('userFeelings')}`;
    } else {
        document.getElementById('displayFeelings').textContent = 'Feelings: No data stored';
    }
});

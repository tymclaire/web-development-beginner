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

// Check if there is already stored data and display it when the page loads
window.addEventListener('load', function() {
    if (localStorage.getItem('userName')) {
        document.getElementById('displayName').textContent = `Name: ${localStorage.getItem('userName')}`;
    }

    if (sessionStorage.getItem('userFeelings')) {
        document.getElementById('displayFeelings').textContent = `Feelings: ${sessionStorage.getItem('userFeelings')}`;
    }
});

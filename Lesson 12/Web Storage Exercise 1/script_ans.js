document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the user's name and feelings from the form inputs
    let userName = document.getElementById('name').value;
    let userFeelings = document.getElementById('feelings').value;

    // Store the user's name in localStorage
    localStorage.setItem('userName', userName);

    // Store the user's feelings in sessionStorage
    sessionStorage.setItem('userFeelings', userFeelings);

    // Display the stored information on the webpage
    document.getElementById('displayName').textContent = `Name: ${localStorage.getItem('userName')}`;
    document.getElementById('displayFeelings').textContent = `Feelings: ${sessionStorage.getItem('userFeelings')}`;
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

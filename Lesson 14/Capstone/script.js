// Handle form submission and display user information
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('username').value;
    let feelings = document.getElementById('feelings').value;
    
    // Store data in localStorage and sessionStorage
    localStorage.setItem('name', name);
    sessionStorage.setItem('feelings', feelings);
    
    // Display the stored data
    document.getElementById('display-name').textContent = localStorage.getItem('name');
    document.getElementById('display-feelings').textContent = sessionStorage.getItem('feelings');
});

// Fetch data from an API and display it
document.getElementById('fetch-data').addEventListener('click', async function() {
    try {
        let response = await fetch('https://api.sampleapis.com/countries/countries');
        let data = await response.json();
        
        let dataDisplay = document.getElementById('data-display');
        dataDisplay.innerHTML = ''; // Clear previous data
        
        let ul = document.createElement('ul');
        dataDisplay.appendChild(ul);
        
        data.forEach(country => {
            let li = document.createElement('li');
            li.textContent = country.name;
            ul.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

// Display stored user information on page load
window.addEventListener('load', function() {
    document.getElementById('display-name').textContent = localStorage.getItem('name') || '';
    document.getElementById('display-feelings').textContent = sessionStorage.getItem('feelings') || '';
});

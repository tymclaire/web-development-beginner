// Define page content for each route
const routes = {
    home: `<h2>Home</h1><p>Welcome to the Home Page.</p>`, //Change the content of the home route
    about: `<h2>About Us</h2><p>Learn more about our website here.</p>`, //Change the content of the about route
    contact: `<h2>Contact Us</h2><p>Reach out to us via email or phone.</p>`    //Change the content of the contact route
};

// Function to load the correct content based on the URL
function navigateTo(page) {
    // Update the content area
    document.getElementById('content').innerHTML = routes[page] || `<h2>Page Not Found</h2>`;
    
    // Update the URL without reloading
    window.history.pushState({ page }, page, `#${page}`);
}

// Handle back/forward navigation
window.addEventListener('popstate', function (event) {
    let page = location.hash.replace('#', '') || 'home';
    document.getElementById('content').innerHTML = routes[page];
});

// Load the correct content on page load
window.addEventListener('load', function () {
    let page = location.hash.replace('#', '') || 'home';
    document.getElementById('content').innerHTML = routes[page];
});

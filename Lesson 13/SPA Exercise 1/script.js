// app.js

// Function to load the appropriate content based on the current hash
function loadContent() {
    // Get the current hash (without the '#' symbol)
    const hash = window.location.hash.substring(1);

    // Get the content area
    const content = document.getElementById('content');

    // Clear the current content
    content.innerHTML = '';

    // Determine which content to load based on the hash
    if (hash === 'home') {
        content.innerHTML = `
            <h2>Home</h2>
            <p>Welcome to the Home Page of this Simple SPA.</p>
        `;
    } else if (hash === 'about') {
        content.innerHTML = `
            <h2>About</h2>
            <p>This is a simple Single Page Application (SPA) built to demonstrate basic routing and navigation.</p>
        `;
    } else if (hash === 'contact') {
        content.innerHTML = `
            <h2>Contact</h2>
            <p>Feel free to contact us at contact@example.com.</p>
        `;
    } else {
        content.innerHTML = `
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
        `;
    }
}

// Listen for changes in the hash and load the appropriate content
window.addEventListener('hashchange', loadContent);

// Load the appropriate content when the page loads
window.addEventListener('load', loadContent);

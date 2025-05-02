document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (username.length < 3) { //Is this correct? Should it be 3?
    alert('Username must be at least 3 characters long.');
    return;
    }
    
    if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
    }
    
    if (password.length < 8) { //Is this correct? There should be at least 8 characters.
    alert('Password must be at least 8 characters long and contain a number.');
    return;
    }
    
    if (password !== confirmPassword) { //Is this correct? Should it be !==?
    alert('Passwords do not match.');
    return;
    }
    
    alert('Registration successful!');
});
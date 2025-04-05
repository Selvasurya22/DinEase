document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password');
            return;
        }
        
        // In a real application, you would send this data to a server for authentication
        // This is just a simple simulation
        console.log('Login attempt:', { username, password });
        
        // Simulate successful login
        alert('Login successful! Redirecting to homepage...');
        // Redirect to homepage
        window.location.href = '../Restaurant Webpages - Ganesh/Restaurant Webpages - Ganesh/restaurant-index.html';
    });
});

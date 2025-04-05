document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const passwordInput = document.getElementById('password');
    const strengthIndicator = document.getElementById('password-strength');
    const termsCheckbox = document.getElementById('terms');
    
    // Password strength checker
    passwordInput.addEventListener('input', function() {
        checkPasswordStrength(this.value);
    });
    
    function checkPasswordStrength(password) {
        // Remove any existing classes
        strengthIndicator.className = 'password-strength';
        
        if (password.length === 0) {
            return;
        }
        
        // Define strength criteria
        const hasLetters = /[a-zA-Z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLongEnough = password.length >= 8;
        
        // Calculate strength
        let strength = 0;
        if (hasLetters) strength++;
        if (hasNumbers) strength++;
        if (hasSpecialChars) strength++;
        if (isLongEnough) strength++;
        
        // Update indicator
        if (strength <= 2) {
            strengthIndicator.classList.add('weak');
        } else if (strength === 3) {
            strengthIndicator.classList.add('medium');
        } else {
            strengthIndicator.classList.add('strong');
        }
    }
    
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const termsAccepted = document.getElementById('terms').checked;
        
        // Simple validation
        if (firstname.trim() === '' || lastname.trim() === '' || email.trim() === '' || 
            username.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Password strength validation
        const hasLetters = /[a-zA-Z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLongEnough = password.length >= 8;
        
        if (!isLongEnough || !hasLetters || !hasNumbers) {
            alert('Password must be at least 8 characters long and include letters and numbers');
            return;
        }
        
        // Password match validation
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        // Terms acceptance validation
        if (!termsAccepted) {
            alert('You must agree to the Terms of Service and Privacy Policy');
            return;
        }
        
        // In a real application, you would send this data to a server for registration
        // This is just a simple simulation
        console.log('Registration data:', { firstname, lastname, email, username, password });
        
        // Simulate successful registration
        alert('Registration successful! Please login with your new account.');
        // Redirect to login page
        window.location.href = 'login.html';
    });
});

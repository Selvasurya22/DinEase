document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservation-form');
    
    // Set minimum date to today
    const dateInput = document.getElementById('date');
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    dateInput.setAttribute('min', formattedDate);
    
    // Set default date to today
    dateInput.value = formattedDate;
    
    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const seating = document.getElementById('seating').value;
        const specialRequests = document.getElementById('special-requests').value;
        
        // Simple validation
        if (name.trim() === '' || phone.trim() === '' || email.trim() === '' || 
            date.trim() === '' || time.trim() === '' || guests === '') {
            alert('Please fill in all required fields');
            return;
        }
        
        // Phone validation (simple)
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone.replace(/[\s-]/g, ''))) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }
        
        // Get newsletter subscription preference
        const newsletterCheckbox = document.getElementById('newsletter');
        const newsletterSubscribed = newsletterCheckbox ? newsletterCheckbox.checked : false;
        
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Check if date is in the future
        const selectedDate = new Date(date);
        const todayDate = new Date(today.setHours(0,0,0,0));
        if (selectedDate < todayDate) {
            alert('Please select a future date');
            return;
        }
        
        // In a real application, you would send this data to a server
        // This is just a simple simulation
        console.log('Reservation data:', { 
            name, 
            phone, 
            email, 
            date, 
            time, 
            guests, 
            seating, 
            specialRequests,
            newsletter: newsletterSubscribed
        });
        
        // Simulate successful reservation
        const reservationDetails = `
            Name: ${name}\n
            Date: ${new Date(date).toLocaleDateString()}\n
            Time: ${time}\n
            Number of Guests: ${guests}\n
            ${seating ? 'Seating: ' + seating + '\n' : ''}
        `;
        
        alert('Reservation successful!\n\nReservation Details:\n' + reservationDetails);
        
        // Reset form
        reservationForm.reset();
        dateInput.value = formattedDate;
    });
});

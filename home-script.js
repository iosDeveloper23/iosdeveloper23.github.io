// Check if user is logged in
document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    
    if (!username) {
        // Redirect to login if not logged in
        window.location.href = 'index.html';
        return;
    }

    // Display welcome message
    document.getElementById('welcomeUser').textContent = `Welcome, ${username}!`;
});

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
});

// Add click handlers for demo buttons
document.querySelectorAll('.card-btn').forEach(button => {
    button.addEventListener('click', function() {
        const cardTitle = this.parentElement.querySelector('h3').textContent;
        alert(`${cardTitle} feature coming soon!`);
    });
});
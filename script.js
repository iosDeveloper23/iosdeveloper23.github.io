document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Simple validation (replace with actual authentication)
    if (username === 'admin' && password === 'password') {
        messageDiv.textContent = 'Login successful! Redirecting...';
        messageDiv.className = 'message success';

        // Store username for home page
        localStorage.setItem('username', username);

        // Redirect to home page after 1 second
        setTimeout(() => {
            try {
                window.location.href = './home.html';
            } catch (error) {
                console.error('Redirect failed:', error);
                // Fallback: try different methods
                window.location.assign('./home.html');
            }
        }, 1000);
    } else {
        messageDiv.textContent = 'Invalid username or password';
        messageDiv.className = 'message error';
    }
});
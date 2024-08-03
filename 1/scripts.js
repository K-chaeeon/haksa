function showContent(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    
    const selectedContent = document.getElementById(tabId);
    selectedContent.classList.add('active');
}

function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const passwordButton = document.querySelector('.toggle-password');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordButton.textContent = '🙈'; // Change icon to indicate visibility
    } else {
        passwordField.type = 'password';
        passwordButton.textContent = '👁️'; // Change icon to indicate hidden
    }
}

// Default to showing the login tab content
document.addEventListener('DOMContentLoaded', () => {
    showContent('login');
});

document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle');
    
    // Check and apply saved theme from localStorage
    const currentTheme = localStorage.getItem('theme') || 'day-theme';
    document.body.classList.add(currentTheme);
    
    themeToggleButton.addEventListener('click', function () {
        // Toggle between day and night themes
        if (document.body.classList.contains('day-theme')) {
            document.body.classList.remove('day-theme');
            document.body.classList.add('night-theme');
            localStorage.setItem('theme', 'night-theme');
        } else {
            document.body.classList.remove('night-theme');
            document.body.classList.add('day-theme');
            localStorage.setItem('theme', 'day-theme');
        }
    });
});
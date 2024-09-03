// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Mobile responsiveness: Toggle navigation menu
document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.querySelector('header nav ul');
    const toggleButton = document.createElement('button');
    
    toggleButton.textContent = '☰';
    toggleButton.style.fontSize = '1.5em';
    toggleButton.style.background = '#4b2c20';
    toggleButton.style.color = '#fff';
    toggleButton.style.border = 'none';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.padding = '10px';
    toggleButton.style.display = 'none';
    
    document.querySelector('header').insertBefore(toggleButton, navMenu);
    
    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    const updateMenuVisibility = () => {
        if (window.innerWidth < 768) {
            navMenu.style.display = 'none';
            toggleButton.style.display = 'block';
        } else {
            navMenu.style.display = 'flex';
            toggleButton.style.display = 'none';
        }
    };
    
    window.addEventListener('resize', updateMenuVisibility);
    updateMenuVisibility();
});
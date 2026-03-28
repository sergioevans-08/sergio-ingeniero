// Dark mode toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};
const darkModeButton = document.getElementById('dark-mode-toggle');
darkModeButton.addEventListener('click', toggleDarkMode);

// Smooth scrolling for anchor links
const smoothScroll = (event) => {
    event.preventDefault();
    const targetID = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetID);
    targetElement.scrollIntoView({ behavior: 'smooth' });
};
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Example of advanced interactions: form submission
const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form submitted!');
});

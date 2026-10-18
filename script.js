// Mobile menu toggle functionality
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Smooth scrolling log
console.log("Hosnatul Ferdous Portfolio Loaded Successfully!");

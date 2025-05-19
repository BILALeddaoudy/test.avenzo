// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Smooth scroll for menu items
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      nav.classList.remove('active');
    }
  });
});
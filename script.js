// Navbar toggle for mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('navbar-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleButton.addEventListener('click', () => {
    // Toggle the visibility of the mobile menu
    mobileMenu.classList.toggle('show');
  });
});

// Scroll effect for hero section
window.addEventListener("scroll", function () {
  const hero = document.getElementById("hero");
  const heroContent = document.querySelector(".hero-content");
  const scrollPosition = window.scrollY;

  // Adjust background opacity based on scroll position
  if (scrollPosition > 50) {
    hero.style.backgroundColor = "rgba(0, 122, 204, 0)"; // Fully transparent
    heroContent.style.opacity = `${1 - Math.min(scrollPosition / 200, 1)}`; // Gradually fade text
  } else {
    hero.style.backgroundColor = "#007acc"; // Original color
    heroContent.style.opacity = "1"; // Fully visible
  }
});

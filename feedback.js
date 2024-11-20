// Smooth scroll effect for the Feedback Page
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  });

// Navbar toggle for mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('navbar-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleButton.addEventListener('click', () => {
    // Toggle the visibility of the mobile menu
    mobileMenu.classList.toggle('show');
  });
});

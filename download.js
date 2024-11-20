document.addEventListener("DOMContentLoaded", () => {
    const downloadContent = document.querySelector(".download-content");
    const phonePreview = document.querySelector(".phone-preview");
    const appStoreButton = document.querySelector(".store-button");

    // Adding delay-based animations to each element
    setTimeout(() => {
        downloadContent.classList.add("fade-in-center");
    }, 500);

    setTimeout(() => {
        phonePreview.classList.add("fade-in-center");
    }, 1000);

    setTimeout(() => {
        appStoreButton.classList.add("fade-in-center");
    }, 1500);
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

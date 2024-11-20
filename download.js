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

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  toggleButton.addEventListener("click", () => {
    // Toggle the "active" class on the mobile menu
    mobileMenu.classList.toggle("active");

    // Update the "aria-expanded" attribute for accessibility
    const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
    toggleButton.setAttribute("aria-expanded", !isExpanded);
  });
});

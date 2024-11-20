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
    if (mobileMenu) {
      // Toggle the "active" class
      mobileMenu.classList.toggle("active");

      // Toggle the aria-expanded attribute
      const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
      toggleButton.setAttribute("aria-expanded", !isExpanded);
    } else {
      console.error("Mobile menu element not found!");
    }
  });
});

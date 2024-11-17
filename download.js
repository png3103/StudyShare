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
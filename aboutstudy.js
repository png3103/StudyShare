function showMission() {
    document.getElementById("missionModal").style.display = "flex";
  }
  
  function closeMission() {
    document.getElementById("missionModal").style.display = "none";
  }
  
  // Close the modal when clicking outside the content
  window.onclick = function(event) {
    const modal = document.getElementById("missionModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

// Navbar toggle for mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('navbar-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleButton.addEventListener('click', () => {
    // Toggle the visibility of the mobile menu
    mobileMenu.classList.toggle('show');
  });
});

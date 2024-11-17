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
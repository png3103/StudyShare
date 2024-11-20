// Navbar toggle for mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('navbar-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleButton.addEventListener('click', () => {
    // Toggle the visibility of the mobile menu
    mobileMenu.classList.toggle('show');
  });
});


// Function to display the modal
function showModal() {
    document.getElementById("questionModal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("questionModal").style.display = "none";
}

// Function to toggle FAQ content visibility
function toggleFAQ(id) {
    const content = document.getElementById(id);
    content.style.display = content.style.display === "none" ? "block" : "none";
}

// Function to handle form submission
async function submitQuestion() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    try {
        const response = await fetch('/sendQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, email, phone }),
        });

        if (response.ok) {
            alert("Chúng tôi đã nhận được câu hỏi của bạn, chúng tôi sẽ trả lời sớm nhất có thể trong vòng 24h.");
            closeModal();
            document.getElementById("questionForm").reset();
        } else {
            alert("Có lỗi xảy ra khi gửi câu hỏi. Vui lòng thử lại.");
        }
    } catch (error) {
        console.error("Error submitting question:", error);
        alert("Có lỗi xảy ra khi gửi câu hỏi. Vui lòng thử lại.");
    }
}

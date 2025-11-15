document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("full-name").value.trim();
    const email = document.getElementById("Email-Address").value.trim();
    const subject = document.getElementById("Subject").value.trim();
    const message = document.getElementById("Message").value.trim();
    const status = document.getElementById("success-message");

    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      return emailPattern.test(String(email).toLowerCase());
    }

    if (fullName === "" || email === "" || subject === "" || message === "") {
      status.style.display = "block";
      status.textContent = "All fields are required.";
      status.className = "error";
      return;
    }

    if (!isValidEmail(email)) {
      status.style.display = "block";
      status.textContent = "Please enter a valid email address.";
      status.className = "error";
      return;
    }

    status.style.display = "block";
    status.textContent = "Your message has been sent successfully ✅";
    status.className = "success";

    setTimeout(() => {
      status.style.display = "none";
      document.getElementById("contactForm").reset();
    }, 2000);
  });

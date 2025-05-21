// style.js

// Initialize EmailJS
(function() {
    emailjs.init("7I5_gBx7WY4WPOsBb"); // Replace with your actual public key
  })();
  
  // Form submission handler
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cs-form-490");
  
    if (!form) return;
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const button = form.querySelector("button");
      button.disabled = true;
      button.textContent = "Sending...";
  
      emailjs.send("service_hne1zgl", "template_umwpsyh", {
        name: document.getElementById("name-490").value,
        email: document.getElementById("email-490").value,
        phone: document.getElementById("phone-490").value,
        message: document.getElementById("message-490").value,
      })
      .then(function () {
        alert("Message sent successfully!");
        form.reset();
        button.disabled = false;
        button.textContent = "Submit Message Now";
      }, function (error) {
        alert("Failed to send message: " + JSON.stringify(error));
        button.disabled = false;
        button.textContent = "Submit Message Now";
      });
    });
  });
  
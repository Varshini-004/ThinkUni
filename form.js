document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function(event) {
        // Prevent form submission
        event.preventDefault();

        // Collect form fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate fields
        if (!validateName(name) || !validateEmail(email) || !validateMessage(message)) {
            return;
        }

        // If valid, submit the form (for now, just alert success)
        alert("Form submitted successfully!");
        // You can replace the above line with form.submit() to submit the form
    });

    // Name validation: Must not be empty
    function validateName(name) {
        if (name === "") {
            alert("Please enter your name.");
            return false;
        }
        return true;
    }

    // Email validation: Simple email regex
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        return true;
    }

    // Message validation: Must not be empty
    function validateMessage(message) {
        if (message === "") {
            alert("Please enter your message.");
            return false;
        }
        return true;
    }
});
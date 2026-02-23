document.addEventListener("DOMContentLoaded", function () {

    // ================= DYNAMIC YEAR =================
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // ================= MOBILE MENU TOGGLE =================
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // ================= DARK MODE TOGGLE =================
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            // Toggle icon between moon and sun
            if (document.body.classList.contains("dark-mode")) {
                themeToggle.textContent = "☀️";
            } else {
                themeToggle.textContent = "🌙";
            }
        });
    }

    // ================= GPA CALCULATOR =================
    window.calculateGPA = function () {
        const marks = parseFloat(document.getElementById("marks").value);
        const result = document.getElementById("result");

        if (isNaN(marks) || marks < 0 || marks > 100) {
            result.innerText = "Please enter valid marks (0-100)";
            result.style.color = "red";
            return;
        }

        let gpa = marks >= 80 ? 4.0 :
                  marks >= 70 ? 3.5 :
                  marks >= 60 ? 3.0 :
                  marks >= 50 ? 2.5 : 1.0;

        let classification = gpa >= 3.5 ? "First Class" :
                             gpa >= 3.0 ? "Second Class" :
                             gpa >= 2.5 ? "Pass" : "Fail";

        result.innerText = "GPA: " + gpa + " - " + classification;
        result.style.color = "green";
    };

    // ================= CONTACT FORM =================
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("All fields are required!");
                return;
            }

            // Basic email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address!");
                return;
            }

            alert("Message sent successfully!");
            contactForm.reset();
        });
    }

});
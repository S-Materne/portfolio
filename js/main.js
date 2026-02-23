// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Menu Toggle
document.getElementById("menuToggle").addEventListener("click", function() {
    document.querySelector("nav ul").classList.toggle("active");
});

// Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

// GPA Calculator
function calculateGPA() {
    const marks = document.getElementById("marks").value;
    const result = document.getElementById("result");

    if (marks === "" || marks < 0 || marks > 100) {
        result.innerText = "Please enter valid marks (0-100)";
        return;
    }

    let gpa;
    if (marks >= 80) gpa = 4.0;
    else if (marks >= 70) gpa = 3.5;
    else if (marks >= 60) gpa = 3.0;
    else if (marks >= 50) gpa = 2.5;
    else gpa = 1.0;

   let classification = gpa >= 3.5 ? "First Class" :
                         gpa >= 3.0 ? "Second Class" :
                         gpa >= 2.5 ? "Pass" :
                         "Fail";

    result.innerText ="GPA:"+gpa+""+ "-"+classification;
}

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("All fields are required!");
        return;
    }

    alert("Message sent successfully!");
});
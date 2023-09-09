// script.js
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;

    themeToggle.addEventListener("click", function() {
        // Toggle the dark-theme class on the body element
        body.classList.toggle("dark-theme");
    });
});

const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", function() {
    // Toggle the dark-theme class on the body element
    body.classList.toggle("dark-theme");

    // Toggle the glow effect based on the theme
    const themeIcon = document.getElementById("theme-icon");
    themeIcon.classList.toggle("glow", body.classList.contains("dark-theme"));
});

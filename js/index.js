document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    themeToggle.addEventListener("click", function() {
        // Toggle the dark-theme class on the body element
        body.classList.toggle("dark-theme");

        // Toggle the theme icon source based on the theme
        if (body.classList.contains("dark-theme")) {
            themeIcon.src = "images/dark-theme.png"; // Path to the dark theme icon
        } else {
            themeIcon.src = "images/light-theme.png"; // Path to the light theme icon
        }
    });
});
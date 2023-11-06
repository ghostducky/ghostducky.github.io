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
//to ebi's page
document.addEventListener("DOMContentLoaded", function() {
    const navigateButton = document.getElementById("navigateButton");
    const body = document.body;

    navigateButton.addEventListener("click", function() {
        // Navigate to ebi.html
        window.location.href = "./ebi.html";
    });

    // Update button styles based on the theme
    function updateButtonStyles() {
        const isDarkTheme = body.classList.contains("dark-theme");

        if (isDarkTheme) {
            navigateButton.style.backgroundColor = "var(--button-bg-dark)";
            navigateButton.style.color = "var(--button-text-dark)";
        } else {
            navigateButton.style.backgroundColor = "var(--button-bg-light)";
            navigateButton.style.color = "var(--button-text-light)";
        }
    }

    // Call the function initially to set the button styles based on the current theme
    updateButtonStyles();
});


// JavaScript for toggling the dropdown details
const dropdownItems = document.querySelectorAll('.dropdown p');

dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        const detail = item.nextElementSibling;
        if (detail.style.display === 'block') {
            detail.style.display = 'none';
        } else {
            detail.style.display = 'block';
        }
    });
});

document.getElementById("codeSpace").addEventListener("click", function() {
    // Use JavaScript to navigate to another page
    window.location.href = "codeSpace.html";
});
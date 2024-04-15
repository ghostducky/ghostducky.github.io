function navToEn() {
    window.location.href = '/home.html';
}

// Add event listeners to the buttons
document.getElementById("projectBtn").addEventListener("click", function() {
document.getElementById("project").scrollIntoView({behavior: "smooth", block: "start"});
});

document.getElementById("aboutBtn").addEventListener("click", function() {
document.getElementById("about").scrollIntoView({behavior: "smooth", block: "start"});
});

document.getElementById("contactBtn").addEventListener("click", function() {
document.getElementById("contact").scrollIntoView({behavior: "smooth", block: "start"});
});
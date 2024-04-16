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

function updateButtonState() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const button = document.getElementById('send');

    if (isValidEmail(email) && name.trim() !== '' && message.trim() !== '') {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
}

document.getElementById('email').addEventListener('input', updateButtonState);
document.getElementById('name').addEventListener('input', updateButtonState);
document.getElementById('message').addEventListener('input', updateButtonState);

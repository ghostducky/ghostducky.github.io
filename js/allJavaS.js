function navToEn() {
    window.location.href = '/home.html';
}

// Add event listeners to the buttons
document.getElementById("projects").addEventListener("click", function() {
document.getElementById("projects-page").scrollIntoView({behavior: "smooth", block: "start"});
});

document.getElementById("about").addEventListener("click", function() {
document.getElementById("about-page").scrollIntoView({behavior: "smooth", block: "start"});
});

document.getElementById("contact").addEventListener("click", function() {
document.getElementById("contact-page").scrollIntoView({behavior: "smooth", block: "start"});
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

/*
window.addEventListener('scroll', function() {
    var buttons = document.getElementById('project');
    var nothingForNow = document.querySelector('.nothingForNow');

    var buttonsPosition = buttons.getBoundingClientRect().bottom;
    var nothingForNowPosition = nothingForNow.getBoundingClientRect().bottom;

    if (buttonsPosition > nothingForNowPosition) {
        nothingForNow.style.filter = 'blur(5px)';
    } else {
        nothingForNow.style.filter = 'blur(0)';
    }

    // Check if buttons move above the nothingForNow div
    var nothingForNowBottom = nothingForNow.getBoundingClientRect().bottom;
    var buttonsBottom = buttons.getBoundingClientRect().bottom;

    if (buttonsBottom < nothingForNowBottom) {
        nothingForNow.style.filter = 'blur(0)';
    }
});*/


const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}
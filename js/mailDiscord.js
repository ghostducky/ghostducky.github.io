document.getElementById('send').addEventListener('click', submitForm);

function isValidEmail(email) {
    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('error-message');

    if (!isValidEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.opacity = '100%';
        return;
    }
    errorMessage.textContent = '';
    errorMessage.style.opacity = '0%';

    const webhookUrl = 'https://discord.com/api/webhooks/1229360738313830471/e59WUS8-MRO0oTcUlGwHybdGjIRE-xyuRTfCAu9gQEW0CrwIVsGKNXtO9CGoxIb0tI1m';

    const payload = {
            content: "<@614014094000783370>",
            embeds: [
                {
                    title: "**You Have a New Message FROM: Portfolio**",
                    color: 0x00ff00,
                    fields: [
                        {
                            name: "Name",
                            value: name,
                            inline: true,
                        },
                        {
                            name: "Email",
                            value: email,
                            inline: true,
                        },
                        {
                            name: "Message",
                            value: message,
                        },
                    ],
                },
            ],
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => {
        if (!response.ok) {
            errorMessage.textContent = 'Failed to send message to Discord.';
            errorMessage.style.opacity = '100%';
            return;
        }
        errorMessage.textContent = 'Message sent successfully!';
        errorMessage.style.opacity = '100%';

        setTimeout(() => {
            errorMessage.textContent = '';
            errorMessage.style.opacity = '0%';
        }, 3000);

        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        console.error(error);
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.opacity = '100%';
        return;
    });
}
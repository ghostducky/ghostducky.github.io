function switchLanguage(event) {
    const langButtons = document.querySelectorAll('.lang');
    langButtons.forEach(button => button.classList.remove('selected'));

    const selectedButton = event.target;
    selectedButton.classList.add('selected');
    // Add language-switching logic here
}

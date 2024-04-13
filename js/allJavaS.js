function navToEn() {
    window.location.href = '/home.html';
}

const toggleBtn = document.querySelector('.container');

toggleBtn.addEventListener('click', () => {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'white-theme';
    const newTheme = currentTheme === 'dark-theme' ? 'white-theme' : 'dark-theme';

    body.classList.remove(currentTheme);
    body.classList.add(newTheme);

    // Update CSS variables for background color and text color based on the selected theme
    const root = document.documentElement;
    if (newTheme === 'dark-theme') {
        root.style.setProperty('--background-color', 'var(--dark-upDown-theme)');
        root.style.setProperty('--text-color', 'var(--white-upDown-theme)');
        root.style.setProperty('--background-main-color', 'var(--dark-main-theme)');
    } else {
        root.style.setProperty('--background-color', 'var(--white-upDown-theme)');
        root.style.setProperty('--text-color', 'var(--dark-upDown-theme)');
        root.style.setProperty('--background-main-color', 'var(--white-main-theme)');
    }
});

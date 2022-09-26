// Set confirm password's text based on screen width.
const pass = document.querySelector('.confirm-pass');
if (window.screen.width < 800) {
    pass.innerText = 'Confirm';
    console.log('setting...')
}


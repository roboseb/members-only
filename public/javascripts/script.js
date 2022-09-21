// Set default last channel.
if (!localStorage.getItem('lastChannel')) {
    localStorage.setItem('lastChannel', 'welcome');
}

// Set scroll position for all channels to bottom.
const boxes = document.querySelectorAll(".messages");
boxes.forEach(box => {
    box.scrollTop = box.scrollHeight;
});

const channels = Array.from(document.querySelectorAll('.channel'));
channels.forEach(channel => {
    // If lastChannel is stored, set it to highlighted.
    if (localStorage.getItem('lastChannel')) {
        if (localStorage.getItem('lastChannel') === channel.id) {
            channel.classList.add('selected');
        } else {
            channel.classList.remove('selected');
        }
    }


    channel.addEventListener('click', () => {

        // Save channel as lastChannel in localStorage.
        localStorage.setItem('lastChannel', channel.id);

        // Highlight channel.
        channels.forEach(newChannel => {
            newChannel.classList.remove('selected');
        });
        channel.classList.toggle('selected');

        // Hide all channels' info.
        const messageBoxes = Array.from(document.querySelectorAll('.message-box'));
        const messages = Array.from(document.querySelectorAll('.messages'));
        const messageHeaders = Array.from(document.querySelectorAll('.messages-header'));

        const allContainers = messageBoxes.concat(messages, messageHeaders);

        allContainers.forEach(item => {
            item.classList.remove('visible');
        });

        // Make only containers relating to clicked channel visible.
        const selectedContainers = Array.from(document.querySelectorAll(`.${channel.id}`));
        selectedContainers.forEach(container => {
            container.classList.add('visible');
        });
    });
});

// Show only last used channel if one was previously used.
const messageBoxes = Array.from(document.querySelectorAll('.message-box'));
const messages = Array.from(document.querySelectorAll('.messages'));
const messageHeaders = Array.from(document.querySelectorAll('.messages-header'));

const allContainers = messageBoxes.concat(messages, messageHeaders);

allContainers.forEach(item => {
    item.classList.remove('visible');

    if (item.classList.contains(localStorage.getItem('lastChannel'))) {
        item.classList.add('visible');
    }
});

// Add event listeners to eyes for toggling password visibility.
const eyes = Array.from(document.querySelectorAll('.eye'));
eyes.forEach(eye => {
    eye.addEventListener('click', () => {
        const eyeImg =  eye.querySelector('img');
        eyeImg.classList.toggle('hidden');

        // Toggle password visibility.
        const labelFor = eye.parentElement.getAttribute('for');
        const eyeInput = document.querySelector(`input[name="${labelFor}"]`);
        
        if (eyeInput.getAttribute('type') === 'password') {
            eyeInput.setAttribute('type', 'text');
        } else {
            eyeInput.setAttribute('type', 'password')
        }

        
    });
});
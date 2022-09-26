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
        const eyeImg = eye.querySelector('img');
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

// Screen bleeding effect button listener
const bleedButton = document.querySelector('.bleed-btn');
bleedButton.addEventListener('click', () => {
    startBleeding();
});

// Animate message box bleeding.
const startBleeding = () => {
    // Save blood state in local storage.
    if (!localStorage.getItem('bloodActivated')) {
        localStorage.setItem('bloodActivated', true);

        alert('you broke it');

        const bloods = Array.from(document.querySelectorAll('.blood'));
        bloods.forEach(blood => {
            blood.classList.remove('animated');
            void blood.offsetWidth;
            blood.classList.add('animated');
        });
    }
}

// Glitch text effect button listener.
const glitchButton = document.querySelector('.glitch-btn');
glitchButton.addEventListener('click', () => {
    const messages = Array.from(document.querySelectorAll('.message-text'));
    messages.forEach(message => {
        glitchText(message);
    });
});

//Add glitched class and attribute to passed text.
const glitchText = (text) => {
    text.classList.add('glitch');
    text.setAttribute('text-content', text.innerText);
}

// Add glitch listener to text divs button listener.
const glitchListenerButton = document.querySelector('.glitch-listener-btn');
glitchListenerButton.addEventListener('click', () => {
    const glitchables = Array.from(document.querySelectorAll('.glitchable'));
    glitchables.forEach(message => {
        message.addEventListener('click', () => {
            if (glitchedText) return;
            glitchedText = true;
            glitchText(message);
            processGlitchCount();
        });
    });
});

// Add dingbat listener to text divs button listener.
const dingbatListenerButton = document.querySelector('.dingbat-listener-btn');
dingbatListenerButton.addEventListener('click', () => {
    const glitchables = Array.from(document.querySelectorAll('.glitchable'));
    glitchables.forEach(message => {
        if (dingbatText) return;
        dingbatText = true; 
        message.addEventListener('click', () => {
            message.classList.add('dingbatted');
            message.innerText = shift(message.innerText, 1);
        });
    });
});

function shift(str, num) {
    // you can comment this line
    str = str.toLowerCase();

    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result;

}

let broken = false;

// Count the number of glitched items, and do other stuff accordingly.
const processGlitchCount = () => {
    const glitched = Array.from(document.querySelectorAll('.glitch'));
    if (glitched.length > 5 && !broken) {
        broken = true;
        startBleeding();
    }
}

// Animate all mia images.
const animateMias = (ani) => {
    const mias = Array.from(document.querySelectorAll('.mia'));
    mias.forEach(mia => {
        mia.classList.remove('mia-bleeding', 'mia-crying');
        void mia.offsetWidth;
    });

    switch (ani) {
        case 'bleeding':
            mias.forEach(mia => {
                mia.classList.add('mia-bleeding');
            });
            break;

        case 'crying':
            mias.forEach(mia => {
                mia.classList.add('mia-crying');
            });
            break;
    }
}

// Add reset local data button event listener.
const resetButton = document.querySelector('.reset-btn');
resetButton.addEventListener('click', () => {
    localStorage.clear();
});

// Add crying mia button event listener.
const cryingButton = document.querySelector('.mia-crying-btn');
cryingButton.addEventListener('click', () => {
    animateMias('crying');
});

// Add bleeding mia data button event listener.
const bleedingButton = document.querySelector('.mia-bleeding-btn');
bleedingButton.addEventListener('click', () => {
    animateMias('bleeding');
});

// Add bleeding mia data button event listener.
const channelButton = document.querySelector('.add-channel-btn');
channelButton.addEventListener('click', () => {
    addChannel('redacted', 5);
});

// Add a new local, custom channel.
const addChannel = (name, repeat) => {
    const textChannels = document.getElementById('text-channels');


    const newChannel = () => {
        const newChannel = document.createElement('div');
        newChannel.classList.add('text-channel', 'channel');
        newChannel.id = name;

        const hash = document.createElement('img');
        hash.classList.add('icon');
        hash.src = 'images/hashtag-base.png';

        const channelName = document.createElement('div');
        channelName.classList.add('text-channel-name', 'glitchable', 'glitch');
        channelName.innerText = name;
        channelName.style = 'color: white';

        newChannel.appendChild(hash);
        newChannel.appendChild(channelName);
        textChannels.appendChild(newChannel);

        newChannel.addEventListener('click', () => {
            alert('please dont touch that')
            animateMias('crying');
        });
    }

    // Start looping channel creation.
    const channelInterval = setInterval(newChannel, 500);

    // Stop creating channels after repeat limit.
    setTimeout(() => {
        clearInterval(channelInterval);
    }, 500 * repeat);
}

// Show the info panel on help button click.
const helpButton = document.querySelector('.help-btn');
helpButton.addEventListener('click', () => {
    const helpPanel = document.getElementById('help-panel');
    helpPanel.classList.toggle('hidden');
});

// Delete message on delete button click.
const deleteButtons = Array.from(document.querySelectorAll('.delete-message-btn'));
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const message = button.parentElement.querySelector('.message-text').innerText;
        sendData({ message: message });

        const messageBox = button.parentElement;
        messageBox.remove();
    });
});

// Redact random text if user if not member.
const texts = Array.from(document.querySelectorAll('.redacted-text'));
texts.forEach(message => {

    // Split the message on spaces.
    const messageArray = message.innerText.split(' ');

    // Clear the original message.
    message.innerText = '';

    // Cycle through words and randomly redact some.
    messageArray.forEach(word => {
        const newWord = document.createElement('span');
        
        const roll = Math.floor(Math.random() * 2);

        if (word !== ' ' && roll > 0) {
            newWord.classList.add('redacted-word');
        }

        newWord.innerText = word + ' ';
        message.appendChild(newWord);
    });
});


// Choose a random message from all messages, strike it through,
// add a random message and delete it from the DB.
const deleteRandomMessage = () => {
    const messages = Array.from(document.querySelectorAll('.message'));
    const index = Math.floor(Math.random() * messages.length);

    const message = messages[index];
    message.style.textDecoration = 'line-through';

    const text = message.querySelector('.message-text');

    // Send chosen message to DB to be deleted.
    //sendData({message: text.innerText});

    const quotes = [
        'ow ow ow this hurts',
        'please delete your internet',
        'touch grass before logging on again',
        'next time youre getting deleted in real life',
        'this guy respects women',
        'please visit greenland',
        '@god',
        'everything in moderation, even soy',
        'rule #35b: this is not bodybuilding.com',
        'rule #35a: this is not reddit'
    ]

    const quoteChoice = quotes[Math.floor(Math.random() * quotes.length)];

    const newMessage1 = document.createElement('div');
    newMessage1.innerText = 'removed by admin with message:';
    newMessage1.classList.add('correction', 'glitch');

    const newMessage = document.createElement('div');
    newMessage.innerText = quoteChoice;
    newMessage.classList.add('glitch');
    newMessage1.appendChild(newMessage);

    text.appendChild(newMessage1);
}

// Send the data of a message to be removed.
const sendData = (data) => {
    const XHR = new XMLHttpRequest();
    const FD = new FormData();

    // Push our data into our FormData object
    for (const [name, value] of Object.entries(data)) {
        FD.append(name, value);
    }

    // Define what happens in case of error
    XHR.addEventListener('error', (event) => {
        console.log('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open('POST', '/delete-message');

    // Send our FormData object; HTTP headers are set automatically
    XHR.send(FD);
}

const initialize = (() => {
    // Setup blood if animation has already played.
    if (localStorage.getItem('bloodActivated')) {
        const bloods = Array.from(document.querySelectorAll('.blood'));
        bloods.forEach(blood => {
            blood.classList.add('activated');
        });
    }

    // Setup whether mia's panel has been revealed or not.
    if (localStorage.getItem('miaControls')) {
        const controls = document.getElementById('mia-controls');
        controls.classList.add('shown');
    }
})();

let glitchedText = false;

// Setup server icon listeners for glitching out.
const serverIcons = Array.from(document.querySelectorAll('div.server-icon:not(.plus-server)'));
serverIcons.forEach(icon => {
    icon.addEventListener('click', () => {

        if (glitchedText) return;
        glitchedText = true; 

        animateMias('bleeding');

        const glitchables = Array.from(document.querySelectorAll('.glitchable'));
        glitchables.forEach(message => {
            message.addEventListener('click', () => {
                
                glitchText(message);
                processGlitchCount();
            });
        });
    });
});

let dingbatText = false;

// Setup icon listeners for glitching out.
const baseIcons = Array.from(document.querySelectorAll('.icon'));
baseIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (dingbatText) return;
        dingbatText = true; 
        const glitchables = Array.from(document.querySelectorAll('.glitchable'));
        glitchables.forEach(message => {
            message.addEventListener('click', () => {      
                message.classList.add('dingbatted');
                message.innerText = shift(message.innerText, 1);
            });
        });
    });
});

// Setup new server icon for adding glitched channels.
const serverButton = document.querySelector('.new-channel');
serverButton.addEventListener('click', () => {
    // Add a number of 'redacted' channels between 1 and 10.
    addChannel('redacted', Math.ceil(Math.random() * 10));
    
    animateMias('crying');
});

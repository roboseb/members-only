const gameLogic = (() => {
    const codeBox = document.getElementById('code-box');
    const refDigit = document.querySelector('.digit');

    const refHeight = refDigit.offsetHeight;

    // Set default code box height.
    codeBox.style.height = `${refHeight}px`;

    // Current positions for each scroller.
    let currentPositions = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    const downBtns = Array.from(document.querySelectorAll('.scroll-down'));
    downBtns.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Prevent overscrolling/
            if (currentPositions[index] + 1 > 9) {
                return;
            }

            const scroller = button.parentElement.querySelector('.scrolling');

            const position = currentPositions[index] + 1;


            const element = scroller.querySelector(`.number${position}`)

            element.scrollIntoView({ behavior: 'smooth' });

            currentPositions[index] += 1;

            //processPosition();
        });
    });


    const upBtns = Array.from(document.querySelectorAll('.scroll-up'));
    upBtns.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Prevent overscrolling/
            if (currentPositions[index] - 1 < 0) {
                return;
            }

            const scroller = button.parentElement.querySelector('.scrolling');

            const position = currentPositions[index] - 1;

            console.log(position)

            const element = scroller.querySelector(`.number${position}`)

            element.scrollIntoView({ behavior: 'smooth' });



            currentPositions[index] -= 1;

            processPosition();

        });
    });

    const processPosition = () => {
        console.log(currentPositions);

        const key = [7, 1, 1, 1, 4, 3, 7, 0, 5];

        let correct = true;

        currentPositions.forEach((position, index) => {
            if (key[index] !== position) {
                correct = false;
            }
        });

        const key2 = [5, 3, 1, 1, 1, 7, 4, 0, 4];

        let altCorrect = true;

        currentPositions.forEach((position, index) => {
            if (key2[index] !== position) {
                altCorrect = false;
            }
        });

        // Return whether entered code matches any key.
        if (correct) {
            return 'true1';
        } else if (altCorrect) {
            return 'true2';
        } else {
            return false;
        }
    }

    let member = false;

    // Add animations and membership application on button click.
    const applyButton = document.querySelector('.apply-btn');
    applyButton.addEventListener('click', () => {
        const codeBox = document.getElementById('code-box');

        codeBox.classList.remove('processed');
        void codeBox.offsetWidth;
        codeBox.classList.add('processed');

        // Animate all other elements based on code state.
        if (processPosition() === 'true1') {
            animateDigits('correct');
            updateButton('Membership Granted')

            const button = document.querySelector('.apply-btn');
            button.classList.add('granted');
            if (!member) {
                member = true;
                sendID({id: currentUser._id});
            }
            
        // Animate an incorrect code.
        } else if (!processPosition()) {
            animateDigits('wrong');
            updateButton();

            const button = document.querySelector('.apply-btn');
            button.classList.remove('granted');

        // Animate a correct alternate code.
        } else {
            animateDigits('correct');
            updateButton('wrong answer but we&#39ll give you this&#33');

            localStorage.setItem('miaControls', true);

            const button = document.querySelector('.apply-btn');
            button.classList.add('granted', 'glitch', 'dingbatted');
        }
    });

    // Change the apply button's inner text to a given message.
    const updateButton = (message) => {
        const button = document.querySelector('.apply-btn');

        const texts = [
            'wrong',
            'not even close',
            'i can see the answer from here',
            "actually, dont apply",
            "confirmed: you are not jeff sitar",
            "just under a billion possibilites left",
            "you might do better with some dice",
            "do you like hurting other people?",
            "GOTTA GET A GRIP",
            "funyarinpa?",
            "actually im santa",
            "MEMENTO MORI, IF THE NINETH LION ATE THE SUN",
            "THE MAN ON THE MOON RULES THE INFINITE TIME",
            "11037",
            "i refuse to acknowledge you! you're stupid! stupid! stupid stupid stupid! stupidstupidstupidstupidstupidstupidstupid!!!"
        ]

        button.classList.remove('clicked');
        void button.offsetWidth;
        button.classList.add('clicked');

        // Display a random message, unless one is passed.
        if (message) {
            button.innerText = message;
        } else {
            const choice = texts[Math.floor(Math.random() * texts.length)];
            button.innerText = choice;
        }
    }

    const animateDigits = (state) => {
        const digits = Array.from(document.querySelectorAll('.scrolling'));
        digits.forEach((digit, index) => {
            digit.classList.remove('correct', 'wrong');
            void digit.offsetWidth;

            digit.style.animationDelay = `${(index * 40) + 20}ms`;

            digit.classList.add(state);
        });

        const boxes = Array.from(document.querySelectorAll('.code-input-box'));
        boxes.forEach((box, index) => {
            box.classList.remove('processed');
            void box.offsetWidth;

            box.style.animationDelay = `${(index * 40) + 20}ms`;

            box.classList.add('processed');
        });

        const upButtons = Array.from(document.querySelectorAll('.scroll-up'));
        upButtons.forEach((button, index) => {
            button.classList.remove('processed');
            void button.offsetWidth;

            button.style.animationDelay = `${(index * 40) + 20}ms`;

            button.classList.add('processed');
        });


        const downButtons = Array.from(document.querySelectorAll('.scroll-down'));
        downButtons.forEach((button, index) => {
            button.classList.remove('processed');
            void button.offsetWidth;

            button.style.animationDelay = `${(index * 40) + 20}ms`;

            button.classList.add('processed');
        });

        const codeBox = document.getElementById('code-box');
        if (state === 'correct') {
            codeBox.classList.add('dancing');
        } else {
            codeBox.classList.remove('dancing');
        }
    }

    // Send the data of a message to be removed.
    const sendID = (data) => {
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
        XHR.open('POST', '/memberize');

        // Send our FormData object; HTTP headers are set automatically
        XHR.send(FD);
    }
})();


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

            console.log(position)

            const element = scroller.querySelector(`.number${position}`)

            element.scrollIntoView({ behavior: 'smooth' });

            currentPositions[index] += 1;

            processPosition();
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

        if (correct) {
            alert('you got it!')
        }
    }
})();


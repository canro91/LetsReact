window.addEventListener('load', () => {
    console.log('loaded...');
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const colors = [
        '#D5573B',
        '#885053',
        '#777da7',
        '#94c9a9',
        '#c6ecae',
        '#e0fbfc'
    ];
    const visual = document.querySelector('.visual');

    const createBubble = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);  
        });
    };

    const playAndAnimate = (index) => {
        let sound = sounds[index];
        sound.currentTime = 0;
        sound.play();

        createBubble(index);
    };

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            playAndAnimate(index);
        });
    });

    document.addEventListener('keydown', function(event){
        if (event.isComposing || event.keyCode === 229) {
            return;
        }

        if (event.code == 'Digit1') {
            playAndAnimate(0);
        }
        if (event.code == 'Digit2') {
            playAndAnimate(1);
        }
        if (event.code == 'Digit3') {
            playAndAnimate(2);
        }
        if (event.code == 'Digit4') {
            playAndAnimate(3);
        }
        if (event.code == 'Digit5') {
            playAndAnimate(4);
        }
        if (event.code == 'Digit6') {
            playAndAnimate(5);
        }
    });
});
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

    pads.forEach((pad, index) => {
        console.log(pad);
        pad.addEventListener('click', function () {
            let sound = sounds[index];
            sound.currentTime = 0;
            sound.play();

            createBubble(index);
        });
    });
});
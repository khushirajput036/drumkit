function playSound(event) {
    const keyCode = event.keyCode; 
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`); 
    const key = document.querySelector(`.key[data-key="${keyCode}"]`); 

    console.log('Key pressed:', keyCode); 

    if (!audio) {
        console.log(`No audio found for key code: ${keyCode}`); 
        return; 
    }

    console.log('Audio file source:', audio.src);

    audio.currentTime = 0; 
    audio.play().then(() => {
        console.log('Audio played!'); 
    }).catch((error) => {
        console.error('Error playing audio:', error); 
    });

    if (key) {
        key.classList.add('playing'); 
    }
}

window.addEventListener('keydown', playSound);

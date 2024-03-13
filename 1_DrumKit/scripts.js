window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if(!audio) return; // não retorna nada, para a função
    audio.currentTime = 0 // diminu
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    // this pega a div inteira
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
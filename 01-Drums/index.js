const keys = Array.from(document.querySelectorAll('.key'));

function playDrum(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
  if (!audio) {
    return
  }
  // rewind to start
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition() {
  if (event.propertyName !== 'transform') {
    return
  };
  event.target.classList.remove('playing');
}

window.addEventListener('keydown', playDrum);

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

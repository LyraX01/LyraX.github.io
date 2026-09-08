const video = document.querySelector('#background-video');
const soundButton = document.querySelector('#sound-toggle');
const volume = document.querySelector('#volume');
const enterButton = document.querySelector('#enter-button');
const bio = document.querySelector('#bio');

video.volume = volume.value;
video.muted = false;
video.play().catch(() => { soundButton.textContent = '🔇'; });

soundButton.addEventListener('click', () => {
  video.muted = !video.muted;
  soundButton.textContent = video.muted ? '🔇' : '🔊';
  if (!video.muted) video.play();
});

volume.addEventListener('input', () => {
  video.volume = volume.value;
  video.muted = false;
  soundButton.textContent = '🔊';
});

enterButton.addEventListener('click', () => {
  video.muted = false;
  video.play();
  soundButton.textContent = '🔊';
  enterButton.classList.add('hide');
  bio.classList.add('show');
  bio.setAttribute('aria-hidden', 'false');
});

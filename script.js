const video = document.querySelector('#background-video');
const soundButton = document.querySelector('#sound-toggle');
const volume = document.querySelector('#volume');
const enterButton = document.querySelector('#enter-button');
const bio = document.querySelector('#bio');

// Başlangıçta YouTube videosu sessiz
let muted = true;

soundButton.addEventListener('click', () => {
  muted = !muted;

  if (muted) {
    soundButton.textContent = '🔇';
  } else {
    soundButton.textContent = '🔊';
  }

  // YouTube iframe'i yeniden yükleyerek sesi değiştir
  const currentSrc = video.src;
  video.src = currentSrc.replace(/mute=\d/, `mute=${muted ? 1 : 0}`);
});

volume.addEventListener('input', () => {
  // YouTube iframe üzerinden gerçek ses seviyesi kontrolü yapılamaz.
  // Ses açma/kapama butonu kullanılabilir.
});

enterButton.addEventListener('click', () => {
  enterButton.classList.add('hide');
  bio.classList.add('show');
  bio.setAttribute('aria-hidden', 'false');

  // YouTube videosunu oynat
  const currentSrc = video.src;
  if (!currentSrc.includes('autoplay=1')) {
    video.src = currentSrc + '&autoplay=1';
  }
});

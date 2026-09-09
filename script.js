let player;
let playerReady = false;

const soundButton = document.querySelector('#sound-toggle');
const volume = document.querySelector('#volume');
const enterButton = document.querySelector('#enter-button');
const bio = document.querySelector('#bio');

let isMuted = true;

/* YouTube API hazır olduğunda çalışır */
function onYouTubeIframeAPIReady() {

  player = new YT.Player('background-video', {

    videoId: 'jodJzaVZfj8',

    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      playlist: 'jodJzaVZfj8',
      rel: 0,
      playsinline: 1,
      modestbranding: 1
    },

    events: {
      onReady: function(event) {

        playerReady = true;

        event.target.mute();
        event.target.setVolume(Number(volume.value));

        event.target.playVideo();

        soundButton.textContent = '🔇';
      }
    }
  });
}


/* Ses aç/kapat */
soundButton.addEventListener('click', function(event) {

  event.stopPropagation();

  if (!playerReady) return;

  if (isMuted) {

    player.unMute();
    player.setVolume(Number(volume.value));

    isMuted = false;

    soundButton.textContent = '🔊';

  } else {

    player.mute();

    isMuted = true;

    soundButton.textContent = '🔇';
  }
});


/* Ses seviyesi */
volume.addEventListener('input', function() {

  if (!playerReady) return;

  const newVolume = Number(this.value);

  player.setVolume(newVolume);

  if (newVolume === 0) {

    player.mute();

    isMuted = true;

    soundButton.textContent = '🔇';

  } else {

    player.unMute();

    isMuted = false;

    soundButton.textContent = '🔊';
  }
});


/* Giriş butonu */
enterButton.addEventListener('click', function() {

  /* Kullanıcı tıklaması olduğu için burada ses açılabilir */
  if (playerReady) {

    player.unMute();

    player.setVolume(Number(volume.value));

    player.playVideo();

    isMuted = false;

    soundButton.textContent = '🔊';
  }

  /* Giriş ekranını kaldır */
  enterButton.classList.add('hide');

  /* Bio ekranını göster */
  bio.classList.add('show');

  bio.setAttribute('aria-hidden', 'false');
});

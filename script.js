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
volume.addEventListener('input', () => { video.volume = volume.value; video.muted = false; soundButton.textContent = '🔊'; });
enterButton.addEventListener('click', () => { video.muted = false; video.play(); soundButton.textContent = '🔊'; enterButton.classList.add('hide'); bio.classList.add('show'); bio.setAttribute('aria-hidden', 'false'); });
const discordId = "740538796558385242";

fetch(`https://api.lanyard.rest/v1/users/${discordId}`)
  .then(response => response.json())
  .then(data => {
    if (data.success && data.data.discord_user) {
      const user = data.data.discord_user;

      if (user.avatar) {
        const extension = user.avatar.startsWith("a_") ? "gif" : "png";

        document.getElementById("discord-avatar").src =
          `https://cdn.discordapp.com/avatars/${discordId}/${user.avatar}.${extension}?size=256`;
      }
    }
  })
  .catch(error => {
    console.log("Discord profil fotoğrafı alınamadı:", error);
  });

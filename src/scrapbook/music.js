/* Smiski Yarn Scrapbook — looping background music.
   One track (Kirby's Epic Yarn — Tempest Towers), loops forever. A speaker
   button toggles play/pause and a themed slider controls volume.

   Browsers block audio with sound until the page receives a user-activation
   gesture, so the initial autoplay attempt may be rejected. When that happens
   the music simply waits for the visitor to press the play button. */

const TRACK = "/songs/Kirby's Epic Yarn - Tempest Towers (Butter Building).mp3";
const DEFAULT_VOLUME = 0.5;

export function initMusic() {
  const dock = document.getElementById('music-dock');
  if (!dock || dock.dataset.inited === 'true') return;
  dock.dataset.inited = 'true';

  const btn = dock.querySelector('.music-toggle');
  const slider = dock.querySelector('.music-volume');

  const audio = new Audio(TRACK);
  audio.loop = true;
  audio.volume = DEFAULT_VOLUME;
  slider.value = String(DEFAULT_VOLUME);

  audio.addEventListener('error', () => {
    console.error('Background music failed to load:', TRACK);
  });

  // Reflect playing/paused/muted in the icon + accessible label.
  const render = () => {
    const muted = audio.volume === 0;
    const playing = !audio.paused;
    if (playing) delete dock.dataset.hint; // dismiss the "psst…" nudge for good
    dock.dataset.state = muted ? 'muted' : playing ? 'playing' : 'paused';
    btn.setAttribute(
      'aria-label',
      playing ? 'Pause background music' : 'Play background music'
    );
    btn.setAttribute('aria-pressed', playing ? 'true' : 'false');
  };

  // Attempt autoplay; if the browser blocks it, the play button starts it.
  audio.play().then(render).catch(() => {});

  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().then(render).catch(() => {});
    } else {
      audio.pause();
      render();
    }
  });

  slider.addEventListener('input', () => {
    audio.volume = Number(slider.value);
    render();
  });

  audio.addEventListener('play', render);
  audio.addEventListener('pause', render);

  render();
}

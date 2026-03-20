// ── MUSIC PLAYER ──────────────────────────────────────────────
const audio = document.getElementById('bgMusic');
const vinylEl = document.getElementById('vinyl');
const iconEl = document.getElementById('musicIcon');
const statusEl = document.getElementById('musicStatus');
let playing = false;

function setPlaying(state) {
    playing = state;
    if (state) {
        vinylEl.classList.add('spin');
        iconEl.textContent = '⏸';
        statusEl.textContent = 'Sedang putar ♪';
    } else {
        vinylEl.classList.remove('spin');
        iconEl.textContent = '▶';
        statusEl.textContent = 'Dijeda ♪';
    }
}

function toggleMusic() {
    if (playing) {
        audio.pause();
        setPlaying(false);
    } else {
        audio.play()
            .then(() => setPlaying(true))
            .catch(() => { });
    }
}

// Auto-play saat halaman dibuka
window.addEventListener('load', () => {
    audio.volume = 0.65;
    audio.play()
        .then(() => setPlaying(true))
        .catch(() => {
            // Browser blokir autoplay — fallback ke interaksi pertama user
            document.addEventListener('click', function startAudio() {
                if (!playing) {
                    audio.volume = 0.65;
                    audio.play()
                        .then(() => setPlaying(true))
                        .catch(() => { });
                }
            }, { once: true });
        });
});

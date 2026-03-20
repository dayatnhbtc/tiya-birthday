// ── SLIDE SYSTEM ───────────────────────────────────────────────
const slides = document.querySelectorAll('.slide');
const TOTAL = slides.length;
let current = 0;
let unlocked = false;

// Build progress dots
const progressEl = document.getElementById('progress');
for (let i = 0; i < TOTAL; i++) {
    const d = document.createElement('div');
    d.className = 'dot';
    if (i === 0) d.classList.add('active');
    d.addEventListener('click', () => goTo(i));
    progressEl.appendChild(d);
}

function updateNav() {
    const showNav = current >= 2;
    document.getElementById('nav').style.display = showNav ? 'flex' : 'none';
    document.getElementById('counter').style.display = showNav ? 'block' : 'none';
    document.getElementById('swipeHint').style.display = current === 2 ? 'block' : 'none';

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.disabled = current <= 2;
    if (nextBtn) nextBtn.disabled = current >= TOTAL - 1;

    const counter = document.getElementById('counter');
    if (counter) counter.textContent = `${current - 1} / ${TOTAL - 2}`;

    document.querySelectorAll('.dot').forEach((d, i) => {
        d.className = 'dot';
        if (i === current) d.classList.add('active');
        else if (i < current) d.classList.add('done');
    });
}

function goTo(idx, skipAnim = false) {
    if (idx < 0 || idx >= TOTAL) return;
    if (idx === 1 && unlocked) idx = 2; // skip password slide if already unlocked
    const prev = slides[current];
    const next = slides[idx];
    prev.classList.add('exit');
    setTimeout(() => {
        prev.classList.remove('active', 'exit');
        current = idx;
        next.classList.add('active');
        updateNav();
    }, skipAnim ? 0 : 400);
}

function nextSlide() { if (current < TOTAL - 1) goTo(current + 1); }
function prevSlide() { if (current > 2) goTo(current - 1); }

// ── SWIPE / TOUCH ─────────────────────────────────────────────
let touchX = 0, touchY = 0;
document.addEventListener('touchstart', e => {
    touchX = e.touches[0].clientX;
    touchY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', e => {
    if (current < 2) return;
    const dx = e.changedTouches[0].clientX - touchX;
    const dy = e.changedTouches[0].clientY - touchY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx < 0) nextSlide();
        else prevSlide();
    }
}, { passive: true });

// ── KEYBOARD ──────────────────────────────────────────────────
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// ── SPARKLES ON BIRTHDAY SLIDE ────────────────────────────────
function spawnSparkle(parent) {
    const s = document.createElement('span');
    s.textContent = ['✦', '✧', '·', '✨'][Math.floor(Math.random() * 4)];
    s.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        font-size: ${Math.random() * 14 + 8}px;
        color: rgba(201,169,110,${Math.random() * 0.7 + 0.3});
        pointer-events: none;
        animation: sparkle ${Math.random() * 2 + 1.5}s ease-in-out infinite;
        animation-delay: ${Math.random() * 2}s;
        z-index: 0;
    `;
    parent.appendChild(s);
}

const birthdaySlide = document.querySelector('[data-slide="15"]');
if (birthdaySlide) {
    birthdaySlide.style.position = 'relative';
    for (let i = 0; i < 18; i++) spawnSparkle(birthdaySlide);
}

// Initial state
updateNav();

// ── CLUE / TREASURE HUNT ──────────────────────────────────────
const CLUES = {
    lemari: '👗 Kadonya belum sampai rumah sayang — masih di DC Cakung dulu. Jadi clue kali ini: sabar bentar yaa, hadiahmu lagi otw ke kamu 🤍',
    bantal: '🛏️ Kadonya belum sampai rumah sayang — masih di DC Cakung dulu. Jadi clue kali ini: sabar bentar yaa, hadiahmu lagi otw ke kamu 🤍',
    sajadah: '🧎 Kadonya belum sampai rumah sayang — masih di DC Cakung dulu. Jadi clue kali ini: sabar bentar yaa, hadiahmu lagi otw ke kamu 🤍',
};

function showClue(type) {
    const reveal = document.getElementById('clueReveal');
    const text = document.getElementById('clueText');

    text.textContent = CLUES[type];
    reveal.classList.add('show');
    reveal.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // highlight selected button, dim others
    document.querySelectorAll('.clue-opt').forEach(btn => btn.style.opacity = '0.4');
    event.currentTarget.style.opacity = '1';
    event.currentTarget.style.borderColor = 'var(--gold-light)';
}

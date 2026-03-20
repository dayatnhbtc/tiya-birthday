// ── CLUE / TREASURE HUNT ──────────────────────────────────────
const CLUES = {
    lemari: '👗 Cari di tempat di mana pakaian kita tersimpan — buka pelan-pelan, ada yang menunggu di sana.',
    bantal: '🛏️ Cek di tempat kepala kita beristirahat setiap malam — angkat bantalmu ya, ada kejutan di bawahnya!',
    sajadah: '🧎 Temukan di tempat kita biasa bersujud berdua — cek di bawah atau di lipatan sajadah kita.',
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

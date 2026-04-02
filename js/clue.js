// ── CLUE / GIFT REVEAL ───────────────────────────────────────
const CLUE_STEPS = {
    wrong: {
        badge: '?',
        text: 'Plot twist: bukan di lemari, bukan di bawah bantal, dan bukan di sajadah juga 😆 Aku memang sudah beli hadiahnya — cuma aku naruhnya agak ngasal.',
        showAction: false,
    },
    real: {
        badge: '🧳',
        text: 'Clue yang bener: cek koperku yaa 🤍 Kadonya sudah ada di sana. Memang belum aku pack dengan proper, jadi kemungkinan kamu belum kepikiran buat buka itu.',
        showAction: true,
    },
};

function showClueStep(step, event) {
    const reveal = document.getElementById('clueReveal');
    const text = document.getElementById('clueText');
    const badge = document.getElementById('clueBadge');
    const actionBtn = document.getElementById('clueActionBtn');
    const config = CLUE_STEPS[step];

    if (!config) return;

    text.textContent = config.text;
    badge.textContent = config.badge;
    reveal.classList.add('show');
    actionBtn.style.display = config.showAction ? 'inline-flex' : 'none';
    reveal.scrollIntoView({ behavior: 'smooth', block: 'center' });

    document.querySelectorAll('.clue-opt').forEach(btn => {
        btn.style.opacity = '0.55';
        btn.style.borderColor = 'rgba(201, 169, 110, 0.3)';
    });

    if (event?.currentTarget) {
        event.currentTarget.style.opacity = '1';
        event.currentTarget.style.borderColor = 'var(--gold-light)';
    }
}

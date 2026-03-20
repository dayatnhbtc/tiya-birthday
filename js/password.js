// ── PASSWORD GATE ──────────────────────────────────────────────
const ANSWER = '30032026';

function checkPassword() {
    const input = document.getElementById('pwInput');
    const val = input.value.replace(/\D/g, '');
    input.value = val;

    document.getElementById('errMsg').classList.remove('show');
    input.classList.remove('error');

    if (val.length === 8) {
        if (val === ANSWER) {
            unlocked = true;
            input.blur();                               // tutup keyboard Android
            document.activeElement && document.activeElement.blur();
            setTimeout(() => goTo(2), 120);             // jeda agar keyboard turun dulu
        } else {
            input.classList.add('error');
            document.getElementById('errMsg').classList.add('show');
            setTimeout(() => { input.value = ''; }, 800);
        }
    }
}

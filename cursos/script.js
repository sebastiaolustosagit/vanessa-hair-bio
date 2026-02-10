/**
 * Vanessa Barreto - Cursos
 */

document.addEventListener('DOMContentLoaded', () => {
    initYear();
});

function initYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
}

/**
 * Vanessa Barreto - Bio
 */

document.addEventListener('DOMContentLoaded', () => {
  initYear();
});

/* ==========================================
   UTILS
   ========================================== */

function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* =============================================
   reveal.js — Scroll-triggered Reveal Animations
   ============================================= */

const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', checkReveal);
window.addEventListener('load',   checkReveal);

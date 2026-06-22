/* =============================================
   typed.js — Typewriter Animation
   ============================================= */

const typedEl = document.querySelector('.typed-text');
const words   = PORTFOLIO.typedWords;

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typedEl.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 55 : 110;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting  = false;
    wordIndex   = (wordIndex + 1) % words.length;
    speed       = 500;
  }

  setTimeout(typeLoop, speed);
}

/* Start after a short delay so the page load animation plays first */
setTimeout(typeLoop, 1200);

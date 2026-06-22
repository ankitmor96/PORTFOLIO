/* =============================================
   cursor.js — Custom Animated Cursor
   ============================================= */

const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

/* Instantly move the dot */
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top  = mouseY + 'px';
});

/* Smoothly lag the ring */
(function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
})();

/* Expand ring on interactive elements */
const interactives = 'a, button, .service-card, .tool-card, .skill-cat, .contact-item';
document.querySelectorAll(interactives).forEach((el) => {
  el.addEventListener('mouseenter', () => {
    ring.style.width   = '60px';
    ring.style.height  = '60px';
    ring.style.opacity = '0.3';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width   = '40px';
    ring.style.height  = '40px';
    ring.style.opacity = '0.6';
  });
});

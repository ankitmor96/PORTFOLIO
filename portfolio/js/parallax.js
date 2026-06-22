/* =============================================
   parallax.js — Mouse Parallax on Home Image
   ============================================= */

window.addEventListener('mousemove', (e) => {
  const img = document.querySelector('.home-image');
  if (!img) return;

  const x = (e.clientX / window.innerWidth  - 0.5) * 18;
  const y = (e.clientY / window.innerHeight - 0.5) * 18;

  img.style.transform = `translate(${x}px, ${y}px)`;
});

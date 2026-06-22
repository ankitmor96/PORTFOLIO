/* =============================================
   loader.js — Page Loading Screen
   ============================================= */

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('pageLoader').classList.add('done');
  }, 1600);
});

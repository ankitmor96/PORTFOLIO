/* =============================================
   modals.js — Open/Close CV & Service Modals
   ============================================= */

/* Open any modal by id */
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* Close any modal by id */
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

/* Click outside modal content to close */
document.querySelectorAll('.modal-overlay, .svc-modal').forEach((overlay) => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

/* ESC key closes all modals */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal('cvModal');
    closeModal('svcModal');
  }
});

/* ---- CV Download ---- */
function downloadCV() {
  showToast('CV download started!');
  closeModal('cvModal');
  // Replace the line below with: window.open('./assets/AnkitMor_CV.pdf', '_blank');
  const a = document.createElement('a');
  a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(
    'Ankit Mor — Full Stack Developer\nEmail: ankitmor@example.com\n[Replace this with your real CV PDF]'
  );
  a.download = 'AnkitMor_CV.txt';
  a.click();
}

/* ---- Service Modal ---- */
const svcData = PORTFOLIO.services;

function openSvcModal(index) {
  const s = svcData[index];
  document.getElementById('svcModalIcon').innerHTML  = s.icon;
  document.getElementById('svcModalTitle').textContent = s.title;
  document.getElementById('svcModalDesc').textContent  = s.desc;
  document.getElementById('svcModalTags').innerHTML   =
    s.tags.map((t) => `<span class="tech-tag">${t}</span>`).join('');
  openModal('svcModal');
}

/* =============================================
   contact.js — Contact Form Logic
   ============================================= */

const contactForm = document.getElementById('contactForm');
const msgArea     = document.getElementById('fmessage');
const charCount   = document.getElementById('charCount');

/* Live character counter */
msgArea?.addEventListener('input', () => {
  charCount.textContent = msgArea.value.length;
});

/* Form submission */
contactForm?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name    = document.getElementById('fname').value.trim();
  const email   = document.getElementById('femail').value.trim();
  const subject = document.getElementById('fsubject').value.trim();
  const message = document.getElementById('fmessage').value.trim();
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /* Validation */
  if (!name)                    { showToast('Please enter your name.');         return; }
  if (!email || !emailReg.test(email)) { showToast('Please enter a valid email.'); return; }
  if (!subject)                 { showToast('Please enter a subject.');         return; }
  if (!message)                 { showToast('Please write a message.');         return; }

  /* Loading state */
  const btn = document.getElementById('sendBtn');
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  btn.disabled  = true;

  /* Simulate send (replace with real API call e.g. EmailJS / Formspree) */
  setTimeout(() => {
    document.getElementById('formView').style.display    = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }, 1800);
});

/* Reset form after success */
function resetForm() {
  contactForm.reset();
  charCount.textContent = '0';

  const btn = document.getElementById('sendBtn');
  btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
  btn.disabled  = false;

  document.getElementById('formView').style.display    = '';
  document.getElementById('formSuccess').style.display = 'none';
}

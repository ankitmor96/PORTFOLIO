/* =============================================
   skills.js — Skill Bars & Filter Tabs
   ============================================= */

const allSkills = PORTFOLIO.skills;
let skillsAnimated = false;

/* Build skill bar HTML for a given category */
function renderSkills(cat) {
  const barsContainer = document.getElementById('skillBars');
  const filtered = cat === 'all'
    ? allSkills
    : allSkills.filter((s) => s.cat === cat);

  barsContainer.innerHTML = filtered.map((s) => `
    <div class="skill-item">
      <div class="skill-info">
        <h3>${s.name}</h3>
        <span>${s.pct}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress" data-w="${s.pct}"></div>
      </div>
    </div>
  `).join('');

  skillsAnimated = false;
  checkSkillAnimation();
}

/* Animate bars when skills section enters viewport */
function checkSkillAnimation() {
  if (skillsAnimated) return;

  const section = document.getElementById('skills');
  if (!section) return;

  if (section.getBoundingClientRect().top < window.innerHeight - 80) {
    document.querySelectorAll('.progress').forEach((bar) => {
      bar.style.width = bar.dataset.w + '%';
    });
    skillsAnimated = true;
  }
}

/* Filter button click */
function filterSkills(cat, el) {
  document.querySelectorAll('.skill-cat').forEach((btn) => btn.classList.remove('active'));
  el.classList.add('active');
  renderSkills(cat);
}

window.addEventListener('scroll', checkSkillAnimation);
window.addEventListener('load',   checkSkillAnimation);

/* Initial render */
renderSkills('all');

/* =============================================
   data.js — All Portfolio Content / Data
   Edit this file to update your portfolio info
   ============================================= */

const PORTFOLIO = {

  /* ---- Personal Info ---- */
  name:     'Ankit Mor',
  title:    'Full Stack Developer',
  email:    'ankitmor@example.com',
  phone:    '+91 99999 99999',
  location: 'Gujarat, India',
  cv:       './assets/AnkitMor_CV.pdf',   // ← Replace with real CV path

  /* ---- Typed Roles ---- */
  typedWords: [
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Web Designer',
  ],

  /* ---- Social Links ---- */
  social: {
    instagram: 'https://instagram.com',
    whatsapp:  'https://wa.me/919999999999',
    facebook:  'https://facebook.com',
    github:    'https://github.com',
    linkedin:  'https://linkedin.com',
  },

  /* ---- Skills ---- */
  skills: [
    { name: 'HTML',          pct: 90, cat: 'frontend' },
    { name: 'CSS / SCSS',    pct: 85, cat: 'frontend' },
    { name: 'JavaScript',    pct: 75, cat: 'frontend' },
    { name: 'React.js',      pct: 65, cat: 'frontend' },
    { name: 'Node.js',       pct: 70, cat: 'backend'  },
    { name: 'Express.js',    pct: 68, cat: 'backend'  },
    { name: 'MongoDB',       pct: 60, cat: 'backend'  },
    { name: 'REST APIs',     pct: 72, cat: 'backend'  },
    { name: 'Git & GitHub',  pct: 80, cat: 'tools'    },
    { name: 'VS Code',       pct: 88, cat: 'tools'    },
  ],

  /* ---- Services ---- */
  services: [
    {
      icon:  '<i class="fa-solid fa-code"></i>',
      title: 'Web Development',
      desc:  `I build complete, production-ready web applications from scratch — handling everything from UI design to server logic and database management. My web applications are fast, scalable, and built with clean, maintainable code.

Every project starts with understanding your goals, then translating them into a robust technical solution. I use the latest tools and frameworks to ensure your site is secure, performant, and future-proof.`,
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'REST API', 'SEO'],
    },
    {
      icon:  '<i class="fa-solid fa-palette"></i>',
      title: 'Frontend Development',
      desc:  `I create pixel-perfect, highly interactive user interfaces that look great on every device. From smooth animations to complex state management, I turn designs into reality with exceptional attention to detail.

User experience is at the core of my frontend work. I focus on intuitive navigation, fast load times, and accessible interfaces that work for everyone.`,
      tags: ['React.js', 'HTML5', 'CSS3 / SCSS', 'JavaScript ES6+', 'Tailwind CSS', 'Responsive Design', 'GSAP', 'Framer Motion'],
    },
    {
      icon:  '<i class="fa-solid fa-server"></i>',
      title: 'Backend Development',
      desc:  `I build secure, high-performance server-side applications with well-structured REST APIs, robust authentication systems, and optimized database architecture.

Whether you need a simple API or a complex microservices architecture, I design backend systems that scale with your business and protect your data.`,
      tags: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'JWT Auth', 'REST APIs', 'Cloud Hosting', 'Middleware'],
    },
  ],

};

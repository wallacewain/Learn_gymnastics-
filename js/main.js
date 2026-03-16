// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks && navLinks.classList.remove('open'));
});

// Sticky navbar shadow
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 2px 16px rgba(0,0,0,0.12)'
      : '0 2px 12px rgba(0,0,0,0.08)';
  });
}

// Skill card accordion
document.querySelectorAll('.skill-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.nextElementSibling;
    const isOpen  = details.classList.contains('open');

    // Close all others in same level
    const group = btn.closest('.level-group');
    group.querySelectorAll('.skill-details.open').forEach(d => d.classList.remove('open'));
    group.querySelectorAll('.skill-toggle.open').forEach(b => b.classList.remove('open'));

    if (!isOpen) {
      details.classList.add('open');
      btn.classList.add('open');
      // Smooth scroll skill into view
      btn.closest('.skill-card').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});

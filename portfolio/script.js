// ===== Smooth scrolling for nav links =====
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Highlight the active nav link based on scroll position =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

function highlightActiveLink() {
  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // offset for header height
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightActiveLink);

// ===== Show/hide a "back to top" button =====
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '↑';
backToTopBtn.id = 'back-to-top';
backToTopBtn.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Dynamic footer year (small ES6+ touch) =====
const footerText = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footerText.textContent = footerText.textContent.replace('2026', currentYear);
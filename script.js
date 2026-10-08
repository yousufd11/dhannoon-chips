// Find all the story sections.
const sections = document.querySelectorAll('.step');
const progressBar = document.querySelector('.progress');

// Only hide sections when JavaScript is available.
document.body.classList.add('js');

function showSections() {
  // Calculate how much of the page has been scrolled.
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = window.scrollY / Math.max(scrollableHeight, 1);
  progressBar.style.transform = 'scaleX(' + Math.max(0, Math.min(progress, 1)) + ')';

  sections.forEach(function(section) {
    const position = section.getBoundingClientRect().top;

    // Show a section when it is close to entering the screen.
    if (position < window.innerHeight - 50) {
      section.classList.add('visible');
    }
  });
}

// Check the sections whenever the visitor scrolls or resizes the window.
window.addEventListener('scroll', showSections, { passive: true });
window.addEventListener('resize', showSections);
showSections();

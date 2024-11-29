// Show "Back to Top" button when scrolling
window.addEventListener('scroll', () => {
  const backToTopButton = document.getElementById('back-to-top');
  if (window.scrollY > 200) {
      backToTopButton.classList.add('scrolled');
  } else {
      backToTopButton.classList.remove('scrolled');
  }
});

// Scroll to top when clicked
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

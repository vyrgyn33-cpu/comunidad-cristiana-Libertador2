document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const el = document.querySelector(a.getAttribute('href'));
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  function onScroll() {
    reveals.forEach(el => {
      const { top, bottom } = el.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) {
        el.classList.add('reveal_active');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll();
});

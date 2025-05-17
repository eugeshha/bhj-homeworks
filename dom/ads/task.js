document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.rotator').forEach(rotator => {
    const items = Array.from(rotator.querySelectorAll('.rotator__case'));
    let idx = items.findIndex(el => el.classList.contains('rotator__case_active'));
    if (idx < 0) idx = 0;

    function next() {
      items[idx].classList.remove('rotator__case_active');
      idx = (idx + 1) % items.length;
      const cur = items[idx];
      cur.classList.add('rotator__case_active');
      const color = cur.dataset.color;
      if (color) rotator.style.color = color;
      const speed = parseInt(cur.dataset.speed, 10) || 1000;
      setTimeout(next, speed);
    }

    const first = items[idx];
    if (first.dataset.color) rotator.style.color = first.dataset.color;
    setTimeout(next, parseInt(first.dataset.speed, 10) || 1000);
  });
});

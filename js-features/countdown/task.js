// task.js
document.addEventListener('DOMContentLoaded', () => {
  const timerEl = document.getElementById('timer');
  let totalSeconds = parseInt(timerEl.textContent, 10);

  function formatHMS(sec) {
    const hours   = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;
    return String(hours).padStart(2, '0')
      + ':' + String(minutes).padStart(2, '0')
      + ':' + String(seconds).padStart(2, '0');
  }

  timerEl.textContent = formatHMS(totalSeconds);

  const id = setInterval(() => {
    totalSeconds--;

    if (totalSeconds < 0) {
      clearInterval(id);
      alert('Вы победили в конкурсе!');

      const a = document.createElement('a');
      a.href = 'https://';
      a.download = '';
      a.target = '_blank';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      return;
    }

    timerEl.textContent = formatHMS(totalSeconds);
  }, 1000);
});

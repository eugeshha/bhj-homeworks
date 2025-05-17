// task.js
document.addEventListener('DOMContentLoaded', () => {
  const counterEl = document.getElementById('clicker__counter');
  const cookieEl  = document.getElementById('cookie');
  const statusEl  = document.querySelector('.clicker__status');

  let clicks       = 0;     
  let isShrunk     = false; 
  let lastClickAt  = null;   

  const speedContainer = document.createElement('div');
  speedContainer.innerHTML = 'Скорость клика: <span id="clicker__speed">0</span> кл/сек';
  statusEl.appendChild(speedContainer);
  const speedEl = document.getElementById('clicker__speed');

  cookieEl.addEventListener('click', () => {
    clicks += 1;
    counterEl.textContent = clicks;

    const baseSize = 200;
    const smallSize = Math.round(baseSize * 0.9); 
    cookieEl.width = isShrunk ? baseSize : smallSize;
    isShrunk = !isShrunk;

    const now = Date.now();
    if (lastClickAt !== null) {
      const deltaSec = (now - lastClickAt) / 1000;
      const cps = (1 / deltaSec).toFixed(2);
      speedEl.textContent = cps;
    }
    lastClickAt = now;
  });
});

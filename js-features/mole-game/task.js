document.addEventListener('DOMContentLoaded', () => {
  const deadEl = document.getElementById('dead');
  const lostEl = document.getElementById('lost');
  let dead = 0;
  let lost = 0;

  function getHole(index) {
    return document.getElementById(`hole${index}`);
  }

  for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', () => {
      if (getHole(i).classList.contains('hole_has-mole')) {
        deadEl.textContent = ++dead;
      } else {
        lostEl.textContent = ++lost;
      }

      if (dead === 10) {
        alert('Вы победили!');
        dead = 0; lost = 0;
        deadEl.textContent = dead;
        lostEl.textContent = lost;
      }

      if (lost === 5) {
        alert('Вы проиграли!');
        dead = 0; lost = 0;
        deadEl.textContent = dead;
        lostEl.textContent = lost;
      }
    });
  }
});

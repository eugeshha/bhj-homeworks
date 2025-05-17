document.addEventListener('DOMContentLoaded', () => {
  const titleEl   = document.getElementById('poll__title');
  const answersEl = document.getElementById('poll__answers');
  let pollId;

  // Загрузка опроса
  const xhrGet = new XMLHttpRequest();
  xhrGet.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhrGet.responseType = 'json';
  xhrGet.onload = () => {
    const data = xhrGet.response;
    pollId = data.id;
    titleEl.textContent = data.data.title;
    data.data.answers.forEach((answer, idx) => {
      const btn = document.createElement('button');
      btn.className = 'poll__answer';
      btn.textContent = answer;
      btn.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
        // Отправка голоса и показ результатов
        const xhrPost = new XMLHttpRequest();
        xhrPost.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhrPost.responseType = 'json';
        xhrPost.onload = () => {
          const stats = xhrPost.response.stat;
          const total = stats.reduce((sum, item) => sum + item.votes, 0);
          answersEl.innerHTML = '';
          stats.forEach(item => {
            const div = document.createElement('div');
            const percent = (item.votes / total * 100).toFixed(2);
            div.textContent = `${item.answer}: ${percent}%`;
            answersEl.append(div);
          });
        };
        xhrPost.send(`vote=${pollId}&answer=${idx}`);
      });
      answersEl.append(btn);
    });
  };
  xhrGet.send();
});

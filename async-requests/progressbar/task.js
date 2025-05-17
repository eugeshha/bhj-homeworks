document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const progressEl = document.getElementById('progress');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);

    xhr.upload.onprogress = event => {
      if (event.lengthComputable) {
        progressEl.value = event.loaded / event.total;
      }
    };

    xhr.onload = () => {
      if (xhr.status !== 200) {
        alert('Ошибка загрузки файла');
      }
    };
    xhr.onerror = () => {
      alert('Ошибка сети');
    };

    xhr.send(new FormData(form));
  });
});

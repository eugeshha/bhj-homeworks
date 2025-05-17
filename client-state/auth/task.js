document.addEventListener('DOMContentLoaded', () => {
  const signin = document.getElementById('signin');
  const form = document.getElementById('signin__form');
  const welcome = document.getElementById('welcome');
  const userIdSpan = document.getElementById('user_id');
  const logoutBtn = document.getElementById('logout__btn');

  const savedId = localStorage.getItem('user_id');
  if (savedId) {
    userIdSpan.textContent = savedId;
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    xhr.responseType = 'json';
    xhr.onload = () => {
      const res = xhr.response;
      if (res && res.success) {
        const id = res.user_id;
        localStorage.setItem('user_id', id);
        userIdSpan.textContent = id;
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
      } else {
        alert('Неверный логин/пароль');
      }
      form.reset();
    };
    xhr.send(new FormData(form));
  });

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user_id');
    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
    userIdSpan.textContent = '';
    form.reset();
  });
});

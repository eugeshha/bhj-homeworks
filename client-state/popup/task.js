document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('subscribe-modal');
  const closeBtn = modal.querySelector('.modal__close');
  const hasClosed = document.cookie.split('; ').some(item => item.startsWith('popupClosed='));

  if (!hasClosed) {
    modal.classList.add('modal_active');
  }

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'popupClosed=true; max-age=31536000; path=/';
  });
});

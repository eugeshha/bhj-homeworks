document.addEventListener('DOMContentLoaded', () => {
  const book = document.getElementById('book');

  document.querySelectorAll('.book__control_font-size .font-size').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.book__control_font-size .font-size').forEach(l => l.classList.remove('font-size_active'));
      link.classList.add('font-size_active');
      book.classList.remove('book_fs-small','book_fs-big');
      if (link.dataset.size === 'small') book.classList.add('book_fs-small');
      if (link.dataset.size === 'big')   book.classList.add('book_fs-big');
    });
  });

  document.querySelectorAll('.book__control_color .color').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.book__control_color .color').forEach(l => l.classList.remove('color_active'));
      link.classList.add('color_active');
      book.classList.remove('book_color-black','book_color-gray','book_color-whitesmoke');
      if (link.dataset.textColor) book.classList.add(`book_color-${link.dataset.textColor}`);
    });
  });

  document.querySelectorAll('.book__control_background .color').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.book__control_background .color').forEach(l => l.classList.remove('color_active'));
      link.classList.add('color_active');
      book.classList.remove('book_bg-black','book_bg-gray','book_bg-white');
      if (link.dataset.bgColor) book.classList.add(`book_bg-${link.dataset.bgColor}`);
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const editor = document.getElementById('editor');
  const clearBtn = document.getElementById('clear__btn');
  const KEY = 'editorContent';
  const saved = localStorage.getItem(KEY);
  if (saved !== null) editor.value = saved;
  editor.addEventListener('input', () => {
    localStorage.setItem(KEY, editor.value);
  });
  clearBtn.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem(KEY);
  });
});

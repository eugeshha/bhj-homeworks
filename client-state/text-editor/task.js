document.addEventListener('DOMContentLoaded', () => {
  const editor  = document.getElementById('editor');
  const clearBtn = document.getElementById('clear__btn');
  const KEY     = 'editorContent';

  editor.value = localStorage.getItem(KEY) || '';

  editor.addEventListener('input', () => {
    localStorage.setItem(KEY, editor.value);
  });

  clearBtn.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem(KEY);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('tasks__form');
  const input = document.getElementById('task__input');
  const list = document.getElementById('tasks__list');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    const task = document.createElement('div');
    task.className = 'task';
    const title = document.createElement('div');
    title.className = 'task__title';
    title.textContent = text;
    const remove = document.createElement('a');
    remove.href = '#';
    remove.className = 'task__remove';
    remove.textContent = '×';
    remove.addEventListener('click', ev => {
      ev.preventDefault();
      task.remove();
    });
    task.append(title, remove);
    list.append(task);
    input.value = '';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const title = dropdown.querySelector('.dropdown__value');
    const list  = dropdown.querySelector('.dropdown__list');
    const links = dropdown.querySelectorAll('.dropdown__link');

    title.addEventListener('click', () => {
      list.classList.toggle('dropdown__list_active');
    });

    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        title.textContent = link.textContent.trim();
        list.classList.remove('dropdown__list_active');
      });
    });
  });
});

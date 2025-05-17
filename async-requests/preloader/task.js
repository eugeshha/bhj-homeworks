document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const itemsContainer = document.getElementById('items');

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
  xhr.responseType = 'json';
  xhr.onload = () => {
    loader.classList.remove('loader_active');
    const valute = xhr.response.response.Valute;
    for (const key in valute) {
      const { CharCode, Value } = valute[key];
      const item = document.createElement('div');
      item.className = 'item';

      const codeEl = document.createElement('div');
      codeEl.className = 'item__code';
      codeEl.textContent = CharCode;

      const valueEl = document.createElement('div');
      valueEl.className = 'item__value';
      valueEl.textContent = Value;

      const currencyEl = document.createElement('div');
      currencyEl.className = 'item__currency';
      currencyEl.textContent = 'руб.';

      item.append(codeEl, valueEl, currencyEl);
      itemsContainer.append(item);
    }
  };
  xhr.send();
});

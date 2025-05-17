document.addEventListener('DOMContentLoaded', () => {
  const cartProducts = document.querySelector('.cart__products');
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const decBtn = product.querySelector('.product__quantity-control_dec');
    const incBtn = product.querySelector('.product__quantity-control_inc');
    const valueEl = product.querySelector('.product__quantity-value');
    const addBtn = product.querySelector('.product__add');
    const productId = product.dataset.id;
    const imgSrc = product.querySelector('.product__image').src;

    decBtn.addEventListener('click', () => {
      let value = parseInt(valueEl.textContent, 10);
      if (value > 1) {
        valueEl.textContent = value - 1;
      }
    });

    incBtn.addEventListener('click', () => {
      let value = parseInt(valueEl.textContent, 10);
      valueEl.textContent = value + 1;
    });

    addBtn.addEventListener('click', () => {
      const countToAdd = parseInt(valueEl.textContent, 10);
      let cartItem = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

      if (cartItem) {
        const countEl = cartItem.querySelector('.cart__product-count');
        countEl.textContent = parseInt(countEl.textContent, 10) + countToAdd;
      } else {
        cartItem = document.createElement('div');
        cartItem.className = 'cart__product';
        cartItem.dataset.id = productId;

        const img = document.createElement('img');
        img.className = 'cart__product-image';
        img.src = imgSrc;

        const countEl = document.createElement('div');
        countEl.className = 'cart__product-count';
        countEl.textContent = countToAdd;

        cartItem.append(img);
        cartItem.append(countEl);
        cartProducts.append(cartItem);
      }
    });
  });
});

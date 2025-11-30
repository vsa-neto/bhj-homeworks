const cartProducts = document.querySelector('.cart__products'); // расположение корзины
const cards = Array.from(document.querySelectorAll('.product')); // интерфейс добавл. товаров


function cardAction(item) {
    let countValue = parseFloat(item.querySelector('.product__quantity-value').textContent);
    let basketProductValue;

    item.addEventListener('click', event => {
        let countPlace = item.querySelector('.product__quantity-value');
        let addButton = item.querySelector('.product__add');
        let dec = item.querySelector('.product__quantity-control_dec');
        let inc = item.querySelector('.product__quantity-control_inc');

        let id = item.getAttribute('data-id');
        let img = item.querySelector('.product__image').getAttribute('src');
        let basketFoundProduct = cartProducts.querySelector(`[data-id="${id}"]`);

        function updateBasket() {
            foundBasketProduct = cartProducts.querySelector(`[data-id="${id}"]`);
            basketProductValue = parseFloat(foundBasketProduct.querySelector('.cart__product-count').innerText);
        }
        if (event.target === dec && countValue > basketProductValue * (-1)) {
            countValue--;
            countPlace.textContent = countValue;
        }
        if (event.target === inc) {
            countValue++;
            countPlace.textContent = countValue;
        }
        if (event.target === addButton) {
            if (basketFoundProduct) {
                updateBasket();
                basketProductValue += countValue;
                if (basketProductValue === 0) {
                    foundBasketProduct.remove();
                } else {
                    foundBasketProduct.querySelector('.cart__product-count').textContent = basketProductValue;
                }
            } else {
                if (countValue === 0) {
                    return;
                } else {
                    cartProducts.insertAdjacentHTML("beforeEnd",
                        `<div class="cart__product" data-id="${id}">
                     <img class="cart__product-image" src="${img}">
                     <div class="cart__product-count">${countValue}</div>
                     </div>`);
                    updateBasket();
                }
            }
            countValue = 0;
            countPlace.textContent = countValue;
        }
    });
}


cards.forEach(item => {
    cardAction(item);
});


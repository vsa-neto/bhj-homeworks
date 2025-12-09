'use strict';

const cartProducts = document.querySelector('.cart__products');
const cards = Array.from(document.querySelectorAll('.product'));

function cardAction(item) {
    let countValue = parseFloat(item.querySelector('.product__quantity-value').textContent);
    let basketProductValue = null;

    item.addEventListener('click', event => {
        let countPlace = item.querySelector('.product__quantity-value');
        let addButton = item.querySelector('.product__add');
        let dec = item.querySelector('.product__quantity-control_dec');
        let inc = item.querySelector('.product__quantity-control_inc');

        let id = item.getAttribute('data-id');
        let img = item.querySelector('.product__image').getAttribute('src');
        let basketFoundProduct = cartProducts.querySelector(`[data-id="${id}"]`);

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
                    basketFoundProduct.remove();
                } else {
                    basketFoundProduct.querySelector('.cart__product-count').textContent = basketProductValue;
                    moveImg(basketFoundProduct, img, countValue);
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

        if (countValue > 0) {
            addButton.textContent = 'Добавить в корзину';
            addButton.classList.remove('product__del');
        } else if (countValue < 0) {
            addButton.textContent = 'Удалить из корзины';
            addButton.classList.add('product__del');
        } else {
            addButton.textContent = 'Добавить в корзину';
            addButton.classList.remove('product__del');
        }


        function updateBasket() {
            basketFoundProduct = cartProducts.querySelector(`[data-id="${id}"]`);
            basketProductValue = parseFloat(basketFoundProduct.querySelector('.cart__product-count').innerText);
        }


        function moveImg(basketFoundProduct, img, countValue) {
            const body = document.querySelector('body');

            body.insertAdjacentHTML('afterbegin', `<img class="cart__product-image product__slide " src="${img}">`);
            const slideImg = body.querySelector('.product__slide');

            let imgStart_XY = item.querySelector('img').getBoundingClientRect();
            let imgStart_X = `${imgStart_XY.left.toFixed(0)}px`;
            let imgStart_Y = `${imgStart_XY.top.toFixed(0)}px`;

            let imageBasket_XY = basketFoundProduct.querySelector('img').getBoundingClientRect();
            let imgEnd_X = `${imageBasket_XY.left.toFixed(0)}px`;
            let imgEnd_Y = `${imageBasket_XY.top.toFixed(0)}px`;

            if (countValue > 0) {
                slideImg.style.top = imgStart_Y;
                slideImg.style.left = imgStart_X;
                setTimeout(() => {
                    slideImg.style.top = imgEnd_Y;
                    slideImg.style.left = imgEnd_X;
                }, 10);
                setTimeout(() => {
                    slideImg.remove();
                }, 200);
            } else if (countValue < 0) {
                slideImg.style.top = imgEnd_Y;
                slideImg.style.left = imgEnd_X;
                setTimeout(() => {
                    slideImg.style.top = imgStart_Y;
                    slideImg.style.left = imgStart_X;
                }, 10);
                setTimeout(() => {
                    slideImg.remove();
                }, 200);
            } else { slideImg.remove(); }
        }
    });
}




cards.forEach(item => {
    cardAction(item);
});


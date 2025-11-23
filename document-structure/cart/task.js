const cartProducts = document.querySelector('.cart__products'); // расположение корзины

const quantityControls = Array.from(document.querySelectorAll('.product__quantity-controls'));
const cards = Array.from(document.querySelectorAll('.product'));


function cardAction(item, count){
 item.addEventListener('click', event => {

   let id = item.getAttribute('data-id');
   let img = item.querySelector('.product__image').getAttribute('src');

   let countPlace = item.querySelector('.product__quantity-value');
   let addButton = item.querySelector('.product__add');
           console.log(addButton); 

   let dec = item.querySelector('.product__quantity-control_dec');
   let inc = item.querySelector('.product__quantity-control_inc'); 
              console.log(dec);  
              console.log(inc);  

if(event.target === dec && count > 1){
    count --;
    countPlace.textContent = count;
}
if (event.target === inc && count >= 1){
    count ++;
    countPlace.textContent = count;
}
if (event.target === addButton){
    if(cartProducts.querySelector(`[data-id="${id}"]`)){
        cartProducts.querySelector(`[data-id="${id}"]`).remove();
    } 
         cartProducts.insertAdjacentHTML("beforeEnd", 
        `<div class="cart__product" data-id="${id}">
         <img class="cart__product-image" src="${img}">
         <div class="cart__product-count">${count}</div>
         </div>`);      
}
 });
}


cards.forEach(item => {
let count = 1;
cardAction(item, count);
});
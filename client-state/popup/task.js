'use strict';

const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close');

const cookies = document.cookie.split('; ');

if(cookies.includes("modal=delete")){
    console.log(cookies);
    modal.classList.remove('modal_active');
}else{
    modal.classList.add('modal_active');
    modal.addEventListener('click', (e)=>{
if(e.target === close) {

     setCookie('modal', 'delete');
     modal.classList.remove('modal_active');
}
});
}

   function setCookie(name, value){
        document.cookie = `${name}=${encodeURIComponent(value)}; Expires=Sun, 21 Dec 2025 06:27:07 GMT`;
    }



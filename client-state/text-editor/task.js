'use strict';

const editor = document.getElementById('editor');
editor.insertAdjacentHTML('afterEnd', '<div class="clear">Очистить поле</div>');

const clear = document.querySelector('.clear');


let storage = localStorage.getItem('storage');

if(storage) {
    editor.value = storage;
}

editor.addEventListener('input', ()=>{
    storage = localStorage.setItem('storage', editor.value);
});

clear.addEventListener('click', () =>{
    console.log('clear');

    localStorage.removeItem('storage');
    editor.value = '';
});


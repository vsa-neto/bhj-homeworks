"use strict";

const reveals = Array.from(document.querySelectorAll('.reveal'));

function isVisible(elem) {
    const { top, bottom } = elem.getBoundingClientRect();
    if (top > window.innerHeight || bottom < 0) {
        return false;
    }
    return true;
}

reveals.forEach(elem => {
document.addEventListener('scroll', ()=>{
            if (isVisible(elem)) {
            elem.classList.add('reveal_active');
        } else {
            elem.classList.remove('reveal_active');
        }
});
});





"use strict";

const dropDown = document.querySelectorAll('.dropdown__value');
const dropList = document.querySelector('.dropdown__list');
const dropLinks = Array.from(document.querySelectorAll('.dropdown__link'));

dropDown.forEach((item) => {
    item.addEventListener('click', activList);
    function activList(event) {
        item.nextElementSibling.classList.toggle('dropdown__list_active');
    }
});

dropLinks.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        item.closest('.dropdown__list').classList.remove('dropdown__list_active');
        item.closest('.dropdown__list').previousElementSibling.textContent = event.target.textContent;
    });
});
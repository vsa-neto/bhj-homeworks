'use strict';

const form = document.getElementById('form');
const progress = document.getElementById('progress');
const fileName = document.querySelector('.input__wrapper-desc');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (e) => {
        progress.value = e.loaded / e.total;
    });

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {

            fileName.textContent = 'файл отправлен';
            setTimeout(() => {
                fileName.textContent = 'Выберите файл';
                progress.value = 0;
            }, 2500);
        }
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(form);
    xhr.send(formData);
});



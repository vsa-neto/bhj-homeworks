
const enter = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const exit = document.querySelector('.exit');

const inputName = document.querySelector('[name="login"]');
const inputPassword = document.querySelector('[name="password"]');

let userLogin = localStorage.getItem('userLogin');
let userPassword = localStorage.getItem('userPassword');

if (userLogin && userPassword) {
    inputName.value = userLogin;
    inputPassword.value = userPassword;
    enter.classList.remove('signin_active');
    request();
} else {
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (inputName.value === '' || inputPassword.value === '') {
            alert('не все поля заполнены');
        } else {
            request();
        }
    });
}

function request() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(signinForm);
    xhr.send(formData);

    xhr.onload = function () {
        const response = JSON.parse(xhr.response);

        if (response['success'] !== true) {
            alert('неверный логин / пароль');
            signinForm.reset();
        } else {

            localStorage.setItem('userLogin', inputName.value);
            localStorage.setItem('userPassword', inputPassword.value);

            enter.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            welcome.querySelector('#user_id').textContent = response['user_id'];

            goToExit(exit);
        }
    }
}

function goToExit(exit) {
    exit.classList.add('exit_active');
    exit.addEventListener('click', () => {

        localStorage.removeItem('userLogin');
        localStorage.removeItem('userPassword');
        signinForm.reset();
        welcome.classList.remove('welcome_active');
        enter.classList.add('signin_active');
        exit.classList.remove('exit_active');
        location.reload();
    });
}
'use strict';

const tasks = document.getElementById('tasks');
const inputField = document.getElementById('task__input');
const tasksList = document.querySelector('.tasks__list');
const button = document.getElementById('tasks__add');

tasks.addEventListener('click', (event) => {
  if (event.target === button && inputField.value !== '') {
   event.preventDefault();
    createTask();
  }

  if (event.target.classList.contains('task__remove')) {
    console.log('yes');
    event.target.closest('.task').remove();
  }
});

function createTask() {
  let taskText = inputField.value;
  tasksList.insertAdjacentHTML("beforeEnd", `<div class="task"><div class="task__title">${taskText}</div><a href="#" class="task__remove">&times;</a></div>`);
  inputField.value = '';
};
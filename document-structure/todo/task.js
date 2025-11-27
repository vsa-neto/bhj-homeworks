'use strict'; 

const inputField = document.getElementById('task__input');
const tasksList = document.querySelector('.tasks__list');
const taskAdd = document.getElementById('tasks__add');

// let template = document.querySelector('.task');
// template.remove();

let removeList = 0;

taskAdd.addEventListener('click', (event) => {
event.preventDefault();
  if (inputField.value !== '' ) {
      createTask();
      taskRemove();
  }
});

inputField.addEventListener('keydown', event => {
  
  if (inputField.value !== '' && event.key === 'Enter') {
      createTask();
      taskRemove();
  }
});

  if(removeList.length > 0){
console.log(removeList.length);
}

function createTask(){
    let taskText = inputField.value;
    tasksList.insertAdjacentHTML("beforeEnd", `<div class="task"><div class="task__title">${taskText}</div><a href="#" class="task__remove">&times;</a></div>`);
    removeList = Array.from(document.querySelectorAll('.task__remove'));
inputField.value = '';

}

function taskRemove(){
removeList.forEach(remove => {
   remove.addEventListener('click', (e)=>{
    let element = e.target.closest('.task');
    element.remove();
   });
});
}






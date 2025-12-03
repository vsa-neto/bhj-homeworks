'use strict';

const poll = document.querySelector('.poll');
const titlePlace = document.getElementById('poll__title');
const answersPlace = document.getElementById('poll__answers');

const answerResult = document.createElement('div');
poll.insertAdjacentElement('beforeEnd', answerResult);

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {

        const response = JSON.parse(xhr.response);
        let id = response.id;
        let title = response.data.title;
        let answers = response.data.answers;

        titlePlace.append(title);
        answers.forEach(item => {
            answersPlace.insertAdjacentHTML("beforeEnd", `<button class="poll__answer">${item}</button> `);
        });

        let answerList = answersPlace.querySelectorAll('.poll__answer');
        answerList.forEach((elem, index) => {
            answersPlace.addEventListener('click', e => {
                if (e.target === elem) {
                    alert("спасибо, ваш голос засчитан!");
                    answerResult.textContent = '';
                    request2(index, id);
                }
            });
        });
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

function request2(index, id){
const xhr2 = new XMLHttpRequest();
xhr2.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
xhr2.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
xhr2.send( `vote=${id}&answer=${index}` );

xhr2.addEventListener('readystatechange', () => {
    if (xhr2.readyState === xhr2.DONE) {
     let answers2 = JSON.parse(xhr2.response).stat;   
       answers2.forEach(item =>{
          answerResult.insertAdjacentHTML("beforeEnd", `<div>${item.answer}: <b>${item.votes}</b> %</div>`);
       });
    }
    });
}


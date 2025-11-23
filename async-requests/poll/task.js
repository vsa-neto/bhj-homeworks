
const titlePlace = document.getElementById('poll__title');
const answersPlace = document.getElementById('poll__answers');
console.log(answersPlace);

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {

        const response = JSON.parse(xhr.response);
        // const valute = response.response.Valute;
        console.log(response);

        // dataFilling(valute);
        let id = response.id;
        let title = response.data.title;
        let answers = response.data.answers;


        console.log(id);
        console.log(title);
        console.log(answers[1]);

        titlePlace.append(title);
        answers.forEach(item => {
            console.log(item);
            answersPlace.insertAdjacentHTML("beforeEnd", `<button class="poll__answer">${item}</button> `);
        });

        let answerList = answersPlace.querySelectorAll('.poll__answer');

        answerList.forEach(elem => {
            answersPlace.addEventListener('click', e => {
                if (e.target === elem) {
                    // console.log('ok');
                    alert("спасибо, ваш голос засчитан!");
                    console.log('ok');
                }
            });
        });

    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();






// function dataFilling(obj) {
//     for (let i in obj) {
//         let charCode = obj[i].CharCode;
//         let value = obj[i].Value;

//         items.insertAdjacentHTML(
//             "beforeEnd", `<div class="item">
//             <div class="item__code">
//                    1 ${charCode}
//                 </div>  =&ensp;
//                 <div class="item__value">
//                     ${value}
//                 </div>
//                 <div class="item__currency">
//                     руб.
//                 </div>
//           </div>`);
//         console.log(obj[i].Name);
//     }
// }
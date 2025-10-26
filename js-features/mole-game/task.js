"use strict"

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const holes = document.querySelectorAll('.hole');

let deadCount = 0;
let lostCount = 0;

function viewResult(message) {
    alert(message);
    deadCount = 0;
    lostCount = 0;
    dead.textContent = deadCount;
    lost.textContent = lostCount;
    return;
}

for (let i of holes) {
    let hole = i;

    hole.onclick = (e) => {
        if (deadCount === 7) {
            viewResult('Вы победили! :)');
        } else if (lostCount === 5) {
            viewResult('Вы проиграли! :(');
        } else if (e.target.classList.contains('hole_has-mole')) {
            deadCount++;
            dead.textContent = deadCount;
        }
        else {
            lostCount++;
            lost.textContent = lostCount;
        }
    }
}


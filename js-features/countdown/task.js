"use strict";

const timer = document.getElementById("timer");
let i = 10;
timer.textContent = i;
const playTimer = () => {
    if (i === 0) {
        clearInterval(timerInterval);
        alert("Вы победили в конкурсе!");
        location.assign("https://postimg.cc/r06LQbkq");
        return;
    }
    i--;
    timer.textContent = i;
};

const timerInterval = setInterval(playTimer, 1000);

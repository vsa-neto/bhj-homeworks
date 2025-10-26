"use strict";

const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speedometr = document.getElementById("clicker__speed");
let count = 0;
let speed = 0;

cookie.onclick = () => {
    if (count > 0) {
        speedometr.textContent = ((Date.now() - speed) / 1000).toFixed(1);
    }
    count++;
    cookie.width = 180;
    setTimeout(() => {
        clicker.width = 200;
    }, 100);
    counter.textContent = count;

    speed = Date.now();
}
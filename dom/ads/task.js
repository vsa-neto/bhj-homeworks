"use strict";

const card_1 = document.querySelector('#card_1');


class Rotator {
    constructor(card) {
        this.card = card;
        this.list = Array.from(card.querySelectorAll('.rotator__case'));
        this.cycle = this.list.length;
        this.index = 0;
    }

    rotate() {
        if (this.index === this.cycle) {
            this.index = 0;
        }
        this.list.forEach(item => {
            item.classList.remove('rotator__case_active');
            let color = this.list[this.index].getAttribute('data-color');
            this.list[this.index].style.color = color;
        });
        this.list[this.index].classList.add('rotator__case_active');

        const intervalId = setInterval(() => {
            clearInterval(intervalId);
            this.rotate();
        }, this.list[this.index].getAttribute('data-speed'));
        this.index++;
    }
};


const rotator1 = new Rotator(card_1);
rotator1.rotate();


const rotator2 = new Rotator(card_2);
rotator2.rotate();
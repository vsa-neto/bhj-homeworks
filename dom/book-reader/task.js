"use strict";

const font = document.querySelector('.book__control_font-size');
const color = document.querySelector('.book__control_color');
const bg = document.querySelector('.book__control_background');


const content = document.querySelector('.book__content');


class Clicker {
    constructor(control) {
        this.control = control;
        this.controlList = Array.from(control.querySelectorAll('a'));
        this.font;
        this.color;
        this.bg;
    }

    removeActive(active) {
        this.controlList.forEach(item => item.classList.remove(active));
    }
    removeBg(){
         content.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
    }
    removeColor(){
         content.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
    }



    fontSize() {
        console.log('changeFont');
        console.log(this.font);

        if (this.font) {
            content.classList.remove('font-size_big', 'font-size_small');
            content.classList.add('book__content', `font-size_${this.font}`);
        } else {
            content.classList.remove('font-size_big', 'font-size_small');
            content.classList.add('book__content');
        }
        this.removeActive('font-size_active');
    }

    bgColor() {
        this.removeBg();
        content.classList.add(`book_bg-${this.bg}`);

        this.removeActive('color_active');
      
        if(content.classList.contains('book_bg-black')){
             this.removeColor(); 
             content.classList.add('book_color-whitesmoke');
        } else if(content.classList.contains('book_bg-white')){
             this.removeColor();
             content.classList.add('book_color-black');
        }
    }

    textColor() {
        this.removeColor();
        content.classList.add(`book_color-${this.color}`);

        this.removeActive('color_active');

       if(content.classList.contains('book_color-black')){
             this.removeBg();
             content.classList.add('book_bg-white');
        } else if(content.classList.contains('book_color-whitesmoke')){
             this.removeBg();
             content.classList.add('book_bg-black');
        }
    }


    action() {
        this.controlList.forEach(item => {
            item.addEventListener('click', (e) => {

                if (e.target === item) {
                    e.preventDefault();

                    if (item.closest('.book__control_font-size')) {
                        this.font = item.getAttribute('data-size');
                        this.fontSize();
                        item.classList.add('font-size_active');
                    } else if (item.closest('.book__control_color')) {
                        item.classList.remove('font-size_active');

                        this.color = item.getAttribute('data-text-color');
                        this.textColor();
                        item.classList.add('color_active');
                    } else if (item.closest('.book__control_background')) {
                        this.bg = item.getAttribute('data-bg-color');
                        this.bgColor();
                        item.classList.add('color_active');
                    }
                }
                console.log(e.target);
            });
        });
    }
}



const fontSize = new Clicker(font);
fontSize.action();

const textControl = new Clicker(color);
textControl.action();

const bgControl = new Clicker(bg);
bgControl.action();


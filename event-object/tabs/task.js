'use strict';

class TabWidget {
    constructor(id) {
        this.id = id;
        this.tab = document.getElementById(id);
        this.navList = Array.from(this.tab.querySelectorAll('.tab'));
        this.contentList = Array.from(this.tab.querySelectorAll('.tab__content'));
    }
    tabAction() {
        console.log(this.id);
        console.log(this.tab);
        console.log(this.navList);
        this.navList.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.navList.forEach(item => {
                    item.classList.remove('tab_active');
                });
                this.contentList.forEach(item => {
                    item.classList.remove('tab__content_active');
                });
                item.classList.add('tab_active');
                this.contentList[index].classList.add('tab__content_active');
            });
        });
    }
}


const tabFirst = new TabWidget('tabs1');
tabFirst.tabAction();

const tabSecond = new TabWidget('tabs2');
tabSecond.tabAction();
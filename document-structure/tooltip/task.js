'use strict';

const linkList = document.querySelectorAll('.has-tooltip');
let hintPosition = 'right';


linkList.forEach(link => {

  let title = link.getAttribute('title');
  let hint = document.createElement('div');

  hint.textContent = title;
  hint.classList.add('tooltip');

  let widthHint = (hint.textContent.length * 9.2);
  let widthLink = (link.textContent.length * 9.2);

  hint.style.width = widthHint + 'px';
  link.insertAdjacentElement("afterEnd", hint);
  hint.setAttribute('data-position', hintPosition);


  switch (hintPosition) {
    case 'top':
      hint.style.marginTop = '-30px';
      hint.style.marginLeft = `-${widthLink}px`;
      break;
    case 'bottom':
      hint.style.marginTop = '20px';
      hint.style.marginLeft = `-${widthLink}px`;
      break;
    case 'right':
      hint.style.marginTop = '-5px';
      hint.style.marginLeft = `5px`;
      break;
    case 'left':
      hint.style.marginTop = '-5px';
      hint.style.marginLeft = `-${widthHint + widthLink + 15}px`;
      break;
  }

  link.addEventListener('mouseover', (e) => {
    e.preventDefault();

    linkList.forEach(link => {
      if (link === e.target) {
        link.nextSibling.classList.toggle('tooltip_active');
      } else {
        link.nextSibling.classList.remove('tooltip_active');
      }
    });

  });
});



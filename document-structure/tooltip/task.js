
const linkList = document.querySelectorAll('.has-tooltip');
let hintPosition = 'left';


linkList.forEach(link => {
       let title = link.getAttribute('title');
       let hint = document.createElement('div');

       hint.textContent = title;
       hint.classList.add('tooltip');

       let widthHint = (hint.textContent.length*9);
       let widthLink = (link.textContent.length*9);
       hint.style.width = widthHint+'px';
       link.appendChild(hint);
       hint.setAttribute('data-position', hintPosition);


switch (hintPosition) {
  case 'top':
    hint.style.top = '-30px';
    break;
  case 'bottom':
     hint.style.top = '20px';
    break;
  case 'left':
    hint.style.left = `-${widthHint + 15}px`;
    hint.style.top = '-5px';
    break;
  case 'right':
    hint.style.top = '-5px';
    hint.style.left = `${widthLink + 10}px`;
    break;
}
});


linkList.forEach(link => {
    link.addEventListener('click', (e)=>{
       e.preventDefault();
      
       linkList.forEach(link => {
     if(link === e.target){
      link.lastChild.classList.toggle('tooltip_active');
     } else {
        link.lastChild.classList.remove('tooltip_active');
     }
       }); 
    });
});
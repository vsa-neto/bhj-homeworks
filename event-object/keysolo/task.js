class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

   
    this.counter = container.querySelector('.counter p');
    this.length;

    this.reset();
    this.registerEvents();

  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  resetCounter(){
    this.length = this.wordElement.querySelectorAll('.symbol').length;
    this.counter.innerHTML = this.length;
  }

// refreshCounter(){
// this.word = (this.wordElement.textContent.split('')).join("").replace(/\s+/g, '');
//  console.log (this.word);
//  console.log (this.wordList[0]);
// }



count(){

console.log(this.wordList); 
console.log(this.wordList.length);
console.log(this.wordList.length-1);
console.log((this.wordList[this.wordList.length-1]).classList.contains('symbol_correct'));


let symbolCount = 0;
console.log((this.wordList[symbolCount]).classList.contains('symbol_correct'));


let intervalId = setInterval(() => {

 if((this.wordList[this.wordList.length-1]).classList.contains('symbol_correct')){
  clearInterval(intervalId);
  return;
  } 

if(this.wordTime > 0){
    if((this.wordList[symbolCount]).classList.contains('symbol_correct')){
       symbolCount++;
       this.wordTime --;
       this.counter.innerHTML = this.wordTime;

    } else {
        clearInterval(intervalId);
        this.fail();
    }


  } else {
  clearInterval(intervalId);
  this.fail();
  }


if(!(this.wordList[symbolCount]).classList.contains('symbol_correct')){
  clearInterval(intervalId);
  return;
}


if(this.wordTime > 0 && (this.wordList[symbolCount]).classList.contains('symbol_correct') ){

    symbolCount++;



   this.wordTime --;
   this.counter.innerHTML = this.wordTime;

} else if(this.wordTime === 0){
  clearInterval(intervalId);
  this.fail();

} else {
  clearInterval(intervalId);
  this.fail();
}
}, 5000);

}

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода символа вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     */

      

    document.addEventListener('keyup', (event) => {

      this.wordList = this.wordElement.querySelectorAll('span');
      this.wordTime = this.wordList.length;
 

      if (event.key === 'Shift' || event.key === 'Control' || event.key === 'Alt') {
        return;
      }
      if (event.key === this.currentSymbol.textContent) {
        this.success();

        if(this.wordList[0].classList.contains('symbol_correct')){
           this.count();
        } 
          if(this.wordList[this.wordList.length-1].classList.contains('symbol_correct')){
        } 
        
      } else { this.fail(); }

    
    });



  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;




    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
    this.counter.innerHTML = this.wordTime;

    this.resetCounter();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word].map((s, i) =>
      `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
    ).join('');
    this.wordElement.innerHTML = html;
    this.currentSymbol = this.wordElement.querySelector('.symbol_current');

    this.resetCounter();
  }
}

new Game(document.getElementById('game'));


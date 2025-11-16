class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.counterLocation = container.querySelector('.counter span');
    this.symbolCounter = 0;

    this.reset();
    this.resetCounter();
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    clearInterval(this.intervalId);
  }

  resetCounter() {
    this.symbols = Array.from(document.querySelectorAll('.symbol'));
    this.timer = this.symbols.length;
    this.counterLocation.innerHTML = this.timer;
  }

  count() {
    this.intervalId = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
        this.counterLocation.innerHTML = this.timer;

      } else {
        clearInterval(this.intervalId);
        this.fail();
        this.resetCounter();
      }
    }, 1000);
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
      if (event.key === 'Shift' || event.key === 'Control' || event.key === 'Alt') {
        return;
      }

      if (event.key === this.currentSymbol.textContent) {
        console.log('success');

        if (this.symbols[this.symbols.length - 1].classList.contains('symbol_current')) {
          console.log('true true true');
          clearInterval(this.intervalId);
          this.success();
          this.resetCounter();
          return;
        }
        if (event.key === this.symbols[0].textContent) {
          console.log(`symbol: ${this.symbols[0].textContent}`);
          clearInterval(this.intervalId);
          this.count();
        }
        this.success();

      } else {
        clearInterval(this.intervalId);
        this.fail();
        this.resetCounter();
      }
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
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');

  }
}

new Game(document.getElementById('game'));
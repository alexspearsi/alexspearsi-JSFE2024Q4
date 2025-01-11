console.log(
  `%cDon't forget to change the language before typing letters!\n\n%cHave a good game!`, 
  'font-weight: normal; color:rgb(229, 63, 63); font-size: 18px; font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;',  // Синий для уровня, более яркий шрифт
  'font-weight: normal; color:rgba(65, 241, 106, 0.78); font-size: 26px; font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;'
);

let buttonStart = document.querySelector('.button-start');
let buttonNewGame = document.querySelector('.button-new-game');
let buttonRepeatSequence = document.querySelector('.button-repeat-sequence')
let buttonNext = document.querySelector('.button-next')
let counterOfRounds = document.querySelector('.counter-of-rounds')
let numberOfRound = document.querySelector('.counter-of-rounds span');
let levelItems = document.querySelectorAll('.header__level-1__list li')
let keyboardOutput = document.querySelector('.keyboard-output')
    keyboardOutput.innerHTML = '\u200B'
let audio = document.getElementById('click-sound');
let audio2 = document.getElementById('click-sound-2');
let audio3 = document.getElementById('click-sound-3');
let audio4 = document.getElementById('click-sound-4');
let audio5 = document.getElementById('click-sound-5');

let alphabet = 'JBCGKAZFHYDILMNOPQSTUWERVX';
let alphabetWithNums = 'J9A2H0F6NQK3G7M4B5D1L8IYZCEXWOSTUV';
let level = document.querySelector('.header__level-1__list .selected').innerHTML
let round = 1;
let sequence;
let outputArray = [];
let isRepeatSequenceClicked  = false;

let keyboardWithNumbers = document.querySelector('.keyboard-numbers')
let keyboardWithLetters = document.querySelector('.keyboard-letters')
if (level === 'medium') {
  keyboardWithNumbers.style.visibility = 'hidden'
  keyboardWithLetters.style.visibility = 'visible'
} else if (level === 'easy') {
  keyboardWithLetters.style.visibility = 'hidden'
  keyboardWithNumbers.style.visibility = 'visible'
} else if (level === 'hard') {
  keyboardWithLetters.style.visibility = 'visible'
  keyboardWithNumbers.style.visibility = 'visible'
}

buttonNewGame.addEventListener('click', () => {
  round = 1;
  outputArray = [];
  keyboardOutput.innerHTML = '\u200B'
  isRepeatSequenceClicked = false;
  numberOfRound.innerHTML = 1;

  buttonStart.style.visibility = 'visible';
  [buttonNewGame, buttonRepeatSequence, counterOfRounds].forEach(item => {
    item.classList.toggle('display-on'); 
  })
  buttonNext.style.display = 'none';

  levelItems.forEach(item => { // отменяет переключение уровней
    item.addEventListener('click', setLevelOfGame)

    if (!item.classList.contains('selected')) {  // меняет не активыне уровни цвет на серый
      item.style.color = 'black';
      item.style.cursor = 'pointer'
    } else {
      item.style.color = 'white';
    }
  });
})


function setLevelOfGame(event) {
  levelItems.forEach(item => {
    item.classList.remove('selected');
    item.style.color = 'black';
    item.style.cursor = 'pointer';
  })

  event.target.classList.add('selected');
  event.target.style.color = 'white';

  level = event.target.innerHTML;
  let keyboardWihNumbers = document.querySelector('.keyboard-numbers')
  let keyboardWithLetters = document.querySelector('.keyboard-letters')
  if (level === 'medium') {
    keyboardWihNumbers.style.visibility = 'hidden'
    keyboardWithLetters.style.visibility = 'visible'
  } else if (level === 'easy') {
    keyboardWithLetters.style.visibility = 'hidden'
    keyboardWihNumbers.style.visibility = 'visible'
  } else if (level === 'hard') {
    keyboardWithLetters.style.visibility = 'visible'
    keyboardWihNumbers.style.visibility = 'visible'
  }
}

// Добавляет обработчик к уровням (easy, medium, hard)
levelItems.forEach(item => {
  item.addEventListener('click', setLevelOfGame)
})

// START BUTTON CLICK
buttonStart.addEventListener('click', () => {

  levelItems.forEach(item => { // отменяет переключение уровней
    item.removeEventListener('click', setLevelOfGame);

    if (!item.classList.contains('selected')) {  // меняет не активыне уровни цвет на серый
      item.style.color = 'gray';
      levelItems.forEach(item => {
        item.style.cursor = 'default';
      });
    } else {
      item.style.color = 'white';
    }
  });

  // отображаются кнопки "new game", 'repeat sequence' и 'rounds'
  [buttonNewGame, buttonRepeatSequence, counterOfRounds].forEach(item => {
    item.classList.toggle('display-on'); 
  })

  // скрывается кнопка "start"
  buttonStart.style.visibility = 'hidden';

  runAGame();
})

// Переходим на новый раунд
function proceedNextRound() {
  round += 1;
  outputArray = [];
  isRepeatSequenceClicked = false;
  keyboardOutput.innerHTML = '\u200B';
  numberOfRound.innerHTML = round;
  runAGame();
}

// ЗАПУСК ИГРЫ
function runAGame() {
  buttonNext.removeEventListener('click', proceedNextRound);
  // в начале игры показываем кнопку Repeat sequance и скрываем кнопку Next
  buttonRepeatSequence.style.display = 'block';
  buttonNext.style.display = 'none';
  buttonRepeatSequence.classList.remove('disabled');
  isRepeatSequenceClicked = false;

  if (level === 'easy') {
    sequence = Array.from({length: round * 2}, () => Math.floor(Math.random() * 10))
  } else if (level === 'medium') {
    sequence = Array.from({length: round * 2}, () => alphabet[Math.floor(Math.random() * alphabet.length)])
  } else if (level === 'hard') {
    sequence = Array.from({length: round * 2}, () => {
      let randomChar = alphabetWithNums[Math.floor(Math.random() * alphabetWithNums.length)];
      return isNaN(randomChar) ? randomChar : +randomChar;
    })
  }

  console.clear();
  console.log(
    `%cLevel: %c${level} %c| Round: %c${round}`, 
    'font-weight: bold; color: #2196F3; font-size: 20px; font-family: "Arial", sans-serif; letter-spacing: 2px;',  // Синий для уровня, более яркий шрифт
    'font-weight: normal; color:rgb(146, 230, 11); font-size: 20px; font-family: "Arial", sans-serif;',  // Зеленый для значения уровня
    'font-weight: bold; color: #2196F3; font-size: 20px; font-family: "Arial", sans-serif; letter-spacing: 2px;', // Синий для раунда
    'font-weight: normal; color: rgb(146, 230, 11); font-size: 20px; font-family: "Arial", sans-serif;'   // Зеленый для значения раунда
  );
  
  console.log(
    `%cSequence: %c${sequence.join(' ')}`, 
    'font-weight: bold; color: #FF7043; font-size: 22px; font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;',  // Оранжевый для текста "Sequence", стильный шрифт
    'color:rgb(146, 230, 11); font-size: 20px; font-family: "Roboto", "Helvetica Neue", Arial, sans-serif; letter-spacing: 1px;'  // Ярко-красный для значений sequence
  );
  
  setTimeout(() => {
    // Во время симуляции глушить кнопки NEW GAME и REPEAT SEQUANCE
    buttonRepeatSequence.classList.add('disabled');
    buttonRepeatSequence.style.pointerEvents = 'none';
    buttonNewGame.classList.add('disabled');
    buttonNewGame.style.pointerEvents = 'none'
    showSequance()
  }, 600)
}

function showSequance() {
  let completedTimers = 0;
  sequence.forEach((item, index) => {
    setTimeout(() => {
      let row = Array.from(document.querySelectorAll('.row'))
                     .flatMap(item => Array.from(item.children));

      row.forEach(element => {
        if (element.innerHTML == item) {
          element.style.backgroundColor = 'red';
          audio.play();
          // Сбрасываем цвет обратно через 1000 мс
          setTimeout(() => {
            element.style.backgroundColor = ''; // Возвращаем к исходному стилю
            completedTimers++;

            if (completedTimers === sequence.length) {
              // Показывать кнопки New Game и Repeat sequance
              buttonRepeatSequence.classList.remove('disabled');
              buttonRepeatSequence.style.pointerEvents = '';
              buttonNewGame.classList.remove('disabled');
              buttonNewGame.style.pointerEvents = ''
              timeForInput();
            }

          }, 1000);
        }
      });
    }, index * 1300);
  })

}


function timeForInput() {
  if (isRepeatSequenceClicked) {
    buttonRepeatSequence.classList.add('disabled');
    buttonRepeatSequence.style.pointerEvents = 'none';
  }
  keyboardOutput.style.color = '';
  let counter = 0;
  const symbolsOfKeyboard = Array.from(document.querySelectorAll('.row'))
                                 .flatMap(row => Array.from(row.children));

  const keyboard = {
    "easy": symbolsOfKeyboard.slice(0, 10),
    "medium": symbolsOfKeyboard.slice(10),
    "hard": symbolsOfKeyboard
  }

  // Удаляем предыдущие обработчики (если они есть)
  keyboard['easy'].forEach(item => item.removeEventListener('click', clickOnKey));
  keyboard['medium'].forEach(item => item.removeEventListener('click', clickOnKey));
  keyboard['hard'].forEach(item => item.removeEventListener('click', clickOnKey));
  document.removeEventListener('keydown', pressOnKey);

  buttonRepeatSequence.addEventListener('click', () => {
    if (!isRepeatSequenceClicked) {
      outputArray = [];
      isRepeatSequenceClicked = true;
      keyboardOutput.innerHTML = '\u200B';
      setTimeout(() => {
        buttonRepeatSequence.classList.add('disabled');
        buttonRepeatSequence.style.pointerEvents = 'none';
        buttonNewGame.classList.add('disabled');
        buttonNewGame.style.pointerEvents = 'none'
        showSequance()
      }, 300);
    }

    // Удаляем обработчики событий перед повтором
    keyboard[level].forEach(item => item.removeEventListener('click', clickOnKey));
    document.removeEventListener('keydown', pressOnKey);
  }, { once: true });

  // Показываем результат
  function showResult(text, color, finish) {
    keyboard[level].forEach(item => item.removeEventListener('click', clickOnKey));
    document.removeEventListener('keydown', pressOnKey);

    if (text === "WRONG" && isRepeatSequenceClicked) {
        audio2.play(); // try again
        keyboardOutput.innerHTML = finish;
        keyboardOutput.style.color = color;
    } else if (text === "WRONG" && !isRepeatSequenceClicked) {
        audio4.play() // wrong
        keyboardOutput.innerHTML = text;
        buttonNext.style.display = 'none';
        buttonRepeatSequence.style.display = 'block';
    } else {
      setTimeout(() => {
        // Конец игры. Выиграл!
        if (round === 5) {
          keyboardOutput.innerHTML = finish;
          audio3.play();
          buttonNext.style.display = 'none';
          buttonRepeatSequence.style.display = 'block';
          buttonRepeatSequence.classList.add('disabled');
          buttonRepeatSequence.style.pointerEvents = 'none';

        } else {
          audio5.play();
          keyboardOutput.innerHTML = text;
          keyboardOutput.style.color = color;
        }
      }, 0); // ДОБАВИТЬ ЗАДЕРЖКУ 100 СЕК, ЧТОБЫ ПОКАЗЫВАЛИСЬ ВСЕ БУКВЫ
    }
  }

  // Обработчик для виртуальной клавиатуры
  function clickOnKey(event) {
    keyboard[level].forEach(item => {
      if (item.innerHTML == event.srcElement.innerHTML) {
        audio.play()
        item.style.backgroundColor = 'red';
        setTimeout(() => item.style.backgroundColor = '', 150)
      }
    })
    processInput(event.target.innerHTML);
  }

  // Обработчик для механической клавиатуры
  function pressOnKey(event) {
    const key = event.key.toUpperCase();
    const matchingKey = keyboard[level].find(item => {
      if (item.innerHTML === key) {
        audio.play()
        item.style.backgroundColor = 'red';
        setTimeout(() => item.style.backgroundColor = '', 150)
        return item.innerHTML === key
      }
    });
    if (matchingKey) processInput(key);
  }

  // Общая логика обработки ввода
  function processInput(input) {
    keyboardOutput.textContent += input;
    outputArray.push(input);

    if (String(sequence[counter]) !== String(outputArray[counter])) {
      keyboardOutput.style.color = 'red'; 
      showResult('WRONG', 'red', 'Try Again!');
    } else if ((counter + 1) === sequence.length) {
      keyboardOutput.style.color = '#32CD32';
      showResult('RIGHT', '#32CD32', 'Congratulations! You won!');

      buttonRepeatSequence.style.display = 'none';
      buttonNext.style.display = 'block';
      
      buttonNext.addEventListener('click', proceedNextRound)

      // Удаляем обработчики событий, когда игра закончена
      keyboard[level].forEach(item => item.removeEventListener('click', clickOnKey));
      document.removeEventListener('keydown', pressOnKey);
    } else {
      counter++;
    }
  }

  // Добавляем обработчики событий
  keyboard[level].forEach(item => item.addEventListener('click', clickOnKey));
  document.addEventListener('keydown', pressOnKey);
}
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

let alphabet = 'JBCGKAZFHYDILMNOPQSTUWERVX';
let alphabetWithNums = 'J9A2H0F6NQK3G7M4B5D1L8IYZCEXWOSTUV';
let level = '';
let round = 1;
let sequence;
let outputArray = [];
let isRepeatSequenceClicked  = false;

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

  levelItems.forEach(item => {
    item.addEventListener('click', setLevelOfGame)
  })
  
})


function setLevelOfGame(event) {
  levelItems.forEach(item => item.classList.remove('selected'));
  event.target.classList.add('selected');
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
  console.log(level);
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

//ЗАПУСК ИГРЫ
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
    sequence = Array.from({length: round * 2}, () => alphabetWithNums[Math.floor(Math.random() * alphabetWithNums.length)])
  }
  console.log(`Round ${round}`, sequence);
  setTimeout(() => showSequance(), 600)
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
              timeForInput();
            }

          }, 1000);
        }
      });
    }, index * 1300);
  })

}


function timeForInput() {
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
      setTimeout(() => showSequance(), 600);
    }

    buttonRepeatSequence.classList.add('disabled');
    buttonRepeatSequence.style.pointerEvents = 'none';
  }, { once: true });



  // Показываем результат
  function showResult(text, color, finish) {
    keyboard[level].forEach(item => item.removeEventListener('click', clickOnKey));
    document.removeEventListener('keydown', pressOnKey);



    if (text === "WRONG" && isRepeatSequenceClicked) {
      setTimeout(() => {
        keyboardOutput.innerHTML = finish;
        keyboardOutput.style.color = color;
      }, 0); // ДОБАВИТЬ ЗАДЕРЖКУ 100 СЕК, ЧТОБЫ ПОКАЗЫВАЛИСЬ ВСЕ БУКВЫ
    } else {
      setTimeout(() => {
        // Конец игры. Выиграл!
        if (round === 5) {
          keyboardOutput.innerHTML = finish;
          buttonNext.style.display = 'none';
          buttonRepeatSequence.style.display = 'block';
          buttonRepeatSequence.classList.add('disabled');
          buttonRepeatSequence.style.pointerEvents = 'none';

          buttonNewGame
        } else {
          keyboardOutput.innerHTML = text;
          keyboardOutput.style.color = color;
        }
      }, 0); // ДОБАВИТЬ ЗАДЕРЖКУ 100 СЕК, ЧТОБЫ ПОКАЗЫВАЛИСЬ ВСЕ БУКВЫ
    }
  }

  // Обработчик для виртуальной клавиатуры
  function clickOnKey(event) {
    processInput(event.target.innerHTML);
  }

  // Обработчик для механической клавиатуры
  function pressOnKey(event) {
    const key = event.key.toUpperCase();
    const matchingKey = keyboard[level].find(item => item.innerHTML === key);
    if (matchingKey) processInput(key);
  }


  // Общая логика обработки ввода
  function processInput(input) {
    keyboardOutput.textContent += input;
    outputArray.push(input);

    // аккуратно с нулями
    if (String(sequence[counter]) !== String(outputArray[counter])) {
      keyboardOutput.style.color = 'red'; 
      showResult('WRONG', 'red', 'Try Again!');
    } else if ((counter + 1) === sequence.length) {
      keyboardOutput.style.color = '#32CD32';
      showResult('RIGHT', '#32CD32', 'Congratulations! You won!');

      buttonRepeatSequence.style.display = 'none';
      buttonNext.style.display = 'block';
      
      buttonNext.addEventListener('click', proceedNextRound)

    } else {
      counter++;
    }
  }

  // Добавляем обработчики событий
  keyboard[level].forEach(item => item.addEventListener('click', clickOnKey));
  document.addEventListener('keydown', pressOnKey);
}
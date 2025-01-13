console.log(
  `%cDon't forget to change the language before typing letters!\n\n%cHave a good game!`, 
  'font-weight: normal; color:rgb(229, 63, 63); font-size: 18px; font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;',
  'font-weight: normal; color:rgba(65, 241, 106, 0.78); font-size: 26px; font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;'
);

function createAudioTag(id, src) {
  let audio = document.createElement('audio')
  audio.id = id;
  audio.src = src;
  document.body.appendChild(audio)
  return audio;
}

let audio = createAudioTag('click-sound', "click.mp3");
let audio2 = createAudioTag('click-sound-2', "try_again.mp3");
let audio3 = createAudioTag('click-sound-3', "you_won.mp3");
let audio4 = createAudioTag('click-sound-4', "wrong.mp3");
let audio5 = createAudioTag('click-sound-5', "right.mp3");

function createDOM() {
  // gameboard
  const gameboard = document.createElement('div');
  gameboard.classList.add('gameboard');

  // header
  const header = document.createElement('div');
  header.classList.add('header');

  // header__level-1
  const headerLevel1 = document.createElement('div');
  headerLevel1.classList.add('header__level-1');

  const level1List = document.createElement('ul');
  level1List.classList.add('header__level-1__list');
  ['easy', 'medium', 'hard'].forEach((text, index) => {
    const li = document.createElement('li');
    li.textContent = text;
    if (index === 0) li.classList.add('selected');
    level1List.appendChild(li);
  });
  headerLevel1.appendChild(level1List);

 // создать rounds
  const cntrOfRounds = document.createElement('p');
  cntrOfRounds.classList.add('counter-of-rounds');
  const textBefore = document.createTextNode('round ');
  const roundSpan = document.createElement('span');
  roundSpan.textContent = '1'; 
  const textAfter = document.createTextNode('/5');
  cntrOfRounds.appendChild(textBefore);
  cntrOfRounds.appendChild(roundSpan);
  cntrOfRounds.appendChild(textAfter);
  headerLevel1.appendChild(cntrOfRounds);
  header.appendChild(headerLevel1);

  // header__level-2
  const headerLevel2 = document.createElement('div');
  headerLevel2.classList.add('header__level-2');

  const buttonTexts = ['new game', 'repeat sequence', 'next'];

  buttonTexts.forEach((text) => {
    const button = document.createElement('p');
    button.textContent = text; 
    
    const className = 'button-' + text.replace(' ', '-');
    button.className = className;
  
    headerLevel2.appendChild(button);
  });
  header.appendChild(headerLevel2);

  // добавить header в gameboard
  gameboard.appendChild(header);

  // main
  const main = document.createElement('div');
  main.classList.add('main');

  const keybrdOutput = document.createElement('div');
  keybrdOutput.classList.add('keyboard-output');
  main.appendChild(keybrdOutput);

  // keyboard-numbers
  const keyboardNumbers = document.createElement('div');
  keyboardNumbers.classList.add('keyboard-numbers');

  const numberRow = document.createElement('div');
  numberRow.classList.add('row');
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  numbers.forEach((num) => {
    const key = document.createElement('div');
    key.classList.add('key');
    key.textContent = num;
    numberRow.appendChild(key);
  });
  keyboardNumbers.appendChild(numberRow);
  main.appendChild(keyboardNumbers);

  // keyboard-letters
  const keyboardLetters = document.createElement('div');
  keyboardLetters.classList.add('keyboard-letters');

  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  rows.forEach((letters) => {
    const letterRow = document.createElement('div');
    letterRow.classList.add('row');
    letters.forEach((letter) => {
      const key = document.createElement('div');
      key.classList.add('key');
      key.textContent = letter;
      letterRow.appendChild(key);
    });
    keyboardLetters.appendChild(letterRow);
  });
  main.appendChild(keyboardLetters);

  // Добавляем main в gameboard
  gameboard.appendChild(main);

  // Кнопка START
  const btnStart = document.createElement('div');
  btnStart.classList.add('button-start');
  btnStart.textContent = 'START';
  gameboard.appendChild(btnStart);

  // Добавляем gameboard в body
  document.body.appendChild(gameboard);
}

createDOM();

let buttonStart = document.querySelector('.button-start');
let buttonNewGame = document.querySelector('.button-new-game');
let buttonRepeatSequence = document.querySelector('.button-repeat-sequence')
let buttonNext = document.querySelector('.button-next')
let counterOfRounds = document.querySelector('.counter-of-rounds')
let numberOfRound = document.querySelector('.counter-of-rounds span');
let levelItems = document.querySelectorAll('.header__level-1__list li')
let keyboardOutput = document.querySelector('.keyboard-output')
    keyboardOutput.textContent = '\u200B'
let alphabet = 'JBCGKAZFHYDILMNOPQSTUWERVX';
let numbers = '12345667890';
let level = document.querySelector('.header__level-1__list .selected').textContent
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
  keyboardOutput.textContent = '\u200B'
  isRepeatSequenceClicked = false;
  numberOfRound.textContent = 1;

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

  level = event.target.textContent;
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
  keyboardOutput.textContent = '\u200B';
  numberOfRound.textContent = round;
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
    sequence = [
      alphabet[Math.floor(Math.random() * alphabet.length)],
      +numbers[Math.floor(Math.random() * numbers.length)]
    ];
    
    while (sequence.length < round * 2) {
      let source = Math.random() < 0.5 ? alphabet : numbers;
      let value = source[Math.floor(Math.random() * source.length)];
      sequence.push(source === numbers ? +value : value); // Числа как number
    }
  }

  console.clear();
  console.log(
    `%cLevel: %c${level} %c| Round: %c${round}`, 
    'font-weight: bold; color: #2196F3; font-size: 20px; font-family: "Arial", sans-serif; letter-spacing: 2px;',
    'font-weight: normal; color:rgb(146, 230, 11); font-size: 20px; font-family: "Arial", sans-serif;',
    'font-weight: bold; color: #2196F3; font-size: 20px; font-family: "Arial", sans-serif; letter-spacing: 2px;',
    'font-weight: normal; color: rgb(146, 230, 11); font-size: 20px; font-family: "Arial", sans-serif;'
  );
  
  console.log(
    `%cSequence: %c${sequence.join(' ')}`, 
    'font-weight: bold; color: #FF7043; font-size: 22px; font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;',
    'color:rgb(146, 230, 11); font-size: 20px; font-family: "Roboto", "Helvetica Neue", Arial, sans-serif; letter-spacing: 1px;'
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
        if (element.textContent == item) {
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
      keyboardOutput.textContent = '\u200B';
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
        keyboardOutput.textContent = finish;
        keyboardOutput.style.color = color;
    } else if (text === "WRONG" && !isRepeatSequenceClicked) {
        audio4.play() // wrong
        keyboardOutput.textContent = text;
        buttonNext.style.display = 'none';
        buttonRepeatSequence.style.display = 'block';
    } else {
      setTimeout(() => {
        // Конец игры. Выиграл!
        if (round === 5) {
          keyboardOutput.textContent = finish;
          audio3.play();
          buttonNext.style.display = 'none';
          buttonRepeatSequence.style.display = 'block';
          buttonRepeatSequence.classList.add('disabled');
          buttonRepeatSequence.style.pointerEvents = 'none';

        } else {
          audio5.play();
          keyboardOutput.textContent = text;
          keyboardOutput.style.color = color;
        }
      }, 0); // ДОБАВИТЬ ЗАДЕРЖКУ 100 СЕК, ЧТОБЫ ПОКАЗЫВАЛИСЬ ВСЕ БУКВЫ
    }
  }

  // Обработчик для виртуальной клавиатуры
  function clickOnKey(event) {
    keyboard[level].forEach(item => {
      if (item.textContent == event.srcElement.textContent) {
        audio.play()
        item.style.backgroundColor = 'red';
        setTimeout(() => item.style.backgroundColor = '', 150)
      }
    })
    processInput(event.target.textContent);
  }

  // Обработчик для механической клавиатуры
  function pressOnKey(event) {
    const key = event.key.toUpperCase();
    const matchingKey = keyboard[level].find(item => {
      if (item.textContent === key) {
        audio.play()
        item.style.backgroundColor = 'red';
        setTimeout(() => item.style.backgroundColor = '', 150)
        return item.textContent === key
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
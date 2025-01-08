let buttonStart = document.querySelector('.button-start');
let buttonNewGame = document.querySelector('.button-new-game');
let buttonRepeatSequence = document.querySelector('.button-repeat-sequence')
let counterOfRounds = document.querySelector('.counter-of-rounds')
let levelItems = document.querySelectorAll('.header__level-1__list li')
let keyboardOutput = document.querySelector('.keyboard-output')
keyboardOutput.innerHTML = '\u200B'

let audio = document.getElementById('click-sound');

let alphabet = 'ABCDEFJHIGKLMNOPQRSTUVWXYZ';
let alphabetWithNums = 'ABCDEFJHIGKLMNOPQRSTUVWXYZ0123456789';
let level = '';
let round = 1;
let sequence;
let outputArray = [];





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



//ЗАПУСК ИГРЫ
function runAGame() {
  if (level === 'easy') {
    sequence = Array.from({length: round * 2}, () => Math.floor(Math.random() * 10))
  } else if (level === 'medium') {
    sequence = Array.from({length: round * 2}, () => alphabet[Math.floor(Math.random() * alphabet.length)])
  } else if (level === 'hard') {
    sequence = Array.from({length: round * 2}, () => alphabetWithNums[Math.floor(Math.random() * alphabetWithNums.length)])
  }
  console.log(sequence);

  let completedTimers = 0; // отображает сколько таймеров выполнили работу
                           // должно быть равно длины массива

  // Мигание клавиш клавиатуры
  setTimeout(() => {
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
  })}, 600)
}



function timeForInput() {
  //находим все клавиши клавиатуры
  let symbolsOfKeyboard = Array.from(document.querySelectorAll('.row'))
        .flatMap(item => Array.from(item.children));
  
  let symbolsOfNumbers = symbolsOfKeyboard.slice(0, 10)
  let symbolsOfLetters = symbolsOfKeyboard.slice(10)
  
  
  if (level === 'easy') {
    let counter = 0;
    symbolsOfNumbers.forEach(item => {
      item.addEventListener('click', (event) => {
        keyboardOutput.textContent += event.target.innerHTML
        outputArray.push(event.target.innerHTML)
        console.log(outputArray);

        if (sequence[counter] !== +outputArray[counter]) {
          keyboardOutput.innerHTML = "WRONG"
          keyboardOutput.style.color = 'red'
        } else if (sequence.length === outputArray.length) {
          keyboardOutput.innerHTML = "RIGHT"
          keyboardOutput.style.color = '32CD32'
        } else {
          counter++
        }
        
      })
    })
  } 

  if (level === 'medium') {
    symbolsOfLetters.forEach(item => {
      item.addEventListener('click', (event) => {
        keyboardOutput.textContent += event.target.innerHTML
        outputArray.push(event.target.innerHTML)
      })
    })
  }

  if (level === 'hard') {
    symbolsOfKeyboard.forEach(item => {
      item.addEventListener('click', (event) => {
        keyboardOutput.textContent += event.target.innerHTML
        outputArray.push(event.target.innerHTML)
      })
    })
  }

}





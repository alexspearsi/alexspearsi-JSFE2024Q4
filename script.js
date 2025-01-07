let buttonStart = document.querySelector('.button-start');
let buttonNewGame = document.querySelector('.button-new-game');
let buttonRepeatSequence = document.querySelector('.button-repeat-sequence')
let counterOfRounds = document.querySelector('.counter-of-rounds')


let level = '';
let sequenceOfWords = 'qpficjgnqp'.toUpperCase().split('')




let levelItems = document.querySelectorAll('.header__level-1__list li')

function setLevelOfGame(event) {
  levelItems.forEach(item => item.classList.remove('selected'));
  event.target.classList.add('selected');
  level = event.target.innerHTML;
  console.log(level);
}

levelItems.forEach(item => {
  item.addEventListener('click', setLevelOfGame)
})

// START BUTTON CLICK
buttonStart.addEventListener('click', () => {

  levelItems.forEach(item => { // отменяет переключение уровней
    item.removeEventListener('click', setLevelOfGame);

    if (!item.classList.contains('selected')) {  // меняет не активыне уровни цвет на серый
      item.style.color = 'gray';
    }
  });

  // отображаются кнопки "new game", 'repeat sequence' и 'rounds'
  [buttonNewGame, buttonRepeatSequence, counterOfRounds].forEach(item => {
    item.classList.toggle('display-on'); 
  })

  sequenceOfWords.forEach((item, index) => {
    setTimeout(() => {
      let row = Array.from(document.querySelectorAll('.row'))
        .flatMap(item => Array.from(item.children));
      row.forEach(element => {
        if (element.innerHTML === item) {
          element.style.backgroundColor = 'red';
          // Сбрасываем цвет обратно через 500 мс
          setTimeout(() => {
            element.style.backgroundColor = ''; // Возвращаем к исходному стилю
          }, 1000);
        }
      });
    }, index * 1000);
  })
})








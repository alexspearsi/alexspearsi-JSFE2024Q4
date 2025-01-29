import { levelOfGame } from './templates.js';
import { createNonogram } from './CreateNonogram.js';


let currentGame = levelOfGame[['hard']][Math.floor(Math.random() * 5)]
createNonogram(currentGame.level, currentGame.name)



function createModalWindow() {
  const gameboard = document.querySelector('.gameboard')
  const style = document.createElement('style');
  const chooseAGame = document.querySelector('.utility-item--choose-game')
  const closeModalWindow = document.querySelector('.modal-close-btn')
  const modalWindow = document.querySelector('.modal-overlay')
  const gameboardButtonsBelow = document.querySelector('.gameboard-buttons-below')
  
  closeModalWindow.addEventListener('click', () => {
    modalWindow.style.visibility = 'hidden';
  })
  
  chooseAGame.addEventListener('click', () => {
    modalWindow.style.visibility = 'visible';
  })
  
  const collectionOfModes = document.querySelectorAll('.level-item')
  
  collectionOfModes.forEach(element => {
    element.addEventListener('click', () => {
      const cells = document.querySelectorAll('.cell')
      cells.forEach(cell => {
        cell.style.backgroundColor = 'white'
        cell.innerText = '';
      })
      
      const level = element.parentElement.firstElementChild.innerText.split(' ')[0].toLowerCase();
      const mode = element.innerText;

      currentGame = levelOfGame[level].filter(item => item.name == mode)[0]


      if (level === 'easy') {
        style.textContent = `
          #top-0-5, #top-0-6, #top-0-7, #top-0-8, #top-0-9, #top-0-10, #top-0-11, #top-0-12, #top-0-13,
          #top-0-14, #top-1-5, #top-1-6, #top-1-7, #top-1-8, #top-1-9, #top-1-10, #top-1-11, #top-1-12,
          #top-1-13, #top-1-14, #top-2-5, #top-2-6, #top-2-7, #top-2-8, #top-2-9, #top-2-10, #top-2-11,
          #top-2-12, #top-2-13, #top-2-14, #top-3-5, #top-3-6, #top-3-7, #top-3-8, #top-3-9, #top-3-10,
          #top-3-11, #top-3-12, #top-3-13, #top-3-14, #top-4-5, #top-4-6, #top-4-7, #top-4-8, #top-4-9,
          #top-4-10, #top-4-11, #top-4-12, #top-4-13, #top-4-14, #cell-0-5, #cell-0-6, #cell-0-7, #cell-0-8,
          #cell-0-9, #cell-0-10, #cell-0-11, #cell-0-12, #cell-0-13, #cell-0-14, #cell-1-5, #cell-1-6,
          #cell-1-7, #cell-1-8, #cell-1-9, #cell-1-10, #cell-1-11, #cell-1-12, #cell-1-13, #cell-1-14,
          #cell-2-5, #cell-2-6, #cell-2-7, #cell-2-8, #cell-2-9, #cell-2-10, #cell-2-11, #cell-2-12,
          #cell-2-13, #cell-2-14, #cell-3-5, #cell-3-6, #cell-3-7, #cell-3-8, #cell-3-9, #cell-3-10,
          #cell-3-11, #cell-3-12, #cell-3-13, #cell-3-14, #cell-4-5, #cell-4-6, #cell-4-7, #cell-4-8,
          #cell-4-9, #cell-4-10, #cell-4-11, #cell-4-12, #cell-4-13, #cell-4-14, #left-2-0, #left-3-0,
          #left-4-0, #left-2-1, #left-3-1, #left-4-1, #left-2-2, #left-3-2, #left-4-2, #left-2-3,
          #left-3-3, #left-4-3, #left-2-4, #left-3-4, #left-4-4, .clues:nth-child(-1n+3), .row:nth-child(n+11) {
            visibility: hidden;
          }
    
          #left-1-0,
          #left-1-1,
          #left-1-2,
          #left-1-3,
          #left-1-4 {
            border-left: 1px solid black;
          }
    
          #top-1-0,
          #top-1-1,
          #top-1-2,
          #top-1-3,
          #top-1-4 {
            border-top: 1px solid black;
          }
          `
          document.head.appendChild(style);
          gameboard.style.margin = "-75px -112px 20px 20px";
          gameboardButtonsBelow.style.margin = "-239px 52px 0px 20px";
      } else if (level === 'medium') {
        style.textContent = `
          #cell-0-10, #cell-0-11, #cell-0-12, #cell-0-13, #cell-0-14, #cell-1-10, #cell-1-11, #cell-1-12,
          #cell-1-13, #cell-1-14, #cell-2-10, #cell-2-11, #cell-2-12, #cell-2-13, #cell-2-14, #cell-3-10,
          #cell-3-11, #cell-3-12, #cell-3-13, #cell-3-14, #cell-4-10, #cell-4-11, #cell-4-12, #cell-4-13,
          #cell-4-14, #cell-5-10, #cell-5-11, #cell-5-12, #cell-5-13, #cell-5-14, #cell-6-10, #cell-6-11,
          #cell-6-12, #cell-6-13, #cell-6-14, #cell-7-10, #cell-7-11, #cell-7-12, #cell-7-13, #cell-7-14,
          #cell-8-10, #cell-8-11, #cell-8-12, #cell-8-13, #cell-8-14, #cell-9-10, #cell-9-11, #cell-9-12,
          #cell-9-13, #cell-9-14, #top-4-10, #top-4-11, #top-4-12, #top-4-13, #top-4-14, #top-3-10,
          #top-3-11, #top-3-12, #top-3-13, #top-3-14, #top-2-10, #top-2-11, #top-2-12, #top-2-13,
          #top-2-14, #top-1-10, #top-1-11, #top-1-12, #top-1-13, #top-1-14, #top-0-10, #top-0-11,
          #top-0-12, #top-0-13, #top-0-14, .row:nth-child(1), .row:nth-child(n+16), #left-4-0, #left-4-1, 
          #left-4-2, #left-4-3, #left-4-4, #left-4-5, #left-4-6, #left-4-7, #left-4-8, #left-4-9 {
            visibility: hidden;
          }
    
          #left-3-0, #left-3-1, #left-3-2, #left-3-3, #left-3-4, 
          #left-3-5, #left-3-6, #left-3-7, #left-3-8, #left-3-9 {
            border-left: 1px solid black;
          }
    
          #top-3-0, #top-3-1, #top-3-2, #top-3-3, #top-3-4,
          #top-3-5, #top-3-6, #top-3-7, #top-3-8, #top-3-9 {
            border-top: 1px solid black;
          }`
          document.head.appendChild(style);
          gameboard.style.margin = "-31px -81px 0px 2px";
          gameboardButtonsBelow.style.margin = '-107px 22px 0px 20px';
      } else {
        style.textContent = '';
        document.head.appendChild(style)
          gameboard.style.margin = "-11px -48px -51px"
          gameboardButtonsBelow.style.margin = '70px 22px 0 20px';
      }
      createNonogram(level, mode)
      modalWindow.style.visibility = 'hidden';
    })
  })
}
createModalWindow()


function createSolutionButton() {
  const collectionOfCells = Object.fromEntries(
    Array.from(document.querySelectorAll('[id^="cell-"]'))
      .map(el => [el.id, el])
  );

  const btnSolution = document.querySelector('.utility-item--solution');
  btnSolution.addEventListener('click', () => {
    console.log(currentGame);

    const elementsToUpdate = [];
    currentGame.solution.forEach((row, rowIndex) => {
      row.forEach((item, colIndex) => {
        if (item === 1) {
          const id = `cell-${rowIndex}-${colIndex}`;
          const element = collectionOfCells[id];
          if (element) {
            elementsToUpdate.push(element);
          }
        }
      });
    });

    elementsToUpdate.forEach(el => el.style.backgroundColor = 'black');
  });
}
createSolutionButton();


function createRandomButton() {
  const btnRandom = document.querySelector('.utility-item--random-game');
  btnRandom.addEventListener('click', () => {

    let cells = document.querySelectorAll('.cell')
    cells.forEach(item => {
      if (item.style.backgroundColor === 'black') {
        item.style.backgroundColor = 'white';
        console.log('yes');
      }
    })

    currentGame = levelOfGame['hard'][Math.floor(Math.random() * 5)]
    console.log(currentGame.level);
    createNonogram(currentGame.level, currentGame.name)

  })
}

createRandomButton()
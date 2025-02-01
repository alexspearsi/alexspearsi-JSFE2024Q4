import { levelOfGame } from './templates.js';
import { createNonogram } from './CreateNonogram.js';


const main = document.createElement('div')
main.classList.add('main')
document.body.append(main)

function createModal() {
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");

  const modalWindow = document.createElement("div");
  modalWindow.classList.add("modal-window");

  const modalTitle = document.createElement("p");
  modalTitle.classList.add("modal-title");
  modalTitle.textContent = "Choose your game mode";

  const modalLevels = document.createElement("div");
  modalLevels.classList.add("modal-levels");

  const levels = [
      { title: "Easy Mode", items: ["Dino", "Clown", "Camel", "Kitten", "Tree"], class: "level--easy" },
      { title: "Medium Mode", items: ["Chicken", "Penguin", "Mushroom", "Coffee", "Puppy"], class: "level--medium" },
      { title: "Hard Mode", items: ["Ice Cream", "Raccoon", "Alien", "Cactus", "Strawberry"], class: "level--hard" }
  ];

  levels.forEach(level => {
      const levelDiv = document.createElement("div");
      levelDiv.classList.add("level", level.class);

      const levelTitle = document.createElement("p");
      levelTitle.classList.add("level-title");
      levelTitle.textContent = level.title;
      levelDiv.appendChild(levelTitle);

      level.items.forEach(item => {
          const levelItem = document.createElement("p");
          levelItem.classList.add("level-item");
          levelItem.textContent = item;
          levelDiv.appendChild(levelItem);
      });

      modalLevels.appendChild(levelDiv);
  });

  const closeButton = document.createElement("img");
  closeButton.classList.add("modal-close-btn");
  closeButton.src = "./assets/svg/close.svg";
  closeButton.alt = "Close modal";


  modalWindow.appendChild(modalTitle);
  modalWindow.appendChild(modalLevels);
  modalWindow.appendChild(closeButton);
  modalOverlay.appendChild(modalWindow);
  
  document.body.appendChild(modalOverlay);
}
createModal();

function createWinModal() {
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay-win");
  modalOverlay.style.visibility = 'hidden';

  const modalWindow = document.createElement("div");
  modalWindow.classList.add("modal-window-win");

  const mainTitle = document.createElement("p");
  mainTitle.classList.add("modal-title-main-win");
  mainTitle.textContent = "GREAT!";

  const titleWin = document.createElement("p");
  titleWin.classList.add("modal-title-win");
  titleWin.textContent = "You have solved the nonogram in ";
  
  const timeSpan = document.createElement("span");
  timeSpan.classList.add("modal-title-win-span");
  
  const secondsText = document.createTextNode(" seconds!");
  
  titleWin.appendChild(timeSpan);
  titleWin.appendChild(secondsText);

  const closeButton = document.createElement("img");
  closeButton.classList.add("modal-close-btn-win");
  closeButton.src = "./assets/svg/close.svg";
  closeButton.alt = "Close modal";

  closeButton.addEventListener("click", () => {
      modalOverlay.style.visibility = 'hidden';
  });

  modalWindow.appendChild(mainTitle);
  modalWindow.appendChild(titleWin);
  modalWindow.appendChild(closeButton);
  modalOverlay.appendChild(modalWindow);
  
  document.body.appendChild(modalOverlay);

  return modalOverlay;
}
createWinModal();

function createScoreModal() {
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay-table");

  const modalWindow = document.createElement("div");
  modalWindow.classList.add("modal-window-table");

  const mainTitle = document.createElement("p");
  mainTitle.classList.add("modal-title-main-table");
  mainTitle.textContent = "List of Score";

  const listOfGames = document.createElement("div");
  listOfGames.classList.add("list-of-games");

  const noGamesMessage = document.createElement("p");
  noGamesMessage.classList.add("modal-title-table");
  noGamesMessage.textContent = "You have not solved any nonograms yet!";
  modalWindow.appendChild(noGamesMessage);

  const closeButton = document.createElement("img");
  closeButton.classList.add("modal-close-btn-table");
  closeButton.src = "./assets/svg/close.svg";
  closeButton.alt = "Close modal";

  closeButton.addEventListener("click", () => {
      modalOverlay.style.visibility = 'hidden';
  });

  modalWindow.appendChild(mainTitle);
  modalWindow.appendChild(listOfGames);
  modalWindow.appendChild(closeButton);
  modalOverlay.appendChild(modalWindow);
  
  document.body.appendChild(modalOverlay);
}
createScoreModal();

function createUtilities() {
  const utilitiesWrapper = document.createElement("div");
  utilitiesWrapper.classList.add("utilities-wrapper");

  const utilities = document.createElement("div");
  utilities.classList.add("utilities");

  const firstRow = document.createElement("div");
  firstRow.classList.add("first");

  const chooseGame = document.createElement("div");
  chooseGame.classList.add("utility-item", "utility-item--choose-game");
  chooseGame.textContent = "Choose game";

  const randomGame = document.createElement("div");
  randomGame.classList.add("utility-item", "utility-item--random-game");
  randomGame.textContent = "Random game";

  const resumeGame = document.createElement("div");
  resumeGame.classList.add("utility-item", "utility-item--resume-game");
  resumeGame.textContent = "Continue game";

  firstRow.appendChild(chooseGame);
  firstRow.appendChild(randomGame);
  firstRow.appendChild(resumeGame);

  const timer = document.createElement("div");
  timer.classList.add("utility-item", "utility-item--timer");
  
  const minutes = document.createElement("span");
  minutes.classList.add("minutes");
  minutes.textContent = "00";
  
  const separator = document.createTextNode(":" );
  
  const seconds = document.createElement("span");
  seconds.classList.add("seconds");
  seconds.textContent = "00";
  
  timer.appendChild(minutes);
  timer.appendChild(separator);
  timer.appendChild(seconds);

  const secondRow = document.createElement("div");
  secondRow.classList.add("second");

  const scoreboard = document.createElement("div");
  scoreboard.classList.add("utility-item", "utility-item--scoreboard");
  scoreboard.textContent = "Table of score";

  const audioToggle = document.createElement("div");
  audioToggle.classList.add("utility-item", "utility-item--audio");
  audioToggle.textContent = "Audio On";

  const themeToggle = document.createElement("div");
  themeToggle.classList.add("utility-item", "utility-item--theme-toggle");
  themeToggle.textContent = "Light On";

  secondRow.appendChild(scoreboard);
  secondRow.appendChild(audioToggle);
  secondRow.appendChild(themeToggle);

  utilities.appendChild(firstRow);
  utilities.appendChild(timer);
  utilities.appendChild(secondRow);

  utilitiesWrapper.appendChild(utilities);
  document.querySelector('.main').prepend(utilitiesWrapper);
}
createUtilities();

function createBoard() {
  const gameboardWrapper = document.createElement("div");
  gameboardWrapper.classList.add("gameboard-wrapper");
  
  const gameboardCreated = document.createElement("div");
  gameboardCreated.classList.add("gameboard");
  
  for (let row = 4; row >= 0; row--) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row", "clues");
    for (let col = 0; col < 15; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell", "top-hint");
      cell.id = `top-${row}-${col}`;
      rowDiv.appendChild(cell);
    }
    gameboardCreated.appendChild(rowDiv);
  }
  
  for (let row = 0; row < 15; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    
    for (let hintRow = 4; hintRow >= 0; hintRow--) {
      const leftHint = document.createElement("div");
      leftHint.classList.add("cell", "left-hint");
      leftHint.id = `left-${hintRow}-${row}`;
      rowDiv.appendChild(leftHint);
    }
    
    for (let col = 0; col < 15; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `cell-${row}-${col}`;
      rowDiv.appendChild(cell);
    }
    
    gameboardCreated.appendChild(rowDiv);
  }
  
  gameboardWrapper.appendChild(gameboardCreated);
  document.querySelector('.main').insertBefore(gameboardWrapper, document.querySelector('.main').children[1]);
  
  const gameboardElement = document.querySelector(".gameboard");
  if (gameboardElement) {
    gameboardElement.classList.add("visible");
  }
}

createBoard()

function addGameButtonsBelow() {
  const gameboardButtons = document.createElement('div');
  gameboardButtons.classList.add('gameboard-buttons-below');

  const solutionButton = document.createElement('div');
  solutionButton.classList.add('utility-item', 'utility-item--solution');
  solutionButton.textContent = 'Solution';

  const resetButton = document.createElement('div');
  resetButton.classList.add('utility-item', 'utility-item--reset-game');
  resetButton.textContent = 'Reset the game';

  gameboardButtons.appendChild(solutionButton);
  gameboardButtons.appendChild(resetButton);

  document.querySelector('.main').appendChild(gameboardButtons);

}

addGameButtonsBelow();

function createAudioElements() {
  const sounds = [
    { id: "click-white", src: "./audio/click-white.mp3" },
    { id: "click-black", src: "./audio/click-black.mp3" },
    { id: "click-x", src: "./audio/click-x.mp3" },
    { id: "click-win", src: "./audio/click-win.mp3" }
  ];

  sounds.forEach(sound => {
    const audio = document.createElement('audio');
    audio.id = sound.id;
    audio.src = sound.src;
    document.body.appendChild(audio);
  })
}

createAudioElements();

let timerInterval = null;
let startTime = null;
let audioOn = true;
let currentGame = levelOfGame[['easy']][Math.floor(Math.random() * 5)]
const gameboard = document.querySelector('.gameboard')
const style = document.createElement('style');
const modalWindow = document.querySelector('.modal-overlay')
const gameboardButtonsBelow = document.querySelector('.gameboard-buttons-below')
const modalWin = document.querySelector('.modal-overlay-win');
const modalWinClose = document.querySelector('.modal-close-btn-win');
const timeWindow = document.querySelector('.utility-item--timer');
const [minutes, seconds] = timeWindow.children
const utilityItem = document.querySelectorAll('.utility-item')
const resetTheGameBtn = document.querySelector('.utility-item--reset-game')
const buttonSwitcherTheme = document.querySelector('.utility-item--theme-toggle')

let jointArrayObj = {
  'easy': Array.from({ length: 5 }, () => Array(5).fill(0)),
  'medium': Array.from({ length: 10 }, () => Array(10).fill(0)),
  'hard': Array.from({ length: 15 }, () => Array(15).fill(0))
}

resetTheGameBtn.addEventListener('click', () => {
  jointArrayObj['hard'] = Array.from({ length: 15 }, () => Array(15).fill(0));
  jointArrayObj['medium'] = Array.from({ length: 10 }, () => Array(10).fill(0));
  jointArrayObj['easy'] = Array.from({ length: 5 }, () => Array(5).fill(0));

  if (timerInterval) {
    clearInterval(timerInterval);
    startTime = null;
    timerInterval = null;
    minutes.innerText = '00'
    seconds.innerText = '00'
  }

  document.querySelectorAll('[id^="cell-"]').forEach(item => {
    item.style.backgroundColor = 'white';
    item.innerHTML = '';
  })
})

document.querySelector('.utility-item--audio').addEventListener('click', () => {
  document.querySelector('.utility-item--audio').textContent = 
    document.querySelector('.utility-item--audio').textContent === "Audio On" ? "Audio Off" : "Audio On";

  audioOn = audioOn === true ? false : true;
})

buttonSwitcherTheme.addEventListener('click', () => {
  buttonSwitcherTheme.textContent = 
    buttonSwitcherTheme.textContent === "Light On" ? "Light Off" : "Light On";

  document.body.style.backgroundColor =
  document.body.style.backgroundColor === 'gray' ? 'white' : 'gray'

  document.body.style.color =
  document.body.style.color === 'white' ? 'black' : 'white'

  utilityItem.forEach(item => {
    item.style.borderColor = 
      item.style.borderColor === 'white' ? 'black' : 'white'
  })

  modalWindow.style.color =
    modalWindow.color === 'black' ? 'white' : 'black'

  modalWin.style.color =
    modalWindow.color === 'black' ? 'white' : 'black'
})

if (currentGame.level === 'easy') {
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
} 

createNonogram(currentGame.level, currentGame.name)
createModalWindow()
createSolutionButton();
createRandomButton()


function createModalWindow() {
  const gameboard = document.querySelector('.gameboard')
  const style = document.createElement('style');
  const chooseAGame = document.querySelector('.utility-item--choose-game')
  const closeModalWindow = document.querySelector('.modal-close-btn')
  const modalWindow = document.querySelector('.modal-overlay')
  const gameboardButtonsBelow = document.querySelector('.gameboard-buttons-below')
  
  closeModalWindow.addEventListener('click', () => {
    jointArrayObj['hard'] = Array.from({ length: 15 }, () => Array(15).fill(0));
    jointArrayObj['medium'] = Array.from({ length: 10 }, () => Array(10).fill(0));
    jointArrayObj['easy'] = Array.from({ length: 5 }, () => Array(5).fill(0));
    modalWindow.style.visibility = 'hidden';
  })
  
  chooseAGame.addEventListener('click', () => {
    modalWindow.style.visibility = 'visible';
    jointArrayObj['hard'] = Array.from({ length: 15 }, () => Array(15).fill(0));
    jointArrayObj['medium'] = Array.from({ length: 10 }, () => Array(10).fill(0));
    jointArrayObj['easy'] = Array.from({ length: 5 }, () => Array(5).fill(0));
  })
  
  const collectionOfModes = document.querySelectorAll('.level-item')
  
  collectionOfModes.forEach(element => {
    element.addEventListener('click', () => {
      if (timerInterval) {
        clearInterval(timerInterval);
        startTime = null;
        timerInterval = null;
        minutes.innerText = '00'
        seconds.innerText = '00'
      }

      const cells = document.querySelectorAll('.cell')
      cells.forEach(cell => {
        cell.style.backgroundColor = 'white'
        cell.innerText = '';
      })
      
      const level = element.parentElement.firstElementChild.innerText.split(' ')[0].toLowerCase();
      const mode = element.innerText;

      currentGame = levelOfGame[level].filter(item => item.name == mode)[0]

      if (document.head.querySelector('style')) {
        document.head.querySelector('style').innerText = '';
      }

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
function createSolutionButton() {
  const collectionOfCells = Object.fromEntries(
    Array.from(document.querySelectorAll('[id^="cell-"]'))
      .map(el => [el.id, el])
  );

  const btnSolution = document.querySelector('.utility-item--solution');
  btnSolution.addEventListener('click', () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      startTime = null;
      timerInterval = null;
      minutes.innerText = '00'
      seconds.innerText = '00'
    }

    document.querySelectorAll('[id^="cell-"]').forEach(item => {
      item.style.backgroundColor = 'white';
      item.innerHTML = '';
    })

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

let previousNumber = -1;

function createRandomButton() {
  const btnRandom = document.querySelector('.utility-item--random-game');
  btnRandom.addEventListener('click', () => {
    jointArrayObj['hard'] = Array.from({ length: 15 }, () => Array(15).fill(0));
    jointArrayObj['medium'] = Array.from({ length: 10 }, () => Array(10).fill(0));
    jointArrayObj['easy'] = Array.from({ length: 5 }, () => Array(5).fill(0));

    if (timerInterval) {
      clearInterval(timerInterval);
      startTime = null;
      timerInterval = null;
    }

    let cells = document.querySelectorAll('.cell')
    cells.forEach(item => {
      if (item.style.backgroundColor === 'black') {
        item.style.backgroundColor = 'white';
      }
      if (item.innerText !== '') {
        item.innerText = '';
      }
    })

    function getUniqueRandomNumber() {
      let newNumber;
      do {
        newNumber = Math.floor(Math.random() * 5);
      } while (newNumber === previousNumber);
    
      previousNumber = newNumber;
      return newNumber;
    }

    currentGame = levelOfGame['hard'][getUniqueRandomNumber()]
  
    document.querySelector('style')?.remove();


    const gameboard = document.querySelector('.gameboard');
    const gameBoardButtonsBelow = document.querySelector('.gameboard-buttons-below')
    gameBoardButtonsBelow.style.margin = '70px 22px 0 20px';
    gameboard.style.margin = '-11px -48px -51px';
    createNonogram('hard', currentGame.name)
  })
}

function isSolutionCorrect(playerArray, solutionArray) {
  return playerArray.every((row, i) =>
    row.every((cell, j) => cell === solutionArray[i][j])
);
}

const modalTitleWinSpan = document.querySelector('.modal-title-win-span')
modalWinClose.addEventListener('click', () => {
  modalWin.style.visibility = 'hidden';
})

// GAMEBOARD STARTS
document.querySelector('.gameboard').addEventListener('click', (event) => {
  
  if (event.target.matches('[id^="cell-"]')) {


    if (event.target.style.backgroundColor !== 'black') {
      if (audioOn) {
        document.getElementById('click-black').play();
      }
    } else {
      if (audioOn) {
        document.getElementById('click-white').play();
      }
    }

    if (!startTime) {
      startTime = Date.now();
      timerInterval = setInterval(() => {
        let time = Math.floor((Date.now() - startTime) / 1000);
    
        let mins = Math.floor(time / 60);
        let secs = time % 60;
    
        minutes.innerText = String(mins).padStart(2, '0');
        seconds.innerText = String(secs).padStart(2, '0');


      }, 1000);
    }

    event.target.style.backgroundColor = event.target.style.backgroundColor === 'black' ? 'white' : 'black';

    let row = event.target.id.split('-')[1];
    let column = event.target.id.split('-')[2];
    jointArrayObj[currentGame.level][row][column] = jointArrayObj[currentGame.level][row][column] === 1 ? 0 : 1;
    

    // Проверка победы
    if (isSolutionCorrect(jointArrayObj[currentGame.level], currentGame.solution)) {
      if (audioOn) {
        document.getElementById('click-win').play();
      }
      clearInterval(timerInterval); // Останавливаем таймер
      let totalTime = ((Date.now() - startTime) / 1000).toFixed(1);

      modalTitleWinSpan.innerText = Math.floor((Date.now() - startTime) / 1000);
      modalWin.style.visibility = 'visible';
      
      // Сброс игры
      startTime = null;
      jointArrayObj['hard'] = Array.from({ length: 15 }, () => Array(15).fill(0));
      jointArrayObj['medium'] = Array.from({ length: 10 }, () => Array(10).fill(0));
      jointArrayObj['easy'] = Array.from({ length: 5 }, () => Array(5).fill(0));


      // сохраняем игру в LocalStorage для table of score
      let saveObjGame = {
        'name': currentGame.name,
        'level': currentGame.level,
        'minutes': minutes.innerText,
        'seconds': seconds.innerText
      }

      let savedGames = JSON.parse(localStorage.getItem('gameHistory')) || [];

      if (savedGames.length === 5) {
        savedGames.shift()
      }
      savedGames.push(saveObjGame);
      savedGames = savedGames.sort((a, b) => {
        return (Number((a.minutes) * 60) + Number(a.seconds)) - (Number((b.minutes) * 60) + Number(b.seconds))
      })

      localStorage.setItem('gameHistory', JSON.stringify(savedGames));
    }
  }
});

// выбор нажатия на игравое поле (крестики)
document.addEventListener('contextmenu', (event) => {
  if (event.target.matches('[id^="cell-"]')) {
    event.preventDefault();

    if (event.target.innerText === 'X') {
      if (audioOn) {
        document.getElementById('click-white').play();
      }
    } else if (event.target.style.backgroundColor !== 'black') {
      if (audioOn) {
        document.getElementById('click-x').play();
      }
    }


    if (event.target.style.backgroundColor !== 'black') {
      event.target.innerText = event.target.innerText === 'X' ? '' : 'X';
    }
  }
});
// GAMEBOARD ENDS

/// modal table 

document.querySelector('.utility-item--scoreboard').addEventListener('click', () => {
  document.querySelector('.modal-overlay-table ').style.visibility = 'visible';

  const historyOfGames = JSON.parse(localStorage.getItem('gameHistory'))
                             .sort((a, b) => parseFloat(a.time) - parseFloat(b.time))

  if (historyOfGames.length > 0) {
    document.querySelector('.modal-title-table').style.display = 'none'
  }
  const modalTable = document.querySelector('.list-of-games');
  modalTable.innerHTML = '';

  historyOfGames.forEach((item, index) => {
    const elementOfGame = document.createElement('p')
    elementOfGame.innerText = `${index + 1}. Name: ${item.name} | Level: ${item.level} | Time: ${item.minutes}:${item.seconds}`

    modalTable.appendChild(elementOfGame)
  })
})

document.querySelector('.modal-close-btn-table').addEventListener('click', () => {
  document.querySelector('.modal-overlay-table').style.visibility = 'hidden';
})

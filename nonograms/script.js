import { lvlHard, lvlMedium, lvlEasy } from './templates.js';

const levelOfGame = {
  "hard": lvlHard,
  "medium": lvlMedium,
  "easy": lvlEasy
}


function createNonogram(level, name) {
  let versionOfGame = levelOfGame[level].find(item => name === name)
  console.log(versionOfGame);

  const applyStylesForHints = (id, number) => {
    const elHTML = document.getElementById(id);
    if (!elHTML) return;
    elHTML.style.color = 'yellow';
    elHTML.style.fontSize = '24px';
    elHTML.style.fontWeight = '900';
    elHTML.style.alignContent = 'center';
    elHTML.style.textAlign = 'center';
    elHTML.innerText = number || '';
  };
  
  // задаем верхние подсказки
  Object.keys(versionOfGame.colsHints).forEach((item) => {
    const element = versionOfGame.colsHints[item];
    element.forEach((hint, index) => {
      const id = `top-${index}-${item}`;
      applyStylesForHints(id, hint);
    });
  });
  
  // задаем подсказки слева
  Object.keys(versionOfGame.rowsHints).forEach((item) => {
    const element = versionOfGame.rowsHints[item];
    element.forEach((hint, index) => {
      const id = `left-${index}-${item}`;
      applyStylesForHints(id, hint);
    });
  });
  
  // игровое поле
  versionOfGame.solution.forEach((row, rowIndex) => {
    row.forEach((item, colIndex) => {
      if (item === 1) {
        const id = `cell-${rowIndex}-${colIndex}`;
  
        let element = document.getElementById(id);
        if (element) {
          element.style.backgroundColor = 'black';
        }
      }
    });
  });
}


createNonogram('hard', 'Raccoon in the forest')



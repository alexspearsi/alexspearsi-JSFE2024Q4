import { levelOfGame } from './templates.js';

export function createNonogram(level, name) {
  let versionOfGame = levelOfGame[level].find(item => item.name === name)
  console.log('Версия:',versionOfGame.name);

  const applyStylesForHints = (id, number) => {
    const elHTML = document.getElementById(id);
    if (!elHTML) return;
    elHTML.style.color = 'black';
    elHTML.style.fontSize = '24px';
    elHTML.style.fontWeight = '400';
    elHTML.style.alignContent = 'center';
    elHTML.style.textAlign = 'center';
    elHTML.innerText = number || '';
  };
  
  Object.keys(versionOfGame.colsHints).forEach((item) => {
    const element = versionOfGame.colsHints[item];
    element.forEach((hint, index) => {
      const id = `top-${index}-${item}`;
      applyStylesForHints(id, hint);
    });
  });
  
  Object.keys(versionOfGame.rowsHints).forEach((item) => {
    const element = versionOfGame.rowsHints[item];
    element.forEach((hint, index) => {
      const id = `left-${index}-${item}`;
      applyStylesForHints(id, hint);
    });
  });

  const collectionOfCells = {};
  document.querySelectorAll('[id^="cell-"]').forEach(element => {
    collectionOfCells[element.id] = element;
  });

  versionOfGame.solution.forEach((row, rowIndex) => {
    row.forEach((item, colIndex) => {
      if (item === 1) {
        const id = `cell-${rowIndex}-${colIndex}`;
        const element = collectionOfCells[id];
        if (element) {
          element.style.backgroundColor = 'black';
        }
      }
    });
  });
}
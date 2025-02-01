import { levelOfGame } from './templates.js';

export function createNonogram(level, name) {
  let versionOfGame = levelOfGame[level].find(item => item.name === name)

  const applyStylesForHints = (id, number) => {
    const elHTML = document.getElementById(id);
    if (!elHTML) return;
    elHTML.style.color = 'black';
    elHTML.style.fontSize = '18px';
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
}
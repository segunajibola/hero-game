function getDiceRollArray(diceCount) {
  /* const newDiceRolls = []
     for(let i = 0; i < diceCount; i++){
       newDiceRolls.push(Math.floor(Math.random()*6) +1)
     }
    */

  return new Array(diceCount)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1);

  // .map creates a new array from a former array. It takes each element of the former array as a single parameter, modifies each element in the former array using the .map function. Thus a new array is created.
}

function getDicePlaceholderHtml(diceCount) {
  return new Array(diceCount)
    .fill(0)
    .map(() => `<div class="placeholder-dice"></div>`)
    .join("");
}

const getPercentage = (remainingHealth, maximumHealth) =>
  (100 * remainingHealth) / maximumHealth;

export { getDiceRollArray, getDicePlaceholderHtml, getPercentage };

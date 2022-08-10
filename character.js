import {
  getDiceRollArray,
  getDicePlaceholderHtml,
  getPercentage,
} from "./utils.js";

/*
Challenge
1. Create a function called getNewMonster.
2. Write logic inside the function that takes the first 
monster from monstersArray and extracts that monster's 
data from characterData.
3. Save that data to a new const called nextMonsterData.
**hint.md for help!!**
*/

export function Character(data) {
  Object.assign(this, data);

  this.maxHealth = this.health;

  this.getHealthBarHtml = () => {
    const percent = getPercentage(this.health, this.maxHealth);

    return `<div class="health-bar-outer">
                <div class="health-bar-inner ${percent <= 25 ? "danger" : ""}" 
                    style="width: ${percent}%;">
                </div>
            </div>`;
  };

  this.diceHtml = getDicePlaceholderHtml(this.diceCount);

  // maxHealth will not change if this.health reduce

  // this.setDiceHtml = function(diceCount){
  //     return getDiceRollArray(diceCount).map(num => `<div class="dice">${num}</div>`).join('')
  // }

  this.setDiceHtml = function () {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    // the empty array to create random numbers inside
    this.diceHtml = this.currentDiceScore
      .map((num) => `<div class="dice">${num}</div>`)
      .join("");
  };

  this.takeDamege = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce(
      (accumulator, itterator) => accumulator + itterator
    );

    this.health -= totalAttackScore;

    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
    }

    // console.log(`${this.health} : ${totalAttackScore}`)
    console.log(getPercentage(this.health, this.maxHealth));

    // console.log(this.getHealthBarHtml(this.health, this.maxHealth))
  };

  this.getCharacterHtml = function () {
    // let diceHtml = setDiceHtml(diceCount)

    const { name, avatar, health, diceHtml} = this
    const healthBar = this.getHealthBarHtml()

    // document.getElementById(elementId).innerHTML =
    return `
                <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`;
  };
}

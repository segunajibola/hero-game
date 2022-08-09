import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js";

/*   
CHALLENGE
1. Set up a new method called getHealthBarHtml
2. Create a const called "percent" and set it equals to the 
returned value from our getPercentage function (think what 
arguments you want to pass in).
3. For now, just log out the value of the new const "percent". 
4. Down in the getCharacterHtml method, set up a const
called healthBar and set it equal to the returned value
of the getHealthBarHtml method.
*/

const getPercentage = (remainingHealth, maximumHealth) =>
  (100 * remainingHealth) / maximumHealth;

export function Character(data) {
  Object.assign(this, data);

  this.maxHealth = this.health;

  this.getHealthBarHtml = () => {
    const percent = getPercentage(this.health, this.maxHealth)
    // console.log(percent)
    return `<div class="health-bar-outer">
                <div class="health-bar-inner *YOUR CODE HERE* " 
                    style="width: *YOUR CODE HERE* %;">
                </div>
            </div>`
  }

  console.log(this.getHealthBarHtml(this.health, this.maxHealth))



  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  // maxHealth will not change if this.health reduce

  // this.getDiceHtml = function(diceCount){
  //     return getDiceRollArray(diceCount).map(num => `<div class="dice">${num}</div>`).join('')
  // }

  this.getDiceHtml = function () {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    // the empty array to create random numbers inside
    this.diceArray = this.currentDiceScore
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

  this.getCharacterHtml = function ({ name, avatar, health, diceCount }) {
    // let diceHtml = getDiceHtml(diceCount)

    const healthBar = this.getHealthBarHtml(this.health, this.maxHealth)

    // document.getElementById(elementId).innerHTML =
    return `
                <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <h4 class="name"> ${Math.floor(healthBar) + "%"} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${this.health} </b></div>
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`;
  };
}

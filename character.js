import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"

const getPercentage = (remainingHealth, maximumHealth) => 
    (100 * remainingHealth) / maximumHealth

export function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.maxHealth = this.health
    // maxHealth will not change if this.health reduce

    // this.getDiceHtml = function(diceCount){
    //     return getDiceRollArray(diceCount).map(num => `<div class="dice">${num}</div>`).join('')
    // }

    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        // the empty array to create random numbers inside
        this.diceArray = this.currentDiceScore.map(num =>
            `<div class="dice">${num}</div>`).join('')
    }

    this.takeDamege = function(attackScoreArray) {

        const totalAttackScore = attackScoreArray.reduce((accumulator, itterator) => accumulator + itterator)

        this.health -= totalAttackScore

        if(this.health <= 0){
            this.health = 0
            this.dead = true
        }

        console.log(`${this.health} : ${totalAttackScore}`)
        console.log(getPercentage)
    }

    this.getCharacterHtml = function({name, avatar, health, diceCount}) {
        
        // let diceHtml = getDiceHtml(diceCount)

        // document.getElementById(elementId).innerHTML =
        return `
                <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${this.health} </b></div>
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`
    }
}
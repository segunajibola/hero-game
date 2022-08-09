import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"

export function Character(data) {

    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function(diceCount){
        return getDiceRollArray(diceCount).map(num => `<div class="dice">${num}</div>`).join('')
    }
    this.getCharacterHtml = function({name, avatar, health, diceCount}) {
        
        // let diceHtml = getDiceHtml(diceCount)

        // document.getElementById(elementId).innerHTML =
        return `
                <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`
    }
}
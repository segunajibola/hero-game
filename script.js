/*
CHALLENGE
1. Convert our consts into two objects called 
"monster" and "hero".
2. Update the renderCharacter() function so that it accepts 
a single object "data" as its parameter instead of five string/numbers, 
reducing the number of arguments to pass in from five to one.
3. Update the template now each variable is coming from "data".
4. Update the function call.
*/
const hero = {
    heroElementId: "hero",
    heroName: "Wizard",
    heroAvatar: "images/wizard.png",
    heroHealth: 60,
    heroDiceRoll: 6 
}

const monster = {
    monsterElementId: "monster",
    monsterName: "Orc",
    monsterAvatar: "images/orc.png",
    monsterHealth: 10,
    monsterDiceRoll: 4
}

function renderCharacter(elementId, name, avatar, health, diceRoll) {
    document.getElementById(elementId).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                <div class="dice"> ${diceRoll} </div>
            </div>
        </div>`
}

renderCharacter(heroElementId, heroName, heroAvatar, heroHealth, heroDiceRoll);
renderCharacter(monsterElementId, monsterName, monsterAvatar, monsterHealth, monsterDiceRoll);
const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/hero.png",
    health: 60,
    diceRoll: [1, 2, 3],
    diceCount: 3
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/monster.jpg",
    health: 10,
    diceRoll: [2],
    diceCount: 1
}


function getDiceRollArray(diceCount){
    const newDiceRolls = []
    for(let i = 0; i < diceCount; i++){
        newDiceRolls.push(Math.floor(Math.random()*6) +1)
    }
    return newDiceRolls
}

function getDiceHtml(diceCount){
    return getDiceRollArray(diceCount).map(num => `<div class="dice">${num}</div>`).join('')
}

function renderCharacter({elementId, name, avatar, health, diceRoll,  diceCount}) {

    let diceHtml = getDiceHtml(diceCount)

    document.getElementById(elementId).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                ${diceHtml}
            </div>
        </div>`
}

renderCharacter(hero);
renderCharacter(monster);
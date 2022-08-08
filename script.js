

/* Challenge: 
1. Replace the for loop in getDiceRollArray with a new Array() and fill it 
with 0s as its initial state. The new array should be diceRoll length.
2. Use .map() directly on the array rather than declaring any new variables 
and return a random number from 1-6 in each element of the array.
3. Make sure you delete anything from that function that we no longer need.
*/ 

/* const poisonMushrooms = new Array(10).fill('🍄').map(mushroom => `<div class="box">${mushroom}</div>`).join('')

document.getElementById('mushrooms').innerHTML = poisonMushrooms
*/
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
    // const newDiceRolls = []
    // for(let i = 0; i < diceCount; i++){
    //     newDiceRolls.push(Math.floor(Math.random()*6) +1)
    // }

    return new Array(diceCount).fill(0).map(() => Math.floor(Math.random()*6) +1)

    // .map creates a new array from a former array. It takes each element of the former array as a single parameter, modifies each element in the former array using the .map function. Thus a new array is created.
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
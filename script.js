const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/hero.png",
    health: 60,
    // diceRoll: [1, 2, 3],
    diceCount: 3
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/monster.jpg",
    health: 10,
    // diceRoll: [2],
    diceCount: 1
}

function Character(data) {

    Object.assign(this, data)

    this.getDiceHtml = function(diceCount){
        return getDiceRollArray(diceCount).map(num => `<div class="dice">${num}</div>`).join('')
    }
    this.getCharacterHtml = function({elementId, name, avatar, health, diceRoll,  diceCount}) {
        
        // let diceHtml = getDiceHtml(diceCount)

        // document.getElementById(elementId).innerHTML =
        return `
                <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${this.getDiceHtml(diceCount)}
                </div>
            </div>`
    }
}



function getDiceRollArray(diceCount){
    /* const newDiceRolls = []
     for(let i = 0; i < diceCount; i++){
       newDiceRolls.push(Math.floor(Math.random()*6) +1)
     }
    */

    return new Array(diceCount).fill(0).map(() => Math.floor(Math.random()*6) +1)

    // .map creates a new array from a former array. It takes each element of the former array as a single parameter, modifies each element in the former array using the .map function. Thus a new array is created.
}

function render(){
    document.getElementById(hero.elementId).innerHTML = new Character(hero).getCharacterHtml(hero)
    document.getElementById(monster.elementId).innerHTML = new Character(monster).getCharacterHtml(monster)   
}

render()

/*
const studentDetails = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    country: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
    } 
    
const studentDetailsCopy = {}

Object.assign(studentDetailsCopy, studentDetails) 


console.log(studentDetailsCopy)
*/
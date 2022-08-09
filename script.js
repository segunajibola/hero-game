import { characterData } from "./data.js"
import { Character } from "./character.js"

const hero = new Character(characterData.hero)
const monster = new Character(characterData.monster)
const attackBtn = document.getElementById("attack-button")
const hero_div = document.getElementById("hero")
const monster_div = document.getElementById("monster")

function render(){

    hero_div.innerHTML = hero.getCharacterHtml(characterData.hero)
    monster_div.innerHTML = monster.getCharacterHtml(characterData.monster)   
}

render()

function attack(){
    hero.getDiceHtml(characterData.hero)
    monster.getDiceHtml(characterData.monster)
    hero.takeDamege(monster.currentDiceScore)
    monster.takeDamege(hero.currentDiceScore)
    render()
}

attackBtn.addEventListener("click", attack)

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
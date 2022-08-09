import { characterData } from "./data.js"
import { Character } from "./character.js"

function render(){
    document.getElementById("hero").innerHTML = new Character(characterData.hero).getCharacterHtml(characterData.hero)

    document.getElementById("monster").innerHTML = new Character(characterData.monster).getCharacterHtml(characterData.monster)   
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
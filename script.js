import { characterData } from "./data.js";
import { Character } from "./character.js";

const hero = new Character(characterData.hero);
const monster = new Character(characterData.monster);
const attackBtn = document.getElementById("attack-button");
const hero_div = document.getElementById("hero");
const monster_div = document.getElementById("monster");

function render() {
  hero_div.innerHTML = hero.getCharacterHtml(characterData.hero);
  monster_div.innerHTML = monster.getCharacterHtml(characterData.monster);
}

render();

function attack() {
  hero.getDiceHtml(characterData.hero);
  monster.getDiceHtml(characterData.monster);
  hero.takeDamege(monster.currentDiceScore);
  monster.takeDamege(hero.currentDiceScore);
  render()
  if(hero.dead || monster.dead){
      endGame()
  }
}

function endGame() {
    const endMessage = hero.health === 0 && monster.health === 0 ?
        "No victors - all creatures are dead" :
        hero.health > 0 ? "The Hero Wins" :
            "The Monster is Victorious"

    const endEmoji = hero.health > 0 ? "🔮" : "☠️"
    document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2> 
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>
        `
}

attackBtn.addEventListener("click", attack);

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

import { characterData } from "./data.js";
import { Character } from "./character.js";

const hero = new Character(characterData.hero);
const attackBtn = document.getElementById("attack-button");
const hero_div = document.getElementById("hero");
const monster_div = document.getElementById("monster");

const badArray = ["monster", "villian", "beast"];
let isWaiting = false;

function getNewMonster() {
  const nextMonsterData = characterData[badArray.shift()];
  //   console.log(nextMonsterData);
  return nextMonsterData ? new Character(nextMonsterData) : {};
}

// getNewMonster() function is changing the characterData[x] dynamically on each function call

let monster = getNewMonster();

function render() {
  hero_div.innerHTML = hero.getCharacterHtml();
  monster_div.innerHTML = monster.getCharacterHtml();
}

render();

function attack() {
  if (!isWaiting) {
    hero.setDiceHtml(characterData.hero);
    monster.setDiceHtml(characterData.monster);
    hero.takeDamege(monster.currentDiceScore);
    monster.takeDamege(hero.currentDiceScore);
    render();

    if (hero.dead) {
      endGame();
    } else if (monster.dead) {
      isWaiting = true;
      if (badArray.length > 0) {
        setTimeout(() => {
          monster = getNewMonster();
          render();
          isWaiting = false;
        }, 1000);
      } else {
        endGame();
      }
    }
  }
}

function endGame() {
  isWaiting = true;
  const endMessage =
    hero.health === 0 && monster.health === 0
      ? "No victors - all creatures are dead"
      : hero.health > 0
      ? "The Hero Wins"
      : "The Monster is Victorious";

  const endEmoji = hero.health > 0 ? "🔮" : "☠️";
  setTimeout(() => {
    document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2> 
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>
        `;
  }, 1500);
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

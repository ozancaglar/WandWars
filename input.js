const prompt = require('prompt-sync')({sigint: true});
let Characters = require("./characters");
//let characterSelect = require("./character-select")
const playerCharacterName = Characters.harry // pass in from character select (Balraj)
const enemyCharacterName = Characters.draco 
// console.log(playerCharacterName.name, playerCharacterName.health, playerCharacterName.spellPower);
let chosenSpell = '';
console.log(Boolean(''))
console.log(typeof playerCharacterName.spells);
while (!chosenSpell) {
    chosenSpell = prompt(`What spell do you want to use? Enter a number between 1 and ${playerCharacterName.spells.length}.`); // bugged for now because of WAN-13
    if (Number(chosenSpell) > playerCharacterName.spells.length || Number(chosenSpell < 1)){
        chosenSpell ='';
    } 
    switch(Number(chosenSpell)) { // perhaps regex?
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        default:
            console.log(`Enter a number between 1 and ${playerCharacterName.spells.length} to cast a spell.`)
          // code block
      }
}
// flavour text
console.log(`${playerCharacterName.name} whips out his wand and tries to cast ${playerCharacterName.spells[Number(chosenSpell) - 1].name}!`)
// damage system upon successful cast.
console.log(enemyCharacterName.health -= playerCharacterName.spells[Number(chosenSpell) - 1].strength * playerCharacterName.spellPower)

// test
// console.log(Characters.cedric.spells[0]['name']) // stupefy
const prompt = require('prompt-sync')({sigint: true});
let Characters = require("./characters");
//let characterSelect = require("./character-select")
const playerCharacterName = Characters.cedric // pass in from character select


// console.log(playerCharacterName.name, playerCharacterName.health, playerCharacterName.spellPower);
let chosenSpell = '';
console.log(Boolean(''))
console.log(typeof playerCharacterName.spells);
while (!chosenSpell) {
    chosenSpell = prompt(`What spell do you want to use? Enter a number between 1 and ${playerCharacterName.spells.length}.`); // bugged for now because of WAN-13
    if (Number(chosenSpell) > playerCharacterName.spells.length){
        chosenSpell ='';
    }
    switch(Number(chosenSpell)) { // perhaps regex?
        case 1:
            console.log(playerCharacterName.spells[0])
          break;
        case 2:
            console.log(playerCharacterName.spells[1])
          break;
        case 3:
            console.log(playerCharacterName.spells[2])
        break;
        case 4:
            console.log(playerCharacterName.spells[3])
        break;
        default:
            console.log("Choose one of the spells.")
          // code block
      }
}
console.log(`${playerCharacterName.name} whips out his wand and tries to cast ${playerCharacterName.spells[Number(chosenSpell) - 1].name}!`)
// test
// console.log(Characters.cedric.spells[0]['name']) // stupefy
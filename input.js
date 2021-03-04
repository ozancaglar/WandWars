const prompt = require('prompt-sync')({sigint: true});
let Characters = require("./characters");
const playerCharacterName = Characters.cedric


console.log(playerCharacterName.name, playerCharacterName.health, playerCharacterName.spellPower);
let chosenSpell = '';
console.log(playerCharacterName.spells);
while (chosenSpell == '') {
    chosenSpell = prompt(`What spell do you want to use? Enter a number between 1 and ${playerCharacterName.spells.length}.`); // bugged for now because of WAN-13
}
switch(Number(chosenSpell)) { // perhaps regex?
    case 1:
        console.log(Characters.cedric.spells[0])
      break;
    case 2:
        console.log(Characters.cedric.spells[1])
      break;
    case 3:
        console.log(Characters.cedric.spells[2])
    break;
    case 4:
        console.log(Characters.cedric.spells[3])
    break;
    default:
        console.log("Incorrect spell chosen.")
      // code block
  }

for (let i of [1,2,3,4,5]){
    console.log(i)
}
// test
// console.log(Characters.cedric.spells[0]['name']) // stupefy
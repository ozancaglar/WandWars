// This is just me trying things out, please ignore it, from Issy
var fs = require("fs");
const character = require("./characters");
const art = require("./art");
// const readline = require('readline');

// readline.emitKeypressEvents(process.stdin);

// if (process.stdin.isTTY) {
//   process.stdin.setRawMode(true);
// }

// process.stdin.on('keypress', (str, key) => {
//   if (key.ctrl && key.name === 'c') {
//     // do stuff
//   }
// });

function wait(ms) {
  // if ()
  // {
  let start = Date.now(),
    now = start;
  while (now - start < ms) {
    now = Date.now();
    // }
  }
}
function showScores() {
  console.log(`${player.name}: ${player.health} HP`);
  console.log(`${opponent.name}: ${opponent.health} HP \n`);
  wait(3000);
}

const player = character.n; // this character can change
let opponent;
if (player.house === "Slytherin") {
  opponent = character.dumbledore;
} else {
  opponent = character.voldemort;
}

// Intro
console.clear();
console.log(`Oh no! It's ${opponent.name}! Time to duel! \n`);
wait(3000);
console.clear();

while (player.health > 0 && opponent.health > 0) {
  console.log("Your turn to attack! \n");
  showScores();
  console.log("Here are your spells...");
  player.listSpells();
  spellNum = "";
  player.spellSelect();
  const spell = player.spells[spellNum - 1];
  if (spell.name !== "Impedimenta") {
    console.log(`\nYou cast ${spell.name}!`);
    wait(2000);
    const spellDamage = player.castSpell(spell);
    opponent.reduceHealth(spellDamage);
  } else {
    console.log(
      `\nYou cast Impedimenta, this blocked ${opponent.name}'s next attack! \n`
    );
    continue;
  }

  if (opponent.health <= 0 || player.health <= 0) {
    break;
  }
  wait(2000);
  showScores();
  wait(3000);

  // Them attacking
  console.clear();
  console.log(`${opponent.name} is attacking! \n`);
  showScores();
  const oppSpellNum = Math.floor(Math.random() * 3);
  const oppSpell = opponent.spells[oppSpellNum];
  console.log(`${opponent.name} used ${oppSpell.name}!`);
  wait(2000);
  const oppSpellDamage = opponent.castSpell(oppSpell);
  player.reduceHealth(oppSpellDamage);
  wait(1000);
  4;
  showScores();
  wait(3000);
  console.clear();
}

if (player.health >= 0) {
  art.win();
  console.log(`YOU WIN! ${opponent.name.toUpperCase()} IS DEFEATED!`);
  showScores();
} else {
  art.lose();
  console.log(`YOU DIED! ${opponent.name.toUpperCase()} WINS!`);
  showScores();
}

// pauses?

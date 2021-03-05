// This is just me trying things out, please ignore it, from Issy
const prompt = require("prompt-sync")({sigint: true});
const character = require("./characters");
function wait(ms) {
  let start = Date.now(),
      now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

const player = character.draco; // this can change
let opponent;
if (player.house === "Slytherin") {
  opponent = character.dumbledore;
} else {
  opponent = character.voldemort;
}

// Intro
console.log(`Oh no! It's ${opponent.name}! Time to duel!`);
wait(1000)
while (player.health > 0 && opponent.health > 0) {
  // Me attacking
  console.log("Your turn to attack!");
//   wait(1000)
  console.log(`${opponent.name} has ${opponent.health} HP`);
//   wait(1000)
  console.log("Here are your spells...");
//   wait(1000)
  player.listSpells();
  spellNum = '';
  player.spellSelect();
  const spell = player.spells[spellNum - 1];
  console.clear()
  console.log(`You cast ${spell.name}!`);
  const spellDamage = player.castSpell(spell);
  opponent.reduceHealth(spellDamage);
  console.log(`${player.name}: ${player.health} HP`);
  console.log(`${opponent.name}: ${opponent.health} HP`);

  console.log(`You cast ${spell.name}!`);
//   wait(1000)
  opponent.reduceHealth(spellDamage);
//   wait(1000)
  console.log(`${opponent.name} now has ${opponent.health} HP.`);

  // Them attacking
  console.log(`${opponent.name} is attacking!`);
//   wait(1000);
  console.log(`You have ${player.health} HP`);
//   wait(1000);
  const oppSpellNum = Math.floor(Math.random() * 3);
//   wait(1000);
  const oppSpell = opponent.spells[oppSpellNum];
  const oppSpellDamage = opponent.castSpell(oppSpell);
  console.log(`He used ${oppSpell.name}!`);
//   wait(1500);
  player.reduceHealth(oppSpellDamage);
  console.log(`You now have ${player.health} HP`);
}

if (player.health >= 0) {
  console.log(`YOU DIED! ${opponent.name.toUpperCase()} WINS!`);
} else {
  console.log(`YOU WIN! ${opponent.name.toUpperCase()} IS DEFEATED!`);
}

// pauses?

// This is just me trying things out, please ignore it, from Issy

const character = require("./characters");
const prompt = require("prompt-sync")();

const player = character.draco; // this can change
let opponent;
if (player.house === "Slytherin") {
  opponent = character.dumbledore;
} else {
  opponent = character.voldemort;
}

// Intro
console.log(`Oh no! It's ${opponent.name}! Time to duel!`);
console.log(`${player.name}: ${player.health} HP`);
console.log(`${opponent.name}: ${opponent.health} HP`);

while (player.health > 0 && opponent.health > 0) {
  // Me attacking
  console.log("Your turn to attack!");
  console.log("Here are your spells...");
  player.listSpells();
  const spellNum = prompt("Please enter the number of your spell: ");
  const spell = player.spells[spellNum - 1];
  console.log(`You cast ${spell.name}!`);
  const spellDamage = player.castSpell(spell);
  opponent.reduceHealth(spellDamage);
  console.log(`${player.name}: ${player.health} HP`);
  console.log(`${opponent.name}: ${opponent.health} HP`);

  if (opponent.health <= 0) {
    break;
  }

  // Them attacking
  console.log(`${opponent.name} is attacking!`);
  const oppSpellNum = Math.floor(Math.random() * 3);
  const oppSpell = opponent.spells[oppSpellNum];
  console.log(`${opponent.name} used ${oppSpell.name}!`);
  const oppSpellDamage = opponent.castSpell(oppSpell);
  player.reduceHealth(oppSpellDamage);
  console.log(`${player.name}: ${player.health} HP`);
  console.log(`${opponent.name}: ${opponent.health} HP`);
}

if (player.health >= 0) {
  console.log(`YOU WIN! ${opponent.name.toUpperCase()} IS DEFEATED!`);
} else {
  console.log(`YOU DIED! ${opponent.name.toUpperCase()} WINS!`);
}

// pauses?
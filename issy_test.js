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

while (player.health > 0 && opponent.health > 0) {
  // Me attacking
  console.log("Your turn to attack!");
  console.log(`${opponent.name} has ${opponent.health} HP`);
  console.log("Here are your spells...");
  player.listSpells();
  const spellNum = prompt("Please enter the number of your spell: ");
  const spell = player.spells[spellNum - 1];
  const spellDamage = player.castSpell(spell);
  console.log(`You cast ${spell.name}!`);
  opponent.reduceHealth(spellDamage);
  console.log(`${opponent.name} now has ${opponent.health} HP.`);

  // Them attacking
  console.log(`${opponent.name} is attacking!`);
  console.log(`You have ${player.health} HP`);
  const oppSpellNum = Math.floor(Math.random() * 3);
  const oppSpell = opponent.spells[oppSpellNum];
  const oppSpellDamage = opponent.castSpell(oppSpell);
  console.log(`He used ${oppSpell.name}!`);
  player.reduceHealth(oppSpellDamage);
  console.log(`You now now have ${player.health} HP`);
}

if (player.health >= 0) {
  console.log(`YOU DIED! ${opponent.name.toUpperCase()} WINS!`);
} else {
  console.log(`YOU WIN! ${opponent.name.toUpperCase()} IS DEFEATED!`);
}

// pauses?

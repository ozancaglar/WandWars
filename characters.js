const prompt = require("prompt-sync")({ sigint: true });

class Spell {
  constructor(name, strength, reboundChance) {
    this.name = name;
    this.strength = strength;
    this.reboundChance = reboundChance;
  }
}

// create base class for all characters
class Character {
  constructor(
    house,
    name,
    spells = [],
    health = 60,
    spellPower = 20,
    isOpponent
  ) {
    this.name = name;
    this.spells = isOpponent // inline if statement "tertiary operator"
      ? spells
      : [
          new Spell("Stupefy", 0.9, 0.15),
          new Spell("Expelliarmus", 0.7, 0.1),
          new Spell("Impedimenta"),
        ].concat(spells);
    this.health = health;
    this.spellPower = spellPower;
    this.house = house;
  }
  reduceHealth(spellDamage) {
    // this is applied to the victim character
    if (spellDamage > 0) {
      if (Math.random() < 0.2) {
        // chance of spell missing
        console.log("Whoops, spell missed! No damage dealt.\n");
      } else {
        this.health -= spellDamage;
        console.log(`Spell hit! ${spellDamage} damage dealt.\n`);
      }
    }
  }
  listSpells() {
    // this will return an object of spells for player to choose from
    for (let i = 0; i < this.spells.length; i++) {
      console.log(`${i + 1} - ${this.spells[i].name}`);
    }
  }
  spellSelect() {
    while (!spellNum) {
      spellNum = prompt(
        `What spell do you want to use? Enter a number between 1 and ${this.spells.length}: `
      );
      if (
        Number(spellNum) > this.spells.length ||
        Number(spellNum < 1) ||
        !Number.isInteger(Number(spellNum))
      ) {
        console.log(`\nNumber was not valid.\n`);
        spellNum = "";
      }
    }
  }
  castSpell(spell) {
    let spellDamage = spell.strength * this.spellPower;
    if (Math.random() < spell.reboundChance) {
      // chance of spell rebounding
      console.log("Oh no! The spell rebounded!");
      this.reduceHealth(spellDamage);
      return 0;
    } else {
      return spellDamage;
    }
  }
}
module.exports = {
  harry: new Character(
    "Gryffindor",
    "Harry Potter",
    [new Spell("Sectumsempra", 0.8, 0.15)],
    70
  ),
  draco: new Character("Slytherin", "Draco Malfoy", [
    new Spell("Tarantallegra", 0.6, 0.1),
  ]),
  crabbe: new Character(
    "Slytherin",
    "Vincent Crabbe",
    [new Spell("Fiendfyre", 1, 0.5)],
    undefined,
    15
  ),
  neville: new Character(
    "Gryffindor",
    "Neville Longbottom",
    undefined,
    70,
    15
  ),
  luna: new Character("Ravenclaw", "Luna Lovegood", [
    new Spell("Titillando", 0.4, 0),
  ]),
  cho: new Character("Ravenclaw", "Cho Chang"),
  cedric: new Character("Hufflepuff", "Cedric Diggary", undefined, 55, 25),
  hannah: new Character("Hufflepuff", "Hannah Abbott"),
  // house, name, spells = [], health = 100, spellPower = 20
  // "Avada kedavra", "Crucio", "Imperio"
  voldemort: new Character(
    "Slytherin",
    "Voldemort",
    [
      new Spell("Avada kedavra", 1, 0.3),
      new Spell("Crucio", 0.8, 0.3),
      new Spell("Imperio", 0.6, 0.3),
    ],
    70,
    25,
    true
  ),
  dumbledore: new Character(
    "Gryffindor",
    "Dumbledore",
    [
      new Spell("Firestorm", 1, 0.3),
      new Spell("Forceful", 0.8, 0.3),
      new Spell("Hydro", 0.6, 0.3),
    ],
    70,
    25,
    true
  ),
};

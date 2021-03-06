const Spell = require("./spells");
const prompt = require("prompt-sync")({ sigint: true });
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
    // chance of spell missing:
    if (spellDamage > 0) {
      if (Math.random() < 0.2) {
        console.log("Whoops, spell missed! No damage dealt.\n");
      } else {
        this.health -= spellDamage;
        console.log(`Spell hit! ${spellDamage} damage dealt.\n`);
        // console.log(`${this.name} Now has ${this.health} HP`);
      }
    }
  }
  listSpells() {
    // this will return an object of spells this character can use to choose from
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
  // this is calculated for the attacking character and will return an number based on spell cast, ready to put into reduce health
  // I might include spell rebounded in here as well (chance of self-damage)
  castSpell(spell) {
    // I need a spell CLASS inputted, not a string
    let spellDamage = spell.strength * this.spellPower;
    if (Math.random() < spell.reboundChance) {
      console.log("Oh no! The spell rebounded!");
      this.reduceHealth(spellDamage);
      return 0;
    } else {
      return spellDamage;
    }
  }
}

// create house class so can have different identifying questions
class GryffindorCharacter extends Character {
  constructor(isAccidentProne, ...args) {
    super("Gryffindor", ...args);
    this.isAccidentProne = isAccidentProne;
  }
}

class RavenclawCharacter extends Character {
  constructor(believes, ...args) {
    super("Ravenclaw", ...args);
    this.believes = believes;
  }
}

class HufflepuffCharacter extends Character {
  constructor(playsQuidditch, ...args) {
    super("Hufflepuff", ...args);
    this.playsQuidditch = playsQuidditch;
  }
}

class SlytherinCharacter extends Character {
  constructor(isLeader, ...args) {
    super("Slytherin", ...args);
    this.isLeader = isLeader;
  }
}
// make new students in houses, this in index.js?

module.exports = {
  harry: new GryffindorCharacter(
    false,
    "Harry Potter",
    [new Spell("Sectumsempra", 0.8, 0.15)],
    70
  ),
  draco: new SlytherinCharacter(true, "Draco Malfoy", [
    new Spell("Tarantallegra", 0.6, 0.1),
  ]),
  crabbe: new SlytherinCharacter(
    false,
    "Vincent Crabbe",
    [new Spell("Fiendfyre", 1, 0.5)],
    undefined,
    15
  ),
  neville: new GryffindorCharacter(
    true,
    "Neville Longbottom",
    undefined,
    70,
    15
  ),
  luna: new RavenclawCharacter(true, "Luna Lovegood", [
    new Spell("Titillando", 0.4, 0),
  ]),
  cho: new RavenclawCharacter(false, "Cho Chang"),
  cedric: new HufflepuffCharacter(true, "Cedric Diggary", undefined, 55, 25),
  hannah: new HufflepuffCharacter(false, "Hannah Abbott"),
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

let Spell = require("./spells");

// create base class for all characters
class Character {
  constructor(name, house, spells = [], health = 100, spellPower = 20) {
    this.name = name;
    this.spells = [
      new Spell("stupefy", 0.9, 0.15),
      new Spell("expelliarmus", 0.7, 0.1),
      new Spell("impedimenta", 0.5, 0.2),
    ].concat(spells);
    this.health = health;
    this.spellPower = spellPower;
    this.house = house;
  }
  reduceHealth(spellDamage) {
    // chance of spell missing:
    if (Math.random() < 0.2) {
      console.log("Spell missed! No damage done.");
    } else {
      this.health -= spellDamage;
      console.log(`Spell hit! ${this.name} lost ${spellDamage} HP`);
    }
  }
  listSpells() {
    // this will return an object of spells this character can use to choose from
  }
  castSpell(spell) {
    // this will return an number based on spell cast, ready to put into reduce health
    // I might include spell rebounded in here as well (chance of self-damage)
  }
}

// create house class so can have different identifying questions
class GryffindorCharacter extends Character {
  constructor(isAccidentProne, name, spells, health, spellPower) {
    super(name, "Gryffindor", spells, health, spellPower);
    this.isAccidentProne = isAccidentProne;
  }
}

class RavenclawCharacter extends Character {
  constructor(believes, name, spells, health, spellPower) {
    super(name, "Ravenclaw", spells, health, spellPower);
    this.believes = believes;
  }
}

class HufflepuffCharacter extends Character {
  constructor(playsQuidditch, name, spells, health, spellPower) {
    super(name, "Hufflepuff", spells, health, spellPower);
    this.playsQuidditch = playsQuidditch;
  }
}

class SlytherinCharacter extends Character {
  constructor(isLeader, name, spells, health, spellPower) {
    super(name, "Slytherin", spells, health, spellPower);
    this.isLeader = isLeader;
  }
}
// make new students in houses, this in index.js?

module.exports = {
  harry: new GryffindorCharacter(
    false,
    "Harry Potter",
    [new Spell("sectumsempra", 0.8, 0.15)],
    120
  ),
  draco: new SlytherinCharacter(true, "Draco Malfoy", [
    new Spell("tarantallegra", 0.6, 0.1),
  ]),
  crabbe: new SlytherinCharacter(
    false,
    "Vincent Crabbe",
    [new Spell("fiendfyre", 1, 0.5)],
    undefined,
    15
  ),
  neville: new GryffindorCharacter(true, "Neville Longbottom", 110, 15),
  luna: new RavenclawCharacter(true, "Luna Lovegood", [
    new Spell("titillando", 0.4, 0),
  ]),
  cho: new RavenclawCharacter(false, "Cho Chang"),
  cedric: new HufflepuffCharacter(true, "Cedric Diggary", 90, 25),
  hannah: new HufflepuffCharacter(false, "Hannah Abbott"),
};

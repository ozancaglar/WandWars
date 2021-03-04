// should this go in index.js? because will use a lot
let charSpells = {
  sectumsempra: 0.8,
  titillando: 0.4,
  tarantallegra: 0.6,
  fiendfyre: 1, // going to make this one do 20% damage to self as well
};

// create base class for all characters
class Character {
  constructor(name, house, spells = {}, health = 100, spellPower = 20) {
    this.name = name;
    this.spells = {
      stupefy: 0.9,
      expelliarmus: 0.7,
      impedimenta: 0.5,
      ...spells,
    };
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
let harry = new GryffindorCharacter(
  false,
  "Harry Potter",
  charSpells.sectumsempra
);
let draco = new SlytherinCharacter(
  true,
  "Draco Malfoy",
  charSpells.tarantallegra
);
let crabbe = new SlytherinCharacter(
  false,
  "Vincent Crabbe",
  charSpells.fiendfyre
);
let neville = new GryffindorCharacter(true, "Neville Longbottom");
let luna = new RavenclawCharacter(true, "Luna Lovegood", charSpells.titillando);
let Cho = new RavenclawCharacter(false, "Cho Chang");
let cedric = new HufflepuffCharacter(true, "Cedric Diggary");
let hannah = new HufflepuffCharacter(false, "Hannah Abbott");

// testing:
console.log(draco.health);
draco.reduceHealth(20);
console.log(draco.health);

// Default:
// health:100
// spellPower:50
// ["Stupefy", "Expelliarmus", "Impedimenta", "Petrificus Totalus"  ]

//
// const characters = [
//   {
//       name: "Harry Potter",
//       house: "Gryffindor",
//       accidentProne: false,
//       health: 120,
//       spells: ["Sectumsempra"]
//   },
//   {
//       name: "Neville Longbottom",
//       house: "Gryffindor",
//       accidentProne: true,
//       health: 110,
//       spellPower: 40
//   },
//   {
//       name: "Luna Lovegood",
//       house: "Ravenclaw",
//       believes: true,
//       spells: ["Titillando"]
//   },
//   {
//       name: "Cho Chang",
//       house: "Ravenclaw",
//       believes: false,
//   },
//   {
//       name: "Cedric Diggary",
//       house: "Hufflepuff",
//       playsQuidditch: true,
//       health: 90,
//       spellPower: 60
//   },
//   {
//       name: "Hannah Abbott",
//       house: "Hufflepuff",
//       playsQuidditch: false,
//   },

// {
//       name: "Draco Malfoy",
//       house: "Slytherin",
//       plans: true,
//       spells: ["Tarantallegra"]
//   },
//   {
//       name: "Vincent Crabbe",
//       house: "Slytherin",
//       plans: false,
//       spellPower: 40,
//       spells: ["Fiendfyre"]
//   },
//   {
//     name: "Voldemort",
//     house: "Slytherin",
//     spellPower: 60,
//     spells: ["Avada kedavra", "Crucio", "Imperio" ]
// },
// ]

// "Avada kedavra", "Crucio", "Imperio" for voldemort later
class Spell {
  constructor(name, strength, reboundChance) {
    this.name = name;
    this.strength = strength;
    this.reboundChance = reboundChance;
  }
}

let stupefy = new Spell(stupefy, 0.9, 0.15);
let expelliarmus = new Spell(expelliarmus, 0.7, 0.1);
let impedimenta = new Spell(impedimenta, 0.5, 0.2);
let sectumsempra = new Spell(sectumsempra, 0.8, 0.15);
let titillando = new Spell(titillando, 0.4, 0);
let tarantallegra = new Spell(tarantallegra, 0.6, 0.1);
let fiendfyre = new Spell(fiendfyre, 1, 0.5);

let spells = [
  stupefy,
  expelliarmus,
  impedimenta,
  sectumsempra,
  titillando,
  tarantallegra,
  fiendfyre,
];

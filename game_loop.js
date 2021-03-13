const { wait, showScores } = require("./helpers");

function gameLoop(player, opponent) {
  while (player.health > 0 && opponent.health > 0) {
    console.log("Your turn to attack! \n");
    showScores(player, opponent);
    console.log("Here are your spells...");
    player.listSpells();
    spellNum = "";
    player.spellSelect();
    const spell = player.spells[spellNum - 1];
    if (spell.name !== "Impedimenta") {
      console.log(`\nYou cast ${spell.name}!`);
      wait(1000);
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
    wait(1000);
    showScores(player, opponent);

    // Them attacking
    console.clear();
    console.log(`${opponent.name} is attacking! \n`);
    showScores(player, opponent);
    const oppSpellNum = Math.floor(Math.random() * 3);
    const oppSpell = opponent.spells[oppSpellNum];
    console.log(`${opponent.name} used ${oppSpell.name}!`);
    wait(2000);
    const oppSpellDamage = opponent.castSpell(oppSpell);
    player.reduceHealth(oppSpellDamage);
    wait(1000);
    4;
    showScores(player, opponent);
    wait(3000);
    console.clear();
  }
}

module.exports = {
  gameLoop: gameLoop,
};

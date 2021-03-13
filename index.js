var fs = require("fs");
const character = require("./characters");
const art = require("./art");
const { wait, showScores } = require("./helpers");
const { initPlayer } = require("./selector");
const { gameLoop } = require("./game_loop");
const stats = require("./statTracker");

let player = initPlayer();

let opponent;
if (player.house === "Slytherin") {
  opponent = character.dumbledore;
} else {
  opponent = character.voldemort;
}

// Intro
console.clear();
console.log(`Oh no! It's ${opponent.name}! Time to duel! \n`);
wait(2000);
console.clear();

gameLoop(player, opponent);

if (player.health >= 0) {
  art.win();
  console.log(`YOU WIN! ${opponent.name.toUpperCase()} IS DEFEATED!`);
  showScores(player, opponent);
  stats.winTrack();
} else {
  art.lose();
  console.log(`YOU DIED! ${opponent.name.toUpperCase()} WINS!`);
  showScores(player, opponent);
  stats.lossTrack();
}
stats.winPercentage();

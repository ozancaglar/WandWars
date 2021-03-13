var character = require("./characters");
var art = require("./art");
var helpers = require("./helpers");
var selector = require("./selector");
var gameLoop = require("./game_loop").gameLoop;
var stats = require("./statTracker");
var player = selector.initPlayer();
var opponent;
if (player.house === "Slytherin") {
    opponent = character.dumbledore;
}
else {
    opponent = character.voldemort;
}
// Intro
console.clear();
console.log("Oh no! It's " + opponent.name + "! Time to duel! \n");
helpers.wait(2000);
console.clear();
gameLoop(player, opponent);
if (player.health >= 0) {
    art.win();
    console.log("YOU WIN! " + opponent.name.toUpperCase() + " IS DEFEATED!");
    helpers.showScores(player, opponent);
    stats.winTrack();
}
else {
    art.lose();
    console.log("YOU DIED! " + opponent.name.toUpperCase() + " WINS!");
    helpers.showScores(player, opponent);
    stats.lossTrack();
}

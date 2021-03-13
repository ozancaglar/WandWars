var wait = function (ms) {
    var start = Date.now(), now = start;
    while (now - start < ms) {
        now = Date.now();
    }
};
var showScores = function (player, opponent) {
    console.log(player.name + ": " + player.health + " HP");
    console.log(opponent.name + ": " + opponent.health + " HP \n");
    wait(2000);
};
module.exports = {
    wait: wait,
    showScores: showScores
};

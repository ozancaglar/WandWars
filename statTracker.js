var fs = require('fs');
if (fs.existsSync('stats.json')) {
}
else {
    var stats = { "win": 0, "loss": 0 };
    var statsString = JSON.stringify(stats);
    fs.writeFileSync("stats.json", statsString);
}
var statFileName = 'stats.json';
var writeData = JSON.parse(fs.readFileSync(statFileName).toString());
function winTrack() {
    writeData['win'] += 1;
    fs.writeFileSync(statFileName, JSON.stringify(writeData));
    winPercentage();
}
function lossTrack() {
    writeData['loss'] += 1;
    fs.writeFileSync(statFileName, JSON.stringify(writeData));
    winPercentage();
}
function winPercentage() {
    console.log("You have a " + Math.round(100 * writeData['win'] / (writeData['win'] + writeData['loss'])) + " % win rate! You have won " + writeData['win'] + " times and lost " + writeData['loss'] + " times.");
}
module.exports = {
    winTrack: winTrack,
    lossTrack: lossTrack
};
if (require.main === module) {
    winTrack();
}

fs = require('fs');
function winTrack(){
    let name = 'stats.json';
    let accessData = JSON.parse(fs.readFileSync(name).toString());
    accessData['win'] += 1;
    fs.writeFileSync(name, JSON.stringify(accessData));
}
function lossTrack(){
    let name = 'stats.json';
    let accessData = JSON.parse(fs.readFileSync(name).toString());
    accessData['loss'] += 1;
    fs.writeFileSync(name, JSON.stringify(accessData));
}
function winPercentage(){
    let name = 'stats.json';
    let accessData = JSON.parse(fs.readFileSync(name).toString());
    console.log(`You have a ${Math.round(100*accessData['win']/(accessData['win'] + accessData['loss']))} % win rate! You have won ${accessData['win']} times and lost ${accessData['loss']} times.`);
}
module.exports = {
    winTrack,
    lossTrack,
    winPercentage
}
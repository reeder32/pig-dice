// Business logic
function Player(name, currentRoll, score) {
  this.name = name
  this.currentRoll = currentRoll
  this.score = score
}

Player.prototype.addScore = function (rollValue) {
  this.score += rollValue;
}

let player = new Player("Nick", 0, 0);
console.log(player.score);
player.addScore(20);
console.log(player.score);
player.addScore(30);
console.log(player.score);
// Ui logic
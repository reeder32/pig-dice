// Business logic
function Player(name, currentRoll, score) {
  this.name = name
  this.currentRoll = currentRoll
  this.score = score
}

Player.prototype.addScore = function () {
  this.score += this.currentRoll;
  this.currentRoll = 0;
}

Player.prototype.addRoll = function (rollValue) {
  this.currentRoll += rollValue;
}

function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

let player = new Player("Nick", 0, 0);
console.log(roll());
// Ui logic
// Business logic
function Player(name, currentRoll, score) {
  this.name = name
  this.currentRoll = currentRoll
  this.score = score
}

Player.prototype.addScore = function (rollValue) {
  this.score += rollValue;
}

Player.prototype.addRoll = function (roll) {
  this.currentRoll += roll;
}

//let player = new Player("Nick", 0, 0);

// Ui logic
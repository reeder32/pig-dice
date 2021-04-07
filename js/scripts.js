// Utility logic
function roll() {
  return Math.floor(Math.random() * 6) + 1;
}
// Business logic

// Game logic
function Game() {
  this.players = [];
  this.currentPlayer = undefined;
}


Game.prototype.addPlayer = function (player) {
  this.players.push(player);
}

Game.prototype.pass = function (player) {
  for (let i = 0; i < this.players.length; i++) {
    const p = this.players[i];
    //console.log(p.name);
    if (p.name === player.name) {
      this.players[i] = player;
      if (i < this.players.length - 1) {
        game.currentPlayer = this.players[i + 1]
      } else {
        game.currentPlayer = this.players[0]
      }
    }
  }
}

// Player logic
function Player(name) {
  this.name = name
  this.currentRoll = 0
  this.score = 0
}

Player.prototype.addScore = function () {
  this.score += this.currentRoll;
  this.currentRoll = 0;
}

Player.prototype.rollDice = function () {
  const rollValue = roll();
  if (rollValue === 1) {
    this.currentRoll = 0

  } else {
    this.currentRoll += rollValue;
  }
}



//let player = new Player("Nick", 0, 0);
let game = new Game();
let nick = new Player("Nick");
game.addPlayer(nick);
let sammai = new Player("Sammai");
game.addPlayer(sammai);
let michael = new Player("Michael");
game.addPlayer(michael);
game.pass(michael);
console.log(game.currentPlayer);
// Ui logic
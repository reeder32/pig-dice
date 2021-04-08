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

Player.prototype.addRollValue = function (rollValue) {
  this.currentRoll += rollValue;
}



//let player = new Player("Nick", 0, 0);

// Ui logic
$(document).ready(function () {
  let game = new Game();
  function showScoreboard() {
    $(".players").append("<li>" + game.players[game.players.length - 1].name + game.players[game.players.length - 1].currentRoll + game.players[game.players.length - 1].score + "</li>");
  }
  $(".playerForm").submit(function (event) {
    event.preventDefault();
    let name1 = $("input#name1").val();
    if (name1 != "") {
      let player = new Player(name1)
      game.addPlayer(player);
      $("input#name1").val("");
    } else {
      alert("plz enter a name")
    }
    showScoreboard();
  });

  $("#go").click(function () {
    $(".playerForm").hide();
    game.currentPlayer = game.players[0];
    console.log(game.currentPlayer)
  })

  $("#roll").click(function () {
    let rollVal = roll();
    if (rollVal === 1) {
      //do something
    } else {

    }
  })
});
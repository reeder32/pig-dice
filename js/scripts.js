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
    if (p.name === player.name) {
      this.players[i] = player;
      if (i < this.players.length - 1) {
        this.currentPlayer = this.players[i + 1]
      } else {
        this.currentPlayer = this.players[0]
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
    $("#players").empty();
    game.players.forEach(player => {
      $("#players").append("<li>" + player.name + player.currentRoll + player.score + "</li>");
    });
  }
  function showPlayerCard(player) {
    $("#player-name").text(player.name);
    $("#current-roll").text(player.currentRoll);
    $("#player-score").text(player.score);
  }
  $(".player-form").submit(function (event) {
    event.preventDefault();
    $(".player-form").hide();
    $(".turn").fadeIn();
    game.currentPlayer = game.players[0];
    showPlayerCard(game.currentPlayer);
  });

  $("#add-player").click(function (event) {
    event.preventDefault();
    let name1 = $("input#name1").val();
    if (name1 != "") {
      let player = new Player(name1)
      game.addPlayer(player);
      $("input#name1").val("");
    } else {
      alert("plz enter a name")
    }
    if (game.players.length >= 2) {
      $("#play-button").fadeIn();
    }
    showScoreboard();
  });

  $("#roll").click(function () {
    let rollVal = roll();
    if (rollVal === 1) {
      game.currentPlayer.currentRoll = 0;
      game.pass(game.currentPlayer);
    } else {
      game.currentPlayer.addRollValue(rollVal);
    }
    showPlayerCard(game.currentPlayer);
    showScoreboard();
  });

  $("#pass").click(function () {
    game.currentPlayer.addScore();
    if (game.currentPlayer.score >= 100) {
      console.log("Yay! You won!!");
    } else {
      game.pass(game.currentPlayer);
    }
    showPlayerCard(game.currentPlayer);
    showScoreboard();
  });
});
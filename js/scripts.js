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

// Ui logic
$(document).ready(function () {
  let game = new Game();
  function refresh() {
    location.reload();
  }
  function showScoreboard() {
    $("table").slideDown();
    $("table tbody").empty();
    game.players.forEach(player => {
      $("table tbody").append("<tr><td>" + player.name + "</td>" + "<td>" + player.score + "</td>" + "</tr>");
    });
  }
  function showPlayerCard(player) {
    $("#player-name").text(player.name);
    $("#current-roll").text(player.currentRoll);
    $("#player-score").text(player.score);
    highlightCurrentPlayer(player);
  }
  $(".player-form").submit(function (event) {
    event.preventDefault();
    $(".player-form").slideUp();
    $(".turn").fadeIn();
    game.currentPlayer = game.players[0];
    showPlayerCard(game.currentPlayer);
  });

  function highlightCurrentPlayer(player) {
    $("tr td").text();

  }

  $("#add-player").click(function (event) {
    event.preventDefault();
    let name1 = $("input#name1").val();
    if (name1 != "") {
      let player = new Player(name1)
      game.addPlayer(player);
      $("input#name1").val("");
    } else {
      window.alert("plz enter a name");
      return;
    }
    if (game.players.length >= 2) {
      $("#intro").text("Click 'Let's Play!' to get started.")
      $("#play-button").fadeIn();
    } else {
      $("#intro").text("At least one more name.")
    }
    showScoreboard();
  });

  $("#roll").click(function () {
    let firstDice = roll();
    let secondDice = roll();

    if (firstDice === 1 || secondDice === 1) {
      window.alert("You rolled a 1!");
      game.currentPlayer.currentRoll = 0;
      game.pass(game.currentPlayer);
      $("#dice-roll").text("");
    } else {
      $("#dice-roll").text("first dice: " + firstDice + " second dice: " + secondDice);
      game.currentPlayer.addRollValue(firstDice + secondDice);
    }

    showPlayerCard(game.currentPlayer);
    showScoreboard();
  });

  $("#pass").click(function () {
    game.currentPlayer.addScore();
    if (game.currentPlayer.score >= 100) {
      if (confirm(`Yay! ${game.currentPlayer.name} won this time!!`)) {
        refresh();
      }
    } else {
      game.pass(game.currentPlayer);
    }
    showPlayerCard(game.currentPlayer);
    showScoreboard();
  });
});
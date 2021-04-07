## Player Tests
Describe: addScore()

Test: "It should add the value of the current role to the player's score"
Code: player.addScore(20)
Expected Output: 20

Test: "It should add the value of the dice roll to the player's currentRoll"
Code: player.addRoll(5)
Expected Output: 5


Describe rollDice()

Test: "It should return a number a number between 1 and 6"
Code: roll()
Expected Output: 1,2,3,4,5,6

## Game Tests
Describe: addPlayer()
Test: "It should add the player object to the players object of the Game"
Code: let game = new Game();
      game.addPlayer( new Player("Nick"));
Expected Output: [ Player { name: 'Nick', currentRoll: 0, score: 0 } ]

Describe: pass()
Test: "It should assign the player that is passed in the arguement to the matching index and assign the next player as the currentPlayer of the game"
Code: let game = new Game();
let nick = new Player("Nick")
let sammai = new Player("Sammai")
      game.addPlayer(nick);
      game.addPlayer(sammai);
      game.pass(nick);
Expected Output: Player { name: "Sammai", currentRoll: 0, score: 0 }
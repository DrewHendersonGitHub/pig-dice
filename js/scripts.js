function Player() {
  this.totalScore = 0;
  this.score = 0;
  this.roll = 0;
}

Player.prototype.rollDice = function() {
  this.roll = Math.floor((Math.random()*6) +1);
  if (this.roll === 1) {
    this.score = 0;
    currentPlayer = switchPlayers(currentPlayer);
  }
  else {
    this.score += this.roll;
  }
  console.log(this.roll)
  console.log(this.score)
};

Player.prototype.hold = function() {
  this.totalScore += this.score;
  this.score = 0;
  currentPlayer = switchPlayers(currentPlayer);
}

function switchPlayers(currentPlayer) {  
  if (currentPlayer === 0) {
    currentPlayer = 1;
  }
  else {
    currentPlayer = 0;
  }
}

let currentPlayer = 0;
let playerOne = new Player();
let playerTwo = new Player();

if (currentPlayer === 0) {
  playerOne.rollDice();
}
else {
  playerTwo.rollDice();
}
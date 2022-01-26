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
  if (currentPlayer === "Jim") {
    currentPlayer = "Bob";
    playerOne.totalScore = this.totalScore;
  }
  else {
    currentPlayer = "Jim";
    playerTwo.totalScore = this.totalScore;
  }
}

let currentPlayer = "Jim";
// let activePlayer = new Player(); //maybe add later
let playerOne = new Player();
let playerTwo = new Player();

$(document).ready(function() {
  $("#p1Score").html(playerOne.totalScore);
  $("#p2Score").html(playerTwo.totalScore);  
  $(".currentPlayer").html(currentPlayer);
  
  if (currentPlayer === "Jim") {
    $("#submitRoll").click(playerOne.rollDice());
    $("#hold").click(playerOne.hold());
    $("#turnScore").html(playerOne.score);
  }
  if (currentPlayer === "Bob") {
    $("#submitRoll").click(playerTwo.rollDice());
    $("#hold").click(playerTwo.hold());
    $("#turnScore").html(playerTwo.score);
  }
});
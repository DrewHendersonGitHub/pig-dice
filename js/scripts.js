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
  console.log("rollDice - roll=" + this.roll, ", score=" + this.score);
};

Player.prototype.hold = function() {
  this.totalScore += this.score;
  this.score = 0;
  currentPlayer = switchPlayers(currentPlayer);
  console.log("hold     - roll=" + this.roll, ", score=" + this.score);
}

function switchPlayers(currentPlayer) {
  if (currentPlayer === "Jim") {
    currentPlayer = "Bob";
  }
  else {
    currentPlayer = "Jim";
  }
  return currentPlayer;
}

function attachEventListeners() {
  $("button#submitRoll").click(function() {
    if (currentPlayer === "Jim") {
      console.log("p1");
      playerOne.rollDice();
    } else {
      console.log("p2");
      playerTwo.rollDice();
    }
  });
  $("button#hold").click(function() {
    if (currentPlayer === "Jim") {
      console.log("p1");
      playerOne.hold();
    } else {
      console.log("p2");
      playerTwo.hold();
    }
  });
}

let currentPlayer = "Jim";
// let activePlayer = new Player(); //maybe add later
let playerOne = new Player();
let playerTwo = new Player();

$(document).ready(function() {
  attachEventListeners();
  $(".currentPlayer").html(currentPlayer);
  $("#p1Score").html(playerOne.totalScore);
  $("#p2Score").html(playerTwo.totalScore);

  if (currentPlayer === "Jim") {
    $("#turnScore").html(playerOne.score);
  }

  if (currentPlayer === "Bob") {
    $("#turnScore").html(playerTwo.score);
  }

});
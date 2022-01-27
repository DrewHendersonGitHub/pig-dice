function Player() {
  this.totalScore = 0;
  this.score = 0;
  this.roll = 0;
}

Player.prototype.rollDice = function() {
  this.roll = Math.floor((Math.random()*6) +1 );
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
  console.log(this.totalScore)
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
    $("#dice1").hide();
    $("#dice2").hide();
    $("#dice3").hide();
    $("#dice4").hide();
    $("#dice5").hide();
    $("#dice6").hide();
    $("#one").hide();

    if (currentPlayer === "Jim") {
      console.log("p1");
      playerOne.rollDice();
      
      if (playerOne.roll === 1) {
        $("#dice1").show();
        $("#one").show();
      }
      else if (playerOne.roll === 2) {
        $("#dice2").show();
      }
      else if (playerOne.roll === 3) {
        $("#dice3").show();
      }
      else if (playerOne.roll === 4) {
        $("#dice4").show();
      }
      else if (playerOne.roll === 5) {
        $("#dice5").show();
      }
      else{
        $("#dice6").show();
      }

    } else {
      console.log("p2");
      playerTwo.rollDice();
      
      if (playerTwo.roll === 1) {
        $("#dice1").show();
        $("#one").show();
      }
      else if (playerTwo.roll === 2) {
        $("#dice2").show();
      }
      else if (playerTwo.roll === 3) {
        $("#dice3").show();
      }
      else if (playerTwo.roll === 4) {
        $("#dice4").show();
      }
      else if (playerTwo.roll === 5) {
        $("#dice5").show();
      }
      else{
        $("#dice6").show();
      }
      
    }

    if (playerOne.totalScore + playerOne.score >= 100 || playerTwo.totalScore + playerTwo.score >= 100) {
      $("#game").hide();
      $("#gameover").show();      
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

  $("button").click(function() {    
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


  $("button#replay").click(function() {
    $("#game").show();
    $("#gameover").hide();
    playerOne.score = 0;
    playerOne.totalScore = 0;
    playerOne.roll = 0;
    playerTwo.score = 0;
    playerTwo.totalScore = 0;
    playerTwo.roll = 0;
    currentPlayer = switchPlayers(currentPlayer);
    $(".currentPlayer").html(currentPlayer);
    $("#p1Score").html(playerOne.totalScore);
    $("#p2Score").html(playerTwo.totalScore);
    $("#turnScore").html("0");
  });

}

let currentPlayer = "Jim";
if (Math.floor(Math.random()*2)) {
  currentPlayer = "Bob";
}
// let activePlayer = new Player(); //maybe add later
let playerOne = new Player();
let playerTwo = new Player();

$(document).ready(function() {
  attachEventListeners();
  $(".currentPlayer").html(currentPlayer);
  $("#p1Score").html(playerOne.totalScore);
  $("#p2Score").html(playerTwo.totalScore);
  $("#turnScore").html("0");
});
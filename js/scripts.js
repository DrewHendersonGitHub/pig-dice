function Player() {
  this.score = 0;
  this.roll = 0;
}

Player.prototype.rollDice = function() {
  this.roll = Math.floor((Math.random()*6) +1);
  console.log(this.roll)
  console.log(this.score)
  if (this.roll === 1) {
    this.score = 0;
  }
  else {
    this.score += this.roll;
  }
};
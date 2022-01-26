Describe: rollDice()
Test: It should return a value 1-6
Code: rollDice()
Expected Output: 1-6

Test: Rolling a 1 sets the score to zero
Code: this.roll = 1
Expected Output: this.score = 0

Describe: Player()
Test: It should store the value of rollDice()
Code:
let playerOne = new Player();
playerOne.rollDice();
playerOne;
Expected Output: Player {score: 1-6}

Test: It should add the value of each consecutive roll to the score
Code:
let playerOne = new Player();
playerOne.rollDice();
playerOne.rollDice();
playerOne.rollDice();
playerOne;
Expected Output: Player {*score of each roll added up*}


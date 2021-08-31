export function Game() {
  this.score = { "player1": 0, "player2": 0 };
  this.turn = true;
  this.activeScore = 0;
  this.initialRoll = true;
  this.activePlayer = "player2";
  this.dice = "Roll the dice!";
}
// true turn value = player 2 --------  flase turn value = player 1

Game.prototype.roll = function () {
  let diceValue = Math.floor((Math.random() * 6) + 1);
  if (diceValue === 1) {
    this.activeScore = 0;
    this.dice = diceValue;
  }
  else {
    this.activeScore += diceValue;
    this.dice = diceValue;
  }
};

Game.prototype.changeTurn = function () {
  if (this.turn) {
    this.turn = false;
    this.activePlayer = "player1";
  }
  else {
    this.turn = true;
    this.activePlayer = "player2";
  }
};

Game.prototype.hold = function () {
  if (this.turn === false) {
    this.score.player1 += this.activeScore;
    this.activeScore = 0;
    this.changeTurn();
  }
  else {
    this.score.player2 += this.activeScore;
    this.activeScore = 0;
    this.changeTurn();
  }

};

Game.prototype.winCheck = function () {
  if (this.score[this.activePlayer] + this.activeScore >= 50) {
    console.log(this.activePlayer + "wins");
    return "win";
  }
  else {
    console.log("game continues");
    return "continue";
  }
};
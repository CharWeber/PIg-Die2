import { TestScheduler } from "jest-cli";
import { Game } from "../src/game";

describe('Game', () => {

  let reGame;

  beforeEach(() => {
    reGame = new Game();
  });

  test('should correctly build game object', () => {
  
    expect(reGame.score).toEqual({ "player1": 0, "player2": 0 })
    expect(reGame.turn).toEqual(true)
    expect(reGame.activeScore).toEqual(0)
    expect(reGame.initialRoll).toEqual(true)
    expect(reGame.activePlayer).toEqual("player2")
    expect(reGame.dice).toEqual("Roll the dice!")
  });

  test('should display number between 1-6', () =>{
    reGame.roll();
    expect(reGame.dice).toBeGreaterThan(0);
    expect(reGame.dice).toBeLessThan(7);
  });

  // tests changing from player 2 to player 1
  test('Should change the active player between player 1 and player 2', () =>{
    reGame.turn = true
    reGame.changeTurn();
    expect(reGame.activePlayer).toEqual("player1")
  })

  // tests changing from player 1 to player 2
  test('Should change the active player between player 1 and player 2', () =>{
    reGame.turn = false
    reGame.changeTurn();
    expect(reGame.activePlayer).toEqual("player2")
  })

  // Adding score to player 1
  test('should add activeScore to player score', () => {
    reGame.activeScore = 10;
    reGame.turn = false;
    reGame.hold();
    expect(reGame.score.player1).toEqual(10)
  })
  // Adding score to player 2
  test('should add active score to player score',() => {
    reGame.activeScore = 10;
    reGame.turn = true;
    reGame.hold();
    expect(reGame.score.player2).toEqual(10)
  })

  // winCheck Active Player win
  test('should correctly determine the active player wins', () => {
    reGame.activePlayer = "player1"
    reGame.activeScore = 20
    reGame.score[reGame.activePlayer] = 30
    expect(reGame.winCheck()).toEqual("win")
  })

  // wincheck Active player lose (game continues)
  test('should correctly determine the active player wins', () => {
    reGame.activePlayer = "player2"
    reGame.activeScore = 20
    reGame.score[reGame.activePlayer] = 30
    expect(reGame.winCheck()).toEqual("continue")
  })
});
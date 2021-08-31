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
});
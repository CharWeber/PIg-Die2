import { TestScheduler } from "jest-cli";
import { Game } from "../src/game";

describe('Game', () => {

  test('should correctly build game object', () => {
    let game = new Game();
    expect(game.score).toEqual({ "player1": 0, "player2": 0 })
    expect(game.turn).toEqual(true)
    expect(game.activeScore).toEqual(0)
    expect(game.initialRoll).toEqual(true)
    expect(game.activePlayer).toEqual("player2")
    expect(game.dice).toEqual("Roll the dice!")
  });

  test('should display number between 1-6', () =>{
    let newGame = new Game
    expect(newGame.roll()).toEqual("7")
  })
});
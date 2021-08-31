import { TestScheduler } from "jest-cli";
import { Game } from "../src/game";

describe('Game', () => {

  test('should correctly build game object', () => {
    let game = new Game();
    expect(game.score).toEqual({ "player1": 45, "player2": 12 })
  })
});
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Game } from './game.js';


let game = new Game;

$(document).ready(function () {
  $("span#dice-value").text(game.dice);
  $("span#active-score").text(game.activeScore);
  $("span#active-player").text(game.activePlayer);

  $("button#roll").click(function () {
    game.roll();
    let dice = game.dice;
    let winCondition = game.winCheck();
    $("span#dice-value").text(game.dice);
    $("span#active-score").text(game.activeScore);
    $("span#" + game.activePlayer + "-held-score").text(game.score[game.activePlayer] + game.activeScore);
    if (winCondition === "win") {
      $("div#win-screen").show();
      $("div#game-board").hide();
      $("div#buttons").hide();
      $("span#winnerName").text(game.activePlayer);
    }
    else if (dice === 1){
      game.changeTurn();
      $("span#active-player").text(game.activePlayer);
      $("span#" + game.activePlayer + "-held-score").text(0);
    }
    else {
      if (game.turn === true) {
        $("player2div").show();
        $("player1div").hide();
      }
      else {
        $("player2div").hide();
        $("player1div").show();
      }
    }
  });

  $("button#hold").click(function () {
    game.hold();
    $("span#dice-value").text(0);
    $("span#active-score").text(game.activeScore);
    if (game.turn === true) {
      $("span#player2-held-score").text(0);
      $("span#player1-held-score").text(0);
      $("span#player1-total-score").text(game.score.player1);
      $("span#player2-total-score").text(game.score.player2);
      $("player2div").show();
      $("player1div").hide();
    }
    else {
      $("span#player2-held-score").text(0);
      $("span#player1-held-score").text(0);
      $("span#player1-total-score").text(game.score.player1);
      $("span#player2-total-score").text(game.score.player2);
      $("player2div").hide();
      $("player1div").show();
    }
    $("span#active-player").text(game.activePlayer);
  });

  // $("button#playAgain").click(function(){
  //   let game = new Game
  //   $("div#game-board").show();
  //   $("div#win-screen").hide();
  //   $("div#buttons").show();
  // })
});

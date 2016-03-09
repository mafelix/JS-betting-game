"use strict";
// window.alert("Hello! You start off with 100. You're allowed to bet 5-10" );
$(function(){
  $('#submit').hide();
  $('#betError').hide();
  $('#bet').on('input',validateBet);
  $('#guess').on('input',validateGuess);
  $('#submit').on('click', gameStart);
});

$(function(){
  update_bankroll();
});


// function initialize(){
//   var input_bet = game.getPlayerBet(); 
//   var input_guess = game.getGuess();
// } 

var game = {
  player_bet:null,
  bankroll: 100,
  random_number:null,
  player_guess:null,
  getPlayerBet: function() {
    return this.player_bet = parseInt($('#bet').val());
  },
  getRandom_Num: function(min, max) {
    return this.random_number = Math.floor(Math.random()*(max-min+1)+min);
  },
  getGuess: function(){ 
    return this.player_guess = parseInt($('#guess').val());
  }, 
};

function update_bankroll(){
  document.querySelector('#balance').innerHTML = game.bankroll;
}

function validateBet(){
  if( isNaN(game.getPlayerBet()) ){
    $('#betError').fadeIn(700).find('span').text('Please enter a number').css({'color':'red'});
  }
}
function validateGuess(){
  // var bet_input = ($('#bet').val());
  // var number_input = ($('#guess').val());
  if( isNaN(game.getGuess()) ){
    $('#guessError').fadeIn(700).find('span').text('Please enter a number').css({'color':'red'});
  }else{
    $('#submit').fadeIn(500);
  }
}

function gameStart(){
  var computerNum = game.getRandom_Num(1,10);
  var playerNum = game.getGuess();

  // output player bet, amount, and guess, random_num into another div? 
  // if player bets more than their bank throw an alert
  // if player bets more than 10 throw an alert
  // console.log(game.random_number, bankroll, player_bet, player_guess)

  if(game.player_bet > game.bankroll){
    // display message in box "you can't bet more money than you have!";
    var message = "You can't bet more money than you have!";
    $('#output').text(message);
  }else{
    if(game.random_number == game.player_guess){
      //display message in box "You win!";
      var messageWin = "You won! Heres " + game.player_bet*2 + " for you!";
      game.bankroll += game.player_bet;
      update_bankroll();
      $('#computerguess').text(computerNum);
      $('#playerguess').text(playerNum);
      $('#output').text(messageWin);
    }else if(game.random_number == (game.player_guess + 1 || game.player_guess -1)){
      //display message in box "Heres your money back... You were close";
      var messageTie = "Here's your money back... You were close";
      $('#computerguess').text(computerNum);
      $('#playerguess').text(playerNum);
      $('#output').text(messageTie);
    }else{
      //display message in box "Not even close! Baby! You lost!";
      var messageLose = "Not even close baby! You lost!";
      game.bankroll -= game.player_bet;
      update_bankroll();
      $('#output').text(messageLose);
      $('#computerguess').text(computerNum);
      $('#playerguess').text(playerNum);
      
      if(game.bankroll <= 0){
        //display message in box "You lost all your money! Get out of here!";
        alert("Sorry you lost all your money! Hahaha.");

      }
    }
  }
}

// while(bankroll>0){
//   var bet_amount = parseInt(prompt('How much do you want to bet 5-10 dollars'));
//   var guess = parseInt(prompt('Enter a number 1-10'));
//   var random_number = Math.floor((Math.random()*10)+1);
//   alert("The computer picked " + random_number);
//   if(guess === random_number){
//     alert("You won! Here's your money");
//     bankroll += bet_amount;
//     alert("You have this " + bankroll + " much money left");
//   }
//   else if(guess + 1 === random_number || guess - 1 === random_number){
//     alert("You were close! Heres your money back!");
//     alert("You have this " + bankroll + " much money left");
//   }
//   else{
//     alert("Sorry! You lose! Hahaha!");
//     bankroll -= bet_amount;
//     if(bankroll <= 0){
//       alert("You've lost all your money! Get out!");
//     }else{
//       alert("You have " + bankroll + " money left");
//     }  
//   }

// }
// function game(){
//   var bankroll = 100;
//   window.alert("$" + bankroll);
//window.onload = function
// };
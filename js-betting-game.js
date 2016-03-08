window.alert("Hello! You start off with 100. You're allowed to bet 5-10" );
// function game(){
//   var bankroll = 100;
//   window.alert("$" + bankroll);

// };
var bankroll = 100;

while(bankroll>0){
  var bet_amount = parseInt(prompt('How much do you want to bet 5-10 dollars'));
  var guess = parseInt(prompt('Enter a number 1-10'));
  var random_number = Math.floor((Math.random()*10)+1);
  alert("The computer picked " + random_number);
  if(guess === random_number){
    alert("You won! Here's your money");
    bankroll += bet_amount;
    alert("You have this " + bankroll + " much money left");
  }
  else if(guess + 1 == random_number || guess - 1 == random_number){
    alert("You were close! Heres your money back!");
    alert("You have this " + bankroll + " much money left");
  }
  else{
    alert("Sorry! You lose! Hahaha!");
    bankroll -= bet_amount;
    alert("You have this " + bankroll + " much money left");
  }

  
}
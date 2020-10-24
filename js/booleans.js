/*
The Number Guessing Game
stores a number between 1 and 10 and gives 
a player one attempt to guess the number.
*/

// when the game begins, the guess is false
// declared variable with boolean value
let correctGuess = false;
// stored a number to guess in a variable
const number = 7;
// prompt gives us a string value
const guess = prompt('Guess a number between 1 and 10:');
// check guess
console.log(guess);

/* 
1. Test if a player's guess matches the number
2. Change the value of correctGuess to true if they match
*/

// to remove string place a + symbol right before the string or variable
if (+guess === number) {
    correctGuess = true;
}

if (correctGuess) {
    console.log('You guessed the number!');
  } else {
    console.log(`Sorry, the number was ${number}.`);
  }
 
/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAns = 0;


// 2. Store the rank of a player
let playersRank = 0;


// 3. Select the <main> HTML element
let mainTag = document.querySelector("main");

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const question1 = "What is the capital of New York?";
const question2 = "What is the capital of California?";
const question3 = "What is the capital of Texas?";
const question4 = "What is the capital of Michigan?";
const question5 = "What is the capital of Arizona?";

// Answers stored in variable
const guess1 = prompt(question1).toUpperCase();
console.log(guess1);
const guess2 = prompt(question2).toUpperCase();;
console.log(guess2);
const guess3 = prompt(question3).toUpperCase();;
console.log(guess3);
const guess4 = prompt(question4).toUpperCase();;
console.log(guess4);
const guess5 = prompt(question5).toUpperCase();;
console.log(guess5);

// keep track of stored answers
const answer1 = "ALBANY";
const answer2 = "SACRAMENTO";
const answer3 = "AUSTIN";
const answer4 = "LANSING";
const answer5 = "PHOENIX";

// create arrays and for-loops
const guessArr = [guess1, guess2, guess3, guess4, guess5];
//  console.log(guessArr[0]); // check is good

const answerArr = [answer1, answer2, answer3, answer4, answer5];
// console.log(answerArr[0]); //check is good

for (let k = 0; k < 5; k++) {

  if (guessArr[k] === answerArr[k]) {
    console.log(guessArr[k] + " === " + answerArr[k]);
    correctAns++;
  }
  console.log(correctAns);

}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (correctAns === 1 || correctAns === 2) {
  console.log("Your Rank as a player is: Bronze!");
  playersRank = "Your Rank as a player is: Bronze!";
} else if (correctAns === 3 || correctAns === 4) {
  console.log("Your Rank as a player is: Silver!");
  playersRank = "Your Rank as a player is: Silver";
} else if (correctAns === 5) {
  console.log("Your Rank as a player is: Gold!");
  playersRank = "Your Rank as a player is: Gold";
} else { 
  console.log("I'm sorry, but you received: No Crown.");
  playersRank = "I'm sorry, but you received: No Crown.";
}

// 6. Output results to the <main> element
mainTag.innerHTML = playersRank;

/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAns = 0;


// 2. Store the rank of a player
let playersRank;


// 3. Select the <main> HTML element
const main = document.querySelector("main").innerHTML;


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const q1 = "What is the capital of New York?";
const q2 = "What is the capital of California?";
const q3 = "What is the capital of Texas?";
const q4 = "What is the capital of Michigan?";
const q5 = "What is the capital of Arizona?";

const Qn1 = prompt(q1);
  console.log(Qn1);
const Qn2 = prompt(q2);
  console.log(Qn2);
const Qn3 = prompt(q3);
  console.log(Qn3);
const Qn4 = prompt(q4);
  console.log(Qn4);
const Qn5 = prompt(q5);
  console.log(Qn5);


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/




// 6. Output results to the <main> element

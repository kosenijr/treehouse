// 1. Create a multidimensional array to hold quiz questions and answers
const americanArray = [
    ['How many U.S. Senators are there at Washington, D.C.?', '100'],
    ['How many states are there in the United States?', '50'], ['Throughout history, how many presidents are there in the U.S.?', '46'],
    ['How many houses are there in Congress?', '2'],
    ['How many territories are owned by the U.S.?', '14']
];

// check array
console.log(americanArray);

// 2. Store the number of questions answered correctly
let correctAnswer = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
// use '/* */' for multiple lines of comments
for (let kNum = 0; kNum < americanArray.length; kNum++) {
    // prompt questions and save answers in an array
    // set variables to array elements
    let question = americanArray[kNum][0];
    let answer = americanArray[kNum][1];
    let response = prompt(question);
    console.log(response);

    if (response === answer) {
        correctAnswer++;
    } else if (!response) {
        // log a blank space to the console if answer is NULL
        console.log(' ');
    }
}

// 4. Display the number of correct answers to the user
// query selector
let html = `
<h2>You passed ${correctAnswer} out of the ${americanArray.length} questions!</h2>
`;
document.querySelector('main').innerHTML = html;

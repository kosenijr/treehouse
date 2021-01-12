// 1. Create a multidimensional array to hold quiz questions and answers
const americanArray = [
    ['How many U.S. Senators are there at Washington, D.C.?', '100'],
    ['How many states are there in the United States?', '50'], ['Throughout history, how many presidents are there in the U.S.?', '46'],
    ['How many houses are there in Congress?', '2'],
    ['How many territories are owned by the U.S.?', '14']
];

// create arrays that will store rightly and wrongly answered questions
let answeredRight = [];
let answeredWrong = [];

// check array
// console.log(americanArray);

// 2. Store the number of questions answered correctly
let correctAnswer = 0;
let incorrectAnswer = 0;

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
    // set variables for:
    // array questions
    let question = americanArray[kNum][0];
    // listed array questions
    let lineQuestions = `<li>${question}</li>`;
    // array answers
    let answer = americanArray[kNum][1];
    // user's response to array questions
    let response = prompt(question);
    // console.log(response);

    // conditional statement: juxtapose user's responses to arrays answers
    if (response === answer) {
        correctAnswer++;
        answeredRight.push(lineQuestions);

        // console.log(`right: ${answeredRight}`)
    } else if (!response) {
        // log a blank space to the console if answer is NULL
        console.log(' ');
        incorrectAnswer++;
        answeredWrong.push(lineQuestions);

        // console.log(`wrong: ${answeredWrong}`)
    } else {
        incorrectAnswer++;
        answeredWrong.push(lineQuestions);

        // console.log(`wrong: ${answeredWrong}`)
    }
}

// store lists in variables and remove separative commas from the array
const score = `
<h1>You passed ${correctAnswer} out of the ${americanArray.length} questions!</h1>
`;
const rightList = `
<h2>You answered these questions right:</h2>
<ol>${answeredRight.join(" ")}</ol>
`;
const wrongList = `
<h2>You answered these questions wrong:</h2>
<ol>${answeredWrong.join(" ")}</ol>
`;

// 4. Display the number of correct answers to the user
// messages
let html = `
${score}
<br>
${rightList}
<br>
${wrongList}
`;

// query selector
document.querySelector('main').innerHTML = html;

// ******************************************************
// ALWAYS USE DOUBLE QUOTATIONS ("") FOR .JOIN() function



// 1. Create an array to hold quiz questions and answers
// const questions = [
//     ['How many planets are in the Solar System?', '8'],
//     ['How many continents are there?', '7'],
//     ['How many legs does an insect have?', '6'],
//     ['What year was JavaScript created?', '1995']
//   ];

// CHANGES: make questions array elements into objects
// if data is not too bulky, then fit within single lines
// const questions = [
//   {
//     question: 'How many planets are in the Solar System?',
//     answer: '8'
//   },
//   {
//     question: 'How many continents are there?',
//     answer: '7'
//   },
//   {
//     question: 'How many legs does an insect have?',
//     answer: '6'
//   },
//   {
//     question: 'What year was JavaScript created?',
//     answer: '1995'
//   }
// ];

// SINGLE LINES
const questions = [
  { question: 'How many planets are in the Solar System?', answer: '8' },
  { question: 'How many continents are there?', answer: '7' },
  { question: 'How many legs does an insect have?', answer: '6' },
  { question: 'What year was JavaScript created?', answer: '1995' }
];



// 2. Store the number of questions answered correctly
const correct = [];
const incorrect = [];
let correctAnswers = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
// for (let i = 0; i < questions.length; i++) {
//   let question = questions[i][0];
//   let answer = questions[i][1];
//   let response = prompt(question);

//   if (response === answer) {
//     correctAnswers++;
//     correct.push(question);
//   } else {
//     incorrect.push(question);
//   }
// }

// CHANGES: replace questions array properties (objects) more readable
for (let i = 0; i < questions.length; i++) {
  let question = questions[i].question;
  let answer = questions[i].answer;
  let response = prompt(question);

  if (response === answer) {
    correctAnswers++;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}


function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user
let html = `
    <h1>You got ${correctAnswers} question(s) correct</h1>
    <h2>You got these questions right:</h2>
    <ol>${createListItems(correct)}</ol>
  
    <h2>You got these questions wrong:</h2>
    <ol>${createListItems(incorrect)}</ol>
  `;

document.querySelector('main').innerHTML = html;
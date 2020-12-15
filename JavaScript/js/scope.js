// The Global Scope (outside function(s))

const person = 'Lee';

// function greeting() {
//   // Function scope
//   let person = 'Meg';
//   alert(`Hi, ${person}!`);
// }

// function greeting2() {
//   // Function scope
//   let person = 'Robert';
//   alert(`Good morning, ${person}!`);
// }

// greeting(); // returns 'Hi, Meg'
// alert(`Hi, ${person}!`); // returns 'Hi, Lee'
// greeting(); // returns 'Hi, Meg'
// greeting2(); // returns 'Good morning, Robert'

// -----------------------------------------------

// ***functions can access the global scope
function greeting() {
  // Function scope
  const person = 'Meg';
  alert(`Hi, ${person}!`);
}
greeting(); // returns 'Hi, Meg'
alert(`Hi, ${person}!`); // returns 'Hi, Lee'
greeting(); // returns 'Hi, Meg'



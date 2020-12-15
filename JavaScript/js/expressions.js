// console.log(getRandomNumber(10));

// let getRandomNumber = function (upper) {
//   const randomNumber = Math.floor(Math.random() * upper) + 1;
//   return randomNumber;
// }

// OR

function getRandomNumber(upper) {
  const randomNumber = Math.floor(Math.random() * upper) + 1;
  return randomNumber;
}

getRandomNumber(10);
console.log(getRandomNumber(10));

  // *** Function declarations load before any code is executed.
  
  // A function DECLARATION is a function in the following form: 
  // function abc(123) {

  // }


  // An ANONYMOUS FUNCTION is a function EXPRESSION in the following form:
  // const abc = function(123) {

  // }

  // While using a function expression, there is no hoisting: a function must be defined. then it can be calledn not vice versa.
  // An attempt to call a function (expression) before the function is defined will result in an error.

  // using const, let, or var inside of a function limits its usage to w/in said function
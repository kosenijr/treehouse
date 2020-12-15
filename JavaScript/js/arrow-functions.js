// function declaration

// function getRandomNumber() {
//     const randomNumber = Math.floor( Math.random() * 6 ) + 1;
//     return randomNumber;
//   }

// -------------------------------------------------
// change function declaration to a function expression

// const getRandomNumber = function () {
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     return randomNumber;
// }

// -------------------------------------------------
// function expression to an arrow function: arrow functions are ANONYMOUS functions as well
// no hoisting in arrow functions (will get error if function is called before defined)

// const getRandomNumber = () => {
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     return randomNumber;
// }
// getRandomNumber();
// console.log(getRandomNumber());

// -------------------------------------------------
// w/ parameters

// const getRandomNumber = (upper) => {
//     const randomNumber = Math.floor(Math.random() * upper) + 1;
//     return randomNumber;
// }
// getRandomNumber();
// console.log(getRandomNumber(365));

// -------------------------------------------------
// task: rewrite getArea function using the arrow function

const getArea = (length, width, units) => {
    const area = length * width;
    return `${area} ${units}`;
}
getArea();
console.log(getArea(13, 11, 'miles'));
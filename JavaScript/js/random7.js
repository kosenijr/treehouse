// /**
//  * Returns a random number between two numbers.
//  * @param {number} lower - The lowest number value.
//  * @param {number} upper - The highest number value.
//  * @return {number} The random number value.
//  **/

// Math.floor(Math.random() * (6 - 1 + 1)) + 1;

// // Call the function and pass it different values

// const getRandomNumber = (upper, lower) => {
//     const randNum = Math.floor(Math.random() * (upper - 1 + 1)) + lower;
//     return randNum;
// }
// getRandomNumber();
// console.log(getRandomNumber(37, 1));

// -------------------------------------------------
// shorten by returning the direct formula
// const getRandomNumber = (lower, upper) => {
//     return Math.floor(Math.random() * (upper - lower + 1)) + lower;
// }
// // getRandomNumber();
// console.log(getRandomNumber(95, 'seven')); //NaN: Not a Number
// console.log(getRandomNumber(25, 50));
// console.log(getRandomNumber(45, 47));
// -------------------------------------------------
// shorten by returning the direct formula and throw an error
// javascript allows developers to throw a custom error or exception to displaying a clear message.
const getRandomNumber = (lower, upper) => {
    if (isNaN(lower) || isNaN(upper)) {
        throw Error('One of your selections is not a number. Please pick again!');
    } else if (lower >= upper) {
        throw Error('Your range is unclear. Please try again!')
    } else {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }
}
// getRandomNumber();
console.log(getRandomNumber(5, 45)); //NaN: Not a Number

// // ***** customary for functions to be placed at the top of the file.
// // function alertRandom() {
// function getRandomNumber() {
//     // creates a random number from 1-6 and stores it in the randomNumber variable
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     // Math.Floor and Math.random are both functions ( "()" )
//     // alert(randomNumber);
//     return randomNumber;
// }
// // alertRandom();
// // alertRandom();
// // alertRandom();
// // alertRandom();

// alert(getRandomNumber());
// console.log(getRandomNumber());

// //*** a function call ( "()" ) can be stored in variables
// const dieRoll = getRandomNumber();


// -------------------------------------------------
// FUNCTION PARAMETERS AND ARGUMENTS
function getRandomNumber(upper) { //"upper" is the parameter   
    const randomNumber = Math.floor(Math.random() * upper) + 1;
    return randomNumber;
}
console.log( getRandomNumber(6)); // argument is "6"
console.log( getRandomNumber(100)); // argument is "100"
console.log( getRandomNumber(1000)); // argument is "1000"
console.log( getRandomNumber(20)); // argument is "20"








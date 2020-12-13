// ***** customary for functions to be placed at the top of the file.
// function alertRandom() {
function getRandomNumber() {    
    // creates a random number from 1-6 and stores it in the randomNumber variable
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    // Math.Floor and Math.random are both functions ( "()" )
    // alert(randomNumber);
    return randomNumber;
}
// alertRandom();
// alertRandom();
// alertRandom();
// alertRandom();

alert(getRandomNumber());
console.log(getRandomNumber());

//*** a function call ( "()" ) can be stored in variables
const dieRoll = getRandomNumber();








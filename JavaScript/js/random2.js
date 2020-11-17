// const dieRoll = Math.floor( Math.random() * 6 ) + 1;
// console.log(`You rolled a ${dieRoll}!`);



// Collect input from a user
let getAString = prompt("Pick any number to create a random number:");
console.log(getAString);
console.log(typeof(getAString));
// Convert the input to a number
let stringToNumber = parseInt(getAString);
console.log(stringToNumber);
console.log(typeof(stringToNumber));

// create a conditional statement
// Use Math.random() and the user's number to generate a random number'

if (stringToNumber) {
    
    const randomInteger = Math.floor(Math.random() * stringToNumber) + 1;
    console.log(randomInteger);

    // Create a message displaying the random number
    document.querySelector('h1').innerHTML = `${randomInteger} is a random number between 1 and ${stringToNumber}.`;
} else {
    console.log(`You need to provide a number. Try again!`)
    document.querySelector('h1').innerHTML = `You need to provide a number. Try again!`;
}


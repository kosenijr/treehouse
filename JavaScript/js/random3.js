// Collect min and max number from a user
let goLow = prompt("Pick any number:")
let goHigh = prompt(`Pick any number that is higher that ${goLow}:`);

// Convert the input to a number
let lowNumber = parseInt(goLow);
let highNumber = parseInt(goHigh);

// create a conditional statement
// Use Math.random() and the user's number to generate a random number'

if (highNumber > lowNumber) {

    const randInt = Math.floor(Math.random() * (highNumber - lowNumber + 1) + lowNumber);
    console.log(randInt);

    // Create a message displaying the random number
    document.querySelector('h1').innerHTML = `${randInt} is a random number between ${lowNumber} and ${highNumber}.`;
} else {
    console.log(`You need to provide two numbers or a number higher than ${lowNumber}. Try again!`)
    document.querySelector('h1').innerHTML = `You need to provide a number higher than ${lowNumber}. Try again!`;
}


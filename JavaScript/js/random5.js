// Collect min and max number from a user
let goLow = prompt("Pick any number:")
let goHigh = prompt(`Pick any number that is higher that ${goLow}:`);

// Convert the input to a number
goLow = parseInt(goLow);
goHigh = parseInt(goHigh);

// create a conditional statement
// Use Math.random() and the user's number to generate a random number

// create a function w/ min and max
function highAndLow(min, max) {
    if ((max > min) && (max && min)) {

        const randInt = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(randInt);

        // Create a message displaying the random number
        document.querySelector('h1').innerHTML = `${randInt} is a random number between ${min} and ${max}.`;
        // fiX NaN statement                                                         
    } else if (min === NaN || max === NaN) {
        console.log("You need to provide two numbers! Try again.");
        document.querySelector('h1').innerHTML = `You need to provide two numbers! Try again.`;
    } else {
        console.log(`You need to provide a number higher than ${min}. Try again!`)
        console.log(typeof(min);
        document.querySelector('h1').innerHTML = `You need to provide a number higher than ${min}. Try again!`;
    }
}
highAndLow(goLow, goHigh);



                                                                                                                                                     
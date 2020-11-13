// Edit the math.js file to accomplish these 4 goals:

// __________________________________________________________________________________________________

// declare program variables
// 1. Move all of your variable declarations to the top of the script.
var num1 = prompt("Please type a number");
var num2 = prompt("Please type another number");

var message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";

// collect numeric input
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// announce the program
// add an if/else statement to provide contextual alerts
// 2. Add an if statement to test that the 2nd input is not zero. You can't divide by 0,
//    so notify the user with an alert, that they need to reload and try again. 
//    Here's one possible alert message:
//    "The second number is 0. You can't divide by zero. Reload and try again."
// 3. Check to see if the first OR second input are numbers.
//    Use JavaScript's isNaN() method to check. See the
//    Teacher's Notes for information on this method. If one is NOT a number
//    then send an alert message. For example:
//    "At least one of the values you typed is not a number. Reload and try again."


if (num2 === 0) {
    alert(`
    Sorry, you picked 0.
    You can't divide by this number.
    Please reload and try again!
    `)
} else if (isNaN(num1) || isNaN(num2)) {
    alert(`One, or both, of the values entered is not a number. Please reload and try again.`)
} else {
    alert("Let's do some math!");
}


// build an HTML message
message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + (num1 * num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);

// write message to web page
document.write(message);



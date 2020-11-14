// prompt() returns a string
const HTMLBadges = prompt('How many HTML badges do you have?');
const CSSBadges = prompt('How many CSS badges do you have?');

let totalBadges = HTMLBadges + CSSBadges;
console.log(totalBadges);

// use typeof for data-type orientation
console.log(typeof (HTMLBadges), typeof (CSSBadges));
// result is a concatenation of strings

// parseInt() converts a string into an integer
// include parseInt()
console.log(typeof parseInt(HTMLBadges), typeof parseInt(CSSBadges));

// modify equation
totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
console.log(totalBadges);
// result is the addition of numbers

// parseFloat()
let pi = '3.14';
console.log(typeof(pi));
console.log(typeof(parseFloat(pi)));

parseFloat('1.89 light years away'); 
//number is first so parseFloat() returns the float used
parseFloat('That is so 2008'); 
// returns NaN: Not a Number (possibly because number was not first);
parseInt('202.99');
// returns the integer of 202.

// unary plus (+): place before a string converts to integer or float
totalBadges = +HTMLBadges + +CSSBadges;
console.log(totalBadges);
console.log(typeof(+pi)); //returns a number

// testing
pi = prompt("What is Pi?");
console.log(pi === 3.14); 
// false because pi is a string
console.log(+pi === 3.14);
//true because pi is a number (unary plus added)















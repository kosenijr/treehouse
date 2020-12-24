function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
  }

// the manual way of get 10 random numbers between 1-6
// console.log( getRandomNumber(10) );
// console.log( getRandomNumber(10) );
// console.log( getRandomNumber(10) );
// console.log( getRandomNumber(10) );
// console.log( getRandomNumber(10) );
// console.log( getRandomNumber(10) );
// console.log( getRandomNumber(10) );
// console.log( getRandomNumber(10) );
// console.log( getRandomNumber(10) );
// console.log( getRandomNumber(10) );

// or

// auto: use a while statement

// declare a variable outside of the loop
let counter = 0;
// while ( counter < 10 ) { // asks: is counter less than 10
//   // loop is the last part of this program and it runs until counter = 10
//   console.log (`The random number is ${getRandomNumber(10)}`);
//   counter += 1;
// } //no semi-colon

while ( counter < 10 ) {
  console.log(counter); // counter = 0
  counter += 10;
  console.log(counter); // line 31 applied produces: counter = 10
}

// use while loop when I need to check a condition BEFORE performing an action




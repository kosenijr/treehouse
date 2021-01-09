// // Examples of array methods

// const daysInWeek = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday'
// ];

// daysInWeek.join(', ');

// const fruit = [
//   'apple', 
//   'orange', 
//   'grapefruit', 
//   'pineapple', 
//   'strawberry'
// ];

// fruit.includes('apple');
// fruit.indexOf('apple');
// fruit.indexOf('pear');


// // More useful array methods
// // There are other useful array methods besides join(), includes(), and indexOf(). Make sure you spend some time on MDN web docs to learn more about them.

// // sort() - Sort the elements of an array in place and return the sorted array.
// // isArray() - Determine whether the passed value is an Array.
// // concat() - Merge two or more arrays.
// // splice() - Change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// // slice() - Return a portion of an array into a new array.
// // Why does indexOf() return -1 if it cannot locate an element in an array?
// // Consider the following code:

// const people = [ 'Maria', 'Alyssa', 'Toni', 'Lee', 'Reggie' ];
// let personIndex = people.indexOf('Maria');  // 0

// if ( personIndex ) {
//  console.log(`${people[personIndex]} is in the array at index ${personIndex}.`); // Maria is not shown in console
// }
// // The conditional checks if personIndex returns the index of an element in the people array. If the condition is true, the console logs the person passed to indexOf() and their index.

// // Now, if the index of the element passed to indexOf() is in the first position, it returns 0. Remember, 0 is considered a "falsy" value, so the statement would not run if the condition evaluates to false. In the example above, even through 'Maria' is in the array (with an index of 0), the message never displays in the console.

// // What if you pass indexOf() a value that is not in the array? For example::

// const people = [ 'Maria', 'Alyssa', 'Toni', 'Lee', 'Reggie' ];
// let personIndex = people.indexOf('Guil');
// // // In this case, the console still prints undefined is in the array at index -1. Why? -1 is not considered false, so the if statement runs.

// // // -1 is not "falsy"
// // // Set the conditional statement to run as long as the return value of indexOf() is not equal to -1.

const people = [ 'Maria', 'Alyssa', 'Toni', 'Lee', 'Reggie' ];
let personIndex = people.indexOf('Maria');  // 0

if ( personIndex !== -1) { // it's ok because we're checking for -1 only
 console.log(`${people[personIndex]} is in the array at index ${personIndex}.`); // Maria is in the array at index 0.
}
// ****************************************************************************************
// 0 is falsy
// -1 is not falsy
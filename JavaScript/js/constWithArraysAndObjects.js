// Instruction

// Using const with Arrays and Objects
// When working with numbers, strings, and booleans, you learned that you could not change (or manipulate) the value of a constant through reassignment. The same goes for any value of a constant variable. You cannot reassign objects and arrays, either.

// Unlike strings, numbers, and booleans, objects and arrays have methods and properties that modify the object or array. Let's review how objects and arrays work with const.

// const and Arrays
// Consider the following code:

// const days = ["Monday"];
// The value of the variable days is an array holding one item. Even though days is a constant, you're able to modify the array assigned to it. For example, to add another day to the array, you can use the .push() method:

// const days = ["Monday"];
// days.push("Tuesday");
// console.log(days) // ["Monday", "Tuesday"]
// Logging the value of days to the console returns ["Monday", "Tuesday"].

// const and Objects
// Let's see the results of modifying an object assigned to a constant:

// const person = {
//   first_name: "Patrick"
// };
// To add a last_name property to the person object, use person.last_name, like so:

// const person = {
//   first_name: "Patrick"
// };
// person.last_name = "Hope";
// console.log(person) // {first_name: "Patrick", last_name: "Hope"}
// Again, no Uncaught TypeError as would happen if you try to reassign a constant. Logging person to the console returns the new object: {first_name: "Patrick", last_name: "Hope"}.

// Remember, const does not prevent the arrays and objects assigned to variables from being modified; it only prevents the variable itself from being reassigned or overwritten completely. For example, attempting to override person to equal another object literal throws an error:

// const person = {
//   first_name: "Patrick"
// };
// person = {first_name: "Jesse"} 
// // Uncaught TypeError: Assignment to constant variable.
// This is because you're attempting to reassign person to a new object. However, if you modify the first_name property by assigning it a new value, it does not produce errors:

// const person = {
//   first_name: "Patrick"
// };
// person.first_name = "Jesse"
// person.last_name = "Hope";
// // {first_name: "Jesse", last_name: "Hope"}

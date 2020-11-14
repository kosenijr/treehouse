//math objects
// _______________________________________________________
// primitive data types: data types that cannot be altered or manipulated
// see examples:
'This string has many characters';
true;
3.14;
// objects: javascript's special wrapper around primitive data-types in order to alter them
// _______________________________________________________
// all objects have properties that are attached to them
// example: 
'This string has many characters'.length;
// _______________________________________________________
// objects have actions that they perform: these are called methods("()").

//Math object
console.log(Math.round(2.2));
console.log(Math.round(49.9));

//math.random: the six-sided die
Math.random(); 
//returns random numbers between 0 (inclusive) - 1 (non-inclusive)

console.log(Math.random());

console.log(Math.random() * 6); 
//returns decimals that vary between 0 - 5.
//in javascript, code runs from the inside out: compute the 'Math.random() * 6'. Then compute the content within Math.floor()

// console.log(Math.floor(Math.random() * 6) + 1);
// console.log(Math.round(1.4), (Math.round(3.6)));


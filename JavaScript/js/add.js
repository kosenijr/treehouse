const instruments = ['piano', 'drums', 'trumpet'];

// add a guitar to the end of array
// instruments.push('guitar');

// add a guitar, violin, and triangle to the end of array
instruments.push('guitar', 'violin', 'triangle');

// add an instrument at the beginning of array
instruments.unshift('cowbell', 'tuba');

console.log(instruments);
console.log(instruments.length);

// remove an instrument from the back
// instruments.pop();
console.log(instruments);

// to hold the last element of array, assign to a variable
// instrument.pop(): DOES NOT REMOVE THE LAST ELEMENT FROM THE ARRAY
let lastItem = instruments.pop();
console.log(lastItem);

// instruments.shift(): REMOVES FIRST ELEMENT FROM ARRAY;
let firstItem = instruments.shift();
console.log(instruments);
console.log(firstItem);

// CHECK MDN FOR OTHER ARRAY ATTRIBUTES
// .PUSH() AND .SHIFT() METHODS ARE USUALLY USED TOGETHER TO CREATE HIGHLY ORGANIZED DATA STRUCTURES CALLED 'QUEUES': LIKE FIFO.

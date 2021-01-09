const numbers = [100, 200, 300, 400, 500];

// check length
console.log(numbers.length); // 5
// push()
numbers.push(600);
// check array 
console.log(numbers); // [100, 200, 300, 400, 500, 600]
// pop(): remove item from the back of array
numbers.pop();
// check array 
console.log(numbers); // [100, 200, 300, 400, 500]
// add a number to the beginning
numbers.unshift(0);
// check array
console.log(numbers); // [0, 100, 200, 300, 400, 500]
// remove the first element
// numbers.shift()
let removeFirstElement = numbers.shift();
// check array
console.log(numbers); // [100, 200, 300, 400, 500]
console.log(removeFirstElement); // 0

console.log(numbers.shift()); // 100

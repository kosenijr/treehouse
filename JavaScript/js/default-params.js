// // arrow function w/o default paramenter

// const sayGreeting = (name) => `Good morning, ${name}!`;
// sayGreeting();
// console.log(sayGreeting());

// -------------------------------------------------
// w/ default parameter

// const sayGreeting = (name = 'Young Millenials') => `${greeting}, ${name}!`;
// sayGreeting();
// console.log(sayGreeting()); // Young Millenials
// console.log(sayGreeting('Kayode'));
// console.log(sayGreeting('Hello'));

// -------------------------------------------------
// w/ one default parameter (greeting)

// const sayGreeting = (greeting = 'Good Morning', name = 'Young Millenials') => `${greeting}, ${name}!`;
// sayGreeting();
// console.log(sayGreeting()); // Good morning, Young Millenials!
// console.log(sayGreeting('Kayode')); // Kayode, Young Millenials!
// console.log(sayGreeting('Hello', 'Kayode')); // Hello, Kayode!

// // use undefined (w/o string)
// console.log(sayGreeting(undefined, 'Kayode')); // Good morning, Kayode!

// -------------------------------------------------
// w/ one default parameter (name)

// const sayGreeting = (undefined, name = 'Young Millenials') => `${greeting}, ${name}!`;
// sayGreeting();
// console.log(sayGreeting()); // Young Millenials
// console.log(sayGreeting('Kayode'));
// console.log(sayGreeting('Hello', 'Kayode'));

// -------------------------------------------------
// w/ two default parameter

// const sayGreeting = (greeting = 'Good Morning', name = 'Young Millenials') => `${greeting}, ${name}!`;
// sayGreeting();
// console.log(sayGreeting()); // Young Millenials
// console.log(sayGreeting('Hello'));
// console.log(sayGreeting('Hello', 'Kayode'));

// -------------------------------------------------
// task: assign a default value to the 'unit' parameter
// before
// function getArea(width, length, unit) {
//     const area = width * length;
//     return `${area} ${unit}`;
//   }

// after: square feet (sq ft)
const getArea = (width, length, unit = 'square feet') => {
    const area = width * length;
    return `${area} ${unit}`;
}
getArea();
console.log(getArea(12, 70));



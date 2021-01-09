// // initial
// const middle = ['lettuce', 'cheese', 'patty'];
// const burger = ['top bun', 'bottom bun'];

// ==============================================
// // place middle array within burger array : 2-dimensional array
// const middle = ['lettuce', 'cheese', 'patty'];
// const burger = ['top bun', middle, 'bottom bun'];

// console.log(burger);

// ==============================================
// // place middle array within burger array : array completely in another array
// const middle = ['lettuce', 'cheese', 'patty'];
// const burger = ['top bun', ...middle, 'bottom bun'];

// console.log(burger);
// console.log(burger.length);
// ==============================================
const brass = ['trumpet', 'trombone', 'french horn', 'baritone', 'tuba'];
const woodwind = ['flute', 'oboe', 'clarinet', 'saxophone', 'bassoon'];
// ******************************************************************
const instruments = [...brass, ...woodwind];
console.log(instruments);
// logs ['trumpet', 'trombone', 'french horn', 'baritone', 'tuba', 'flute', 'oboe', 'clarinet', 'saxophone', 'bassoon'];
// creating one array out of two arrays creates just that: one separately new array
//Therefore, this new array is unaffected by the changes made to the two arrays after its creation.
// ==============================================
const numbers = [10, 20, 30, 40];
console.log(Math.max(numbers)); // NaN
console.log(Math.max(...numbers)); // 40
console.log(Math.min(...numbers)); // 10
// ==============================================





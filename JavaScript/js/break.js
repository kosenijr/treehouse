// const secretWord = 'tomato';
// let message = 'Access denied :(';

// for ( let i = 5; i >= 1; i-- ) {
//   let guess = prompt(`Enter the secret word. You have ${i} tries.`);
//   if ( guess === secretWord ) {
//     message = 'Welcome to the secret loop world!';
//     // inserting 'break;' permits the for-loop to end immediately after user guesses the secretWord
//     break;
//   }
//   // implicitly: else would be the access denial message above.
// }
// // alert
// alert(message);

// ======================================================================
// // break statement omitted: press 'n' - or a null status - does not immediately abort launch
// const tMinus = 10;
// let message = 'Liftoff! 🚀';

// for ( let i = tMinus; i >= 1; i-- ) { 
//   let status = prompt(`T-Minus ${i}... Continue? (Y/N)`);
//   if ( status === null || status.toLowerCase() === 'n' ) {
//     message = 'Abort launch!';
//     // break;
//   }
// }

// alert(message);

// ======================================================================
// with break statement: press 'n' - or a null status - does immediately abort launch
const tMinus = 10;
let message = 'Liftoff! 🚀';

for ( let i = tMinus; i >= 1; i-- ) { 
  let status = prompt(`T-Minus ${i}... Continue? (Y/N)`);
  if ( status === null || status.toLowerCase() === 'n' ) {
    message = 'Abort launch!';
    break;
  }
}

alert(message);

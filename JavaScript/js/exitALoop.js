// Exit a Loop
// In each of the three types of loops you've worked with so far, there's some "exit" condition. In other words, when a specific condition is no longer true, like a counter variable is no longer less than 10, or less than or equal to 100, the loop ends.

// for ( let i = 0; i <= 100; i++ ) {
//  // code to run
// }
// But that's not the only way to exit a loop. JavaScript includes a "break" statement which, when encountered inside a loop, immediately exits the loop.

// Learn and practice how to exit a loop
// In your project folder, open the file break.js.
// In index.html, update the src attribute of the <script> tag:
//   <body>
//     ...
//     <script src="js/break.js"></script>
//   </body>
// The break.js file contains a for loop that gives the user five attempts to guess a "secret" word.

// const secretWord = 'tomato';
// let message = 'Access denied :(';

// for ( let i = 5; i >= 1; i-- ) {  
//   let guess = prompt(`Enter the secret word. You have ${i} tries.`);
//   if ( guess === secretWord ) {
//     message = 'Welcome to the secret loop world!';
//   }
// }

// alert(message);
// Notice how the loop starts counting down from 5 and uses the decrement operator (--) to decrease the value of i by one each time through the loop.
// Each time the loop runs, it opens a prompt dialogue asking the user to "Enter the secret word," and it displays the number of tries they have to guess it. When the i counter is no longer less than or equal to 1, the loop ends.

// The value of the guess variable gets updated with the user's guess each time through the loop. The if statement checks if the user's guess is correct by comparing the value of guess to the string that's assigned to the secretWord variable. If this condition evaluates to true, the message "Welcome to the secret loop world!" displays in an alert dialog box.

// If the value of guess does not match the value assigned to secretWord after five loop iterations, an alert dialog displays with the message "Access denied :(".

// Break out of a loop
// Currently, the loop continues to run and keeps asking the user to guess the secret word until it has run five times -- even if they've already entered a guess that matches the secret word.

// When the values match, the loop should end, and the "Welcome" message should pop up on the page.

// Escape (or break out of) the for loop with a break statement. In the if statement, add the break keyword below the message variable assignment:
// for ( let i = 5; i >= 1; i-- ) {  
//   let guess = prompt(`Enter the secret word. You have ${i} tries.`);
//   if ( guess === secretWord ) {
//     message = 'Welcome to the secret loop world!';
//     break;  // immediately terminate the loop
//   }
// }

// alert(message);
// The break statement terminates (or stops) the execution of the loop entirely. Then control jumps to the next statement in the program -- or whatever needs to run after the loop.

// Now, if the user guesses the secret word before five tries, the loop immediately ends, and the "Welcome" message appears on the page.

// One more example
// Following is another example of using a break statement in a loop. Evaluate this code and run it in your browser's JavaScript console -- just for fun:

// const tMinus = 10;
// let message = 'Liftoff! 🚀';

// for ( let i = tMinus; i >= 1; i-- ) { 
//   let status = prompt(`T-Minus ${i}... Continue? (Y/N)`);
//   if ( status === null || status.toLowerCase() === 'n' ) {
//     message = 'Abort launch!';
//     break;
//   }
// }

// alert(message);
// Notice how the looping behavior changes when you omit the break keyword.

// You may have noticed that the break statement works like the return statement in a function. Any code inside the loop that appears after the break statement will never run.
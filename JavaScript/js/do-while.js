function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

//   do-while loop is similar to while loop: only difference is that the do-while loop will always execute the code block ONCE before the condition is checked

let counter = 0;

// use do-while loop when you need my loop to execute at least one time! so I can check the block of my code before allowing it to take in more values
// do {
//     console.log(`The random number is ${getRandomNumber(10)}`);
//     counter += 1;
// } while (counter < 10);

// w/ increment operator (++)
do {
    console.log(`The random number is ${getRandomNumber(10)}`);
    counter++;
} while (counter < 10);

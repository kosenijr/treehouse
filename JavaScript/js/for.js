function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

for (let counter = 0; counter < 10; counter++) {
    console.log(`The random number is ${getRandomNumber(10)}`);

}

// rewrite using 'i';
for (let i = 0; i < 10; i++) {
    console.log(`The random number is ${getRandomNumber(10)}`);
}

// ONLY USE LOWER CASE LETTERS AS VARIABLES IN FOR-LOOP FUNCTIONS, NOTHING ELSE!
// when using any loop, the term 'to' is inclusive of the greatest numerical term presented after the preposition: i.e. 1 to 500; 500 is included.
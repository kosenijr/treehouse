const weather = '';

if (weather === 'sun') {
    console.log('It\'s sunny, so I\'m going swimming.')
} else if (weather === 'rain') {
    console.log('It\'s raining, so I will read a book.');
} else if (weather === 'snow') {
    console.log('It\'s snowing, so I\'m going sledding.')
} else {
    console.log('I don\'t know what I\'m doing today.')
}

// if/else statements are executed sequentially until one of the statements is true; then, the execution stops.

// AND (&&) OPERATOR
let age = 25;
let interval = 20 < age && age < 30;
console.log(interval);

// OR (||) OPERATOR
let agree = 'yes';
// const orOperator = (agree === 'yes' || agree === 'y');
const orOperator = (agree === 'yes' || agree === 'y');
console.log(orOperator);
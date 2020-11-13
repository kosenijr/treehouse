const stringToShout = prompt('What do you want to shout?');
const shout = stringToShout.toUpperCase();
// const shoutMessage = `The message to shout is: ${shout}!!!`;
const shoutMessage = `<h2> The message to shout is: ${shout}!!! </h2>`;


console.log(shoutMessage);

// insert onto the page
document.querySelector('main').innerHTML = shoutMessage;


// If using html markups (line 4), use .innerHTML to place on page!
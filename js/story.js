// 1. Declare variables and capture input.
// prompt method for adj., noun, and verb
const adjective = prompt("Please choose a color:");
const noun = prompt("Please chose an article of clothing:");
const verb = prompt("Please choose either walking, jogging, or running:");

// 2. Combine the input with other words to create a story.
// template-literal
//use blackslask(\) to bring constant variable (noun) and semicolon closer
const message1 = `<p>Pura found a ${adjective} blouse to go with her matching ${noun}\; she went ${verb} afterwards!</p>`;
// check message1
console.log(`Template Literal message: ${message1}`);

// add and assign operators
let message2 = "Pura found a ";
message2 += adjective;
message2 += " blouse to go with her matching ";
message2 += noun;
message2 += "; she went "
message2 += verb;
message2 += " afterwards!"

// check message2
console.log(`Add and Assignment Operators: ${message2}`);


// 3. Display the story as a <p> inside the <main> element.
// use document.querySelector

document.querySelector("main").innerHTML = message1;
// document.querySelector("main").innerHTML = message2;
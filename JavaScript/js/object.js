const person = {
    name: 'Kayode',         // string
    city: 'New York',
    age: 30,                // integer/number
    student: true,          // boolean
    skills: ['JavaScript', 'HTML', 'CSS']

};

// access info within person

// w/ brackets
console.log(person['name']);

// dot notation (more common)
console.log(person.name);

// create a message and save in variable
let message = `Hi, I'm ${person.name}! I live in ${person.city}.`;
console.log(message);

// using dot notation, you can create and add new properties to the person object.
// despite the value for person.name equaling 'Kayode':
console.log(`person.name before its reassignment: ${person.name}`);

// can change to 'Bayode' or another established name
person.name = 'Bayode'; 

console.log(`person.name after its reassignment: ${person.name}`);

// change person.name
console.log(`Most people know me as ${person.name = 'Kay'}.`);

// create a new property
person.nickname = 'Chuck';

// you can also perform math
// add sentence modifying my age
message += ` My age is ${person.age + 1}.`
// check message
console.log(message);

// modify message with skills
message += ` I have ${person.skills.length} skills: `;
// check message
console.log(message);

// show skills
message += ` ${person.skills.join(', ')}.`;
// check message
console.log(message);

 










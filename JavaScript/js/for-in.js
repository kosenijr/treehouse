const person = {
  name: 'Edward',
  nickname: 'Duke',
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

//  for-in loop will access the object's 6 properties
for (let prop in person) {
  // log each property and its respective value to the console
  // console.log(`${prop}: ${person.prop}`);
  // this is UNDEFINED, use square brackets to access the general reference: prop.
  // console.log(`${prop}: ${person[prop]}`);

  // square-bracket notation
  // console.log(`${prop}: ${person['name']}`); //every property equalled 'Edward'

  // try using the prop reference to access each respective property value
  console.log(`${prop}: ${person[prop]}`);


}
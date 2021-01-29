/*
  Create an array of 'pets' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

let pets = [
    { name: 'Kay', type: 'Dog', breed: 'Doberman Pinscher', age: 3, photo: 'img/doberman.jpg' },
    { name: 'Pure', type: 'Dog', breed: 'Pitbull', age: 4, photo: 'img/pitbull.jpg' },
    { name: 'Bay', type: 'Dog', breed: 'Labrador Retriever', age: 2, photo: 'img/labs.jpg' },
    { name: 'Ode', type: 'Dog', breed: 'Malamute', age: 1, photo: 'img/malamute.jpg' },
    { name: 'Iris', type: 'Dog', breed: 'Australian Husky', age: 5, photo: 'img/aussie.jpeg' }
];
// ===========================================================
// check pet
// console.log(pets);
// ===========================================================
// for-in loop
for (let petIndex = 0; petIndex < pets.length; petIndex++) {
    // check each pet's name: s
    // console.log(pets[petIndex].name);
    // console.log(pets[petIndex]['name']);

    // store pets' objects in pet variable
    let pet = pets[petIndex];

    // use Object.keys() to access attributes/properties of each object, specifically 'age': s
    // console.log(Object.keys(pet)[3]);

    let ageProperty = Object.keys(pet)[3];
    // console.log(ageProperty);

    // capitalize the term 'age' ***********************************
    let capThat = (myWord) => myWord.charAt(0).toUpperCase() + myWord.substring(1);
    // console.log(capThat(ageProperty));

    // create variables for each attribute
    // first create a function for each attribute: s
    let inRotation = (attri) => pets[petIndex][attri];
    // console.log(inRotation('name')); // returned respective names

    // categorize and store each pet attribute
    let petNames = inRotation('name');
    let petTypes = inRotation('type');
    let petBreed = inRotation('breed');
    let petAge = inRotation('age');
    let petPhoto = inRotation('photo');

    let html = `
        <h2>${petNames}</h2>
        <h3>${petTypes} | ${petBreed}</h3>
        <p>${capThat(ageProperty)}: ${petAge}</p>
        <img src="${petPhoto}" alt="${petBreed}">
    `;

    let items = " ";
    items += html;

    // console.log(items);

    // get query selector
    document.querySelector("main").innerHTML += items;
}





const main = document.querySelector("main");
html = ' ';

for (let k = 0; k < pets.length; k++) {
    let pet = pets[k];

    html +=
        `
    <h2>${pet.name}</h2>
    <h3>${pet.type} | ${pet.breed}</h3>
    <p>Age: ${pet.age}</p>
    <img src="${pet.photo}" alt="${pet.breed}">
    `;
}

// console.log(html);

// query selector
// insertAdjacentHTML takes in two argument: first parameter: where you want content inserted, second paramenter: what content will be inserted.
// before the element (main) itself
document.querySelector("main").insertAdjacentHTML('beforeend', html);
// // just inside the element, before its first child
// document.querySelector("main").insertAdjacentHTML('beforebegin', html);
// // just inside the element, after its last child
// document.querySelector("main").insertAdjacentHTML('afterbegin', html);
// // after the element itself
// document.querySelector("main").insertAdjacentHTML('afterend', html);
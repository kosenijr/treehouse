// set up quotations for html
// let html = '';

// let red;
// let green;
// let blue;
// let randomRGB;

// // before
// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">1</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">2</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">3</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">4</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">5</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">6</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">7</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">8</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">9</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">10</div>`;

// ================================================================
// after: 1st modification
// set up quotations for html
// let html = '';

// let red;
// let green;
// let blue;
// let randomRGB;

// // for-loop: 1-10 (inclusive)
// for (let kNum = 1; kNum <= 10; kNum++) {
//     red = Math.floor(Math.random() * 256);
//     green = Math.floor(Math.random() * 256);
//     blue = Math.floor(Math.random() * 256);
//     randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//     html += `<div style="background-color: ${randomRGB}">${kNum}</div>`;
// }

// ================================================================
// // after: 2nd modification
// // set up quotations for html
// let html = '';
// // store random selection within arrow function, NOT variable!
// // storing random selection within arrow function allows for each CALL to be a refresh of the numerical value
// let randomValue = () => Math.floor(Math.random() * 256);
// // create function that takes in a value and returns a color
// let randomRGB = (value) => {
//     const color = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
//     return color;
// }
// // console.log(randomRGB());

// // for-loop: 1-10 (inclusive)
// for (let kNum = 1; kNum <= 10; kNum++) {
//     html += `<div style="background-color: ${randomRGB()}">${kNum}</div>`;
// }

// ================================================================
// // after: 3rd modification
// // set up quotations for html
// let html = '';
// // store random selection within arrow function, NOT variable!
// // storing random selection within arrow function allows for each CALL to be a refresh of the numerical value
// let randomValue = () => Math.floor(Math.random() * 256);
// // create function that takes in a value and returns a color
// let randomRGB = (value) => {
//     const color = `rgb(${value()}, ${value()}, ${value()})`;
//     return color;
// }
// // console.log(randomRGB());

// // for-loop: 1-10 (inclusive)
// for (let kNum = 1; kNum <= 10; kNum++) {
//     html += `<div style="background-color: ${randomRGB(randomValue)}">${kNum}</div>`;
// }

// ================================================================// after: 4th modification: w/o comments

let html = '';

let randomValue = () => Math.floor(Math.random() * 256);

let randomRGB = (value) => {
    const color = `rgb(${value()}, ${value()}, ${value()})`;
    return color;
}

for (let kNum = 1; kNum <= 10; kNum++) {
    html += `<div style="background-color: ${randomRGB(randomValue)}">${kNum}</div>`;
}

// ================================================================
// place on page
document.querySelector('main').innerHTML = html;
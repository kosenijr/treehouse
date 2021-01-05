// let html = '';
// let red;
// let green;
// let blue;
// let randomRGB;

// ================================================================
// before
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
// after: for-loop refactoring

// for (let k = 1; k <= 10; k++) {
//     red = Math.floor(Math.random() * 256);
//     green = Math.floor(Math.random() * 256);
//     blue = Math.floor(Math.random() * 256);
//     randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//     // using html to tap into css attributes************************
//     html += `<div style="background-color: ${randomRGB}">${k}</div>`;
// }
// ================================================================
let html = '';
// refactor the code some more!
for (let k = 1; k <= 10; k++) {
    randomRGB = `rgb( ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)} )`;
    // using html to tap into css attributes************************
    html += `<div style="background-color: ${randomRGB}">${k}</div>`;
}

// ================================================================
// place on page
document.querySelector('main').innerHTML = html;



// notes ***********************************************************
    // using html to tap into css attributes************************
    // html += `<div style="background-color: ${randomRGB}">${k}</div>`;

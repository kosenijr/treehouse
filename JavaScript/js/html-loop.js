// activity: 

const main = document.querySelector('main');

let html = '';

// for (let i = 0; i < 10; i++) {
//     html += `<div>${i}</div>`;
//     console.log(`i: ${i}`);
// }

// // user query selector
// main.innerHTML = html;

// ======================================================================
// multiples of 5, starting w/ 5
for (let i = 5; i <= 100; i += 5) {
    html += `<div>${i}</div>`;
    console.log(`i: ${i}`);
}

// user query selector
// keeping this statement outside the loop allows for the main to be updated ONCE
main.innerHTML = html;

// ======================================================================

// user query selector
// main.innerHTML = html;


// let html = '';

// for (let i = 0; i < 10; i++) {
    // html += `<div>${i}</div>`;
    // console.log(`i: ${i}`);





    // // create a random number: 1-9
    // randomNum = Math.floor(Math.random() * 9);
    // console.log(`randomNum: ${randomNum}`);

    // function omit() {
    //     // conditional statement
    //     if (randomNum === i) {
    //         console.log('Got One!');
    //         return html += ``;
    //     } else {
    //         return html += `<div>${i}</div>`;
    //     }
    // }
    // main.innerHTML = omit();

// }


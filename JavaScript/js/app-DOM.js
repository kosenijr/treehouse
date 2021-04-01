// BY ID
// this is .getElementById(). Element, not Elements.
// returns 1 element

// grab, store, and SELECT:
// heading
// const myHeading = document.getElementById('myHeading');
// // button
// const myButton = document.getElementById('myButton');
// // input
// const myTextInput = document.getElementById('myTextInput');


// // make heading and button listen for events: specifically clicking
// // arrow function used
// myHeading.addEventListener('click', () => {
//     myHeading.style.color = 'red';
// });

// myButton.addEventListener('click', () => {
//     myButton.style.backgroundColor = 'red';
//     // myButton.style.color = 'black';

//     // style by the color state in input value
//     myHeading.style.color = myTextInput.value;
//     myButton.style.color = myTextInput.value;
// })

// ======================================================================
// BY TAGNAME
// this is .getElementsByTagName(). Elements, not Element.
/*
returns a collection of elements (an array)
e.g.:
    // grab all p tags on document and store in els variable
    const els = document.getElementsByTagName('p');

    // first p element on the page
    let el = els[0];

    // you can also loop
    for (let k = 0; k < els.length; k++) {
        els[k] // do something with each element
    }
*/
// when we switch to .getElementsByTagName, we know that there is only 1 h1 in index.html, so we store the TagName with a 0 index.
// const myHeading = document.getElementsByTagName('h1')[0];
// // button
// const myButton = document.getElementById('myButton');
// // input
// const myTextInput = document.getElementById('myTextInput');


// // make heading and button listen for events: specifically clicking
// // arrow function used
// myHeading.addEventListener('click', () => {
//     myHeading.style.color = 'red';
// });

// myButton.addEventListener('click', () => {
//     // myButton.style.backgroundColor = 'red';
//     // myButton.style.color = 'black';

//     // style by the color state in input value
//     myHeading.style.color = myTextInput.value;
//     myButton.style.color = myTextInput.value;
// })

// ===============================================================
// EXPERIMENTING
// const myList = document.getElementsByTagName('li');
// console.log(...myList);
// console.log(myList[2]);

// myList[2].addEventListener('click', () => {
//     myList[2].style.color = 'purple'
// })
// ---------------------------------------------
// for (let k = 0; k < myList.length; k++) {
//     myList[k].style.color = 'purple'
// }
// ---------------------------------------------
// for (let k = 0; k < myList.length; k++) {
// myList[k].addEventListener('click', () => {
//         myList[k].style.color = 'red'
// })
// }

// ===============================================================
// // BY CLASSNAME
// // this is .getElementsByClassName(). Elements, not Element.
// const myList = document.getElementsByTagName('li');
// for (let k = 0; k < myList.length; k++) {
//     myList[k].style.color = 'purple'
// }

// const errorNotPurple = document.getElementsByClassName('error-not-purple');
// for (let k = 0; k < errorNotPurple.length; k++) {
//     errorNotPurple[k].style.color = 'red'
// }

// ===============================================================
// .querySelector()/.querySelectorAll()
// most flexible of the selectors above (accept ids, classes, tag names, and all)

// previous example
// const myList = document.getElementsByTagName('li');
// for (let k = 0; k < myList.length; k++) {
//     myList[k].style.color = 'purple'
// }

// const errorNotPurple = document.getElementsByClassName('error-not-purple');
// for (let k = 0; k < errorNotPurple.length; k++) {
//     errorNotPurple[k].style.color = 'red'
// }


// querySelectorAll()

// const errorNotPurple = document.querySelectorAll('.error-not-purple');
// for (let k = 0; k < errorNotPurple.length; k++) {
//     errorNotPurple[k].style.color = 'red'
// }
// console.log(...errorNotPurple);

// // all li elements
// let element = document.querySelectorAll('li');
// console.log(element);
// // first li element
// element = document.querySelector('li');
// console.log(element);
// //#myHeading (use hashtag #)
// element = document.querySelector('#myHeading');
// console.log(element);
// // list items by class: .error-not-purple (use dot .)
// element = document.querySelectorAll('.error-not-purple');
// console.log(element);
// //another attritube: titel=label
// element = document.querySelector('[title=label]');
// console.log(element);

// // evens
// const evens = document.querySelectorAll('li:nth-child(even)');
// for (let k = 0; k < evens.length; k++) {
//     evens[k].style.backgroundColor = 'lightgray'
// }

// // odds
// const odds = document.querySelectorAll('li:nth-child(odd)');
// for (let k = 0; k < odds.length; k++) {
//     odds[k].style.backgroundColor = 'lightblue'
// }

// ===============================================================
// // rainbow colors assigned to each item
// var listItems = document.querySelectorAll('li');
// var colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

// // console.log(typeof(listItems));
// // console.log(listItems[1]);

// for (var i = 0; i < colors.length; i++) {
//   listItems[i].style.color = colors[i];    
// }

// ===============================================================
// // descendant selectors
// let parent = document.querySelectorAll("ul li");
// console.log(parent);
// // or
// parent = document.querySelectorAll("ul > li");
// console.log(parent);
// // or
// parent = document.querySelectorAll("body > ul > li");
// console.log(parent);
// // or
// parent = document.querySelectorAll("body ul li");
// console.log(parent);

// ===============================================================











 
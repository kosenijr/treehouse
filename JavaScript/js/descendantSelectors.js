// descendant selectors
let parent = document.querySelectorAll("ul li");
console.log(parent);
// or
parent = document.querySelectorAll("ul > li");
console.log(parent);
// or
parent = document.querySelectorAll("body > ul > li");
console.log(parent);
// or
parent = document.querySelectorAll("body ul li");
console.log(parent);

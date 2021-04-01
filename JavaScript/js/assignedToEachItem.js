// rainbow colors assigned to each item
var listItems = document.querySelectorAll('li');
// different rainbow colors: ROYGBIV
var colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

// console.log(typeof(listItems));
// console.log(listItems[0]);

// for loop to assign each color to each listed item
for (var i = 0; i < colors.length; i++) {
  listItems[i].style.color = colors[i];    
}

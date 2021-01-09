const playlist = [
  'So What',
  'Respect',
  'What a Wonderful World',
  'At Last',
  'Three Little Birds',
  'The Way You Look Tonight',
  'I love Bayode!'
];


// create a function, createListItems, that takes in an array as an argument
function createListItems(arr) {
  // first step is to create a variable that stores a blank string in order to make an ordered list
  let items = '';
  // for-loop to iterate through array elements
  for (let k = 0; k < arr.length; k++) {
    // create an html line with every new array element
    // can't use 'let' for a variable that has a += operator: must set to strings beforehand!
    items += `<li>${arr[k]}</li>`;
  }
  return items;
}
// check function: pass playlist as an argument
// console.log(createListItems(playlist));
// query selector
// innerHTML because lines were created w/in the function
// used ordered line tags w/in temp-literal
document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
  `;
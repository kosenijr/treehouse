// const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
// const search = prompt('Search for a product.');
// let message;

// // conditional statement
// if (inStock.includes(search)) {
//     message = `Yes, we have <strong>${search}</strong>. Its #${inStock.indexOf(search)} on the list!`
// } else {
//     message = `Sorry, we do not have <strong>${search}</strong>.`
// }

// // query selector
// document.querySelector('main').innerHTML = `<p>${message}</p>`;
// ======================================================================

// const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
// const search = prompt('Search for a product.');
// let message;

// // conditional statement
// // add '+ 1' to the 'inStock.indexOf(search)' expression: the 'pizza' index is zero so the affirmative temp-literal message won't work unless 1 is added
// if (inStock.includes(search)) {
//     message = `Yes, we have <strong>${search}</strong>. Its #${inStock.indexOf(search) + 1} on the list!`
// } else {
//     message = `Sorry, we do not have <strong>${search}</strong>.`
// }

// // query selector
// document.querySelector('main').innerHTML = `<p>${message}</p>`;
// ======================================================================

// including an else if statement and replacing 'null'
const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

// conditional statement
// add '+ 1' to the 'inStock.indexOf(search)' expression: the 'pizza' index is zero so the affirmative temp-literal message won't work unless 1 is added

// check for when there is no search value: when 'search' is falsy. (i.e. null, an empty string, 0)
if (!search) {
    message = `<strong> In stock: </strong> ${inStock.join(', ')}`
}else if (inStock.includes(search)) {
    message = `Yes, we have <strong>${search}</strong>. Its #${inStock.indexOf(search) + 1} on the list!`
} else {
    message = `Sorry, we do not have <strong>${search}</strong>.`
}

// query selector
document.querySelector('main').innerHTML = `<p>${message}</p>`;

// NOTES
// PLACING '!' before a variable is equivalent to falsy. (i.e. null, an empty string, 0);

// ======================================================================

// const search = prompt('Search for a product.');
// const searchText = search.toLowerCase();

// inStock.includes(searchText);
// inStock.indexOf(searchText);
// If the user clicks the "Cancel" button in the prompt dialogue, the variable searchText would point to null. 
// ********************************************************************
// The JavaScript interpreter throws an error when you call toLowerCase() on a returned null value -- there's nothing to convert to lowercase.

// ======================================================================

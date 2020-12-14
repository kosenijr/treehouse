// // create isFieldEmpty function
// function isFieldEmpty() {
//     // grab the HTML input field w/ id: info
//     const field = document.querySelector('#info');
//     // conditional statement to test nature of field
//     if (field.value === '') {
//         return true;
//     } else {
//         return false;
//     }
// }
// // assign isFieldEmpty function to a variable
// const fieldTest = isFieldEmpty();

// // create a conditional statement predicated on the function's return
// if (fieldTest === true) {
//     alert('Please provide your information.');
// }

// ----------------------------------------------------------------------

// MODIFY COMMANDS
// create isFieldEmpty function
function isFieldEmpty() {
    // grab the HTML input field w/ id: info
    const field = document.querySelector('#info');
    // conditional statement to test nature of field
    if (!field.value) { //exclamation point means: NOT
        return true;
    } else {
        return false;
    }
}
// assign isFieldEmpty function to a variable
const fieldTest = isFieldEmpty();

// create a conditional statement predicated on the function's return
if (fieldTest) { // removing "=== true" bc its redundant
    alert('Please provide your information.');
}

// *****************
// WHEN A RETURN STATEMENT RUNS IT CAUSES THE JAVASCRIPT ENGINE TO STOP AND IMMEDIATELY EXIT THE FUNCTION:
// THE FOLLOWING LINE(S) OF CODE, AFTER THE RETURN STATEMENT, WILL NOT RUN;
// THEREFORE, THE RETURN STATEMENT SHOULD BE THE LAST LINE OF CODE IN A FUNCTION.

// A RETURN STATEMENT CAN ONLY RETURN A SINGLE VALUE: MEANING THAT THE STATEMENT CAN ONLY RETURN ONE OF THE FOLLOWING: A STRING, A NUMBER, A BOOLEAN VALUE, A CONTENT OF A VARIABLE.

// A RETURN STATEMENT CANNOT RETURN MULTIPLE VALUES AT ONCE.

// THERE CAN BE MULTIPLE RETURN STATEMENTS W/IN A FUNCTION, BUT ONLY ONE EVER RUNS.
// *****************



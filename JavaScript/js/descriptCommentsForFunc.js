// Descriptive Comments for Functions
// Developers often use descriptive comments in their programs for function documentation. The comments provide a high-level overview of what a function does, its parameters, and return value.

// There is a standard syntax you can use to document functions -- it's known as JSDoc, and the format looks like this:

// /**
//  * [A short description of the myFunc function]
//  *
//  * @param {[param type]} param1 - [parameter description]
//  * @param {[param type]} param2 - [parameter description]
//  * @returns {[return type]} [documents the function's return value]
//  */

// function myFunc( param1, param2 ) {
//   // function returns a value...
// }
// Review the Format
// When using the JSDoc approach, place a comment immediately before the function you are documenting. Each comment begins with /**. Let's go over each line in the comment sequence:

// The first part of the comment is a short and simple description of what the function does. Below the description, you add more information with @ tags.
// The @param tag provides the name, type, and description of a function parameter. Use one @param tag for each parameter you define.
// The @returns tag (also @return) documents the value the function returns with a type and description.
// Besides @param and @returns, there are other useful tags like @throws, @example, @author, and many more.

// Document a Function
// Below is an example of how you might document the getArea function using the JSDoc format:

// /**
//  * Calculates and returns the area of a rectangle.
//  *
//  * @param {number} width - The width of the rectangle.
//  * @param {number} length - The length of the rectangle.
//  * @param {string} unit - The unit of measurement.
//  * @returns {string} The area of the rectangle and unit of measure.
//  */

// function getArea(width, length, unit) {
//   const area = width * length;
//   return `${area} ${unit}`;
// }
// The Power of JSDoc
// Besides its descriptive format, the JSDoc tool itself has other useful and powerful features. JSDoc is also a documentation generator for JavaScript.

// For example, when you add documentation comments directly to your source code, JSDoc can scan your code and generate an HTML documentation website for you. However, you'll need to install special tools to run this feature -- you'll learn about some of these tools later in your JavaScript learning journey.

// JSDoc also has built-in support in text editors like Visual Studio Code. VS Code can use the JSDoc annotations to provide code completion, hover information, and function signature information to help you write code more quickly and correctly.

// Take Advantage of JSDoc Comments
// Keep in mind that you don't have to install any extra tools to simply use the JSDoc syntax and format in your code.

// Using a consistent and descriptive commenting approach makes your functions more predictable. Other developers who need to learn about your functions will have a faster and easier way to identify each part of a function.



// https://jsdoc.app/index.html
// https://devhints.io/jsdoc
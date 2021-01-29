// The insertAdjacentHTML() method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements inside that element. This avoids the extra step of serialization, making it much faster than direct innerHTML manipulation.

// Syntax
// element.insertAdjacentHTML(position, text);
// Parameters
// position
// A DOMString representing the position relative to the element; must be one of the following strings:
// 'beforebegin': Before the element itself.
// 'afterbegin': Just inside the element, before its first child.
// 'beforeend': Just inside the element, after its last child.
// 'afterend': After the element itself.
// text

// The string to be parsed as HTML or XML and inserted into the tree.

// Visualization of position names
// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->


// Note: The beforebegin and afterend positions work only if the node is in the DOM tree and has a parent element.
// Example
// // <div id="one">one</div>
// var d1 = document.getElementById('one');
// d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

// // At this point, the new structure is:
// // <div id="one">one</div><div id="two">two</div>
// Notes
// Security considerations
// When inserting HTML into a page by using insertAdjacentHTML(), be careful not to use user input that hasn't been escaped.

// It is not recommended you use insertAdjacentHTML() when inserting plain text; instead, use the Node.textContent property or the Element.insertAdjacentText() method. This doesn't interpret the passed content as HTML, but instead inserts it as raw text.
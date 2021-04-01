/* 
DOCUMENT OBJECT MODEL 
- is a map of a webpage that js can use
- live entity
- tree-like structure

Learn to break JavaScript interactivity into three basic actions:
* Selection elements on the page
* Manipulating elements
* Listening for user actions

Document Object Model is where you listen for user actions

Enter console in the browser and enter each of the following:
* Window
    - This is a global reference
    e.g. window.alert ("This is the same alert function")

    - In browsers, document.defaultView returns the window object associate with a document, or null if none is available.

    e.g. var win = document.defaultView;

* Document
    - property of the window object and also a global object
    - This is a reference to the current page
    e.g. document.getElementById("myHeading").style.color = 'blue';
    
    //notice that "background color" is written in camelCase.
    e.g. document.getElementById("myHeading").style.backgroundColor = 'yellow';

This will provide all of the properties relating to those entities.


Stack Overflow
Window is the main JavaScript object root, aka the global object in a browser, also can be treated as the root of the document object model. You can access it as window

window.screen or just screen is a small information object about physical screen dimensions.

window.document or just document is the main object of the potentially visible (or better yet: rendered) document object model/DOM.

Since window is the global object you can reference any properties of it with just the property name - so you do not have to write down window. - it will be figured out by the runtime.


Basic tasks JS can do with the DOM
*   Select an element
*   Read or change element
*   Respond to user events
*/
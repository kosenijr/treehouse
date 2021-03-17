/* 
React VR???

JavaScript and Internet of Things (IoT) Devices
IoT Device is any physical device with an on/off switch that can connect to the Internet and with other IoT devices. (i.e. fitbit, smartMirror)

JavaScript and Machine Learning
google search: TensorFlow.js

Light History
JavaScript and Java are not the same. (i.e. ham vs hamster; car vs carpet)

Netscape is the originator of JavaScript
Universally known formally as ECMAScript because of the committee on standards

ECMA Committee reconvened to make ECMAScript 3.1
3.1 upgraded to ECMAScript 5    
ECMAScripte 5 introduced the world to json, getters, setters, filters, forEach(), map
5 became full supported on all browsers.

Types of JavaScript
Vanilla, Plain or Pure JavaScript: use of js w/o any frameworks or libraries; native, standards-based javascript

i.e.
ECMAScript 5 (ES5)
ES6/ES2015 (this is the evolution of ES5)

Non-Vanilla JS: 
Type Checkers for JavaScript
* TypeScript (developed by Microsoft)
* Flow (Facebook)
* CoffeeScript
* Dart (Google)

These two checkers are preferred over pure javascript because they catch mistakes early and indicate problems before running the code.

check out this code:
// Assignment:

var cubes, list, math, num, number, opposite, race, square;

number = 42;

opposite = true;

if (opposite) {
  // Conditions:
  number = -42;
}

// Functions:
square = function(x) {
  return x * x;
};

// Arrays:
list = [1, 2, 3, 4, 5];

// Objects:
math = {
  root: Math.sqrt,
  square: square,
  cube: function(x) {
    return x * square(x);
  }
};

// Splats:
race = function(winner, ...runners) {
  return print(winner, runners);
};

if (typeof elvis !== "undefined" && elvis !== null) {
  // Existence:
  alert("I knew it!");
}

// Array comprehensions:
cubes = (function() {
  var i, len, results;
  results = [];
  for (i = 0, len = list.length; i < len; i++) {
    num = list[i];
    results.push(math.cube(num));
  }
  return results;
})();
_____________________________________________________

JavaScript
- dynamic programming language: a language that executes at runtime. (written for runtime environment)

JavaScript Engines (a powers b: a/b)
- Spidermonkey/firefox
- Chakra/IE and Edge
- V8/Chrome

- purpose of the js engine is to parse and execute js code.

-JIT: just in time compiler compiles js code to machine code on the fly. ( modern js engine's use this)

Common Tools for JS Developers
- Text Editors
    - Examples
        Sublime
        Atom (Github)
        Visual Code (Microsoft)
    -   Common Text Editor Features
        Syntax highlighting
        Automatic code completion
        Easily themeable, customizable and extensible
        Built-in package managers
    - Tools
        Linters
            ESLint: for catching bugs

        Formatters
            Prettier: for formatting source code

-   Before js developers start a project, they set  
    up build systems. Build Systems include:
        Package managers
        Module bundlers
        Compilers
        Task Runners
        






*/


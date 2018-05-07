'use strict'

// call global file system module
var fs = require ('fs');

// declare a text variable and set it equal to fs reading global arguements variable
var text = fs.readFileSync(process.argv[2]);

// split the text sting using each \n, new-line, as a delimiter
console.log(text.toString().split('\n').length - 1);






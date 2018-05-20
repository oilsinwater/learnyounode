'use strict'

// call global file system module
var fs = require ('fs');

// declare a text variable and set it equal to fsreadFileSync global arguments variable
var lines = fs.readFileSync(process.argv[2]);

// split the text sting using each \n, new-line, as a delimiter
let fileContents = lines.toString().split('\n').length - 1;

// print to screen
console.log(fileContents);





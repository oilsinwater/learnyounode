'use strict'
// not in learnyounode challenge, but built off it http://joecreager.com/learnyounode-lesson-4-my-first-async-io/

// the below is a solution to using callbacks to get the number of lines in a file
// and also a magic number, then logging it to the screen by breaking up the callback functions
// instead of nesting them, and so avoiding 'callback hell'


var fs = require('fs');
var lines = undefined;

function getLines(callback) {
    fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
        lines = fileContents.split('\n').length - 1
        callback();
    })
}

function logLines() {
    console.log(lines);
}

function magicNumber() {
    var number = +process.argv[3];
    if (lines >= number) {
        console.log('This file has ' + number + ' or more lines');
    } else {
        console.log('This file does not have ' + number + ' or more lines');
    }
}

getLines(logLines);
getLines(magicNumber);




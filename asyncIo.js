
// call global file system module
var fs = require ('fs');

// assign process.argv to file
var file = process.argv[2];

fs.readFile(file, function(err, contents) {
    if (err) return console.error(err);
    // fs.readFile(file, 'utf8', callback) can also be used
    var lines = contents.toString().split('\n').length - 1;
    console.log(lines);
})
const fs = require('fs'); // importing fs module
const path = require('path'); // importing path module


exports.myModule = (folder, ext, callback) => {
  folder = process.argv[2]; // assigns global variable to folder
  ext = "." + process.argv[3]; // assigns a concatenated string to global variable

  fs.readdir(folder, function(err, files) {
    if (err) return console.error(err);
    files.forEach(function(file) {
      if (path.extname(file) === ext) {
        console.log(file);
      }
    });
  });
};
'use strict'

// declaring some result and assigning it to 0
var result = 0; 

// loop through the length of the process argument
for (i = 2; i < process.argv.length; i++) { 

  // add the number of the process.argv to the result, and assign it to the result
  result += Number(process.argv[i]);
}

// print the result to the screen
console.log(result);


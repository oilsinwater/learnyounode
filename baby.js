// @ts-check

// declaring some input and assigning it to 0
var input = 0; 

// loop through the length of the process argument
for (i = 2; i < process.argv.length; i++) { 

  // add the number of the process.argv to the input, and assign it to the input
  input += Number(process.argv[i]);
}

// print the input to the screen
console.log(input);


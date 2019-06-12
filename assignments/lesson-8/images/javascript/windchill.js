// f= 35.74 + 0.6215*t - 35.75*s^0.16 + 0.4275*t*s^0.16

// Input - get input and convert that string to an integer
let t = parseInt(document.getElementById('degree').innerHTML);
let s = parseInt(document.getElementById('speed').innerHTML);

// Processing - some random formula processing with the variable
let result = 35.74 + 0.6215*t - 35.75*s^0.16 + 0.4275*t*s^0.16;

// Output - round to one decimal and output string with HTML to innerHTML of a div
document.getElementById('output').innerHTML = result.toFixed(1);
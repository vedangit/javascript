//var, const and let

/*
var can change value of variable later
var x = 1;
var x = 2;

will change value of x to 2


let cant
let x = 1;
let x = 2;

will throw an error since we have already defined x once

but 
let x = 1;
x = 2

can chaneg the value


const means you cant change the value of the variable at all




SCOPE OF VARIABLE

//global scope
var x = 1;
let y = 9;
const z = 2;

//local scope
1. block scope
{
  let y = 3; //no error will occur
}

2. function scope
function myFunc(){
  const z = 3;
}

local variables cant be called globally. global variables can be accessed locally.
*/

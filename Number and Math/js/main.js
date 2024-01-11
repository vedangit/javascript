//changing string to number -> number function
const varNum = 42;
const varString = "42"

console.log(Number(varString));

//chaining
console.log(Number.parseFloat("43.7jfh7.8").toFixed(2).toString());

//Math.method
//Math.trunc removes all decimal values
//.round rounds to nearest int
// .ciel will always round the value up
// .floor will always roung the value down
// .pow(base, exponent)
// .random -> gives a num from 0-1

console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

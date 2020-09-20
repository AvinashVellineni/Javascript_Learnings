// console.log('Hi Avinash')

var firstName = 'Avinash';
console.log(firstName);
var age = 23;
console.log(age);

/* 
   Data Types in Javascript:
     1) Number
     2) String
     3) Boolean
     4) Undefined  // dosen't have a value yet.
     5) Null  // dosen't exists.
*/

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Developer';
console.log(job);

/* 
    A variable can start with _ , $ , or a variable.
    Don't use constants as variable names.
*/

// Variable mutation and type coercion.

var lastName = 'Vellineni';
var age = 25;
console.log(lastName + ' ' + age);

var whatJob, isMarried;
whatJob = 'Full Stack Developer';
isMarried = false;

// type coercion ability to use a boolean for example and attach into a string as shown below
console.log(lastName + ' ' + age + ' ' + whatJob + ' ' + isMarried);

//variable mutation
age = 'twenty five';
console.log(age);
// alert() is used to provide alert box on the page.
// prompt() is like you can provide an input in the alert box.

// Basic Operators

var year = 2020;
var yearJohn = year - 28;
var yearSteve = year - 20;
console.log(year + 2);
console.log(year * 2);
console.log(year / 3);
// logical operators > , < , etc..
console.log(typeof year);
console.log(typeof (yearJohn > yearSteve));

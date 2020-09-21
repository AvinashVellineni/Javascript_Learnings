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




/*****************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';
if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
var massMark = 78; // kg
var heightMark = 1.69; // meters
var massJohn = 92;
var heightJohn = 1.95;
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}
*/



/*****************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 20;
if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/



/*****************************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 14;
// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
(if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}
age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/



/*****************************
* Truthy and Falsy values and equality operators
*/
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values
var height;
height = 23;
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}
// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}
*/

/**
 * Functions
 *
 */

/**
 * Function Declaration
 */

/*
function sayHello() {
	alert("Hello from a function!");
	console.log("Hello from a function!");
}

sayHello();
sayHello();
*/

/*
function greetUser(username, time = "day") {
	console.log(`Good ${time}, ${username}!`);
}

greetUser("FED24M", "morning");   // "Good morning, FED24M!"
greetUser("Johan!");              // "Good day, Johan!!"
greetUser();                      // "Good day, undefined!"

let userJohan = "Johan";
let timeOfDay = "haxxing";
greetUser(userJohan, timeOfDay);
*/

/**
 * Function Expression
 */

/*
console.log("I am before creating function");

const greetUser = function(username, time = "day") {
	console.log(`Good ${time}, ${username}!`);
}

greetUser("Johan");
greetUser("Pelle", "night");

console.log("I am after creating function");
*/

/*
let username = "Johan";

const sayHi = function(username) {
	username = username.toUpperCase();
	console.log(`Hi ${username}`);
}

sayHi(username);   // sayHi("Johan")

console.log("username after invoking function:", username);
*/

/*
const calcBoxCircumference = function(width, height) {
	return width * 2 + height * 2;
}

// let sum1 = calcBoxCircumference(20, 40);  // let sum1 = 120
// let sum2 = calcBoxCircumference(30, 60);  // let sum2 = 180
// console.log("sum1", sum1);
// console.log("sum2", sum2);

const w = 20;
const h = 40;
const sum3 = calcBoxCircumference(w, h);
if (sum3 > 100) {
	console.log("That's a big box");
} else {
	console.log("smol box");
}

console.log("Circumference of box with height 20 and width 40 is:", calcBoxCircumference(40, 20));
*/

/*
// Arrow Function (Fat Arrow Function)
// (is still a function expression)

const calcBoxArea = (width, height) => {
	return width * height;
}
let boxArea1 = calcBoxArea(20, 40);  // let boxArea1 = 800
let boxArea2 = calcBoxArea(30, 60);  // let boxArea2 = 1800
console.log("box area 1:", boxArea1);
console.log("box area 2:", boxArea2);
*/

/**
 * Functions vs Methods
 *
 */
// Methods are just functions that do something on the
// object that they are used on. For example `.toUpperCase()`
// that takes the value of the string it is used on and
// returns all characters in uppercase.
/*
let msg = "Good Morning FED24M!";
msg.toUpperCase();
msg = msg.replace("Good", "Great");

let username = "Johan the haxx0r";
username.toUpperCase();

msg.indexOf("0");
username.indexOf("0");

const makeMoreInteresting = (str) => {
	return str.toUpperCase() + "!!!!!111";
}

makeMoreInteresting(username);

let names = ["Kalle", "Kajsa", "Joakim", "Knatte", "Fnatte"];
names.push("Tjatte");
*/

/*
const finallyTalkToAReceptionist = () => {
	alert("I LOVE JAVASCRIPT!");
}

const callClinic = (callback) => {
	// oh noes, another telefonkö
	for (let i = 0; i < 1000000000; i++) {
		//console.log("beeep");
	}
	callback();
}

callClinic(finallyTalkToAReceptionist);
*/

/**
 * Callbacks
 */

/*
const logToConsole = (txt) => {
	console.log(txt);
}

const nagUser = (txt) => {
	alert(txt);
}

const makeMoreInteresting = (txt, callback) => {
	const interestingText = txt + "!!!!!!!!!!!!11";
	callback(interestingText);
}

// let msg = "I love coffee";
// makeMoreInteresting(msg, logToConsole);

makeMoreInteresting("omg omg omg", (txt) => {
	console.log(txt);
});
*/

let students = ["Johan", "Pelle", "Börje", "Kajan", "Tiffany"];
//                 0        1        2        3         4
/*
for (let i = 0; i < students.length; i++) {
	const student = students[i];
	console.log(`The name of student ${i} is: ${student}`);
}
console.log("That's all for the 25 øre");
*/

students.push("Itzak");

students.forEach( (student, index) => {
	// this will be executed for each student
	console.log(`The name of student ${index} is: ${student}`);
} );
console.log("That's all for the 25 øre");

let numbers = [13, 37, 42, 1337];
numbers.forEach((num, index) => {
	console.log(`The number at position ${index} is: ${num}`);
});

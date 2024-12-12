/**
 * Truthy/falsy values
 *
 * falsy values in JavaScript
 * - 0
 * - ""
 * - null
 * - undefined
 * - NaN
 */

/*
let message = "abc";
if (Boolean(message) === true) {
	console.log("Message is truthy");
} else {
	console.log("Message is falsy");
}
*/

/*
let username = "Johan";
if (!username) {
	username = "anonymous haxx0r";
}

console.log(`Welcome ${username}!`);
*/

/**
 * Ternary Operator
 */

/*
let username = "pelle";
let msg;

if (username) {
	msg = `You have a name, it is ${username}, wow!`;
} else {
	msg = "Y U HAS NO NAME?!!!";
}
*/

let username = "pelle";
let msg = (username)
	? `You have a name, it is ${username}, wow!`
	: "Y U HAS NO NAME?!!!";

console.log(msg);

/**
 * Double Negation / Double Bang 🤯
 *
 * For quick conversion to somethings boolean value
 */
console.log("username is truthy");
console.log("the opposite of username is false:", !username);
console.log("the opposite of the opposite of username is true:", !!username);

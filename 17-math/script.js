/**
 * Math 🧮
 *
 * .round() - Round a floating number to nearest integer
 * .floor() - Round a floating number DOWN to nearest integer
 * .ceil() - Round a floating number UP to nearest integer
 *
 * TODO:
 * getRandomNumber ska kunna generera ett tal mellan 1 - X,
 * till exempel ska getRandomNumber(20) ge ett tal mellan 1-20,
 * getRandomNumber(50) ska ge ett tal mellan 1-50 och
 * getRandomNumber() ska ge ett tal mellan 1-10
 *
 */

const floatBetweenZeroAndAlmostTen = Math.random() * 10;   // 0.0000001 - 9.9999999
const integerBetweenZeroAndTen = Math.round(floatBetweenZeroAndAlmostTen);  // 0 - 10

// ONLY get number between 1 - 10
const integerBetweenOneAndTen = Math.ceil( Math.random() * 10 );  // 1 - 10

// A more advanced version
const getRandomNumberAdvanced = (min = 1, max = 20) => {
	return Math.floor( Math.random() * (max - min + 1) ) + min;
}

// Generate a random number between 1 - 10
const getRandomNumber = (max = 10) => {
	return Math.floor( Math.random() * max ) + 1;
}

let numbers = [];
for (let i = 0; i < 50; i++) {
	numbers.push( getRandomNumber() );
}
console.log("Numbers:", numbers.join(", "));

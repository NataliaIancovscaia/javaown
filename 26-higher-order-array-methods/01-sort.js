/**
 * Higher Order Array Methods
 *
 * .sort() <--
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

/*
// names
const names = ["Johan", "Pernilla", "Alicia", "Maja", "Elliot"];
console.log("Names in total chaos:", names);

// Sort array alphabetically
names.sort();
console.log("Names in alphabetical (proper) order 🤩:", names);

// Reverse array
names.reverse();
console.log("Names in reverse alphabetical order 🤩:", names);
*/

// numbers
// const numbers = [ 47, 5, 21, 50, 28, 18, 47, 13, 24, 8, 18, 15, 11, 43, 7, 102, 1337, 33, 52 ];
// const numbers = [ 47, 5, 21, 50, 28 ];
// console.log("Numbers in chaos:", numbers);

// sort numbers (won't sort numerically)
// numbers.sort();
// console.log("Numbers in proper? order:", numbers);

// ACTUALLY sort numbers numerically
/*
numbers.sort( (a, b) => {
	console.log(`comparing a: ${a} vs b: ${b}. a-b (${a} - ${b} = ${a-b})`);

	// Possible, but considered BAD PRACTICE to nest ternary operators
	// return (a < b)
	// 	? -1
	// 	: ((a > b)
	// 		? 1
	// 		: 0);

	// if `a` is less than `b` (i.e. `a` should be sorted BEFORE `b`)
	if (a < b) {
		// console.log(`${a} is less than ${b} and should be placed BEFORE`);
		return -1;
	}

	// if `a` is greater than `b` (i.e. `a` should be sorted AFTER `b`)
	if (a > b) {
		// console.log(`${a} is greater than ${b} and should be placed AFTER`);
		return 1;
	}

	// console.log(`${a} is equal to ${b}`);
	return 0;
} );
*/

// A more compact, shorter version of above 🤓
/*
numbers.sort( (a, b) => {
	return a - b;
});
*/

// EVEN SHORTER NUMBER SORTING using a one-liner 🤯
// is exactly the same as the compact, shorter version above
// just without the curly brackets `{}` and the `return` statement
// numbers.sort( (a, b) => a - b );
// console.log("Numbers in proper! order:", numbers);

/**
 * Sort objects based on a property
 */
const students = [
	{
		name: "johan",
		points: 1337,
	},
	{
		name: "Pernilla",
		points: -3,
	},
	{
		name: "alicia",
		points: 88,
	},
	{
		name: "Maja",
		points: 35,
	},
	{
		name: "Elliot",
		points: 42,
	},
];

// Log state before sort
console.log("Students before sort:", students);
/*
// Sort array based on number of points (lowest first)
students.sort((a, b) => {
	console.log(a, b);
	// shorthand, ONLY works if the two things we compare are **NUMBERS**
	return a.points - b.points;
});
*/

/*
// Sort array based on number of points in reverse order (ALTERNATIVE 1)
// Sorts first the array so lowest number of points is first, then reverses the order
students.sort((a, b) => {
	// console.log(a, b);
	return a.points - b.points;
});
// Reverse order
students.reverse();
*/

/*
// Sort array based on number of points in reverse order (ALTERNATIVE 2)
students.sort((a, b) => {
	return b.points - a.points;
});

// Log state after sort
console.log("Students after sort:", students);
*/

// Sort students by their name (case insensitive)
students.sort((a, b) => {
	if (a.name.toLowerCase() < b.name.toLowerCase()) {
		return -1;
	}

	if (a.name.toLowerCase() > b.name.toLowerCase()) {
		return 1;
	}

	return 0;
});

// Sort students by their name (case insensitive and locale aware)
students.sort((a, b) => {
	return a.name.localeCompare(b.name);
});

console.log("Students after sort:", students);

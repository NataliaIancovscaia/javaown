/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter() <--
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

// numbers
// const numbers = [ 42, 5, 21, 50, 24, 18, 47 ];
// console.log("Original numbers:", numbers);

/*
// Push all number >= 25 into a new array
const largeNumbers = [];
numbers.forEach((num) => {
	if (num >= 25) {
		largeNumbers.push(num);
	}
});
*/

/*
// Filter out all numbers >= 25
const largeNumbers = numbers.filter((num) => {
	if (num >= 25) {
		return true;  // YES, this number should be in the new array
	} else {
		return false; // NOPE, exclude this number from the new array
	}
});
*/

/*
// Filter out all numbers >= 25 (shorter)
const largeNumbers = numbers.filter((num) => {
	return (num >= 25)
		? true
		: false;
});
*/

/*
// Filter out all numbers >= 25 (even shorter!)
const largeNumbers = numbers.filter((num) => {
	return (num >= 25);
});
*/

// Filter out all numbers >= 25 (OMG ITS SO SHORT!!!!!!!!!!!!! 🤯🤯🤯)
// const largeNumbers = numbers.filter(num => num >= 25);

// console.log("Large numbers:", largeNumbers);

// We can also filter on an object's properties
const students = [
	{
		name: "Johan",
		points: 1337,
	},
	{
		name: "Pernilla",
		points: -3,
	},
	{
		name: "Alicia",
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

// Get all students which are godkända (>= 40)
const passed = students.filter((student) => {
	return student.points >= 40;
});
console.log("Students who passed the exam:", passed);

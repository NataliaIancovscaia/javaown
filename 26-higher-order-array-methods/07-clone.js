/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array <--
 * - Shuffle an array
 */

/*
// both point to the **same** array
const simple_numbers = [ 3, 7, 13, 19 ];
const other_numbers = simple_numbers;
other_numbers.push(42);

console.log("simple_numbers:", simple_numbers);
console.log("other_numbers:", other_numbers);
*/

/*
// a crude (but working) way to clone an array
const simple_numbers = [ 3, 7, 13, 19 ];
const other_numbers = simple_numbers.filter((num) => {
	return true;
});
other_numbers.push(42);

console.log("simple_numbers:", simple_numbers);
console.log("other_numbers:", other_numbers);
*/

/*
// a better (easier) way to clone an array
const simple_numbers = [ 3, 7, 13, 19 ];
const other_numbers = [ ...simple_numbers ];

other_numbers.push(42);

console.log("simple_numbers:", simple_numbers);
console.log("other_numbers:", other_numbers);
*/

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

const friends = [ ...students ];
friends.pop();
students[0].name = "Haxx0r-Johan";  // will affect friends[0] as well as it is a pointer to the same object
console.log("students:", students);
console.log("friends:", friends);

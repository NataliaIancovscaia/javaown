/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find() <--
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

// numbers
const numbers = [ 42, 5, 21, 50, 24, 18, 47, 43 ];
console.log("Original numbers:", numbers);

// 😒
/*
// find the first large number - the meh way
let firstLargeNumber;
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] >= 100) {
		firstLargeNumber = numbers[i];
		break;
	}
};
console.log("First(?) large number:", firstLargeNumber);
*/

/*
// find the first large number - the still worse but slighly better way
const largeNumbers = numbers.filter((num) => {
	return num >= 100;
});
console.log("largeNumbers", largeNumbers);
const firstLargeNumber = largeNumbers[0];
console.log("First large number:", firstLargeNumber);
*/

/*
const firstLargeNumber = numbers.find((num) => {
	console.log(`Checking if ${num} >= 45`);
	return num >= 45;
});
console.log("First large number:", firstLargeNumber);

const firstVeryLargeNumber = numbers.find((num) => {
	return num >= 100;
});
console.log("First VERY large number:", firstVeryLargeNumber);
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

// Get the FIRST student whom are godkänd (>= 40)
const firstPassedStudent = students.find((student) => {
	return student.points >= 40;
});
console.log("First student who passed the exam:", firstPassedStudent);

const products = [
	{
		sku: "CORR-BWL",
		name: "Corrosive bowl",
		in_stock: 321,
		price: 0.99,
	},
	{
		sku: "CTN-SPCE",
		name: "Cotton spice rack",
		in_stock: 2,
		price: 149.99,
	},
	{
		sku: "GOOD-COOKIES",
		name: "Inside-out Oreo cookies",
		in_stock: 18,
		price: 2.49,
	},
	{
		sku: "BACK-BREAKER",
		name: "The uncomfortable broom",
		in_stock: 1,
		price: 28.65,
	},
];

const nomNomProduct = products.find(product => {
	return product.sku === "GOOD-COOKIES";
});
if (nomNomProduct) {
	console.log("YAY FOUND COOKIES!", nomNomProduct);
} else {
	console.log("SAD COOKIE MONSTER 🥺");
}

/**
 * Cloning of an array
 */

/*
let friends = [];
for (let i = 0; i < students.length; i++) {
	friends.push(students[i]);
}

let friends = students.filter(() => {   // creates a **NEW** array with the same **content** as the original array
	return true;
});


// spread syntax
const friends = [ ...students ];
*/

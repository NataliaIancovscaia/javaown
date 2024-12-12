/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce() <--
 *
 * - Clone an array
 * - Shuffle an array
 */

/*
// numbers
const simple_numbers = [ 3, 7, 13, 19 ];

// // old way 🤮
// let total_sum = 0;
// simple_numbers.forEach((num) => {
// 	total_sum += num;
// });
// console.log("The sum of all numbers (using forEach) is:", total_sum);

// new way 😎
let total_sum = simple_numbers.reduce((sum, num) => {
	return sum + num;
}, 0);
console.log("The sum of all numbers (using reduce) is:", total_sum);

const total_sum2 = simple_numbers.reduce((sum, num) => sum + num, 1295);
console.log("The total_sum2 of all numbers (using reduce) is:", total_sum2);

const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 5, 33 ];
const numbers_sum = numbers.reduce((prevValue, currValue) => {
	return prevValue + currValue;
}, 0);
console.log(`Reducer complete, numbers_sum is ${numbers_sum}`);
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

/*
const student_points = students.map((student) => {
	return student.points;
});
console.log("Student points:", student_points);

const total_points = student_points.reduce((sum, points) => {
	return sum + points;
}, 0);
console.log("Total points for all students:", total_points);

const total_points = students.reduce((sum, student) => {
	return sum + student.points;
}, 0);
console.log("Total points for all students:", total_points);
*/

const products = [
	{
		sku: "CORR-BWL",
		name: "Corrosive bowl",
		in_stock: 321,
		price: 0.99,		// 321 * 0.99
	},
	{
		sku: "CTN-SPCE",
		name: "Cotton spice rack",
		in_stock: 2,
		price: 149.99,		// 2 * 149.99
	},
	{
		sku: "GOOD-COOKIES",
		name: "Inside-out Oreo cookies",
		in_stock: 18,
		price: 2.49,		// 18 * 2.49
	},
	{
		sku: "BACK-BREAKER",
		name: "The uncomfortable broom",
		in_stock: 1,
		price: 28.65,		// 1 * 28.65
	},
];

// calculate total price for one of each item
const total_one_of_each = products.reduce((sum, product) => {
	return sum + product.price;
}, 0);
console.log(`Total price for one of each item is: ${total_one_of_each}.`);

// calculate total stock value (the correct value is $ 691.24)
const total_stock_value = products.reduce((sum, product) => {
	return sum + (product.price * product.in_stock);
}, 0);
console.log(`The total stock value is $ ${total_stock_value}.`);

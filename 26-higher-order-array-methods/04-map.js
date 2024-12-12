/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map() <--
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

// numbers
// const numbers = [ 42, 5, 21, 50, 24, 18, 47, 43 ];
// console.log("Original numbers:", numbers);

/*
// multiply all numbers by 2 the old way
const doubledNumbers = [];
numbers.forEach(num => {
	doubledNumbers.push(num * 2);
});
console.log("Doubled numbers:", doubledNumbers);
*/

/*
// multiply all numbers by 2 the modern way
// TRANSFORM the array numbers INTO a NEW array
const doubledNumbers = numbers.map(num => {
	// console.log(`At number ${num}, returning ${num * 2}`);
	return num * 2;
});
console.log("Doubled numbers:", doubledNumbers);
*/

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

/*
// Create a new array with all the product's sku's
const skus = [];
products.forEach(product => {
	skus.push(product.sku);
});
console.log("All products:", products);
console.log("All SKUs:", skus);
*/

/*
// Create a new array with all the product's skus
const skus = products.map(product => {
	return product.sku;
});
console.log("All products:", products);
console.log("All SKUs:", skus);

// Create a new array with all the product's names
const productNames = products.map(product => {
	return product.name;
});
console.log("All product names:", productNames);
*/

/*
// Create a string-representation of each product
const output = products.map(product => {
	return `
		<li class="list-group-item">
			<span>
				${product.name} (${product.price})
			</span>
			<button class="btn btn-primary">Toggle</button>
			<button class="btn btn-danger">Delete</button>
		</li>
	`;
});
console.log(output);
*/

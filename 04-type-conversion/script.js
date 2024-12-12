/*
let points = 100;
console.log("points:", points, typeof points);

let batman = "Batman";
console.log("batman:", batman, typeof batman);

let stringPoints = "25";
console.log("stringPoints:", stringPoints, typeof stringPoints);

// Type Coersion
let sumPoints = points + stringPoints;   // 100 + "25"
console.log("sumPoints:", sumPoints, typeof sumPoints);  // "10025"
*/

/**
 * Type Conversion / Type Casting
 */

/*
// Convert a string to a number
let convertedStringsPoints = Number(stringPoints);  // 25
console.log("convertedStringsPoints:", convertedStringsPoints, typeof convertedStringsPoints);  // 25 number

let convertedBatman = Number(batman); // 🦇?
console.log("convertedBatman:", convertedBatman, typeof convertedBatman);  // 🦇?

// 🦇!!
console.log(Array(16).join("wat " - 1) + " Batman!");

// Convert number to string
let convertedPoints = String(points);  // points = 100
console.log("convertedPoints:", convertedPoints, typeof convertedPoints);  // "100" string
*/

let result;

result = Boolean(100);	// true
result = Boolean(1);	// true
result = Boolean(0);	// false
result = Boolean(-1);	// true
result = Boolean(-100);	// true

result = Boolean("i am groot");		// true
result = Boolean("");				// false
result = Boolean(" ");				// ?  true!

console.log("result:", result, typeof result);

/**
 * Loose vs Strict Comparissons
 */

let age = 25;		// number

// Loose comparison (different data types can still be equal)
console.log('25 == 25', age == 25);			// true
console.log('25 == "25"', age == "25");		// true
console.log('25 != 25', age != 25);			// false
console.log('25 == "25"', age != "25");		// false

// Strict comparison
console.log('25 === 25', age === 25);		// true
console.log('25 === "25"', age === "25");	// false
console.log('25 !== 25', age !== 25);		// false
console.log('25 !== "25"', age !== "25");	// true

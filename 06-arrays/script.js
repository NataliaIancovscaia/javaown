/**
 * Arrays
 */

// 🥴
let points1 = 1;
let points2 = 42;
let points3 = 1337;
let points4 = 999;

// 🤩
let points = [1, 42, 1337, 999];
let students = [
	"Deadpool",			// 0
	"Black Widow",		// 1
	"Iron Man",			// 2
	"Spider-Man",		// 3
];

console.log("Students:", students);
console.log("The second student's name is:", students[1]);

console.log(`We have ${students.length} students in our class.`);

/**
 * Non-destructive methods
 */

/*
// Join all items in an array to a string
let names = students.join(", ");
console.log("The students names are: " + names);

// Find position (index) of string "Iron Man"
console.log("Index of Iron Man:", students.indexOf("Iron Man"));  // 2
console.log("Index of Thanos:", students.indexOf("Thanos"));  // -1

// Find if "Iron Man" exists in the array
console.log("Does Iron Man exist in the array?", students.includes("Iron Man"));
console.log("Does Thanos exist in the array?", students.includes("Thanos"));

// Concatenate two arrays together
let friends = [
	"Batman",
	"Superman",
	"Green Lantern",
	"Joker",
	"Harley Quinn",
];
let mashup = students.concat(friends);
console.log("MASHUP!!!!", mashup);
*/
let friends = [
	"Batman",
	"Superman",
	"Green Lantern",
	"Joker",
	"Harley Quinn",
];

/**
 * Destructive methods
 */

// Add "Wanda" to the end of student list
students.push("Wanda");
console.log("The students are:", students);

// Add "Thanos" to the list and then remove him because he wasn't nice
students.push("Thanos");	// Add a string to the end of the array
students.pop();				// Remove the last item in the array
students.shift();			// Remove the first item in the array
students.unshift("Hulk");	// Add a string to the start of the array

console.log("The students after 🍿:", students);

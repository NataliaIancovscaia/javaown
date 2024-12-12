/**
 * Control Flow 👮🏽🎛✋🏻
 */

const minAge = 18;
const maxAge = 65;

let myAge = 25;

/**
 * if statements
 *
 * LOGICAL OPERATORS
 *
 * && = AND (*BOTH* sides have to be true)
 * || = OR (*AT LEAST* one side have to be true)
 */
/*
     // 67 >= 18?         67 <= 65?
	 //   true              false
	 //   true      AND     false
	 //            false
if (myAge >= minAge && myAge <= maxAge) {
	// true
	console.log("Access granted! 🥳");
} else {
	// false
	console.log("🛑 You're either too young or too old to party! 👶🏻👴🏻");
}

let username = "johan";
//   "johan" === "dave"     "johan" === "johan"
//        false         OR         true
//                     true
if (username === "dave" || username === "johan") {
	console.log(`I'm sorry ${username}, I can't open the doors.`);
} else {
	console.log("Welcome!");
}

// More advanced if-statement
if (myAge >= minAge && myAge <= maxAge) {
	console.log(`You are between ${minAge} and ${maxAge} years old, congrats!`);
} else if (myAge < minAge) {
	console.log("Too young! 👶🏻");
} else {
	console.log("Too old for this shit! 👴🏻");
}

console.log("Program ended.");
*/


/**
 * for-loops
 */

/*
console.log("Starting loop...");

for (
	let i = 0;		// start value of i
	i < 10;			// continue looping while this expression is true
	i++				// after each loop (iteration), do this
) {
	// here be loop
	console.log("We're looping 🥴, at loop number:", i);
}

console.log("🤢");
*/

let students = [
	"Deadpool",		// 0
	"Black Widow",	// 1
	"Iron Man",		// 2
	"Spider-Man",	// 3
	"Wanda",		// 4
	"Thanos",		// 5
];

console.log("Class of 2024:");
for (let i = 0; i < students.length; i++) {
	console.log(`Student at index ${i} is:`, students[i]);
}

console.log(`Number of students: ${students.length}`);

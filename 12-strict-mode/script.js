"use strict";

/**
 * strict-mode 👨🏻‍🏫
 *
 */

// msg = "Hello from the otter side";
// console.log(msg);

let title = "My first encounter with strict mode";

// titel = "My second encounter with strict mode";  // nope!

console.log(title);

// NaN = "LOL";  // nope!

let num = 5;

/*
if (num === "5") {
	console.log("It's a five(-ish)");
} else {
	console.log("That's not a five!");
}
*/

switch (num) {
	case "5":
		console.log("Five as a string");
		break;

	default:
		console.log("Not a string 5");
		break;
}

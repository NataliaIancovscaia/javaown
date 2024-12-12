/*
let score;  // undefined
console.log("value of score:", score);
console.log("type of score:", typeof score);  // "undefined"

score = null;
console.log("value of score:", score);
console.log("type of score after setting to null:", typeof score); // "null"

score = 42;
console.log("value of score:", score);
console.log("type of score after setting to 42:", typeof score); // "number"

score = "i win";
console.log("value of score:", score);
console.log("type of score after setting to text:", typeof score); // "string"
*/

let a;  // undefined
let b = null;  // null

console.log("a:", a);
console.log("b:", b);

console.log("a (undefined) + 5:", a + 5);
console.log("b (null) + 5:", b + 5);

// Concatenating with undefined and null converts undefined and null to strings
console.log("a:" + a);  // "a:undefined"
console.log("b:" + b);	// "b:null"

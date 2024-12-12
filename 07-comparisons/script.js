/**
 * Comparisons
 */

const minAge = 18;
const maxAge = 65;

let myAge = 65;
console.log("Age is:", myAge);

console.log("Is age greater than minAge?", myAge > minAge);  // 65 > 18? 👍🏻
console.log("Is age greater than OR equal to minAge?", myAge >= minAge);  // 65 >= 18? 👍🏻

console.log("Is age less than maxAge?", myAge < maxAge);  // 65 < 65? 👎🏻
console.log("Is age less than OR equal to maxAge?", myAge <= maxAge);  // 65 <= 65? 👍🏻

console.log("Is age the same as maxAge?", myAge == maxAge);  // 65 == 65? 👍🏻

console.log("Is age NOT the same as minAge?", myAge != minAge);  // 65 != 18? 👍🏻
console.log("Is age NOT the same as maxAge?", myAge != maxAge);  // 65 != 65? 👎🏻

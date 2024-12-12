/**
 * Template Strings / Template Literals
 */

let test = "JavaScript 101";
let student = "Newbie Coder";
let points = 1337;

// String Concatenation
// let msg = "Hi " + student + ", your results on " + test + " was " + points + " points.";
// console.log(msg);

// ES6 Template Literals (Template Strings)
let msg = `Hi ${student}, your results on ${test} was ${points} points.`;
console.log(msg);

let myScore = "Score: " + points;
let myScoreLiteral = `Score: ${points}`;

let myScore2 = "Score: " + points + " points";
let myScoreLiteral2 = `Score: ${points} points`;

// let html =	"<article>" +
// 			"  <p>Lorem ipsum dolor simet.</p>" +
// 			"</article>";

let html = `<article>
				<p>"Template Strings", they're awesome!</p>
			</article>`;
console.log(html);

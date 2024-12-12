/**
 * TypeScript with Vite ✍🏻📜🏎️💨
 *
 */

// When using `type="module"`, variabels are no longer declared in the global
// scope, instead they are local (scoped) to the file they're declared in
/*
const friends = ["Joey", "Chandler", "Phoebe", "Monica", "Rachel", "Ross"];
// console.log(friends);
*/

/**
 * Explicit typing
 */
/*
let myString: string;
myString = "Hello, world!";

let myNumber: number;
myNumber = 1337;

let myBoolean: boolean;
myBoolean = true;
// myBoolean = "false-ish";
*/

/**
 * Implicit typing
 */

/*
let myName = "Johan";
//   ^?
// myName = 1337;
*/

/**
 * Demo of VSCode plugin "Twoslash Query Comments"
 * <https://marketplace.visualstudio.com/items?itemName=Orta.vscode-twoslash-queries>
 */
/*
let username: string;
//    ^?

// username = -42;
*/

/**
 * Function parameter typing
 */
/*
const greet = (username: string, age: number) => {
	console.log(`Hello, ${username}! You are ${age} years old.`);
}
greet("Johan", 25);
greet("Pelle", 3);
// greet(1337, "I am haxx0r, FEAR ME!!!!!1111");
// greet(["lol"]);

const greet2 = (username: string, age?: number) => {
//                                 ^?
	if (!age) {
		console.log(`Hello, ${username}!`);
		return;
	}
	console.log(`Hello, ${username}! You are ${age} years old.`);
//                                           ^?
}
greet2("Alice");
greet2("Bob", 42);
// greet2("Charlie", null);  // even though parameter 2 is optional, it still has to be a number if used
// greet2("Charlie", false);  // even though parameter 2 is optional, it still has to be a number if used

const greet3 = (username = "anonymouse", age?: number) => {
//               ^?
	if (!age) {
		console.log(`Hello, ${username}!`);
	}
	console.log(`Hello, ${username}! You are ${age} years old.`);
}
greet3();
greet3("Hangry");
greet3(undefined, 3);
*/

/**
 * Function return typing
 */
/*
const fancyGreet = (username = "anonymouse", age?: number) => {
	if (!age) {
		return `Oh hello there good sir/ma'am, ${username}!`;
	}
	return `Oh hello there good sir/ma'am, ${username}! You look splendid for being ${age} years old.`;
}
const greeting = fancyGreet("Harold", 72);  // greeting will be inferred as a string, as fancyGreet only ever returns a string as the result
console.log("fancyGreet returned:", greeting);

const pets = ["cat", "dog", "hamster", "goldfish"];
pets.forEach((pet) => {
	console.log(pet.toLocaleUpperCase());
});

const ages = [2, 4, 1, 3, 5, 2, 1, 3, 4, 5, 2, 1, 3, 4, 5];
ages.forEach((age) => {
	// console.log(age.toLocaleUpperCase());  // Error: Property 'toLocaleUpperCase' does not exist on type 'number'.ts(2339)
});
*/

/**
 * Type Aliases
 */

type Strang = string;

let username: Strang;
username = "Johan";
console.log("typeof username", typeof username);

// let x: string | number = 42;
// x = "1337";

// type aliases (and interfaces) are *always* written in PascalCase / UpperCamelCase
/*
type StrangEllerTal = string | number;

let x: StrangEllerTal = "42";
x = 42;
x = "lol";

type StrangEllerTal = string | number;
let strangEllerTal: StrangEllerTal = 42;
strangEllerTal = "tretton37";
*/

/*
interface Todo {
	id: number;
	title: string;
	completed: boolean;
	due_date?: number;
}

const todo1: Todo = {
	id: 1,
	title: "This is my first todo",
	completed: false,
	due_date: 1337,
}

const todo2: Todo = {
	id: 2,
	title: "This is my second todo",
	completed: false,
}

const todo3: Todo = {
	id: 3,
	title: "Such wow, much autocomplete, very type-safe",
	completed: true,
}

// Array of Todo 🤩
const todos: Todo[] = [
	{ id: 1, title: "This is my first todo", completed: false, due_date: 1337 },
	{ id: 2, title: "This is my second todo", completed: false },
	{ id: 3, title: "Such wow, much autocomplete, very type-safe", completed: true },
];

todos.forEach((item) => {
	// `item` is of type Todo here, so we get autocomplete 😎
	console.log(item.title);
	// But `item` is still of type `object` according to JavaScript because all TypeScript-code is removed when transpiling to JavaScript
	console.log(typeof item);
});
*/

/**
 * TypeScript and DOM
 */

const paragraphEl = document.querySelector("p");  // HTMLParagraphElement | null
//     ^?

const paragraphEl2 = document.querySelector(".content");  // Element | null

const paragraphEl3 = document.querySelector<HTMLParagraphElement>(".content");  // HTMLParagraphElement | null
//     ^?

const paragraphEl4 = document.querySelector<HTMLParagraphElement>(".lolcontent")!;
//     ^?

// paragraphEl4.innerText = "YOLO, so lets change stuff even if it doesn't exist";

const imgEl = document.querySelector<HTMLImageElement>(".img-fluid");  // HTMLImageElement | null

const imgEl2 = document.querySelector<HTMLImageElement>(".img-fluid")!;  // 😒

// if (imgEl) {
// 	imgEl.src = "/js-vs-ts.png";
// }

if (!imgEl) {
	throw new Error("No image, can't continue existing...");
}

imgEl.src = "/js-vs-ts.png";

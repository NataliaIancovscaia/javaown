/**
 * TypeScript ✍🏻📜
 *
 */

/**
 * implicit typing (infer)
 */
let username = "pelle";
let level = 42;

console.log("Your username is:", username);
console.log("Your level is:", level);

username = "kalle";
username.toUpperCase();

// level = "1337";  // nope! 'string' is not assignable to type 'number'
level = Number("1337");  // works if we convert from string to number

console.log(`Your username is ${username} and your level is ${level}!`);

// if we don't assign a initial value, we "opt out" of typescript (typescript says this variable can contain `any` datatype)
let anything;
anything = "kajsa";
anything = 13;
// something.touppercase();   // no autocomplete makes programmer a dull boy/girl/them

/**
 * explicit typing
 */
let something: string;
something = "johan";
something = "lolcat";
// something = 1337;  // Type 'number' is not assignable to type 'string'
// something = ["lolcats", "loldawgs"];  // Type 'string[]' is not assignable to type 'string'

// explicit type knowsTypeScript to a boolean, while also assigning it a boolean value 🫤
let knowsTypeScript: boolean = false;

// knowsTypeScript = 42;  // Type 'number' is not assignable to type 'boolean'

/**
 * Arrays
 */
let todos = ["Learn JS", "Learn TS"];  // `todos` will be of type `string[]`
todos.push("Learn other stuff");  // 👍🏻
// todos.push(1337);  // 👎🏻 nope - Argument of type 'number' is not assignable to parameter of type 'string'

// when creating empty arrays, we have to explicitly state the type
// let names = [];
// names.push("1337");  // can't do as `names` is of type `never[]`
// names.push(42);  // can't do as `names` is of type `never[]`

let names: string[] = [];
names.push("1337");  // 🍪 accepted
// names.push(42);  // Argument of type 'number' is not assignable to parameter of type 'string'

let points: number[] = [];
points.push(13);
points.push(37);

points = [];
points.push(42);
// points.push("yolo");

// we can also type a variable so it contains either a string OR a number using the `union` operator `|`
let nameOrNumber: string | number = "kids don't try this at home";
nameOrNumber = -1;
// nameOrNumber = false;

console.log("COFFEEEEEEEEEEE!!!111");

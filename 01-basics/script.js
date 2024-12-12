/*
// Detta är en radkommentar
console.log("Hello from script.js");  // Detta visar ett meddelande i konsolen

Detta är en block-kommentar
alert("I NEED A BREAK");  // Detta visar en popup i webbläsaren

console.log("Hello after alert");
*/

/*
let msg = "hi mom";
console.log(msg);    // console.log("abc");

msg = "hi dad";
console.log(msg);    // console.log("def");

let haxx0r;
console.log(haxx0r);
haxx0r = "i am haxx0r, very elite";
console.log(haxx0r);
*/

/*
// Naming Conventions

// camelCase
let myFirstName = "Johan";

// snake_case
let my_first_name = "Johan";

// UpperCamelCase / PascalCase
let MyFirstName = "Johan";

// Kebab Case / BBQ Case
*/

/*
let firstName = "Johan";
console.log(firstName);

firstName = "Pelle";
console.log(firstName);

const lastName = "Nordström";
console.log(lastName);

// lastName = "Hackerson";  // NOPE!

// String Concatenation
console.log(firstName + " " + lastName); // "Pelle Nordström"
console.log("Pelle" + " " + "Nordström"); // "Pelle Nordström"

let fullName = firstName + " " + lastName;  // "Pelle Nordström"
console.log("Your name is: " + fullName);

firstName = "Bengt";
console.log("Your name is: " + fullName);

// let myName = "Johan 'haxx0r' Nordström";
// let myName = 'Johan "haxx0r" Nordström';
// let myName = "Johan \"haxx0r\" Nordström";

// let myNum = 3.14;
// let myFakeNum = "3.14";

// let myEmptyString = "";
// let myUndefinedVariable;

// let myName = "Johan";
// myName = "";
// myName = null;
*/

/**
 * Strings
 */

/*
let fullName = "Johan Nordström";
console.log("Your name is: " + fullName);

// String Properties
console.log("The length of your full name is: " + fullName.length);

// Strings Methods
console.log("Your full name (but screaming): " + fullName.toUpperCase());
console.log("Your full name (but whispering): " + fullName.toLowerCase());

console.log("The first char of your name is: " + fullName[0]);
console.log("The last char of your name is: " + fullName[14]);
console.log("The 16th char of your name is: " + fullName[15]);

console.log("The first 'o' exists at index: " + fullName.indexOf("o"));

let newName = fullName.replace("Johan", "Pelle");  // "Pelle Nordström"
console.log("New name is: " + newName);
console.log("Your (old) name is: " + fullName);

let partOfName = fullName[1] + fullName[2];
console.log("Part of name: " + partOfName);

let alsoPartOfName = fullName.slice(1, 3);
console.log("Also part of name: " + alsoPartOfName);

let anotherPartOfName = fullName.substring(1, 3);
console.log("Also part of name: " + anotherPartOfName);
*/

/**
 * Mini-workshop
 */
let email;
email = "jn@thehiveresistance.com"; // ska returnera 20 + 'com'
email = "some@dude.org"; // ska returnera 9 + 'org'
email = "bgates@microsoft.com"; // ska returnera 16 + 'com'
email = "some.brittish.dude@bt.co.uk"; // ska returnera 24 + 'uk'

// Hitta sista punkten i variabeln `email` och skriv ut till console
// Ska fungera *oavsett* vad för värde `email` har, utan att behöva ändra koden
// "The last dot for email EMAIL is at index: 42"
let indexOfLastDot = email.lastIndexOf(".");
console.log("The last dot for email " + email + " is at index: " + indexOfLastDot);

// Med hjälp av föregående kod, ta ut allting EFTER sista punkten i
// `email` och skriv till console
// "The top domain for email EMAIL is: DOMAIN"
console.log("The top domain for email " + email + " is: " + email.slice(indexOfLastDot + 1));

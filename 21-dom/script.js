/**
 * DOM - Document Object Model
 *
 */

/*
const firstLink = document.querySelector("#link-1");

// Get the element's parent
const firstLinkParent = firstLink.parentElement;

// Get the parent's next sibling
const firstLinkParentNextSibling = firstLinkParent.nextElementSibling;

// Get the first paragraph on the page
const firstParagraph = document.querySelector("p");

// Log the first paragraphs HTML
console.log(firstParagraph.innerHTML);

// Log the first paragraphs text
console.log(firstParagraph.innerText);

// Get the first paragraph with 'error'-class on the page
const firstErrorParagraph = document.querySelector("p.error");

// Log the first error-paragraphs HTML
console.log(firstErrorParagraph.innerHTML);

// Log the first error-paragraphs text
console.log(firstErrorParagraph.innerText);

// We can also change the content of an element
firstParagraph.innerText = "Look mom, my first paragraph!";
firstParagraph.innerText += " Oh I forgot this!";
*/

/*
const alertEl = document.querySelector(".alert");
console.log("alertEl:", alertEl);

console.log("alertEl innerHTML:", alertEl.innerHTML);
console.log("alertEl innerText:", alertEl.innerText);
console.log("alertEl textContent:", alertEl.textContent);

// Change content
alertEl.innerText = "Such error, much danger, very fail";
alertEl.innerText = "Such <strong>error</strong>, much danger, very fail";
alertEl.innerHTML = "Such <strong>error</strong>, much danger, very fail";
*/

/**
 * Say hi to the user
 */
/*
const h2El = document.querySelector("h2#greetings");
const username = prompt("What are thy name?");
// console.log("Hello", username);
// h2El.innerHTML = "Hello " + username;  // BIG NO-NO!
h2El.innerText = "Hello " + username;  // yasss! <3
*/

/*
const linkListEl = document.querySelector("ul");
console.log("linkListEl:", linkListEl);
console.log("linkListEl's children:", linkListEl.children);  // HTMLCollection, does not have `.forEach()`-method but we can access the children using square-bracket (index) notation

// Loop over an HTMLCollection
for (let i = 0; i < linkListEl.children.length; i++) {
	console.log(`child ${i}:`, linkListEl.children[i]);
}

// If we want to use `.forEach()`, we first need to convert the HTMLCollection into an *actual* array
const liEls = Array.from(linkListEl.children);

// OR, we can use `querySelectorAll` on the `linkListEl` (which is a reference to the *first* `<ul>`)
const liEls2 = linkListEl.querySelectorAll("li");
*/

/**
 * Get and set attributes
 */
// const memeEl = document.querySelector("img");
// const imgSrc = memeEl.getAttribute("src");
// const cssClasses = memeEl.getAttribute("class");
// const cssClasses2 = memeEl.className;
// memeEl.setAttribute("src", "https://media.tenor.com/tNGtfhqJWP0AAAAd/haxor.gif");

const btnPopupEl = document.querySelector("button");
console.log("Such button text:", btnPopupEl.innerText);

console.log("Before adding event listener");
btnPopupEl.addEventListener("click", () => {
	console.log("Event listener is being called");
	alert("Stop it, that ticles! 😂");
});
console.log("After adding event listener");

const btnSayHiEl = document.querySelector("#btnSayHi");
const inputNameEl = document.querySelector("#inputName");
const username = inputNameEl.value;  // Won't update because we read value on page load, not when someone clicks on the button

btnSayHiEl.addEventListener("click", () => {
	// Get the *CURRENT* value of the input when someone clicks the button
	const username = inputNameEl.value;

	// Say hi to the nice user
	alert(`Hi ${username}!`);
});

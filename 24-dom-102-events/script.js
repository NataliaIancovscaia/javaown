/**
 * DOM 102 + events
 *
 * classList (used on an element)
 * - add		adds a class (if it doesn't already exist)
 * - remove		removes a class (if it doesn't already exist)
 * - toggle		adds a class if it doesn't already exist, otherwise removes it
 * - replace	replaces a class with another class
 * - contains	returns true/false if class exists
 *
 * document.createElement 	creates a new element of a specific type. does NOT add it to the DOM
 * parentEl.append(newEl) 	appends AFTER the last element INSIDE the element we select
 * parentEl.prepend(newEl) 	prepends BEFORE the first element INSIDE the element we select
 * element.remove()			removes the selected element from the DOM
 */

// Get references to DOM-elements
const todoListEl = document.querySelector("ul");

/*
// Handle click-event on a listitem
const handleLiClick = (e) => {
	// 🤫
	// e.stopPropagation();

	console.log("'stop it, that tickles 😂' said: ", e.target);

	// If target has class `completed`, remove it
	// If target DOES NOT have class `completed`, add it
	e.target.classList.toggle("completed");
}
*/

// Listen for click-events on the "Add"-button
document.querySelector("#add").addEventListener("click", () => {
	// GET reference to ALL `li` elements and the LENGTH of that list (array)
	const liCount = document.querySelectorAll("li").length;

	// Will **REPLACE** all content in the element with a **NEW**
	// _string_ that contains both the old and the new content
	todoListEl.innerHTML += `<li>list item ${liCount + 1}</li>`;

	/*
	// ANOTHER way to create elements that does NOT replace the old content,
	// only appends to it

	// Create a new `li` element and add some content
	const newLiEl = document.createElement("li");  // <li></li>
	newLiEl.innerText = `list item ${liCount + 1}`;  // <li>list item 5</li>

	// Also add a click-event listener to the new listitem
	// newLiEl.addEventListener("click", handleLiClick);

	// Append the new element to the `ul` list
	todoListEl.append(newLiEl);
	*/
});

/*
// Listen for click-events on the listitems
document.querySelectorAll("li").forEach((liEl) => {
	// Add click-event handler to each listitem
	liEl.addEventListener("click", handleLiClick);
});
*/

// Listen for click-events on the list
todoListEl.addEventListener("click", (e) => {
	// Stop event from bubbling up in the hierarchy
	// e.stopPropagation();

	console.log("Hello, I am a UL, you clicked on:", e.target);

	// If the clicked element is a LI-tag and it does not have the
	// `completed`, add it. If it is a LI-tag that already has the
	// `completed` class, delete it. Otherwise don't do anything.
	if (e.target.tagName === "LI" && e.target.classList.contains("completed")) {
		// It was completed, let's remove it entirely
		e.target.remove();

	} else if (e.target.tagName === "LI") {
		// It was not completed, mark it as completed
		e.target.classList.add("completed");
	}
});

/*
// Listen for EVERYTHING cause I'm a höns-förälder
document.addEventListener("click", (e) => {
	console.log("Heeeyy, WHY U CLICK ON MA CHILDREN!!!!!!11");
});
*/

document.querySelector("a").addEventListener("click", (e) => {
	// This will be executed whenever someone clicks on the link
	console.log("Such click, much link, very internetz");

	// You can check in anytime you like but you can never leave
	// Prevent user from ever leaving our site 😈 (*MOHAHAHA*)
	e.preventDefault();

	// Taunt user 😎
	alert("You can check in anytime you like but you can never leave 😈");
	// window.location.href = "https://www.bing.com";
});

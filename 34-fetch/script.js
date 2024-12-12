/**
 * Fetch 🐶
 *
 * Get `dogs.json` and `cats.json` in parallel
 *
 */

console.log("Starting...");

// Get doggos
fetch("data/dogs.json")
	.then((res) => {
		if (!res.ok) {
			throw new Error("Request was not successful!");
		}

		return res.json();
	})
	.then((data) => {
		// 🐶
		document.querySelector("#dogs").innerHTML = data
			.map(dog => `<li>${dog.name}</li>`)
			.join("");

		return fetch("data/cats.json");
	})
	.then((res) => {
		if (!res.ok) {
			throw new Error("Request was not successful!");
		}

		return res.json();
	})
	.then((data) => {
		// 🐱
		document.querySelector("#cats").innerHTML = data
			.map(cat => `<li>${cat.name}</li>`)
			.join("");
	})
	.catch((err) => {
		console.log("🚨 Something went wrong:", err);
	});

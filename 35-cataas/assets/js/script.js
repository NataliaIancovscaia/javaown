/**
 * Cataas 🐈🐶
 *
 * <https://cataas.com/>
 *
 */

const catWrapperEl = document.querySelector("#cat-wrapper");
const loadingSpinnerEl = document.querySelector("#loading-spinner");

console.log("🐈");

// Attach a click-eventlistener to the button
document.querySelector("#cat-button").addEventListener("click", () => {
	console.log("Getting kitteh...");

	// Show loading spinner
	loadingSpinnerEl.classList.remove("hide");

	// Get kitteh from `https://cataas.com/cat?json=true`
	fetch("https://cataas.com/cat?json=true")
		.then((res) => {
			if (!res.ok) {
				throw new Error("Could not find kitteh");
			}

			return res.json();
		})
		.then((data) => {  // Fake a slow API (delay proceeding to the next step for 1500 ms)
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(data);
				}, 1500);
			});
		})
		.then((cat) => {
			console.log("🐱:", cat);

			// Change image to the cat from the request
			document.querySelector("#cat-image").setAttribute("src", "https://cataas.com/cat/" + cat._id);

			// Hide loading spinner
			loadingSpinnerEl.classList.add("hide");
		})
		.catch((err) => {
			console.log("🚨 Failed to fetch cat because:", err);
		});
});

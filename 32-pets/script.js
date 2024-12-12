/**
 * Pets
 *
 * MINI-WORKSHOP
 *
 * STEG 1
 * Hämta `data/pets.json` och därefter för varje objekt i svaret
 * så hämta den URL som finns i objektet. Skriv ut svaret till console.
 *
 * STEG 2
 * Ändra koden från steg 1 så att du skriver ut informationen om varje
 * husdjur till varsin egen UL i DOM (det finns redan UL-element) för
 * de olika kategorierna av husdjur.
 *
 */

// Get data from a URL
const getJSON = (url, callback) => {
	// Create a new XML Http Request
	const request = new XMLHttpRequest();

	// Set request to GET data from `url`
	request.open("GET", url);

	// Attach an event-listener to the request
	request.addEventListener("readystatechange", () => {
		// Log request status

		// Is request done?
		if (request.readyState === 4) {
			// Yay request is finished!

			// Was the request successful?
			if (request.status === 200) {
				// 200 OK

				// Take the JSON-STRING in responseText and PARSE it into a JavaScript value
				const data = JSON.parse(request.responseText);

				callback(false, data);

			} else {
				// Something went wrong 😢
				console.log("DANGER DANGER WILL ROBINSON!!!!!!!!!");
				callback("Error getting data! Status code is: " + request.status);
			}
		}
	});

	// Send the request
	request.send();

	console.log("Request sent to:", url);
}

/*
// Get all pet "types" (categories)
getJSON("data/pets.json", (err, petCategories) => {
	console.log("Got me some pet categories:", petCategories);

	// Make a request to each URL in the response
	petCategories.forEach((petCategory) => {
		console.log("Requesting petCategory:", petCategory);

		getJSON(petCategory.url, (err, pets) => {
			// Got some WHAT?
			console.log(`Got me some ${petCategory.title}:`, petCategory, pets);

			// Output pets to the corresponding list
			document.querySelector("#" + petCategory.id).innerHTML = pets
				.map((pet) => `<li>${pet.name} (${pet.age} years old)</li>`)
				.join("");
		});
	});
});
*/

// Get cattos 🐱
getJSON("data/cats.json", (err, cats) => {
	// Got cats!
	console.log("Got list of cats:", cats);

	// Get doggos 🐶
	getJSON("data/dogs.json", (err, dogs) => {
		// Got woofs!
		console.log("Got list of tail-waggers:", dogs);

		// Get flying projectiles 🦜🚀
		getJSON("data/birds.json", (err, birds) => {
			// Got woofs!
			console.log("Got list of flying projectiles:", birds);

		});
	});
});

// Callback Hell (a.k.a. JavaScript Triangle of Doom)
getJSON("data/cats.json", (err, cats) => {
	getJSON("data/dogs.json", (err, dogs) => {
		getJSON("data/birds.json", (err, birds) => {
			console.log("😰");
		});
	});
});

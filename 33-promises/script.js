/**
 * Promises 🤞🏻
 *
 */

/*
const promiseOfFutureData = new Promise( (resolve, reject) => {
	// Our actual code that will either
	// resolve or reject
	setTimeout(() => {
		resolve("i strong, i halp!");
		// reject("nä jag känner mej litta förkyld");
	}, 3000);
} );
console.log("Waiting for promise result...", promiseOfFutureData);

promiseOfFutureData
	.then((data) => {
		// Promise was resolved
		console.log("Yay promise was kept:", data);
	})
	.catch((err) => {
		// Promise was rejected
		console.log("Promise was broken 🥺. Reason:", err);
	});
*/

// Get data from a URL
const getJSON = (url) => {

	// Return a promise of (potential) future data
	return new Promise( (resolve, reject) => {

		// Do the actual thing that takes time

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

					resolve(data);

				} else {
					// Something went wrong 😢
					// console.log("DANGER DANGER WILL ROBINSON!!!!!!!!!");
					reject("Error getting data! Status code is: " + request.status);
				}
			}
		});

		// Send the request
		request.send();

		console.log("Request sent to:", url);

	} );

}

/*
const promiseOfDogs = getJSON("data/dogs.json");
console.log("promiseOfDogs:", promiseOfDogs);

const promiseOfSnakes = getJSON("data/snakes.json");
console.log("promiseOfSnakes:", promiseOfSnakes);
*/

/*
// This fetches both dogs and snakes simultaneously (in parallel)
// Dogs 🐶
getJSON("data/dogs.json")
	.then((dogs) => {
		// Yay dogs
		console.log("Yay dogs 🐶:", dogs);
	})
	.catch((err) => {
		// No dogs
		console.log("No dogs 😢:", err);
	});

// Snakes 🐍
getJSON("data/snakes.json")
	.then((snakes) => {
		// Yay snakes
		console.log("Omg snakes 🐍:", snakes);
	})
	.catch((err) => {
		// No snakes
		console.log("No snakes 😢:", err);
	});
*/

/*
// Get all data after one another (sequentially)
// i.e. get cats, then get dogs, then get birds

// Instead of invoking getJSON in a triangle like before,
// we can return a new promise from inside each `.then()`
getJSON("data/cats.json")
	.then((cats) => {
		console.log("Got mjaus:", cats);

		return getJSON("data/dogs.json");
	})
	.then((dogs) => {
		console.log("Got woofs:", dogs);
		console.log("Cats?", cats);

		return getJSON("data/birds.json");
	})
	.then((birds) => {
		console.log("Got flying things:", birds);
	})
	.catch((err) => {
		console.log("🚨 Something bad happened:", err);
	});
*/

// Get `pets.json` and THEN get each category of pets in parallel
getJSON("data/pets.json")
	.then((petCategories) => {
		petCategories.forEach((petCategory) => {
			getJSON(petCategory.url)
				.then((pets) => {
					console.log("Got pets:", pets);
				})
				.catch((err) => {
					console.log("🚨 Something bad happened:", err);
				});
		});
	})
	.catch((err) => {
		console.log("🚨 Something bad happened:", err);
	});

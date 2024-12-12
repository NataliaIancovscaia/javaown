/**
 * async/await 🐶
 *
 */

/*
fetch("data/cats.json")
	.then(res => {
		if (!res.ok) {
			throw new Error("Request was not successful!");
		}
		return res.json();
	})
	.then(data => {
		console.log("data:", data);
	})
	.catch(err => {
		console.log("Nope, something went wrong:", err);
	});
*/

// wait for response of fetch
// wait for json-parse
// use data

/*
const getData = (url) => {
	console.log("Would get data from:", url);
	return "who let the kittehs out";
}
*/

/*
const getData = (url) => {
	console.log("Would get data from:", url);
	return new Promise((resolve, reject) => {
		resolve("who let the promised kittehs out");
	});
}

const promiseOfData = getData("lol.json"); // will return a promise of future data
*/

/*
// same as above but we don't have to manually create a new promise and call `resolve()`
const getData = async (url) => {
	console.log("Would get data from:", url);
	return "who let the async kittehs out";
}
const data = getData("lol.json");
console.log("return value of getData:", data);
*/

/*
// getData, promise-version
const getData = (url) => {
	return fetch(url)
		.then(res => {
			if (!res.ok) {
				throw new Error("Request was not successful");
			}

			return res.json();
		})
		.then(data => {
			console.log("Got me some data:", data);
			return data;
		});
}
*/

const getData = async (url) => {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error("Request was not successful");
	}

	const data = await res.json();
	console.log("Got me some data:", data);

	return data;
}

/*
// get data from `data/cats.json` and THEN when we have the data, log it to the console
getData("data/cats.json")
	.then(cats => {
		console.log("cats:", cats);
		return getData("data/dogs.json");
	})
	.then(dogs => {

		console.log("dogs:", dogs);
	});
*/

const getPets = async () => {
	try {
		const catArray = await getData("data/cats.json");
		console.log("got me some kittehs:", catArray);

		document.querySelector("#cats").innerHTML = catArray
			.map(cat => `<li>${cat.name}</li>`)
			.join("");

		const dogArray = await getData("data/dogs.json");
		console.log("got me some pupps:", dogArray);

		document.querySelector("#dogs").innerHTML = dogArray
			.map(dog => `<li>${dog.name}</li>`)
			.join("");

	} catch (err) {
		console.log("🚨 Caught cats error:", err);
	}
}

/*
getPets()
	.catch(err => {
		// handle error somehow
	});
*/

getPets();

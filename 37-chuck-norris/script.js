/**
 * Chuck Norris Joke of the Day
 *
 * <https://api.chucknorris.io/>
 * <https://api.chucknorris.io/jokes/random>
 *
 * STEG 1
 * Hämta ett slumpmässigt faktum från ovan API så fort sidan laddar och visa det i paragrafen med id `joke`.
 *
 * STEG 2
 * Lägg till en knapp som hämtar ett slumpmässigt faktum när man klickar på knappen. Det ska fortfarande hämtas ett slumpmässigt faktum när sidan laddas.
 *
 * STEG 3
 * Lägg in felhantering för om hämtningen av ett slumpmässigt faktum misslyckas (av någon anledning). Visa felmeddelandet på sidan (i DOM).
 */

const getChuckNorrisFact = async () => {
	try {
		// Fetch URL and wait for promise to resolve
		const res = await fetch("https://api.chucknorris.io/jokes/random");

		// Check if the received response wasn't a successful response
		if (!res.ok) {
			throw new Error("Chuck Norris is unavailable to take your call right now");
		}

		// Convert response from JSON to a JavaScript value and wait for it to resolve
		const fact = await res.json();

		// We got ze data, output it to DOM
		document.querySelector("#joke").innerText = fact.value;

	} catch (err) {
		document.querySelector("#joke").innerText = "You don't summon Chuck Norris, Chuck Norris summons you! " + err;

	}
}

// Listen for when Chuck Norris is summoned
document.querySelector("#btnGetJoke").addEventListener("click", () => {
	getChuckNorrisFact();
});

// Start of with a entirely true fact about Chuck Norris
getChuckNorrisFact();

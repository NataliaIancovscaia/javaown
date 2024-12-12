/**
 * Guess the number - DOM Edition
 *
 * Skriv om ”gissa talet” till att ta emot och visa utfall i DOM. Använd
 * formulär-fält för att ta emot input från användaren, och när formuläret
 * skickas (submits) så jämför det gissade talet mot svaret och visar utfallet
 * i DOM istället för alert()-rutor.
 *
 * STEG 1
 * En input-fält där man kan gissa på ett tal. En knapp för att gissa.
 *
 * STEG 1.1
 * Visa resultatet i en alert.
 *
 * STEG 1.2
 * Visa om resultatet var rätt eller inte i ett HTML-element.
 * (T.ex. ”Du gissade rätt!” eller ”Du gissade fel!”)
 * Ska så klart uppdateras varje gång användaren gissar.
 *
 * STEG 2
 * Visa om det gissade talet var för högt eller lågt i ett HTML-element.
 *
 * STEG 3
 * Visa antalet gissningar hittills i ett HTML-element.
 * Ska så klart också uppdateras varje gång användaren gissar.
 *
 * STEG 4
 * Skapa en knapp för att starta om spelet (ett nytt tal ska slumpas fram och
 * antalet gissningar ska nollställas).
 *
 */

// Get references to DOM Elements
const cheatEl = document.querySelector('#cheat');
const formGuessEl = document.querySelector('#formGuess');
const inputGuessEl = document.querySelector('#inputGuess');
const btnGetLuckyEl = formGuessEl.querySelector('button[type="submit"]');
const guessesEl = document.querySelector('#guesses');
const turnoutEl = document.querySelector('#turnout');

// Generate a random number between 1 and `max` (default 10)
const getRandomNumber = (max = 10) => {
	return Math.floor( Math.random() * max ) + 1;
}

// Variables to store game state in
let correctNumber;
let attempts;

// Function for starting a game
const startGame = () => {
	// Get a number to guess
	correctNumber = getRandomNumber();

	// Reset number of attempts to 0
	attempts = 0;

	// Update DOM with guesses made
	updateGuesses(attempts);

	// I'm going to cheat! 😇
	cheatEl.innerText = correctNumber;

	// Focus on input field
	inputGuessEl.focus();
}

// Function for updating DOM with guesses made
const updateGuesses = (nbrOfGuesses) => {
	guessesEl.innerText = (nbrOfGuesses === 1)
		? `${nbrOfGuesses} guess`
		: `${nbrOfGuesses} guesses`;
}

// Listen for guesses
formGuessEl.addEventListener("submit", (e) => {
	// Stop form from being sent to the server (and causing a page reload)
	e.preventDefault();

	// Get guessed number from input-field
	const guessedNumber = Number(inputGuessEl.value);

	// Increase number of guesses made
	attempts++;

	// Update DOM with guesses made
	updateGuesses(attempts);

	// Check if guess was correct
	if (guessedNumber === correctNumber) {
		// YAY
		turnoutEl.innerText = `${guessedNumber} is correct! 🥳`;

		// Stop user from making more guesses (as their guess was correct 🙄)
		btnGetLuckyEl.setAttribute("disabled", "disabled");

	} else if (guessedNumber < correctNumber) {
		// NEIN
		turnoutEl.innerText = `${guessedNumber} is TOO LOW! 😔`;

	} else if (guessedNumber > correctNumber) {
		turnoutEl.innerText = `${guessedNumber} is TOO HIGH! 🤪`;

	}

	// Clear previous guess from input field
	inputGuessEl.value = "";

	// Focus on input field
	inputGuessEl.focus();
});

// Listen for reset/"New game"
formGuessEl.addEventListener("reset", () => {
	// Start a new game
	startGame();

	// Empty previous result
	turnoutEl.innerText = "";

	// Re-enable user guessing
	btnGetLuckyEl.removeAttribute("disabled");
});

// Start a new game
startGame();

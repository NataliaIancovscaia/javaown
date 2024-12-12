/**
 * Guess the number
 *
 * STEG 1
 * - Sätt ett tal i en variabel.
 * - Be användaren att gissa talet med hjälp av `prompt()`.
 * - Om användarens gissning är fel, fråga efter en ny gissning.
 * - Om användarens gissning är rätt, visa en alert med ett grattis-meddelande.
 * - Om användaren skriver in talet 0 så ska spelet avslutas.
 *
 * STEG 1.5
 * - Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis
 * ska de få gissa igen efter detta.
 *
 * STEG 2
 * - Slumpa talet (med hjälp av funktionen `getRandomNumber()` nedan) som
 * användaren ska gissa, så att de inte gissar rätt varje gång.
 *
 * STEG 3
 * - Spara ner hur många gissningar som krävdes. Visa antalet gissningar när
 * användaren gissat rätt.
 *
 * STEG 4
 * Efter att man gissat rätt så slumpa fram ett nytt tal och starta om spelet.
 *
 * STEG 5
 * Spara en "highscore", dvs hur få gånger som krävts för att gissa rätt.
 * Om användaren gissar rätt på fler gånger, visa "Tyvärr du gissade rätt på
 * ${tries} antal försök men din highscore är ${highscore}".
 * Om användaren gissar rätt på färre gånger, visa "YAY NEW HIGHSCORE! ${highscore}"
 *
 */

// Generate a random number between 1 and `max` (default 10)
const getRandomNumber = (max = 10) => {
	return Math.floor( Math.random() * max ) + 1;
}

let exitGame = false;
let highscore = Infinity;

while (exitGame === false) {
	let attempts = 0;
	let continueGame = true;
	let numberToGuess = getRandomNumber();
	console.log("*sshh*, the correct number is:", numberToGuess);

	while (continueGame) {
		// Ask for a guess
		const guess = Number(prompt("Please guess a number between 1-10. Enter 0 to quit."));

		// Increase number of attempts
		// attempts++;

		if (guess === numberToGuess) {
			// Guess was correct 🥳
			attempts++;
			continueGame = false;

			// We can haz highscore?
			if (attempts < highscore) {
				// New highscore!
				console.log("New highscore! 🥳");
				alert(`New highscore of ${attempts} attempt(s)! Your previous highscore was ${highscore}.`);
				highscore = attempts;
			} else {
				console.log("Correct answer but no new highscore");
				alert(`You guessed correct after ${attempts} attempt(s). Sorry, no new highscore - your current highscore is ${highscore}.`);
			}

		} else if (guess === 0) {
			// User rage-quit
			console.log("Guess was 0, quitting game");
			alert(`Y U GIVE UP AFTER ONLY ${attempts} ATTEMPT(S)?!`);
			continueGame = false;
			exitGame = true;

		} else if (guess > numberToGuess) {
			// Guess was too high
			attempts++;
			console.log("Guess was too high 🤪");
			alert("Guess was too high 🤪");

		} else if (guess < numberToGuess) {
			// Guess was too low
			attempts++;
			console.log("Guess was too low 😔");
			alert("Guess was too low 😔");

		} else {
			// That's not a number
			attempts++;
			console.log("User is stupid");
			alert("I SAID A N-U-M-B-E-R!!");

		}
	}
}


console.log("Game ended");

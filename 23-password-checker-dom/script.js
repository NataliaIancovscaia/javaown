/**
 * Workshop: Password Checker (DOM Edition)
 *
 * Istället för att vi har lösenorden hårdkodade så låt användaren skriva in
 * ett lösenord att testa i ett input-fält.
 *
 * Hittar du inte hur du ska lösa något? Googla! En stor del av att vara
 * utvecklare är att kunna hitta information på egen hand. Det finns garanterat
 * någon som har haft samma problem som dig!
 *
 * 😊 STEG 1
 * När användaren klickar på knappen "Alright, let's hear it" så ska
 * lösenordet testas och användaren får se utfallet på sidan. Du kan använda
 * div:en med id "result" för att visa resultatet. Plocka bort klassen "hide"
 * från denna div för att visa resultatet.
 *
 * ⭐ STEG 2
 * Visa olika Bootstrap Alert beroende på utfall. Tips: Använd klasserna
 * `alert alert-success`, `alert alert-warning` och `alert alert-danger`.
 * Det finns redan en div med id "result" som du kan använda om du vill.
 * Plocka bort klassen "hide" från denna div för att visa resultatet.
 *
 * 🤔 STEG 3
 * Testa lösenordet löpande efterhand som användaren skriver in det.
 *
 * 🤩 STEG 4
 * Fördela ansvar för de olika delarna till olika funktioner så att en del
 * ansvarar för att hämta lösenordet som ska testas, en del testar själva
 * lösenordet och en tredje del uppdaterar DOM med resultatet.
 * Lägg även in så innehållet i lösenordsrutan rensas och resultatet döljs
 * när man trycker på "Screw it!".
 *
 */

// Get references to elements
const inputPasswordEl = document.querySelector("#inputPassword");  // <input>
const formPasswordEl = document.querySelector("#formPassword");  // <form>
const resultEl = document.querySelector("#result");  // <div> med resultatet

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

// Counts the number of special chars and returns how many was found
const countSpecialChars = (passwd) => {
	// Räknare som indikerar hur många specialtecken som hittats
	let count = 0;

	// För varje tecken i passwd, kolla det är ett specialtecken
	for (let i = 0; i < passwd.length; i++) {
		const char = passwd[i];

		if (specialChars.includes(char)) {
			count++;
		}
	}

	return count;
}

// Render result to DOM
const renderResult = (level, msg) => {
	resultEl.className = `alert alert-${level}`;
	resultEl.innerText = msg;
}

// Check the password
const checkPassword = (password) => {
	// Call function to count the number of special chars
	const specialCharCount = countSpecialChars(password);

	// Check password
	if (password.length >= 6 && specialCharCount >= 2) {
		// SUPER SECRET
		// resultEl.className = "alert alert-success";
		// resultEl.innerText = "🔐 That's a VERY secure password home-boi! 🛟";
		renderResult("success", "🔐 That's a VERY secure password home-boi! 🛟");

	} else if (password.length >= 8 && specialCharCount >= 1) {
		// ALSO SECRET
		// resultEl.className = "alert alert-success";
		// resultEl.innerText = "🔐 That's also a very secure password!";
		renderResult("success", "🔐 That's also a very secure password!");

	} else if (password.length >= 12 && password.includes("-")) {
		// OKEY-ISH
		// resultEl.className = "alert alert-warning";
		// resultEl.innerText = "🔐 That's also a pretty good password!";
		renderResult("warning", "🔐 That's also a pretty good password!");

	} else if (password.length >= 16) {
		// MEH
		// resultEl.className = "alert alert-warning";
		// resultEl.innerText = "🔐 That's a long password!";
		renderResult("warning", "🔐 That's a long password!");

	} else {
		// GRANDMA-LEVEL
		// resultEl.className = "alert alert-danger";
		// resultEl.innerText = "🚨 Insecure password!";
		renderResult("danger", "🚨 Insecure password!");

	}
}

// Check password when the user submits the form
formPasswordEl.addEventListener("submit", (e) => {
	// Stop form from being submitted
	e.preventDefault();

	// Get what password the user has typed
	const password = inputPasswordEl.value;

	if (!password) {
		alert("You stupid bro? Need that password, duh!");
		return;
	}

	// Check the password and output result
	checkPassword(password);
});

// Check password when the user submits the form
formPasswordEl.addEventListener("reset", (e) => {
	resultEl.classList.add("hide");
});

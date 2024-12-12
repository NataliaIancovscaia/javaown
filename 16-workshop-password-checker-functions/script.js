/**
 * Workshop: Password Checker with functions
 *
 * Skriv om lösenordskollen till att testa samtliga lösenord i listan
 * `passwords`.
 *
 * Ni ska även ha en funktion som räknar antalet specialtecken och returnerar
 * hur många som hittades.
 *
 * Varje lösenord ska console.log'as tillsammans med dess resultat.
 *
 * STEG 1
 * Testa samtliga lösenord i listan. Koden ska vara oberoende av hur många
 * lösenord som finns i listan.
 *
 * STEG 2
 * Skriv en funktion som räknar antalet unika specialtecken och returnerar
 * hur många specialtecken som hittades. Anropa den här funktionen för
 * varje lösenord.
 *
 * KRAVSPEC FRÅN TIDIGARE:
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 */

const passwords = [
	"password",								// 🚨, index 0
	"p@*swd",								// 🔐, index 1
	"pa$sword",								// 🔐, index 2
	"p@ssw%rd",								// 🔐, index 3
	"pa$$wd",								// 🔐, index 4
	"secretpassword",						// 🚨, index 5
	"secret-password",						// 🔐, index 6
	"such-password-much-secure-very-long",	// 🔐, index 7
	"$$$",									// 🚨, index 8
]; // length = 9

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

// Counts the number of special chars and returns how many was found
const countSpecialChars = function(passwd) {
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

const checkPassword = (password) => {
	console.log(`🕵🏻 Checking password: '${password}'`);

	// Call function to count the number of special chars
	let specialCharCount = countSpecialChars(password);
	// console.log("Loop is done, special chars found:", specialCharCount);

	// Har lösenordet minst 6 tecken OCH innehåller minst två specialtecken?
	if (password.length >= 6 && specialCharCount >= 2) {
		// Ja!
		console.log("- ✅ Great! Such password, much secure, *VERY* hard to crack!");

	// Har lösenordet minst 8 tecken OCH innehåller minst ett specialtecken?
	} else if (password.length >= 8 && specialCharCount >= 1) {
		// Ja!
		console.log("- ✅ Great! Such password, much secure, very hard to crack!");

	// Har lösenordet minst 12 tecken OCH innehåller minst ett bindestreck?
	} else if (password.length >= 12 && password.includes("-")) {
		// Ja!
		console.log("- ✅ Great! That's a pretty good password!");

	// Har lösenordet minst 16 tecken?
	} else if (password.length >= 16) {
		// Ja!
		console.log("- ✅ Great! That's a long password!");

	} else {
		// Nej!
		console.log("- 🚨 Insecure password, my grandma can crack it!");
	}
}

for (let i = 0; i < passwords.length; i++) {
	// get the password at index `i` from the array `passwords`
	// and save it in the local variable `password`
	const password = passwords[i];
	checkPassword(password);
}

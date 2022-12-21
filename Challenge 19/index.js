function hangman(hangmanString) {
	hangmanString = [...hangmanString];
	let newWord = [];

	hangmanString.forEach((element, index) => {
		if (index % 2 === 0) {
			newWord.push('_');
		}
		else {
			newWord.push(element)
		}
	});

	return newWord.join().replaceAll(',', '');
}
console.log(hangman('ThisIsAnFancyString'));

// Given is an array words with words. Return the longest word of the array. Return 'Foobar' if the two longest words have the same length.

function longestWord(words) {
	debugger
	let longestWord = words[0];
	let sameLength = "false";

	for (let i = 1; i < words.length; i++) {
		if (longestWord.length < words[i].length) {
			longestWord = words[i];
		} else if (longestWord.length === words[i].length) {
			sameLength = longestWord;
		}
	}

	if (longestWord.length === sameLength.length) {
		return "Foobar";
	} else {
		return longestWord;
	}
}

console.log(longestWord(['Welcome','to','JSCodebox']));

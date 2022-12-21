function reverseLetters(chars) {
	let reversedLetter = [];
	let myLength = chars.length - 1;

	for (let i =myLength; i >= 0 ; i--) {
		reversedLetter.push(chars[i]);
	}

	return reversedLetter;
}

console.log(reverseLetters(["a", "r", "s", "t", "j", "e", "e", "a", "y"]));

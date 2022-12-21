function palindrome(pali) {
	let wordLength = pali.length;
	isPalidrom = true;

	for (let i = 0; i < wordLength; i++) {
		if (pali[i] !== pali[wordLength - 1]) {
			isPalidrom = false;
		}
		wordLength = wordLength - 1;
	}

	return isPalidrom;
}

console.log(palindrome('rotators'));

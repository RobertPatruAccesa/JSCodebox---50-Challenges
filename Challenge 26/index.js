function repeater(string, n) {
	let newString = '';

	for (let i = n; i >= 0; i--) {
		newString = newString + string.slice(0, i);
	}

	return newString;
}

console.log(repeater('Hello coder!', 5));
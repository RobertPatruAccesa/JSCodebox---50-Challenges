function keyboardError(correct, wrong) {
	let newArray = [];

	for (let i = 0; i < correct.length; i++) {
		if (correct[i] !== wrong[i]) {
			newArray.push(correct[i]);
		}
	}

	return [...new Set(newArray)];
}

console.log(keyboardError("you can do this!", "yhu cen dh this?"));

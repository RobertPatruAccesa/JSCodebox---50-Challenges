function firstHello(sentence) {
	if (
		sentence[0] === "H" &&
		sentence[1] === "e" &&
		sentence[2] === "l" &&
		sentence[3] === "l" &&
		sentence[4] === "o"
	) {
		return true;
	} else {
		return false;
	}
}

console.log(firstHello("Hell, yeah!"));

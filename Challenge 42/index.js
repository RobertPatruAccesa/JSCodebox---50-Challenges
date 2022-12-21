// A small 'g' is 'happy', but only if a small 'g' follows before or after it. Return true if all g's are happy.

function gHappy(string) {
	isLittleGHappy = false;

	for (let i = 0; i < string.length - 1; i++) {
		if (string[i] === "g") {
			if (string[i + 1] !== "g") {
				return false;
			} else {
				isLittleGHappy = true;
				i = i + 2;
			}
		}
	}

	return isLittleGHappy;
}

console.log(gHappy("The bigggest egggame!"));

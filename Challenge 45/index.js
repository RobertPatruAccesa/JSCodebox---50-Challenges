// A String string is given. Return the number of the word "Me" in this string. Count 'Me' only if none 'x' is in front of it.

function countMe(string) {
	let count = 0;
	let allow = true;

	for (let i = 0; i < string.length - 1; i ++) {
		if (string[i] === 'M' && string[i + 1] === 'e') {
			for (let j = 0; j < i; j++) {
				if (string[j] === 'x') {
					allow = false;
					break;
				}
				else {
					allow = true;
				}
			}

			if (allow) {
				count = count + 1;
			}
		}
	}

	return count;
}

console.log(countMe('MeixsyouMe'));

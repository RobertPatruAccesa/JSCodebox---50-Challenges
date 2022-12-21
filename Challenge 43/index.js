// A string string is given. Return the number of the longest block. A block means a multiple occurrence of a letter in a row

function longest(string) {
	obj = {}
	count = 1;

	if (string.length === 0) {
		return 0;
	}
	else if (string.length === 1) {
		return 1;
	}

	for (let i = 0; i < string.length - 1; i++) {
		if (string[i] === string[i + 1]) {
			obj = {
				...obj,
				[string[i]]: count= count + 1
			}
		}
		else {
			count = 1;
		}
	}

	const objectValues = Object.values(obj);
	const maximumValue = Math.max(...objectValues);

	return maximumValue;
}

console.log(longest("aBBBccD"));

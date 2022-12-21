// Given are two arrays inside and outside. Return true if all numbers present in inside array are also present in outside array.

function outsideIn(outside, inside) {
	let result = false;

	for (let i = 0; i < inside.length; i++) {
		if (outside.includes(inside[i])) {
			result = true;
		}
		else {
			result = false;
			return false;
		}
	}

	return result;
}

console.log(outsideIn([4,1,6,1,5,9], [4,1,5,9,3]));

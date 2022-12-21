// Given is an array numbers with integers. Return true if a zero is next to a zero or a four is next to a four. Return false if both occure.

function either404(numbers) {
	doubleZeroes = false;
	doubleFours = false;

	for (let i = 0; i < numbers.length - 1; i++) {
		if (numbers[i] === 0 && numbers[i + 1] === 0) {
			doubleZeroes = true;
			i = i + 1;
		}
		else if (numbers[i] === 4 && numbers[i + 1] === 4) {
			doubleFours = true;
			i = i + 1;
		}
	}

	if (doubleZeroes === true && doubleFours === true) {
		return false;
	}
	else if (doubleZeroes === true) {
		return true;
	}
	else if (doubleFours === true) {
		return true;
	}
	else {
		return false;
	}
}

console.log(either404([1,4,4,0,2,0,9]));

// Given is a number number. Return the product of the multiplacement of the individual numbers from 1 upwards..

function firstFactorial(number) {
	let calc = 1;
	for (let i = 1; i <= number; i++) {
		calc = calc * i;
	}

	return calc;
}

console.log(firstFactorial(21));

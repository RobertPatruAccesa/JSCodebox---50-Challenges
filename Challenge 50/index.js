// The variables start and end are given. Return an array with the contents of the individual numbers. Replace all numbers divisible by three with "Fizz" and all numbers divisible by five with "Buzz". If a number is divisible by five and three replace it by "FizzBuzz".

function fizzBuzz(start, end) {
	let arr = [];

	for (let i = start; i <= end; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			arr.push('FizzBuzz');
		}
		else if (i % 3 === 0) {
			arr.push('Fizz');
		}
		else if (i % 5 === 0) {
			arr.push('Buzz')
		}
		else {
			arr.push(i);
		}
	}

	return arr;
}

console.log(fizzBuzz(49, 53));

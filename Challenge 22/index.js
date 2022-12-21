function swap(numbers) {
	const helper = numbers[0];
	numbers[0] = numbers[numbers.length - 1];
	numbers[numbers.length - 1] = helper;

	return numbers;
}
console.log(swap([1,6,2,7,9,3,4]));

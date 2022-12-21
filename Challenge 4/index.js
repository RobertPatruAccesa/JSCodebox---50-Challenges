function countOdds(numbers) {
	let count = 0;

	numbers.forEach((element) => {
		if (element % 2 !== 0) {
			count += 1;
		}
	});

	return count;
}

console.log(countOdds([1, 5, 2, 6, 5, 3, 9, 2]));

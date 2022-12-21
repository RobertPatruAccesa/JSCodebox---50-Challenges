function strangeWord(word) {
	let newWrod = [];

	word = [...word];
	word.forEach((element, index) => {
		if (index % 2 === 0) {
			newWrod.push(element);
		}
	});

	return newWrod.join().replaceAll(',', '');
}

console.log(strangeWord('maoam'));

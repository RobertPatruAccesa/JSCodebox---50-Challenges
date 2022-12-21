function more4than0(n) {
	numberOfZeroes = 0;
	numberOfFours = 0;

	n.forEach(element => {
		if (element === 0) {
			numberOfZeroes += 1;
		}
		else if (element === 4) {
			numberOfFours += 1;
		}
	});

	if (numberOfFours > numberOfZeroes) 
		return true;
	else
		return false;
}

console.log(more4than0([3,1,4,4,4,1]))
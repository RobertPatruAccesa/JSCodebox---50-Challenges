function easyLoop() {
	let myStr = "";

	for (let i = 0; i <= 99; i++) {
		if (i % 7 === 0) {
			myStr = myStr + i;
		}
	}

	return myStr;
}

console.log(easyLoop());

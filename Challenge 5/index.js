function is42(a, b) {
	if (a === 42 || b === 42 || a + b === 42) 
		return true;
	else 
		return false;
}

console.log(is42(23, 21));

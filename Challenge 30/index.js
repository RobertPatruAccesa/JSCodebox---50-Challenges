function cinemaQueue(max, visitors) {
	let groups = 0;

	for (let i = 0; i < visitors.length; i++) {
		if (visitors[i] === "X")
			groups = groups + 1;
	}

	if (groups === max) 
		return 'full';
	else if (groups > max) 
		return 'too much: ' + (groups - max).toString();
	else if (groups < max)
		return 'not full: ' + (max - groups.toString());
}

console.log(cinemaQueue(6, ['X','O','X','O','O','X','X','X','O','X','X','X']));

function lastButNotLeast(a, b, c) {
	a = a.toString().slice(-1);
	b = b.toString().slice(-1);
	c = c.toString().slice(-1);

	if (a === b || a === c)
		return true;
	else if (b === c || b === a)
		return true;
	else if (c === a || c === b)
		return true;
	else
		return false;
}
console.log(lastButNotLeast(84, 23, 54));

function firstJSON(key, value) {
	return JSON.stringify({
		[key]: value,
	});
}
console.log(firstJSON("name", "JSCodebox"));
firstJSON("name", "JSCodebox");

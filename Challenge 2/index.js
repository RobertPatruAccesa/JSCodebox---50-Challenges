function bugFixFinal(string) {
	let myRegex = /bug/gi;
	return string.replace(myRegex, "flower");
}

console.log(bugFixFinal("xxxYYYzbugzyx"));
bugFixFinal("xxbugYYX");
bugFixFinal("bug");
bugFixFinal("xxbugXbugbugYYy");
bugFixFinal("bugXYYbugxX");
bugFixFinal("xxxYYYzbugzyx");

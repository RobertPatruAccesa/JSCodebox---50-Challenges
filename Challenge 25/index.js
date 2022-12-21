function camelCase(n) {
	n = n.split(" ");

	for (let i = 0; i < n.length; i++) {
		if (n[i][0] !== undefined)
			n[i] = n[i].replace(n[i][0], n[i][0].toString().toUpperCase());
	}

	n = n.join();
	n = n.replaceAll(",", "");

	return n.replace(n[0], n[0].toLowerCase());
}

console.log(camelCase("Is not found"));
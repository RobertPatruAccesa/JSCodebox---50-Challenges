function theGround(obj) {
	console.log(obj.name.length);
	console.log(obj.category.length);

	if (obj.name.length !== undefined && obj.category.length !== undefined) {
		if (obj.name.length === obj.category.length) {
			return obj.name;
		} else if (obj.name.length > obj.category.length) {
			return obj.name;
		} else if (obj.category.length > obj.name.length) {
			return obj.category;
		}
	}
}

console.log(theGround({ name: "wtaer", category: "alha" }));

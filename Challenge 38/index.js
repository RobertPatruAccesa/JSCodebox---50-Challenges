// Given are two variables child1 and child2 with a numeric value between 0 and 99. Return true if a child is between 0 and 14 (0 and 14 inclusive). Return false if both or none in between.

function littleChild(child1, child2) {
	if (child1 >= 0 && child1 <= 14 && child2 >= 0 && child2 <= 14) {
		console.log("else 2");
		return false;
	} else if ((child1 >= 0 && child1 <= 14) || (child2 >= 0 && child2 <= 14)) {
		console.log("else 1");
		return true;
	} else {
		console.log("else 1");
		return false;
	}
}

console.log(littleChild(0, 3));

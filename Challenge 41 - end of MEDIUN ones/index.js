// Given is a number price and a number discount. Return the calculated discounted price. Round to two decimal places.

function getReducedPrice(price, discount) {
	return +(price - (discount / 100) * price).toFixed(2);
}

console.log(getReducedPrice(3.99, 80));

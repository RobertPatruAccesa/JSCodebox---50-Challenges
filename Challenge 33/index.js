function getPrice(item) {
	return item.slice(item.indexOf('(') + 1, item.indexOf(')'));
}
console.log(getPrice('Chips ($1.35)'));
function printHeadline(headline) {
	let h1 = document.createElement("h1");
	h1.textContent = headline;
	document.querySelector("body").append(h1);
}
console.log(printHeadline("orice"));

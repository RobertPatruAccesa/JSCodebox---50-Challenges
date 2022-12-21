function headline2(greeting) {
	let stop = false;
	const p = document.createElement("p");
	p.textContent = greeting;

	if (greeting.includes("Hi") && greeting.includes("Hello")) {
		p.style.color = "red";
		stop = true;
	} else if (greeting.includes("Hi") && stop === false) {
		p.style.color = "green";
	} else if (greeting.includes("Hello") && stop === false) {
		p.style.color = "blue";
	}

	document.body.appendChild(p);
}

console.log(headline2("Hello, Hi!"));

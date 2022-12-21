function welcomeToMyClass(className) {
	const p = document.createElement("p");
	p.classList.add(className);

	className =
		className.charAt(0).toUpperCase() +
		className.slice(1, className.length);
	
	p.textContent = className;
	document.body.appendChild(p);
}

// console.log(welcomeToMyClass(className));
welcomeToMyClass("className");

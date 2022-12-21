function checkPassword(password, password_repeat) {
	if (password !== password_repeat) {
		return false;
	}
	else {
		if (password.length < 8) {
			return false;
		}
		else if (!/\d/.test(password)) {
			return false;
		}
		else if (!/[A-Z]/.test(password)) {
			return false;
		}
		else if (!/[a-z]/.test(password)) {
			return false;
		}
		else if (!/[&|$|%|§|-|_]/.test(password)) {
			return false;
		}
		else {
			return true;
		}
	}
}
console.log(checkPassword('JoFDd#0MY6Ad4', 'JoFDd#0MY6Ad4'));
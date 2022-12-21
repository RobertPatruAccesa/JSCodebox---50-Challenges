function checkPassword(password, password_repeat) {
	if (password.length >= 20) {
		if (password === password_repeat)
			return true;
		else
			return false;
	}
	else {
		return false;
	}
}

console.log(checkPassword('JIOfdsf&fdsflk', 'JIOfdsf&fdsflk'));

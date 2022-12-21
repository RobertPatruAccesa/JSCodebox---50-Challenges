// A string minutes is given. Return a string with the converted time in the format hh:mm.

function timeConvert(minutes) {
	let hours = Math.floor(minutes / 60).toString();
	let remainingMinutes = (minutes % 60).toString();

	if (hours.length < 2) {
		hours = '0' + hours;
	}
	if (remainingMinutes.length < 2) {
		remainingMinutes = '0' + remainingMinutes;
	}

	return hours + ':' + remainingMinutes
}

console.log(timeConvert(59));

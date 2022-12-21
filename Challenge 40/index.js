// Given are three arrays. Each array represents a line from the game Tic Tac Toe. One player has 'X' as character and the other 'O'. Return true if a player has won the game. If no player has won, return 'Tie'.

function solveTicTacToe(line1, line2, line3) {
	line1 = line1[0].split("");
	line2 = line2[0].split("");
	line3 = line3[0].split("");

	console.log(line2[0], line2[1], line2[2]);

	if (line1[0] !== "-" && line1[0] === line1[1] && line1[1] === line1[2]) {
		return true;
	} else if (
		line2[0] !== "-" &&
		line2[0] === line2[1] &&
		line2[1] === line2[2]
	) {
		return true;
	} else if (
		line3[0] !== "-" &&
		line3[0] === line3[1] &&
		line3[1] === line3[2]
	) {
		return true;
	} else if (
		line1[0] !== "-" &&
		line1[0] === line2[0] &&
		line2[0] === line3[0]
	) {
		return true;
	} else if (
		line1[1] !== "-" &&
		line1[1] === line2[1] &&
		line2[1] === line3[1]
	) {
		return true;
	} else if (
		line1[2] !== "" &&
		line1[2] === line2[2] &&
		line2[2] === line3[2]
	) {
		return true;
	} else if (
		line1[0] !== "-" &&
		line1[0] === line2[1] &&
		line2[1] === line3[2]
	) {
		return true;
	} else if (
		line1[2] !== "-" &&
		line1[2] === line2[1] &&
		line2[1] === line3[0]
	) {
		return true;
	} else {
		return "Tie";
	}
}

console.log(solveTicTacToe(["XOX"], ["XXX"], ["OXO"]));

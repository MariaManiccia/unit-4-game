$(document).ready(function () {

	var kanye;
	var drake;
	var jprince;
	var pushat;

	var characterSelection = [];
	var character = null;
	var defenders = [];
	var defender = null;

	function startGame() {
		kanye = {
			id: 0,
			name: "Kanye",
			healthPoints: 120,
			baseAttack:10,
			attackPower: 10,
			counterAttackPower: 8,
			img:"../images/kanye.jpg"
		}

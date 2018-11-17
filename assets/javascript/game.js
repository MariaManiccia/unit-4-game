

	var kanye;
	var drake;
	var pushat;
	var jprince;

	var characterSelection = [];
	var character = null;
	var defenders = [];
	var defender = null;

	$(document).ready(function () {

	function startGame() {
		kanye = {
			id: 0,
			name: "Kanye",
			healthPoints: 120,
			baseAttack:10,
			attackPower: 10,
			counterAttackPower: 8,
			img:"assets/images/kanye.jpg"
		}

		pushat = {
			id: 1,
			name: "Pusha T",
			healthPoints: 100,
			baseAttack: 8,
			attackPower: 8,
			counterAttackPower: 5,
			img:"assets/images/pushat.jpg"
		}

		jprince = {
			id: 2,
			name: "J Prince",
			healthPoints: 150,
			baseAttack:9,
			attackPower: 9,
			counterAttackPower: 10,
			img:"assets/images/jprince.jpg"
		}

		drake = {
			id: 3,
			name: "Drake",
			healthPoints: 100,
			baseAttack: 12,
			attackPower: 12,
			counterAttackPower: 12,
			img:"assets/images/drake.jpg"
		}
		// reset 
		character = null;
		defenders = [];
		defender = null;
		characterSelection = [kanye, pushat, jprince, drake];

		// resets all character divs
		$("#character").empty();
		$("#defenderArea").empty();
		$("#defender").empty();
		$("#status").empty();

		$.each(characterSelection, function(index, character) {
			// make characters interactive
			var newCharacterDiv = $("<div>").addClass("character panel panel-success").attr("id",character.id);

			$("<div>").addClass("panel-heading").html(character.name).appendTo(newCharacterDiv);
			$("<div>").addClass("panel-body").append("<img src='" + character.img + "'>").appendTo(newCharacterDiv);
			$("<div>").addClass("panel-footer").append("<span class='hp'>" + character.healthPoints + "</span>").appendTo(newCharacterDiv);

			// put it on the HTML
			$("#characterSelection").append(newCharacterDiv);
		});

		$(".character").on("click", function() {
			// when character has been selected
			if(character === null) {
				console.log("picked character");
				//get id of character selected
				var charId = parseInt($(this).attr("id"));

				character = characterSelection[charId];

				// loop through character array
				$.each(characterSelection, function(index, character) {
					// add unselected characters to enemies array
					if(character.id !== charId) {
						defenders.push(character);
						$("#"+character.id).removeClass("character panel-success").addClass("defender panel-danger").appendTo("#defenderArea");
					} else {
						$("#"+character.id).appendTo("#character");
					}
				});

				// add button after defender class has been added
				$(".defender").on("click", function() {
					if(defender === null) {
						var defenderId = parseInt($(this).attr("id"));
						console.log(this);
						defender = characterSelection[defenderId];
						$("#"+defenderId).appendTo("#defender");
					}
				});
			}
		});

		$("#restart").hide();
	}

	startGame();


	$("#attack").on("click", function() {
		
		if(character !== null && character.healthPoints > 0 && defenders.length > 0) {
			// game status
			var status = "";

			// when defender has been selected
			debugger;
			if(defender !== null) {
				// decrease defender HP by character attack power
				defender.healthPoints -= character.attackPower;
				status += "You tweeted " + defender.name + " for " + character.attackPower + " shame.<br>";

				console.log("Defender: ",defender.name,defender.healthPoints);

				// update defender HP
				$("#"+defender.id + " .hp").html(defender.healthPoints);

				// decrease character HP by defender counter attack power
				character.healthPoints -= defender.counterAttackPower;
				status += defender.name + " @'d you back for " + defender.counterAttackPower + " shame.<br>";

				console.log("Character: ",character.name,character.healthPoints);

				// update character HP
				$("#"+character.id + " .hp").html(character.healthPoints);

				// increase character attack power by base attack power
				character.attackPower += character.baseAttack;

				// when character is defeated
				if(character.healthPoints <= 0) {
					status = "You've been embarrassed... CAREER OVER!!!!";
					$("#restart").show();
				} else if(defender.healthPoints <= 0) {	
					// when defender is defeated
					status = "You have defeated " + defender.name + ", you can start another beef with a new foe.";

					// clear defender selection
					$("#defender").empty();
					defender = null;

					// remove defeated defender from defender array
					defenders.splice(defenders.indexOf(defender),1);
				}

				// when no defenders left
				if(defenders.length === 0) {
					status = "You won the beef!";
					$("#restart").show();
				}
			} else {
				status = "No foes here.";
			}

			$("#status").html(status);
		}
	})

	$("#restart").on("click", function() {
		startGame();
	})
});

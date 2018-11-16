//Global variables
var characters;
var gameState;



// Functions
function startGame () {
    // sets values for game
    characters = resetCharacters();
    gameState = resetGameState();
    makeCharacters();
  }
  


//Define Characters
function Characters() {
    // oringinal character stats 
    return {
      'kanye': {
        name: 'Kanye',
        health: 120,
        attack: 8,
        imageUrl: '../images/kanye.jpg',
        enemyAttackBack: 15
      },
      'pushaT': {
        name: 'PushaT',
        health: 100,
        attack: 14,
        imageUrl: '../images/pushat.jpg',
        enemyAttackBack: 5
      },
      'drake': {
        name: 'Drake',
        health: 150,
        attack: 8,
        imageUrl: '../images/drake.jpg',
        enemyAttackBack: 20
      },
      'jPrince': {
        name: 'J Prince',
        health: 180,
        attack: 7,
        imageUrl: '../images/jprince.jpg',
        enemyAttackBack: 25
      }
    }
    function resetGame() {
        // resets game 
        return {
          selectedCharacter: [],
          selectedDefender: [],
          enemiesLeft: 0,
          numAttacks: 0,
        }
      }

// Main

function createCharDiv (character, key) {
    var charDiv = $("<div class='character' data-name='" + key + "'>")
    var charName = $("<div class='character-name'>").text(character.name)
    var charImage = $("<img alt='image' class='character-image'>").attr('src', character.imageUrl)
    var charHealth = $("<div class='character-health'>").text(character.health)
    charDiv.append(charName).append(charImage).append(charHealth)
    return charDiv
  }


console.log("window is loaded" );


// The USS Assembly, with hull, firepower, and accuracy properties
const player = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7
  };
  
  // An array of six alien ships, with hull, firepower, and accuracy properties
  const aliens = [
    {
      hull: 3 + Math.floor(Math.random() * 4),
      firepower: 2 + Math.floor(Math.random() * 3),
      accuracy: 0.6 + Math.random() * 0.2
    },
    {
      hull: 3 + Math.floor(Math.random() * 4),
      firepower: 2 + Math.floor(Math.random() * 3),
      accuracy: 0.6 + Math.random() * 0.2
    },
    {
      hull: 3 + Math.floor(Math.random() * 4),
      firepower: 2 + Math.floor(Math.random() * 3),
      accuracy: 0.6 + Math.random() * 0.2
    },
    {
      hull: 3 + Math.floor(Math.random() * 4),
      firepower: 2 + Math.floor(Math.random() * 3),
      accuracy: 0.6 + Math.random() * 0.2
    },
    {
      hull: 3 + Math.floor(Math.random() * 4),
      firepower: 2 + Math.floor(Math.random() * 3),
      accuracy: 0.6 + Math.random() * 0.2
    },
    {
      hull: 3 + Math.floor(Math.random() * 4),
      firepower: 2 + Math.floor(Math.random() * 3),
      accuracy: 0.6 + Math.random() * 0.2
    }
  ];
  
  // A function that represents a single round of combat between the player and an enemy
  function battle(player, enemy) {
    // The player attacks the enemy
    if (Math.random() < player.accuracy) {
      console.log("You hit the enemy ship!");
      enemy.hull -= player.firepower;
    } else {
      console.log("Your attack missed!");
    }
  
    // The enemy attacks the player
    if (Math.random() < enemy.accuracy) {
      console.log("The enemy ship hit you!");
      player.hull -= enemy.firepower;
    } else {
      console.log("The enemy's attack missed!");
    }
  }
  
  // The main game loop
  while (player.hull > 0 && aliens.length > 0) {
    // Print the current state of the game
    console.log(`Player: ${player.hull} Hull, ${aliens.length} Aliens Remaining`);
  
    // Allow the player to choose which alien to attack
    console.log("Which alien ship do you want to attack? (0 - " + (aliens.length - 1) + ")");
    const choice = readline.question();
    const enemy = aliens[choice];
  
    // Battle the chosen alien
    while (player.hull > 0 && enemy.hull > 0) {
      battle(player, enemy);
    }
    // If the enemy is destroyed, remove it from the list of aliens
  if (enemy.hull <= 0) {
    console.log("You have destroyed the enemy ship!");
    const index = aliens.indexOf(enemy);
    aliens.splice(index, 1);
  }
​
  // If the player is destroyed, end the game
  if (player.hull <= 0) {
    console.log("Your ship has been destroyed!");
  }
}
​
// If the player has destroyed all of the aliens, they win!
if (aliens.length === 0) {
  console.log("You have won the game!");
}
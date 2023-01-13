window.addEventListener("load", (e) => {
  // This is the US battleship

  // Your Ship
  const image = document.getElementById("space-img");
  class US {
    constructor() {
      this.hull = 200;
      this.firepower = 5;
      this.accuracy = 0.9;
    }

    attack() {
      let randNum = Math.random();
      if (randNum < this.accuracy) {
        alienShip.hull -= this.firepower;
        image.removeChild(image.children[0]);
        console.log(image.children[1]);

        
        //image.removeChild(image.children[0]);
        // let i = 0;
        // while(i < 6){
        //     image.removeChild(image.children(i));
        //     i++;
        // }

        alert(`YOU JUST TAGGED THEM! \n\n LET'S LOAD UP NOW...`);
      } else {
        alert(`YOU GOT TAGGED! \n\n LET'S LOAD UP NOW...`);
      }
    }
  }

  const earthDefender = new US();

  // Alien Ship
  class Alien {
    constructor() {
      this.hull = Math.floor(Math.random() * (7 - 3) + 3);
      this.firepower = Math.floor(Math.random() * (5 - 2) + 2);
      this.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
    }
    attack() {
      let randNum = Math.random();
      if (randNum < this.accuracy) {
        earthDefender.hull = earthDefender.hull - this.firepower;
        alert(`YOU'VE BEEN HIT!`);
      } else {
        alert(`NOT EVEN A SCRATCH!`);
      }
    }
  }

  const alienShip = new Alien();

  
  // Initiate Game
  const init = () => {
    alert("Welcome to SPACE BATTLE!");
    const response = prompt(`Enter 'p' to play or 'q' to exit.`);
    if (response.toLowerCase() === "q") {
      alert(`Good-bye!`);
    } else if (response.toLowerCase() === "p") {
      alert(
        "We have been attacked by a heap of aliens!\n\nYou are the commader of the US Space Team.\n\n Destroy all 6 alien ships or we will all be slaves or eaten."
      );
      loadUpAndFire();
    } else {
      alert(`Just type 'p' to play.\n\n We don't want to be defeated!`);
    }
  };

  // Check Status
  const status = () => {
    alert(
      `Your Status >>> HULL: ${earthDefender.hull} | FIREPOWER: ${
        earthDefender.firepower
      } | ACCURACY: ${
        earthDefender.accuracy * 100
      }%\n\nAlien#${alienCount} Status >>> HULL: ${
        alienShip.hull
      } | FIREPOWER: ${alienShip.firepower} | ACCURACY: ${Math.floor(
        alienShip.accuracy * 100
      )}%`
    );
  };

  // Get Ready to Battle
  alienCount = 6;

  const loadUpAndFire = () => {
    status();

    while (alienCount > 0) {
        // const img = document.createElement("img");
        // img.setAttribute("src", "200w.webp");
        // shipImg.appendChild(img);
      if (alienShip.hull < 1) {
        alienCount--;
        image.removeChild(image.children[0]);
        console.log(image.children[0]);

      }



      if (alienCount > 0 && earthDefender.hull > 0) {
        alienShip.hull = Math.floor(Math.random() * (7 - 3) + 3);
        alienShip.firepower = Math.floor(Math.random() * (5 - 2) + 2);
        alienShip.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
      } else if (alienCount < 1 && earthDefender.hull < 1) {
        return alert(`TIE GAME!`);
      } else if (alienCount < 1 && earthDefender.hull > 0) {
        return alert(`YOU HAVE DEFEATED ALL ALIENS`);
      } else {
        return alert(`YOU LOSE!`);
      }

      const response = prompt(`Enter 'a' to attack or 'q' to retreat`);
      if (response.toLowerCase() === "q") {
        alert(`YOU LOSE!`);
        earthDefender.hull = 0;
        earthDefender.firepower = 0;
        earthDefender.accuracy = 0;
        status();
      } else if (response.toLowerCase() === "a") {
        engage();
      } else {
        alert(`Type "a" to attack or "q" to retreat .\n\n Try again!`);
      }
    }
  };

  // Battle
  const engage = () => {
    earthDefender.attack();
    alienShip.attack();
    loadUpAndFire();
    reset();
  };

  setTimeout(init, 1000);
});

// reset
const reset = () => {
  const resetResp = prompt(
    `Do you need to reset. If yes type 'y', if no type 'n'`
  );

  //  const noReset = alert(
  //   `SORRY, WE CAN'T GO OUT LIKE THAT! PLAY AGAIN`
  //  );
  if (resetResp.toLowerCase() == "y") {
    window.location.reload();

    earthDefender.hull = 20;
    earthDefender.firepower = 5;
    earthDefender.accuracy = 0.07;
    alienShip.hull = Math.floor(Math.random() * (7 - 3) + 3);
    alienShip.firepower = Math.floor(Math.random() * (5 - 2) + 2);
    alienShip.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
    engage();
  } else {
    window.location.close();
  }
};

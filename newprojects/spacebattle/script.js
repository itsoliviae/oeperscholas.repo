let superShip = {
  name: "USS Schwarzenegger",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  hullDamage(damage) {
    this.hull = this.hull - damage;
  },
};

// console.log(superShip.name); //O

const alienShipFleet = [
  {
    name: "Green",
    hull: 3,
    firePower: 2,
    accuracy: 0.6,
  },
  {
    name: "Pink",
    hull: 4,
    firePower: 3,
    accuracy: 0.7,
  },
  {
    name: "Orange",
    hull: 5,
    firePower: 4,
    accuracy: 0.8,
  },
  {
    name: "Blue",
    hull: 6,
    firePower: 2,
    accuracy: 0.6,
  },
  {
    name: "Silver",
    hull: 3,
    firePower: 3,
    accuracy: 0.7,
  },
  {
    name: "Purple",
    hull: 4,
    firePower: 4,
    accuracy: 0.8,
  },
];

class AlienShip {
  constructor(name) {
    this.name = name;
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }

  hullDamage(damage) {
    return (this.hull = this.hull - damage);
  }
}

// create the fleet with Class

let newAlienShipNames = ["bruce", "jenny", "olivia", "green", "blue"];
let newArray = []
for (let i = 0; i < newAlienShipNames.length; i++) {
  let testShip = new AlienShip(newAlienShipNames[i]);
  newArray.push(testShip)
  console.log(testShip);
}

let button = document.getElementById("button");
button.addEventListener("click", spaceBattle);

//let testButton = document.getElementById("test");
//testButton.addEventListener("click", test);

function test() {
  console.log("test");
}

function spaceBattle() {
    
  for (let i = 0; i < alienShipFleet.length; i++) {
    if (alienShipFleet[i].hull == 0) {
      console.log("all ships destroyed ");
    }
    while (alienShipFleet[i].hull > 0 && superShip.hull > 0) {
      if (superShip.accuracy >= Math.random()) {
        let alienHullDamage = alienShipFleet[i].hull - superShip.firepower;
        if (alienHullDamage < 0) {
          alienHullDamage = 0;
        }
        alienShipFleet[i].hull = alienHullDamage;
        console.log(
          `you have attacked the ${alienShipFleet[i].name} and they have ${alienShipFleet[i].hull} hitpoints left!`
        );
      } else if (alienShipFleet[i].hull === 0) {
        console.log(alert("ALIEN SHIPS HAVE BEEN DEFEATED! GAME OVER!"));
        //HOW DO I STOP AT 0?
      } else {
        console.log(
          `Alien has MISSED! You have ${superShip.hull} hitpoints left!`
        );
      }
    }
  }
}
// why is it undefined after 1st click?
// how can i stop the loop at 0?
// how can i eliminate each alienship?
// alien attack part of loop not working

//spaceBattle();

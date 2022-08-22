let superShip = {
    name: 'USS Schwarzenegger',
    hull: 20,
    firepower: 5,
    accuracy: .7,
    hullDamage(damage) {
        this.hull = this.hull - damage;
    }
    }

// console.log(superShip.name); //O

const alienShipFleet = [
    {
      name: 'Green',
      hull: 3,
      firePower: 2,
      accuracy: .6
    },
    {
        name: 'Pink',
        hull: 4,
        firePower: 3,
        accuracy: .7
      },
      {
        name: 'Orange',
        hull: 5,
        firePower: 4,
        accuracy: .8
      },
      {
        name: 'Blue',
        hull: 6,
        firePower: 2,
        accuracy: .6
      },
      {
        name: 'Silver',
        hull: 3,
        firePower: 3,
        accuracy: .7
      },
      {
        name: 'Purple',
        hull: 4,
        firePower: 4,
        accuracy: .8
      },
  ];


class AlienShip {
    constructor(name) {
        this.name = name;
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;

    };

    hullDamage(damage) {
        return this.hull = this.hull - damage;
    }

}

const button = document.getElementById('button');
button.addEventListener('click', () => {
    console.log(spaceBattle()); 

function spaceBattle() {
    for (let i = 0; i < alienShipFleet.length; i++) {
        while (alienShipFleet[i].hull > 0 && superShip.hull > 0) {
    const alienHullDamage = alienShipFleet[i].hull - superShip.firepower;
    if (superShip.accuracy >= Math.random()) {
        alienShipFleet[i].hull = alienHullDamage;
        console.log(
        `you have attacked the ${alienShipFleet[i].name} and they have ${alienShipFleet[i].hull} hitpoints left!`);
        } else if(alienShipFleet[i].hull === 0) {
            console.log(alert('ALIEN SHIPS HAVE BEEN DEFEATED! GAME OVER!'));
    //HOW DO I STOP AT 0?
    
    } else {
        console.log(`Alien has MISSED! You have ${superShip.hull} hitpoints left!`);
    }
    if (alienShipFleet.accuracy >= Math.random()) {
        superShip.hull = hullDamage;
        console.log(
        `you have been attacked by the ${alienShipFleet[i].name} and you now have ${superShip.hull} hitpoints left!`);
       
    //HOW DO I STOP AT 0?
    
    } else {
        console.log(`Alien has MISSED! You have ${superShip.hull} hitpoints left!`);
    
        
    }
}
    }
}
})
// why is it undefined after 1st click?
// how can i stop the loop at 0?
// how can i eliminate each alienship?
// alien attack part of loop not working 





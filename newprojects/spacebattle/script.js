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
let alienShipFleet = ["Green", "Pink", "Orange", "Blue", "Silver", "Purple"];
let newArray = []
for (let i = 0; i < alienShipFleet.length; i++) {
    let anotherShip = new AlienShip(alienShipFleet[i]);
    newArray.push(anotherShip)
    console.log(anotherShip);
  
}

let button = document.getElementById('button');
button.addEventListener('click', spaceBattle); 



   
function spaceBattle() {
    for (let i = 0; i < alienShipFleet.length; i++)  {
        while (alienShipFleet[i].hull > 0 && superShip.hull > 0) {
    const alienHullDamage = alienShipFleet[i].hull - superShip.firepower;
    if (superShip.accuracy >= Math.random()) {
        alienShipFleet[i].hull = alienHullDamage;
        console.log(
        `you have attacked the ${alienShipFleet[i].name} and they have ${alienShipFleet[i].hull} hitpoints left!`);
        } else if(alienShipFleet[i].hull === 0) {
            console.log(alert('ALIEN SHIPS HAVE BEEN DEFEATED! GAME OVER!'));

    
    } else {
        console.log(`Alien has MISSED! You have ${superShip.hull} hitpoints left!`);
        
        for (let i = 0; i < alienShipFleet.length; i++) {
            if (alienShipFleet[i].hull == 0) {
              console.log("all ships destroyed ");
            }
    if (alienShipFleet.accuracy >= Math.random()) {
        superShip.hull = hullDamage;

        while (alienShipFleet[i].hull > 0 && superShip.hull > 0) {
            if (superShip.accuracy >= Math.random()) {
              let alienHullDamage = alienShipFleet[i].hull - superShip.firepower;
              if (alienHullDamage < 0) {
                alienHullDamage = 0;
              }
              alienShipFleet[i].hull = alienHullDamage;
              console.log(
              `you have been attacked by the ${alienShipFleet[i].name} and you now have ${superShip.hull} hitpoints left!`);
    
    
    } else {
        console.log(`Alien has MISSED! You have ${superShip.hull} hitpoints left!`);
    
        
    }
}
console.log(`you have attacked the ${alienShipFleet[i].name} and they have ${alienShipFleet[i].hull} hitpoints left!`);

} else if (alienShipFleet[i].hull === 0) {
console.log(alert("ALIEN SHIPS HAVE BEEN DEFEATED! GAME OVER!"));

} else {
console.log(
  `Alien has MISSED! You have ${superShip.hull} hitpoints left!`)
    }
}
}
// why is it undefined after 1st click?
// how can i stop the loop at 0?
// how can i eliminate each alienship?
// alien attack part of loop not working 



 }
     {

    } 
}
 }


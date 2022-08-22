6 alien ships
attack 1 at a time

you attack 1st ship
    if it survives, it attacks you
    if you survive, attack the ship again
    repeat

if you detroy the ship
    attack the next ship
    or retreat
    **if you retreat gameover

destroy all aliens to win game
if you are destroyed, lose game

ACTORS
spaceship
    USS Schwarzenegger:
    hull: 20
    firepower: 5
    accuracy: .7

alien spaceships
    *random*
    hull: 3-6
    firepower: 2-4
    accuracy: .6 - .8
(6 alien ships each w/ unique values)

hull = points (health)
if points = 0 or less => ship is destroyed
firepower = amount of damage done to hull (health)
accuracy = the chance b/w 0-1 that ship will hit its target
    < or = 0.8 -- attack is successful
    > 0.8 --- attack missed

// alert('omg');
// console.log(alert('you won'));
// console.log(Alienship.name + ' is going to win');

**get the loop to end once it hits 0

**move to next ship after each successful attack

**alert once it hits 0 to end game

**console log on click

if (alienShipFleet.accuracy >= Math.random()) {
    superShip.hull = hullDamage;
    console.log(
    `you have been attacked by the ${alienShipFleet[i].name} and you now have ${superShip.hull} hitpoints left!`);
    } else if(alienShipFleet[i].hull === 0) {
        console.log(alert('ALIEN SHIPS HAVE BEEN DEFEATED! GAME OVER!'));
//HOW DO I STOP AT 0?

} else {
    console.log(`Alien has MISSED! You have ${superShip.hull} hitpoints left!`);

    
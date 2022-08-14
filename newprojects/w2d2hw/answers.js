// Easy Going
////////////////////////////////
/*
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
*/
// Get Even
////////////////////////////////
/*
for (let i = 0; i <= 200; i+= 2) {
    console.log(i);
}
*/
// Fizz Buzz
////////////////////////////////
/*
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("fizzbuzz");
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else if ( i % 3 === 0) {
        console.log("fizz")
    }
}
*/
// Wild Wild Life
////////////////////////////////
/*
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee.push('20 years old');
console.log(plantee);

wolfy.splice(3, 3, 'Gotham City');
console.log(wolfy);

dart.push("Hawkins");
console.log(dart);

wolfy.splice(0, 0, "Gameboy");
console.log(wolfy);
*/

// Yell at the Ninja Turtles
////////////////////////////////
/*
const turtles = ['donatello', 'leonardo', 'raphael', 'michaelangelo']
const tmnt = turtles.map(turtles => turtles.toUpperCase());
console.log(tmnt);
*/

// Methods, Revisited
////////////////////////////////
/*
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// console.log(favMovies.indexOf('Titanic'));
favMovies.sort();
console.log(favMovies);

favMovies.pop();
console.log(favMovies);

favMovies.push('Guardians of the Galaxy');
console.log(favMovies);

favMovies.reverse();
console.log(favMovies);

favMovies.shift();
console.log(favMovies);

favMovies.unshift();
console.log(favMovies);

console.log(favMovies.indexOf('Django Unchained'));

favMovies.splice(14, 14, 'Avatar');
console.log(favMovies);

favMovies.slice();
console.log(favMovies);
*/
// a removed item returns 'undefined'

// Where is Waldo
////////////////////////////////
/*
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice("Eggbert"); // I can't figure out how to remove something not in the array
console.log(whereIsWaldo);

console.log(whereIsWaldo.indexOf('Neff'));
whereIsWaldo.splice(-1, -1, "No One");
console.log(whereIsWaldo); 

console.log(whereIsWaldo.indexOf("Waldo"));
*/

//  Excited Kitten
////////////////////////////////

//  Find the Median
////////////////////////////////

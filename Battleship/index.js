
import { generateAllShipsRandom, generateHorShipCoord, generateShip, generateVertShipCoord } from "./generators.js";

import newShip from "./ship.js";
import { checkGameboardValid } from "./validation.js";




let arr = generateAllShipsRandom();


// let carrier =  arr[0];
// let battleship = arr[1];
// let cruiser = arr[2];
// let submarine = arr[3];
// let destroyer = arr[4];  

let carrier =  generateShip(["D",1], "hor", 5);
let battleship = generateShip(["F",6], "vert", 4);
let cruiser = generateShip(["B",9], "vert", 3);
let submarine = generateShip(["H",9], "vert", 3);
let destroyer = generateShip(["H",2], "hor", 2);

let arr2 = [carrier, battleship, cruiser ,submarine ,destroyer];


console.log(checkGameboardValid(arr2));



console.log("carrier ",carrier[1]);
console.log("battleship ",battleship[1]);
console.log("cruiser ",cruiser[1]);
console.log("submarine ",submarine[1]);
console.log("destroyer ",destroyer[1]);
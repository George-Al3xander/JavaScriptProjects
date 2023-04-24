import { getRandomX, getRandomY } from "./getters.js";
import { generateHorShipCoord, generateVertShipCoord } from "./generators.js";

import newShip from "./ship.js";




function generateShipCoordinate(length, dir) {
    
    //0
    let num = Math.floor(Math.random() * 1);
    
     
    
}


console.log(generateVertShipCoord(3));
console.log(generateHorShipCoord(5));


let ship = newShip(3);

ship.hit();
ship.hit();
ship.hit();

console.log(ship.getIsSunk());
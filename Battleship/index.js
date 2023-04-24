import newShip from "./ship.js";


let ship = newShip(3);

ship.hit();
ship.hit();
ship.hit();

console.log(ship.getIsSunk());
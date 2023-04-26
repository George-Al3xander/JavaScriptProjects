
import gameboard from "./gameboard.js";
import { generateAllShipsRandom, generateHorShipCoord, generateShip, generateVertShipCoord } from "./generators.js";

import newShip from "./ship.js";
import { checkGameboardValid, checkTwoCoord } from "./validation.js";



generateAllShipsRandom();


let test = gameboard();
    test.createGameboard();

    console.log(test.receiveAttack(["B",2]));







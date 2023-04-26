
import { displayGameboard } from "./dom.js";
import gameboard from "./gameboard.js";
import { gameboardPattern, generateAllShipsRandom, generateHorShipCoord, generateShip, generateVertShipCoord } from "./generators.js";
import { getById } from "./getters.js";
import newShip from "./ship.js";
import { checkGameboardValid, checkTwoCoord } from "./validation.js";




let main = document.querySelector("main");
let player = gameboard();


main.appendChild(displayGameboard("gameboard-player", player.getShips()));
let enemy = gameboard();
main.appendChild(displayGameboard("gameboard-enemy", enemy.getShips()));


function hit(id) {      
    console.log(id);
    let item  = getById(id);         
    item.style.backgroundColor = "red";
}
    
            


export {hit, enemy, main}
   

    






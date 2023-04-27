import { generateAllShipsRandom, generateShip, gameboardPattern } from "./generators.js";


const gameboard = function(coords = generateAllShipsRandom()) {
    let missed = [];
    let hit = []; 
    let ships;

    const getShips = () => ships;
    const getHit = () => hit;
    const getMissed = () => missed;
        
    ships = coords;
    // let carrier =  ships[0];
    // let battleship = ships[1];
    // let cruiser = ships[2];
    // let submarine = ships[3];
    // let destroyer = ships[4];

    const checkLost = () => {        
        return getShips().every((ship) => {
            return ship[0].getIsSunk() == true;
        }) 
    }

    const receiveAttack = (coord) => {
        for(let ship of getShips()) {           
            for(let i=0;i < ship[1].length;i++) {                
                if(ship[1][i][0] == coord[0] && ship[1][i][1] == coord[1]) {
                    ship[0].hit();
                    hit.push(coord);
                    
                    return true;
                }                 
            }
        }
        missed.push(coord);
        

        return false;
    }

    

    return {getShips, receiveAttack, getMissed, getHit,checkLost}    
}


export default gameboard
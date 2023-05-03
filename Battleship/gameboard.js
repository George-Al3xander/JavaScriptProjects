import { generateAllShipsRandom, generateHorShipCoord, generateShip, generateVertShipCoord} from "./generators.js";
import { getById } from "./getters.js";

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

function getNums(type) {
    let num;
    let length;
    if(type == "carr") {
        num = 0;  
        length = 5;     
    }
    else if(type == "bs") {
        num = 1;  
        length = 4;        
    }
    else if(type == "cru") {
        num = 2;  
        length = 3;         
    }
    else if(type == "sub") {
        num = 3;  
        length = 3;         
    }
    else if(type == "dest") {
        num = 4;
        length = 2;        
    }

    return [num,length];
}


function setupPattern(coords, type, startNum, letter) {
    let arrNum = getNums(type)[0];
    let length = getNums(type)[1];

    if(coords[arrNum][1][0][0] == coords[arrNum][1][1][0]) {
        coords[arrNum][1] = generateHorShipCoord(length,letter,startNum);
    }
    else {
    coords[arrNum][1] = generateVertShipCoord(length,letter,startNum);
    } 
}

function setupLetter(coords,  type) {
    let startNum;    
    let num = getNums(type)[0];    
    startNum = coords[num][1][0][1]; 
    let letter = getById(`${type}-letter`).value.toUpperCase();
    setupPattern(coords,type,startNum,letter);
}


function setupNum(coords,  type) {
    let startNum;    
    let num = getNums(type)[0];  
    let letter = coords[num][1][0][0];
    startNum = parseInt(getById(`${type}-num`).value,10)
    setupPattern(coords,type,startNum,letter);
}


function setupDir(coords, type) {
    let num = getNums(type)[0];
    let length = getNums(type)[1];
    let startLetter = coords[num][1][0][0];
    let startNum = coords[num][1][0][1];
    let dir = getById(`${type}-dir`).value;
    

    if(dir == "hor") {
        coords[num][1] = generateHorShipCoord(length,startLetter,startNum);
    }
    else if(dir == "vert") {
        coords[num][1] = generateVertShipCoord(length,startLetter,startNum);
    }     
}


export default gameboard
export {setupLetter, setupNum, setupDir}
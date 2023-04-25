import { getRandomStartNum, getRandomLetter, getRandomDir } from "./getters.js";
import alphabet from "./alpha.js";
import newShip from "./ship.js";
//import { validate } from "./validation.js";


function generateHorShipCoord(length,letter,startNum) {
    let coord = [];

    if(letter == undefined && startNum == undefined) {
        letter = getRandomLetter();
        startNum = getRandomStartNum();
        while((length + startNum) > 10) {
            
            startNum  = getRandomStartNum(); 
        }
    }
    
    for(let i=0; i<length; i++) {        
        coord.push([letter, startNum]);
        console.log();
        startNum += 1;
    }
    return coord;
}

function generateVertShipCoord(length,letter,startNum) {
    let coord = [];
    
    if(letter == undefined && startNum == undefined) {
        letter = getRandomLetter();
        startNum = getRandomStartNum();   
        while((alphabet.indexOf(letter)+1)+length > 10) {
            letter  = getRandomLetter(); 
        }
    }    
    let index = alphabet.indexOf(letter);
    for(let i=0;i<length;i++) {
        coord.push([alphabet[index], startNum]);
        index += 1;
    }
    
    return coord;
}


function generateShip(start,dir ,length) { 
    
    let coord;
    if(start == "random") {
        if(dir == "vert") {
            coord = generateVertShipCoord(length);
        }
    
        else if(dir == "hor") {
            coord = generateHorShipCoord(length);
        }
    } else {
        if(dir == "vert") {
            coord = generateVertShipCoord(length, start[0],start[1]);
        }
    
        else if(dir == "hor") {
            coord = generateHorShipCoord(length, start[0],start[1]);
        }

    }


    return [newShip(length),coord];
}

//Ships can't have any identical coordinate and its 

function generateAllShipsRandom() {
    let tempCoords = [];

    let carrier =  generateShip("random", getRandomDir(), 5);
    let battleship = generateShip("random", getRandomDir(), 4);
    let cruiser = generateShip("random", getRandomDir(), 3);
    let submarine = generateShip("random", getRandomDir(), 3);
    let destroyer = generateShip("random", getRandomDir(), 2);   
    
    //validate([carrier, battleship, cruiser ,submarine ,destroyer]);

    return [carrier, battleship, cruiser ,submarine ,destroyer]
}




export {generateHorShipCoord, generateVertShipCoord, generateShip, generateAllShipsRandom}

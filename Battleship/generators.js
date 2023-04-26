import { getRandomStartNum, getRandomLetter, getRandomDir } from "./getters.js";
import alphabet from "./alpha.js";
import newShip from "./ship.js";
import { checkGameboardValid } from "./validation.js";
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

function generateAllShipsRandom(coords = []) {
    
    let carrier =  generateShip("random", getRandomDir(), 5);
    coords.push(carrier);
    let battleship = generateShip("random", getRandomDir(), 4);
    coords.push(battleship);

    while(checkGameboardValid(coords) == false) {
        coords.pop();
        battleship = generateShip("random", getRandomDir(), 4);
        coords.push(battleship);
    }
    
    let cruiser = generateShip("random", getRandomDir(), 3);
    coords.push(cruiser);
    
    while(checkGameboardValid(coords) == false) {
        coords.pop();
        cruiser = generateShip("random", getRandomDir(), 3);
        coords.push(cruiser);
    }
    
    let submarine = generateShip("random", getRandomDir(), 3);
    coords.push(submarine);

    while(checkGameboardValid(coords) == false) {
        coords.pop();
        submarine = generateShip("random", getRandomDir(), 3);
        coords.push(submarine);
    }
    
    let destroyer = generateShip("random", getRandomDir(), 2);   
   coords.push(destroyer);

   while(checkGameboardValid(coords) == false) {
        coords.pop();
        destroyer = generateShip("random", getRandomDir(), 2);
        coords.push(destroyer);
    }    
    
    console.log(coords,checkGameboardValid(coords));
    return coords;
}




export {generateHorShipCoord, generateVertShipCoord, generateShip, generateAllShipsRandom}

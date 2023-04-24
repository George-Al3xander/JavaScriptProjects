import { getRandomX, getRandomY } from "./getters.js";
import alphabet from "./alpha.js";


function generateHorShipCoord(length) {
    let coord = [];
    let letter = getRandomY();
    let startNum = getRandomX();
    
    while((length + startNum) > 10) {
        
        startNum  = getRandomX(); 
    }
    for(let i=0; i<length; i++) {        
        coord.push([letter, startNum]);
        console.log();
        startNum += 1;
    }
    return coord;
}

function generateVertShipCoord(length) {
    let coord = [];
    let letter = getRandomY();
    let startNum = getRandomX();   

    
    while((alphabet.indexOf(letter)+1)+length > 10) {
        letter  = getRandomY(); 
    }
    let index = alphabet.indexOf(letter);
    for(let i=0;i<length;i++) {
        coord.push([alphabet[index], startNum]);
        index += 1;
    }
    
    return coord;
}


export {generateHorShipCoord, generateVertShipCoord}

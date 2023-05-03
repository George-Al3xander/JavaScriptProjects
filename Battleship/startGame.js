
import { displayMoves,displayGameboard, disableGameboardEnemy, disableGameboardPlayer,displayWinner  } from "./dom.js";
import { getById, getCell, getRandomLetter, getRandomStartNum } from "./getters.js";
import gameboard from "./gameboard.js";
import sleep from "./sleep.js";
import alphabet from "./alpha.js";
import { checkCoord,  checkMissIncludes, checkNear, decideTwoCoordsMove } from "./validation.js";

import { displayHeaderGame } from "./dom.js";



function playerTurn(enemy) {  
    
    
    disableGameboardEnemy();
       
    if(enemy.getMissed().length > 0) {
        for(let miss of enemy.getMissed()) {         
            let id = "opp-"+miss.toString().replace(",", "");
            getById(id).style.pointerEvents = "none"; 
        }        
    }

    

    if(enemy.getHit().length > 0) {
        for(let hit of enemy.getHit()) {         
            let id = "opp-"+hit.toString().replace(",", "");
            getById(id).style.pointerEvents = "none"; 
            console.log(hit);
        }        
    }
}

async function enemyTurn(arr) { 
    let player = arr[0];
    let enemy = arr[1];  
   

    let time = Math.floor(Math.random() * ((2000 - 1500) + 1500)); 
    let coord;
    let missed= player.getMissed();
    let num = Math.floor(Math.random() * 4);
    let playerHit = player.getHit();
    let lastHit = playerHit[playerHit.length-1];
    let penultHit = playerHit[playerHit.length-2];
    let vertDir = playerHit.length > 1 &&  lastHit[1] ==  penultHit[1];
    let horDir = playerHit.length > 1 && lastHit[0] ==  penultHit[0] 

    let cond1 = playerHit.length > 0 && !vertDir;
    
    
    if(cond1) {
    let IsNumNotExtreme = lastHit[1] < 10 && lastHit[1] > 1;
    let IsLetterNotExtreme = alphabet.indexOf(lastHit[0]) < 9 && alphabet.indexOf(lastHit[0]) > 0;
        console.log("We're in cond 1") ;      
        if(IsNumNotExtreme && IsLetterNotExtreme) {
            if(!checkNear(player,"hor") && !checkNear(player,"vert")) {
                coord = decideTwoCoordsMove([lastHit[0], lastHit[1]+1],[lastHit[0], lastHit[1]-1],player);
            }
            if(checkNear(player,"vert") ) {
                coord = decideTwoCoordsMove([lastHit[0], lastHit[1]+1],[lastHit[0], lastHit[1]-1],player);         
            }   
            
            else if(checkNear(player,"hor")) {
                let coord1 = [alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]];
                let coord2 = [alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]];
                coord = decideTwoCoordsMove(coord1,coord2,player); 
            }

            else if(checkNear(player,"vert") && checkMissIncludes(player,[lastHit[0],lastHit[1]+1])) {
                coord = [lastHit[0],lastHit[1]-1]
            }

            else if(checkNear(player,"vert") && checkMissIncludes(player,[lastHit[0],lastHit[1]-1])) {
                coord = [lastHit[0],lastHit[1]+1]
            }

            else if(checkNear(player,"hor") && checkMissIncludes(player,[alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]])) {
                coord = [alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]];
            }
            else if(checkNear(player,"hor") && checkMissIncludes(player,[alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]])) {
                coord = [alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]];
            }
            else {
                coord = decideTwoCoordsMove([lastHit[0], lastHit[1]+1],[lastHit[0], lastHit[1]-1],player); 
            }
        }
        else if(IsLetterNotExtreme && !IsNumNotExtreme) {
             if (lastHit[1] == 1 && !checkNear(player, "vert") && checkMissIncludes(player,[lastHit[0], lastHit[1]+1]))  {
                let coord1 = [alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]];
                let coord2 = [alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]];
                coord = decideTwoCoordsMove(coord1,coord2,player);        
            }   
            else if(lastHit[1] == 1 && checkNear(player, "vert") && !checkMissIncludes(player,[lastHit[0], lastHit[1]+1])) {
                coord = [lastHit[0],lastHit[1]+1];
            }  
            else if (lastHit[1] == 10 && !checkNear(player, "vert") && checkMissIncludes(player,[lastHit[0], lastHit[1]-1]))  {
                let coord1 = [alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]];
                let coord2 = [alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]];
                coord = decideTwoCoordsMove(coord1,coord2,player);        
            }    
            else if(lastHit[1] == 10 && checkNear(player, "vert") && !checkMissIncludes(player,[lastHit[0], lastHit[1]-1])) {
                coord = [lastHit[0],lastHit[1]-1];
            }          
            else {
                coord = checkCoord([getRandomLetter(), getRandomStartNum()],player);
            }
        }
        else if(!IsLetterNotExtreme && IsNumNotExtreme) {
            if(lastHit[0] == "A" && checkNear(player,"vert")) {
                coord = checkCoord([alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]],player);
            }

            else if(lastHit[0] == "A" && !checkNear(player,"vert")) {
                coord = decideTwoCoordsMove([lastHit[0], lastHit[1]+1],[lastHit[0], lastHit[1]-1],player); 
            }

            else if(lastHit[0] == "J" && checkNear(player,"vert")) {
                coord = checkCoord([alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]],player);
            }

            else if(lastHit[0] == "A" && !checkNear(player,"vert")) {
                coord = decideTwoCoordsMove([lastHit[0], lastHit[1]+1],[lastHit[0], lastHit[1]-1],player); 
            }
            else {
                coord = checkCoord([getRandomLetter(), getRandomStartNum()],player);
            }
        }
        else if(!IsLetterNotExtreme && !IsNumNotExtreme) {
            if(lastHit[0] == "A" && lastHit[1] == 1) {
                coord = decideTwoCoordsMove(["B", 1],["A", 2], player);
            }
            else if(lastHit[0] == "A" && lastHit[1] == 10) {
                coord = decideTwoCoordsMove(["B", 10],["A", 9], player);
            } 
            else if(lastHit[0] == "J" && lastHit[1] == 1) {
                coord = decideTwoCoordsMove(["I", 1],["J", 2], player);
            }
            else if(lastHit[0] == "J" && lastHit[1] == 10) {
                coord = decideTwoCoordsMove(["I", 10],["J", 9], player);
            } 
            else {
                coord = checkCoord([getRandomLetter(), getRandomStartNum()],player);
            }
        }
    }
    else if(vertDir) {
        let IsNumNotExtreme = lastHit[1] < 10 && lastHit[1] > 1;
    let IsLetterNotExtreme = alphabet.indexOf(lastHit[0]) < 9 && alphabet.indexOf(lastHit[0]) > 0;
        console.log("We're in vert cond"); 
        if(IsLetterNotExtreme) {
            // If we moving from bottom to top
            if(alphabet.indexOf(lastHit[0]) < alphabet.indexOf(penultHit[0])) {
                if(!checkMissIncludes(player,[alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]])) {
                    // let coord2 = [alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]];
                    // let coord1 = [alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]];
                    // coord = decideTwoCoordsMove(coord1,coord2,player);  
                    coord =   [alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]];
                    
                }                
                else {
                    coord = checkCoord([getRandomLetter(), getRandomStartNum()],player);        

                }
            }
            // If we moving from start to bottom
            else if(alphabet.indexOf(lastHit[0]) > alphabet.indexOf(penultHit[0])) {
                if(!checkMissIncludes(player,[alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]])) {                     
                    coord =   [alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]];
                    
                } else {
                    coord = checkCoord([getRandomLetter(), getRandomStartNum()],player);        

                }
            }
        }
        else if(!IsLetterNotExtreme) {
            let IsNumNotExtreme = lastHit[1] < 10 && lastHit[1] > 1;
    let IsLetterNotExtreme = alphabet.indexOf(lastHit[0]) < 9 && alphabet.indexOf(lastHit[0]) > 0;
            //From bottom to top
            if(alphabet.indexOf(lastHit[0]) < alphabet.indexOf(penultHit[0])) {
                if(!checkMissIncludes(player,[alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]])) {                   
                    coord =   [alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]];
                    
                } else {
                    coord = checkCoord([getRandomLetter(), getRandomStartNum()],player); 
                }
            }
            else if(alphabet.indexOf(lastHit[0]) > alphabet.indexOf(penultHit[0])) {
                if(alphabet.indexOf(lastHit[0]) + 1 == 9) {
                    coord =   [alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]];
                }
                else {
                    coord = checkCoord([getRandomLetter(), getRandomStartNum()],player); 
                }
            }
        }
    } else if(horDir) {
        console.log("We're in hor cond");         
        if(IsNumNotExtreme && IsLetterNotExtreme) { 
            //From left to right           
            if(penultHit[1] < lastHit[1]) {
                if(!checkMissIncludes(player,[lastHit[0],lastHit[1]+1])) {
                    coord = [lastHit[0],lastHit[1]+1];
                } 
                else {
                    coord = checkCoord([getRandomLetter(), getRandomStartNum()],player);
                }
            }
            if(penultHit[1] > lastHit[1]) {
                if(!checkMissIncludes(player,[lastHit[0],lastHit[1]-1])) {
                    coord = [lastHit[0],lastHit[1]-1];
                } 
                else {
                    coord = checkCoord([getRandomLetter(), getRandomStartNum()],player);
                } 
            }
        }

        else if(!IsNumNotExtreme && IsLetterNotExtreme) {
            //MUST COMPLETE!!!
            coord = checkCoord([getRandomLetter(), getRandomStartNum()],player);
        }
        
    }    
    else {
        console.log("We're in else")
        coord = checkCoord([getRandomLetter(), getRandomStartNum()],player);        
    }   

    disableGameboardPlayer();
    player.receiveAttack(coord);  
    if(player.checkLost() == true) {
        displayWinner("enemy");
    } 
    if(player.getHit().length > 0) {
        for(let hit of player.getHit()) {
            if(alphabet.indexOf(hit[0]) - 1 >= 0 && hit[1]+1 <= 10) {
                player.receiveAttack([alphabet[alphabet.indexOf(hit[0])-1], hit[1]+1]);  
                getCell([alphabet[alphabet.indexOf(hit[0])-1], hit[1]+1]).style.opacity = ".4";
            } 
            if(alphabet.indexOf(hit[0]) + 1 <= 9 && hit[1]+1 <= 10) {
                player.receiveAttack([alphabet[alphabet.indexOf(hit[0])+1], hit[1]+1]); 
                getCell([alphabet[alphabet.indexOf(hit[0])+1], hit[1]+1]).style.opacity = ".4";
            }
            if(alphabet.indexOf(hit[0]) - 1 >= 0 && hit[1]-1 > 0) {
                player.receiveAttack([alphabet[alphabet.indexOf(hit[0])-1], hit[1]-1]); 
                getCell([alphabet[alphabet.indexOf(hit[0])-1], hit[1]-1]).style.opacity = ".4"
            }
            if(alphabet.indexOf(hit[0]) + 1 <=9 && hit[1]-1 > 0) {
                player.receiveAttack([alphabet[alphabet.indexOf(hit[0])+1], hit[1]-1]);
                getCell([alphabet[alphabet.indexOf(hit[0])+1], hit[1]-1]).style.opacity = ".4"
            }
        }
    }
    await sleep(time);
    displayMoves(player,"player"); 
    await sleep(time / 2);    
    playerTurn(enemy);   

}




function startGame(coords) {
    displayHeaderGame();
    let main = document.querySelector("main");
    main.innerHTML = "";
    let player = gameboard(coords);
    let enemy = gameboard();   
    let arr = [player, enemy] ;
    main.appendChild(displayGameboard(arr,"player"));
    main.appendChild(displayGameboard(arr,"enemy"));
    playerTurn(enemy);    
}


export default startGame
export{ playerTurn, enemyTurn}
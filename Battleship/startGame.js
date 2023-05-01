// if(enemy.checkLost() == true) {
//     main.innerHTML = "ENEMY LOST"
// }  

import { displayMoves,displayGameboard, disableGameboardEnemy, disableGameboardPlayer,displayWinner  } from "./dom.js";
import { getByClass, getById, getCell, getRandomLetter, getRandomStartNum } from "./getters.js";
import gameboard from "./gameboard.js";
import sleep from "./sleep.js";
import alphabet from "./alpha.js";
import { checkCoord, checkHitMiss, checkMissIncludes, checkNear, checkTail, decideTwoCoordsMove } from "./validation.js";
import { gameboardPattern } from "./generators.js";
import { displayHeaderGame } from "./dom.js";



function playerTurn(enemy) {
    
    if(enemy.checkLost() == true) {
        displayWinner("player");        
    }
    
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

/*
    Start hit [E, 6]:
    Disable: 
    [F,7]
    [D,7;]
    [F,5]
    [D,5;]


    for(let hit of player.getHit()) {
        player.receiveAttack([alphabet[alphabet.indexOf(hit[0])-1], hit[1]+1]);        
        player.receiveAttack([alphabet[alphabet.indexOf(hit[0])+1], hit[1]+1]); 
        player.receiveAttack([alphabet[alphabet.indexOf(hit[0])-1], hit[1]-1]);        
        player.receiveAttack([alphabet[alphabet.indexOf(hit[0])+1], hit[1]-1]);
    }


    */


async function enemyTurn(arr) { 
    let player = arr[0];
    let enemy = arr[1];  
    
    if(player.checkLost() == true) {
        displayWinner("enemy");
    }
    

    let time = Math.floor(Math.random() * ((2000 - 1500) + 1500)); 
    let coord;
    let missed= player.getMissed();
    let num = Math.floor(Math.random() * 4);
    let playerHit = player.getHit();
    let lastHit = playerHit[playerHit.length-1];
    let penultHit = playerHit[playerHit.length-2];
    let cond2 = playerHit.length > 1 && (lastHit[0] ==  penultHit[0] || lastHit[1] ==  penultHit[1]);
    let cond1 = playerHit.length > 0 && !cond2;
    
    if(cond1) {
        console.log("We're in cond 1") ;       
        let IsNumNotExtreme = lastHit[1] < 10 && lastHit[1] > 1;
        let IsLetterNotExtreme = alphabet.indexOf(lastHit[0]) < 9 && alphabet.indexOf(lastHit[0]) > 0;

        if(IsNumNotExtreme && checkNear(player,"hor") == false ) {
            coord = decideTwoCoordsMove([lastHit[0], lastHit[1]+1],[lastHit[0], lastHit[1]-1],player);         
        }   
        
        else if(IsNumNotExtreme && checkNear(player,"hor")) {
            let coord1 = [alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]];
            let coord2 = [alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]];
            coord = decideTwoCoordsMove(coord1,coord2,player); 
        }
        else if (IsLetterNotExtreme) {
            let coord1 = [alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]];
            let coord2 = [alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]];
            coord = decideTwoCoordsMove(coord1,coord2,player);        
        }   
        
        else if(lastHit[1] == 1 && IsLetterNotExtreme ) {
            if(checkNear(player,"vert")) {
                coord = [lastHit[0], lastHit[1]+1];
            }               
            else {
                coord = checkCoord([getRandomLetter(), getRandomStartNum()],player);
            }
        }   
        else {
            coord = checkCoord([getRandomLetter(), getRandomStartNum()],player);
        }

    }
    else if(cond2) {
        let IsNumNotExtreme = lastHit[1] < 10 && lastHit[1] > 1;

        let IsLetterNotExtreme = alphabet.indexOf(lastHit[0]) < 9 && alphabet.indexOf(lastHit[0]) > 0;

        console.log("We're in cond 2") ;       
        if(IsNumNotExtreme && lastHit[0] ==  penultHit[0]) {
            coord = decideTwoCoordsMove([lastHit[0], lastHit[1]+1],[lastHit[0], lastHit[1]-1],player);
        } else  if(IsLetterNotExtreme && lastHit[1] ==  penultHit[1]) {
            let coord1 = [alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]];
            let coord2 = [alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]];
            coord = decideTwoCoordsMove(coord1,coord2,player);
        }   
        else if(IsLetterNotExtreme && lastHit[1] ==  penultHit[1] && checkMissIncludes(player,[alphabet[alphabet.indexOf(lastHit[0])+1],lastHit[1]])) {
            coord = checkTail(player, lastHit, "top");
        }       
    } else {
        console.log("We're in else")
        coord = checkCoord([getRandomLetter(), getRandomStartNum()],player);        
    }
    //console.log([lastHit[0], lastHit[1]+1]);
    //console.log([lastHit[0], lastHit[1]-1]);
    //console.log([alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]]);
    //console.log([alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]]);

  

    disableGameboardPlayer();
    player.receiveAttack(coord);
    for(let hit of player.getHit()) {
        if(alphabet.indexOf(hit[0]) - 1 >= 0 && hit[1]+1 <= 10) {
            getCell([alphabet[alphabet.indexOf(hit[0])-1], hit[1]+1]).style.opacity = ".4"
            player.receiveAttack([alphabet[alphabet.indexOf(hit[0])-1], hit[1]+1]);  
        } 
        if(alphabet.indexOf(hit[0]) + 1 <= 9 && hit[1]+1 <= 10) {
            getCell([alphabet[alphabet.indexOf(hit[0])+1], hit[1]+1]).style.opacity = ".4"
            player.receiveAttack([alphabet[alphabet.indexOf(hit[0])+1], hit[1]+1]); 
        }
        if(alphabet.indexOf(hit[0]) - 1 >= 0 && hit[1]+1 <= 10) {
            getCell([alphabet[alphabet.indexOf(hit[0])-1], hit[1]-1]).style.opacity = ".4"
            player.receiveAttack([alphabet[alphabet.indexOf(hit[0])-1], hit[1]-1]); 
        }
        if(alphabet.indexOf(hit[0]) + 1 <=9 && hit[1]-1 >= 0) {
            getCell([alphabet[alphabet.indexOf(hit[0])+1], hit[1]-1]).style.opacity = ".4"
            player.receiveAttack([alphabet[alphabet.indexOf(hit[0])+1], hit[1]-1]);
        }
        
    }
    await sleep(time);
    displayMoves(player,"player"); 
    await sleep(time / 2);    
    playerTurn(enemy);   

}




function startGame() {
    displayHeaderGame();
    let main = document.querySelector("main");
    main.innerHTML = "";
    let player = gameboard(gameboardPattern());
    let enemy = gameboard();   
    let arr = [player, enemy] ;
    main.appendChild(displayGameboard(arr,"player"));
    main.appendChild(displayGameboard(arr,"enemy"));
    playerTurn(enemy);    
}


export default startGame
export{ playerTurn, enemyTurn}
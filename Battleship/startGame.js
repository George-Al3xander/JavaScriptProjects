// if(enemy.checkLost() == true) {
//     main.innerHTML = "ENEMY LOST"
// }  

import { displayMoves,displayGameboard, disableGameboardEnemy, disableGameboardPlayer,displayWinner  } from "./dom.js";
import { getByClass, getById, getRandomLetter, getRandomStartNum } from "./getters.js";
import gameboard from "./gameboard.js";
import sleep from "./sleep.js";
import alphabet from "./alpha.js";



function playerTurn(enemy) {
    if(enemy.checkLost() == true) {
        displayWinner("player");
        return;
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
        }        
    }
}




async function enemyTurn(arr) { 
    let player = arr[0];
    let enemy = arr[1];  
    
    if(player.checkLost() == true) {
        displayWinner("enemy");      
        
    }
    let time = Math.floor(Math.random() * ((2000 - 1500) + 1500)); 
    let coord;
    let num = Math.floor(Math.random() * 4);
    
    // if(player.getHit().length > 0) {
    //     console.log("Yeah, im bigger")
    //     let lastHit = player.getHit()[player.getHit().length-1];
    //     console.log(lastHit);
    //     if(num == 0 && lastHit[1] < 10) {
    //         coord = [lastHit[0], lastHit[1]+1];
    //     } 
    //     else if(num ==1 && lastHit[1] > 0)  {
    //         coord = [lastHit[0], lastHit[1]-1];
    //     }
    //     else if(num ==2)  {
    //         coord = [alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]];
    //     }
    //     else if(num ==3)  {
    //         coord = [alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]];
    //     }
    // } else {
        coord = [getRandomLetter(), getRandomStartNum()];
    //}


    
    while(player.getHit().every((hit) => {
        return hit[0] != coord[0] && hit[1] != coord[1]
    }) == false) {        
        coord = [getRandomLetter(), getRandomStartNum()];
    };

    while(player.getMissed().every((miss) => {
        return miss[0] != coord[0] && miss[1] != coord[1]
    }) == false) {           
        coord = [getRandomLetter(), getRandomStartNum()];
        playerTurn(enemy);
    };    
    //Disable player gameboard
    disableGameboardPlayer();
    player.receiveAttack(coord);
    await sleep(time);
    displayMoves(player,"player"); 
    await sleep(time / 2);
    playerTurn(enemy); 
    
}




function startGame() {
    let main = document.querySelector("main");
    let player = gameboard();
    let enemy = gameboard();   
    let arr = [player, enemy] ;
    main.appendChild(displayGameboard(arr,"player"));
    main.appendChild(displayGameboard(arr,"enemy"));
    playerTurn(enemy);    
}


export default startGame
export{ playerTurn, enemyTurn}
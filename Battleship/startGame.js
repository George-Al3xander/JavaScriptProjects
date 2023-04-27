// if(enemy.checkLost() == true) {
//     main.innerHTML = "ENEMY LOST"
// }  

import { displayMoves,displayGameboard } from "./dom.js";
import { getByClass, getById, getRandomLetter, getRandomStartNum } from "./getters.js";
import gameboard from "./gameboard.js";
import sleep from "./sleep.js";


function playerTurn(enemy) {      
    getByClass("gameboard-player").style.opacity = ".4";
    getByClass("gameboard-enemy").style.opacity = "1";
    getByClass("gameboard-enemy").style.pointerEvents = "auto";     
    let header = getById("turn");
    document.querySelector("#turn span").innerHTML = "Your"
    header.style.backgroundColor = "var(--clr-player)";
       
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
    let time = Math.floor(Math.random() * ((2000 - 1500) + 1500));   
    let coord = [getRandomLetter(), getRandomStartNum()];
    
    while(player.getHit().every((hit) => {
        return hit[0] != coord[0] && hit[1] != coord[1]
    }) == false) {        
        coord = [getRandomLetter(), getRandomStartNum()];
    };

    while(player.getMissed().every((miss) => {
        return miss[0] != coord[0] && miss[1] != coord[1]
    }) == false) {           
        coord = [getRandomLetter(), getRandomStartNum()];
        playerTurn();
    };    
    getByClass("gameboard-player").style.opacity = "1";
    getByClass("gameboard-enemy").style.opacity = ".4";
    getByClass("gameboard-enemy").style.pointerEvents = "none";    
    let header = getById("turn");
    document.querySelector("#turn span").innerHTML = "Enemy's"
    header.style.backgroundColor = "var(--clr-enemy)"; 
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
// if(enemy.checkLost() == true) {
//     main.innerHTML = "ENEMY LOST"
// }  

import { displayMoves,displayGameboard } from "./dom.js";
import { getByClass, getById, getRandomLetter, getRandomStartNum } from "./getters.js";
import gameboard from "./gameboard.js";


// if(enemy.receiveAttack([alphabet[i],x]) == true) {                           
//     td.style.backgroundColor = "red";
//     } else {
//         td.innerHTML = "X";
//     }




function playerTurn(callback) {    
    getByClass("gameboard-player").style.opacity = ".4";
    getByClass("gameboard-enemy").style.opacity = "1";
    getByClass("gameboard-enemy").style.pointerEvents = "auto";    
    let header = getById("turn");
    document.querySelector("#turn span").innerHTML = "Your"
    header.style.backgroundColor = "var(--clr-player)";    
}




async function enemyTurn(player) {  
     
    getByClass("gameboard-player").style.opacity = "1";
    getByClass("gameboard-enemy").style.opacity = ".4";
    getByClass("gameboard-enemy").style.pointerEvents = "none";
    let header = getById("turn");
    document.querySelector("#turn span").innerHTML = "Enemy"
    header.style.backgroundColor = "var(--clr-enemy)"; 
    let time = Math.floor(Math.random() * ((1500 - 500) + 500));
    let coord = [getRandomLetter(), getRandomStartNum()];
    for(let miss of player.getMissed()) {
        console.log(miss);
        if(miss[0] == coord[0] && miss[1] == coord[1]) {
            console.log("Damn miss" )
        }
    }

    for(let hit of player.getHit()) {
        if(hit[0] == coord[0] && hit[1] == coord[1]) {
            console.log("Damn hit")
        }
    }
       

    // while(player.getMissed().includes(coor) || player.getHit().includes(coor))  {
    //     coor = [getRandomLetter(), getRandomStartNum()];
    // }
    //console.log(coord)
    //console.log(player.getMissed()); 
    
    //setInterval(()=> {
        player.receiveAttack(coord);
        displayMoves(player,"player");
    //},time)
    //console.log(player.getHit()); 
}




  function startGame() {
    let main = document.querySelector("main");
    let player = gameboard();
    let enemy = gameboard();    
    main.appendChild(displayGameboard(player,"player"));
    main.appendChild(displayGameboard(enemy,"enemy"));
    //while(player.checkLost() == false || enemy.checkLost() == false) {
        //playerTurn();
        enemyTurn(player);
        enemyTurn(player);
        enemyTurn(player);
        console.log(player.getMissed());
        console.log(player.getHit());
        
    //}

}


export default startGame
export{ playerTurn, enemyTurn}



import startGame from  "./startGame.js";
import { enemyTurn, playerTurn } from "./startGame.js";
import gameboard from "./gameboard.js";
import { displayGameboard, displayHeaderGame, displayWinner } from "./dom.js";
import { gameboardPattern, generateShip } from "./generators.js";
import { getByClass, getById } from "./getters.js";


let form = getById("form");

form.addEventListener("submit", (e)=> {    
    e.preventDefault();
});
let coords;
let main = document.querySelector("main");
    let player = gameboard(coords);
    let enemy = gameboard();   
    let arr = [player, enemy] ;
    main.appendChild(displayGameboard(arr,"player"));
    console.log(player.getShips());
form.addEventListener("input", (e)=> {
     
    let val = e.target.id;
    val = val.split("-");
    val = val[0];
    console.log(val);
    
    let carrier =  generateShip([getById("carr-letter").value,getById("carr-num").value], getById("carr-dir").value, 5);
    let battleship = generateShip([getById("bs-letter").value,getById("bs-num").value], getById("bs-dir").value, 4);
    let cruiser = generateShip([getById("cru-letter").value,getById("cru-num").value], getById("cru-dir").value, 3);
    let submarine = generateShip([getById("sub-letter").value,getById("sub-num").value], getById("sub-dir").value, 3);
    let destroyer = generateShip([getById("dest-letter").value,getById("dest-num").value], getById("dest-dir").value, 2);
    

    if(val = "carr") {
    coords[0] = carrier;  
      
    }
    else if(val = "bs") {
        coords[1] = battleship
    }
    else if(val = "cru") {
        coords[2] = cruiser
    }
    else if(val = "sub") {
        coords[3] = submarine
    }
    else if(val = "dest") {
        coords[4] = destroyer
    }
    //coords = [carrier, battleship, cruiser ,submarine ,destroyer];
    player = gameboard(coords);
    getByClass("gameboard-player").remove();
    main.appendChild(displayGameboard(arr,"player"));
})
//startGame();



     
    //let time = Math.floor(Math.random() * ((1500 - 500) + 500));
   // await sleep(time);
      
       
      
        




    






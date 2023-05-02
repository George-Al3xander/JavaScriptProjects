


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
let coords = gameboardPattern();
console.log(coords);

let main = document.querySelector("main");
    let player = gameboard(coords);
    let enemy = gameboard();   
    let arr = [player, enemy] ;
    main.appendChild(displayGameboard(arr,"player"));
    //console.log(player.getShips());
form.addEventListener("input", (e)=> {
     
    let val = e.target.id;
    val = val.split("-");
    let type = val[1]
    val = val[0];
    console.log(type);
    //console.log(parseInt(e.target.value,10));
    
    
    let carrier =  generateShip([,parseInt(getById("carr-num").value,10)], getById("carr-dir").value, 5);
    let battleship = generateShip([getById("bs-letter").value.toUpperCase(),parseInt(getById("bs-num").value,10)], getById("bs-dir").value, 4);
    let cruiser = generateShip([getById("cru-letter").value.toUpperCase(),parseInt(getById("cru-num").value,10)], getById("cru-dir").value, 3);
    let submarine = generateShip([getById("sub-letter").value.toUpperCase(),parseInt(getById("sub-num").value,10)], getById("sub-dir").value, 3);
    let destroyer = generateShip([getById("dest-letter").value.toUpperCase(),parseInt(getById("dest-num").value,10)], getById("dest-dir").value, 2);
    
    



    if(type == "letter") {
        if(val = "carr") {
            coords[0] = generateShip([getById("carr-letter").value.toUpperCase(),coords[0][1][0][1]],"hor",5);
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

    }
    else if(type == "num") {

    }
    if(type == "dir") {

    }

    
    console.log(coords);
    //coords = [carrier, battleship, cruiser ,submarine ,destroyer];
    player = gameboard(coords);
    getByClass("gameboard-player").remove();
    main.appendChild(displayGameboard(arr,"player"));
})
//startGame();



     
    //let time = Math.floor(Math.random() * ((1500 - 500) + 500));
   // await sleep(time);
      
       
      
        




    






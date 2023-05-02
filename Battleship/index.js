


import startGame from  "./startGame.js";
import { enemyTurn, playerTurn } from "./startGame.js";
import gameboard from "./gameboard.js";
import { displayGameboard, displayHeaderGame, displayWinner } from "./dom.js";
import { gameboardPattern, generateHorShipCoord, generateVertShipCoord} from "./generators.js";
import { getByClass, getById, getCell } from "./getters.js";


let form = getById("form");
let coords = gameboardPattern();

form.addEventListener("submit", (e)=> {    
    e.preventDefault();
});
//console.log(coords);

console.log(coords[0][1])

//coords[0][1][0][0]//letter of first item 
//coords[0][1][1][0]//letter of second item

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

    let startLetter;
    let startNum;
    
    



    if(type == "letter") {
        if(val == "carr") {
            startNum = coords[0][1][0][1];
            if(coords[0][1][0][0] == coords[0][1][1][0]) {
                coords[0][1] = generateHorShipCoord(5,getById("carr-letter").value.toUpperCase(),startNum);
            }
            else {
                coords[0][1] = generateVertShipCoord(5,getById("carr-letter").value.toUpperCase(),startNum);
            }            
        }
        else if(val == "bs") {
            startNum = coords[1][1][0][1];
            if(coords[1][1][0][0] == coords[1][1][1][0]) {
                coords[1][1] = generateHorShipCoord(4,getById("bs-letter").value.toUpperCase(),startNum);
            }
            else if(coords[1][1][0][1] == coords[1][1][1][1]){
                coords[1][1] = generateVertShipCoord(4,getById("bs-letter").value.toUpperCase(),startNum);
            }
            
        }
        else if(val == "cru") {
            startNum = coords[2][1][0][1];
            if(coords[2][1][0][0] == coords[2][1][1][0]) {
                coords[2][1] = generateHorShipCoord(3,getById("cru-letter").value.toUpperCase(),startNum);
            }
            else if(coords[2][1][0][1] == coords[2][1][1][1]){
                coords[2][1] = generateVertShipCoord(3,getById("cru-letter").value.toUpperCase(),startNum);
            }
            
        }
        else if(val == "sub") {
            startNum = coords[3][1][0][1];
            if(coords[3][1][0][0] == coords[3][1][1][0]) {
                coords[3][1] = generateHorShipCoord(3,getById("sub-letter").value.toUpperCase(),startNum);
            }
            else if(coords[3][1][0][1] == coords[3][1][1][1]){
                coords[3][1] = generateVertShipCoord(3,getById("sub-letter").value.toUpperCase(),startNum);
            }
             
        }
        else if(val == "dest") {
            startNum = coords[4][1][0][1];
            if(coords[4][1][0][0] == coords[4][1][1][0]) {
                coords[4][1] = generateHorShipCoord(2,getById("dest-letter").value.toUpperCase(),startNum);
            }
            else if(coords[4][1][0][1] == coords[4][1][1][1]){
                coords[4][1] = generateVertShipCoord(2,getById("dest-letter").value.toUpperCase(),startNum);
            }
        }
    }
    else if(type == "num") {
        if(val == "carr") {
            startLetter = coords[0][1][0][0];
            if(coords[0][1][0][0] == coords[0][1][1][0]) {
                coords[0][1] = generateHorShipCoord(5,startLetter,parseInt(getById("carr-num").value,10));
            }
            else {
                coords[0][1] = generateVertShipCoord(5,startLetter,parseInt(getById("carr-num").value,10));
            }            
        }
        else if(val == "bs") {
            startLetter = coords[1][1][0][0];
            if(coords[1][1][0][0] == coords[1][1][1][0]) {
                coords[1][1] = generateHorShipCoord(4,startLetter,parseInt(getById("bs-num").value,10));
            }
            else if(coords[1][1][0][1] == coords[1][1][1][1]){
                coords[1][1] = generateVertShipCoord(4,startLetter,parseInt(getById("bs-num").value,10));
            }
            
        }
        else if(val == "cru") {
            startLetter = coords[2][1][0][0];
            if(coords[2][1][0][0] == coords[2][1][1][0]) {
                coords[2][1] = generateHorShipCoord(3,startLetter,parseInt(getById("cru-num").value,10));
            }
            else if(coords[2][1][0][1] == coords[2][1][1][1]){
                coords[2][1] = generateVertShipCoord(3,startLetter,parseInt(getById("cru-num").value,10));
            }
            
        }
        else if(val == "sub") {
            startLetter = coords[3][1][0][0];
            if(coords[3][1][0][0] == coords[3][1][1][0]) {
                coords[3][1] = generateHorShipCoord(3,startLetter,parseInt(getById("sub-num").value,10));
            }
            else if(coords[3][1][0][1] == coords[3][1][1][1]){
                coords[3][1] = generateVertShipCoord(3,startLetter,parseInt(getById("sub-num").value,10));
            }
             
        }
        else if(val == "dest") {
            startLetter = coords[4][1][0][0];
            if(coords[4][1][0][0] == coords[4][1][1][0]) {
                coords[4][1] = generateHorShipCoord(2,startLetter,getById("dest-num").value);
            }
            else if(coords[4][1][0][1] == coords[4][1][1][1]){
                coords[4][1] = generateVertShipCoord(2,startLetter,getById("dest-num").value);
            }
        }

    }
    if(type == "dir") {

    }

    
    console.log(coords);
    //coords = [carrier, battleship, cruiser ,submarine ,destroyer];
    player = gameboard(coords);
    getByClass("gameboard-player").remove();
    main.appendChild(displayGameboard(arr,"player"));

    
})


form.addEventListener("click", (e)=> {

    let val = e.target.id;
    val = val.split("-");
    let type = val[1]
    val = val[0]; 

    for(let i = 0; i< coords.length;i++) {
        for(let cell of coords[i][1]) {
            getCell(cell).style.backgroundColor = "green";
        }
    }
    
    let ship;
    if(val == "carr") {
        ship = coords[0][1];
    }
    else if(val == "bs") {
        ship = coords[1][1];
    }
    else if(val == "cru") {
        ship = coords[2][1];
    }
    else if(val == "sub") {
        ship = coords[3][1];
    }
    else if(val == "dest") {
        ship = coords[4][1];
    }

    for(let cell of ship) {        
        getCell(cell).style.backgroundColor = "red";
    } 
})
//startGame();



     
    //let time = Math.floor(Math.random() * ((1500 - 500) + 500));
   // await sleep(time);
      
       
      
        




    






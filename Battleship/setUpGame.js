import gameboard, { setupDir, setupLetter, setupNum } from "./gameboard.js";
import { changePlaceholders, displayGameboard, markShip } from "./dom.js";
import {   generateAllShipsRandom,  generateShip} from "./generators.js";
import { getByClass, getById} from "./getters.js";
import { checkGameboardValid } from "./validation.js";
import startGame from "./startGame.js";



function setupGame() {
    let form = getById("form");
    let main = document.querySelector("main");
    let player = gameboard();
    let enemy = gameboard();   
    let arr = [player, enemy];    
    let coords = player.getShips();
    changePlaceholders(coords);
    let coordsTemp = coords;    
    

    form.addEventListener("submit", (e)=> {    
        e.preventDefault();
    });

        main.appendChild(displayGameboard(arr,"player")); 

    form.addEventListener("input", (e)=> {    
        let val = e.target.id;
        val = val.split("-");
        let type = val[1]
        val = val[0]; 

        if(type == "letter") {
            setupLetter(coords,val);
        }
        else if(type == "num") {
            setupNum(coords,val);
        }
        else if(type == "dir") {
            setupDir(coords,val)
        }
        
        let shipsNum = ["carr","bs","cru","sub","dest"];
        for(let i = 0; i< coords.length;i++) {
            for(let cell of coords[i][1]) {
                if(typeof cell[0] != "string" ||  cell[0].length < 1 || typeof  cell[1] != "number" || Number.isNaN(cell[1])) {  
                    let dir = getById(shipsNum[i]+"-dir").value;
                    coords[i] = generateShip(
                    [coordsTemp[i][1][0][0],coordsTemp[i][1][0][1]],
                dir,
                    coordsTemp[i][1].length
                    );      
                
            }//☺☺
        }
        console.log(coords[i][1][0]);
        }
        player = gameboard(coords);    
        changePlaceholders(coords);
        getByClass("gameboard-player").remove();
        main.appendChild(displayGameboard(arr,"player"));
        markShip(e,coords);  
    });

    let fieldsets = document.querySelectorAll("fieldset");
    fieldsets.forEach(fieldset => {
        fieldset.addEventListener("click", (e)=> {
            markShip(e,coords);
       });
    });
      
    
    let play = getById("btn-play");
    let random = getById("btn-random");
    random.addEventListener("click",()=> {        
        player = gameboard(generateAllShipsRandom());   
        coords = player.getShips();
        coordsTemp = coords;    
        changePlaceholders(coords);
        getByClass("gameboard-player").remove();
        document.querySelector("main").appendChild(displayGameboard([player,enemy],"player"));  
    });

    play.addEventListener("click", ()=> {
        if(checkGameboardValid(player.getShips())) {
            startGame(player.getShips());
        } 
        else {
            console.log("Damn")
        }
        console.log(player.getShips());
    })

    //console.log(final)
    return player
}

export default setupGame
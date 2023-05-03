import gameboard, { setupDir, setupLetter, setupNum } from "./gameboard.js";
import { displayGameboard, markShip } from "./dom.js";
import { gameboardPattern,  generateAllShipsRandom,  generateShip} from "./generators.js";
import { getByClass, getById} from "./getters.js";



function setupGame() {
    let form = getById("form");
    let coords = gameboardPattern();

    form.addEventListener("submit", (e)=> {    
        e.preventDefault();
    });

        let main = document.querySelector("main");
        let player = gameboard(coords);
        let enemy = gameboard();   
        let arr = [player, enemy] ;
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
                    [gameboardPattern()[i][1][0][0],gameboardPattern()[i][1][0][1]],
                dir,
                    gameboardPattern()[i][1].length
                    );      
                
            }//☺☺
        }
        }
        player = gameboard(coords);
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
        coords = generateAllShipsRandom();
        let player = gameboard();
        let enemy = gameboard();
        let arr = [player,enemy];
        getByClass("gameboard-player").remove();
        document.querySelector("main").appendChild(displayGameboard(arr,"player"));       
    });
}

export default setupGame
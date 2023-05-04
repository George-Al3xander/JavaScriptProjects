import gameboard, { setupDir, setupLetter, setupNum } from "./gameboard.js";
import { changePlaceholders, displayForm, displayGameboard, markShip } from "./dom.js";
import { getByClass, getById} from "./getters.js";
import { checkGameboardValid } from "./validation.js";
import startGame from "./startGame.js";



function setupGame() {    
    displayForm();
    let player = gameboard();
    let enemy = gameboard();   
    let arr = [player, enemy];    
    let coords = player.getShips(); 
    let form = getById("form");
    let main = document.querySelector("main");
    changePlaceholders(coords);
    
    main.appendChild(displayGameboard(arr,"player")); 

    form.addEventListener("input", (e)=> {    
        let val = e.target.id;
        let value = e.target.value;
        val = val.split("-");
        let type = val[1]
        val = val[0];          
          
            if(type == "letter") {
                if(typeof value == "string" && value.length == 1 ) {
                    setupLetter(coords,val);
                }
            }
            else if(type == "num") {
                value = parseInt(value,10);
                if(typeof  value == "number" && Number.isNaN(value) == false) {
                    setupNum(coords,val);
                }
            }
            else if(type == "dir") {
                setupDir(coords,val)
            }

        changePlaceholders(coords);       
        
            console.log(coords);
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
        main.innerHTML = "";
        setupGame();        
    });

    play.addEventListener("click", ()=> {        
        if(checkGameboardValid(player.getShips())) {
            startGame(player.getShips());
        } 
        else {
           getByClass("validation-check").style.display = "block"
        }       
    });    
    return player
}

export default setupGame
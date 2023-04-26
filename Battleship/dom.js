import { createEl } from "./create.js";
import alphabet from "./alpha.js";
import { getById } from "./getters.js";
import { hit } from "./index.js";
import { enemy , main} from "./index.js";


function displayGameboard(type, coords) {
    let section = createEl("section");
    section.className = type;
    let table = createEl("table");  

    section.appendChild(table);

    let numsTr = createEl("tr");
    table.appendChild(numsTr);

    numsTr.appendChild(createEl("th"));

    for(let i = 1; i <= 10; i++) {
        numsTr.appendChild(createEl("th",i));
    }

    for(let i = 0; i < alphabet.length; i++) {
        let tr = table.appendChild(createEl("tr"));
        tr.appendChild(createEl("th", alphabet[i]));
        for(let x =1; x<=10;x++) {
            let td = tr.appendChild(createEl("td"));
            let id = alphabet[i]+x;
            td.setAttribute("id",id);
            if(type == "gameboard-enemy") {
               // td.setAttribute("onclick", `hit(${id})`);
               td.addEventListener("click", ()=> {
                    if(enemy.checkLost() == true) {
                        main.innerHTML = "ENEMY LOST"
                    }  else {
                        if(enemy.receiveAttack([alphabet[i],x]) == true) {
                            
                            td.style.backgroundColor = "red";
                        } else {
                            td.innerHTML = "X";
                        }                 
                    }
               });
            }

            if(type == "gameboard-player") {
                for(let item of coords) { 
                    for(let item2 of item[1]) {
                        if(item2[0] == alphabet[i] && item2[1] == x) {
                            td.style.backgroundColor = "green";
                            //console.log("WHAT!");
                        }                    
                    }
                }
            }

        }
    }

    return section;
}

function displayAll () {

}

export {
    displayGameboard
}
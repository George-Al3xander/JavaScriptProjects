import { createEl } from "./create.js";
import alphabet from "./alpha.js";
import { getById } from "./getters.js";



function displayGameboard(obj, type) {
    let coords = obj.getShips();
    let section = createEl("section");
    section.className = `gameboard-${type}`;
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
            if(type == "player") {
                td.setAttribute("id","p-"+id);
            } else {
                td.setAttribute("id","opp-"+id);
            }
            if(type == "enemy") {               
               td.addEventListener("click", ()=> {
                   obj.receiveAttack([alphabet[i],x]);  
                   displayMoves(obj,type);                                   
                });
            }

            if(type == "player" && coords != undefined) {
                for(let item of coords) { 
                    for(let item2 of item[1]) {
                        if(item2[0] == alphabet[i] && item2[1] == x) {
                            td.style.backgroundColor = "green";
                        }                    
                    }
                }
            }

        }
    }

    return section;
}


function displayMoves(obj,type) {
    let hit = obj.getHit();
    let missed = obj.getMissed();

    for(let miss of missed) {
        let id;
        if(type == "player") {
        id = "p-"
        } else if(type =="enemy"){
            id = "opp-"
        }
        id += miss.toString().replace(",", "");
        getById(id).innerHTML = "X";
    }

    for(let item of hit) {
        let id;
        if(type == "player") {
        id = "p-"
        id += item.toString().replace(",", "");
        getById(id).style.backgroundColor = "grey";
        } else if(type =="enemy"){
            id = "opp-"
            id += item.toString().replace(",", "");
            getById(id).style.backgroundColor = "red";
        }
    }
}

export {displayGameboard, displayMoves}
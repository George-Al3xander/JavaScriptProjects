import { createEl } from "./create.js";
import alphabet from "./alpha.js";
import { getById, getByClass } from "./getters.js";

import { enemyTurn } from "./startGame.js";



function displayGameboard(obj, type) {
    let player = obj[0];
    let enemy = obj[1];    
    let coords ;
    coords = player.getShips();
    
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
                   enemy.receiveAttack([alphabet[i],x]);  
                   displayMoves(enemy,type);  
                   enemyTurn(obj);                                                   
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


function disableGameboard(opacity1, opacity2, pointer, span, color) {
    getByClass("gameboard-player").style.opacity = opacity1;
    getByClass("gameboard-enemy").style.opacity = opacity2;
    getByClass("gameboard-enemy").style.pointerEvents = pointer;    
    let header = getById("turn");
    document.querySelector("#turn span").innerHTML = span;
    header.style.backgroundColor = color; 
}

function disableGameboardPlayer() {    
    disableGameboard("1",".4","none","Enemy's","var(--clr-enemy)");
}

function disableGameboardEnemy() {   
    disableGameboard(".4","1","auto","Your","var(--clr-player)");

}


function changeHeaderFooter(content ,type) {
    let header = document.querySelector("header");
    let footer = document.querySelector("footer");
    header.innerHTML = "";

    for(let i=0; i < 5;i++) {
        if(type == "enemy" && i > 2) {           
            break;
        }
        let item1 = createEl("h1",content);
        let item2 = createEl("h1",content);
        if(type == "player") {
            item1.className = "congrats-h1 win";
            item2.className = "congrats-h1 win";
        } 
        else {
            item1.className = "congrats-h1 lose";
            item2.className = "congrats-h1 lose";
        }
        header.appendChild(item1);
        footer.appendChild(item2);
    }

}

function displayWinner(type) {
    let main = document.querySelector("main");
    main.innerHTML = "";
    main.style.textAlign = "center";
    main.style.backgroundColor = "var(--clr-primary)";
    main.style.display = "flex";
    main.style.flexDirection = "column";   
    let heading;
    if(type == "player") {
        changeHeaderFooter("🎉 Congrats 🎉",type);
        heading = createEl("h1", "You won!");
        heading.className = "congrats-main-h win";
    }  else if(type == "enemy") {
        changeHeaderFooter("Better luck next time?",type);
        heading = createEl("h1", "You lost...");
        heading.className = "congrats-main-h lose";
    }

    let button = createEl("button", "rematch");

    main.appendChild(heading);
    main.appendChild(button);
    button.className = "congrats-btn";
} 

export {displayGameboard, displayMoves, disableGameboardPlayer, disableGameboardEnemy, displayWinner}
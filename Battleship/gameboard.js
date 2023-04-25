import { generateShip } from "./generators";

const gameboard = function() {
    let missed = [];
    let hit = []; 
    let ships = [];

    const createGameboard = (coords) => {
        if(coords != undefined) {
            
        } else {
            let carrier =  generateShip(["D",1], "hor", 5);
            let battleship = generateShip(["F",6], "vert", 4);
            let cruiser = generateShip(["B",9], "vert", 3);
            let submarine = generateShip(["H",9], "vert", 3);
            let destroyer = generateShip(["H",2], "hor", 4);
        }
    }
    
    
}
import { gameboardPattern, generateShip, patternGameboard } from "./generators";
import { getRandomX, getRandomY } from "./getters";
import newShip from "./ship"
import { checkGameboardValid, checkHitIncludes, checkHitMiss, checkMissIncludes, checkNear, checkTail, checkTwoCoord, decideTwoCoordsMove } from "./validation";
import alphabet from "./alpha";
import gameboard from "./gameboard";

// test("Ship must be sunk" , () => {
//     let ship = newShip(3);  
//     ship.hit();  
//     ship.hit();  
//     ship.hit();  
//     expect(ship.getIsSunk()).toBe(true);
// });


// test("Mustn't be null" , () => {
//     expect(getRandomX()).not.toBe(null);   
// })


// test("Mustn't be null" , () => {
//    expect(getRandomY()).not.toBe(null);   
// })


// test("Mustn't be greater than 10", () => {
//     const alphabet = ["A","B","C","D","E","F","G","H","I","J"];
//     expect(alphabet.length).toBeLessThanOrEqual(10);
// })


test("Same starting num:  true" , () => {
    expect(checkTwoCoord(["E",2],["G",2])).toBe(true);
});

test("Same letter:  true" , () => {
    expect(checkTwoCoord(["E",2],["E",4])).toBe(true);
});

test("Case 3:  true" , () => {
    expect(checkTwoCoord(["E",2],["F",4])).toBe(true);
});

test("Far coords:  true" , () => {
    expect(checkTwoCoord(["B",9],["F",6])).toBe(true);
});


test("False" , () => {
    expect(checkTwoCoord(["E",2],["F",2])).toBe(false);
});

test("False" , () => {
    expect(checkTwoCoord(["F",6],["G",7])).toBe(false);
});


test("False" , () => {
    expect(checkTwoCoord(["I",9],["I",10])).toBe(false);
});


test("Testing gameboard validation: true", ()=> {
    let carrier =  generateShip(["D",1], "hor", 5);
    let battleship = generateShip(["F",6], "vert", 4);
    let cruiser = generateShip(["B",9], "vert", 3);
    let submarine = generateShip(["H",9], "vert", 3);
    let destroyer = generateShip(["H",2], "hor", 2);  
    
    let array = [carrier, battleship, cruiser ,submarine ,destroyer];

    expect(checkGameboardValid(array)).toBe(true);
});


test("Testing gameboard validation: false", ()=> {
    let carrier =  generateShip(["D",1], "hor", 5);
    let battleship = generateShip(["F",6], "vert", 4);
    let cruiser = generateShip(["A",6], "vert", 3);
    let submarine = generateShip(["H",9], "vert", 3);
    let destroyer = generateShip(["H",2], "hor", 2);   
    
    let array = [carrier, battleship, cruiser ,submarine ,destroyer];

    expect(checkGameboardValid(array)).toBe(false);
});




test("Pattern game board test" , ()=> {
    expect(gameboardPattern()).not.toBe(null || undefined);
})


test("Check if side path are missed: false" , ()=> {
    let test = gameboard(gameboardPattern());
    let coord = ["B",9];
    let coord1 = ["B",8];
    let coord2 = ["B",5];
    test.receiveAttack(coord);
    test.receiveAttack(coord1);
    test.receiveAttack(coord2);
    expect(checkNear(test,"hor")).toBe(false);
});


test("Check if level path are missed: true" , ()=> {
    let test = gameboard(gameboardPattern());
    
    test.receiveAttack(["H",1]);
    test.receiveAttack(["H",3]);
    test.receiveAttack(["H",4]);
    test.receiveAttack(["H",5]);
    test.receiveAttack(["H",6]);
    

    
   
    expect(checkTail(test, ["H",3], "left")).toEqual(["H", 2]);
})




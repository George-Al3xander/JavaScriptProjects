import { generateShip } from "./generators";
import { getRandomX, getRandomY } from "./getters";
import newShip from "./ship"
import { checkGameboardValid, checkTwoCoord } from "./validation";
import alphabet from "./alpha";

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
    expect(checkTwoCoord(["D",5],["F",6])).toBe(true);
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



test("Big test" , () => {
            let carrier =  generateShip(["D",1], "hor", 5);
            let battleship = generateShip(["F",6], "vert", 4);
            let cruiser = generateShip(["B",9], "vert", 3);
            let submarine = generateShip(["F",7], "vert", 3);
            let destroyer = generateShip(["H",2], "hor", 2);
    let arr = [carrier, battleship, cruiser ,submarine ,destroyer];
    expect(checkGameboardValid(arr)).toBe(true);
})
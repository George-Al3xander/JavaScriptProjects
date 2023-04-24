import { getRandomX, getRandomY } from "./getters";
import newShip from "./ship"

test("Ship must be sunk" , () => {
    let ship = newShip(3);  
    ship.hit();  
    ship.hit();  
    ship.hit();  
    expect(ship.getIsSunk()).toBe(true);
});


test("Mustn't be null" , () => {
    expect(getRandomX()).not.toBe(null);   
})


test("Mustn't be null" , () => {
   expect(getRandomY()).not.toBe(null);   
})


test("Mustn't be greater than 10", () => {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J"];
    expect(alphabet.length).toBeLessThanOrEqual(10);
})




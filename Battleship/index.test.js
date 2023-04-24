import newShip from "./ship"

test("Ship must be sunk" , () => {
    let ship = newShip(3);  
    ship.hit();  
    ship.hit();  
    ship.hit();  
    expect(ship.getIsSunk()).toBe(true);
});


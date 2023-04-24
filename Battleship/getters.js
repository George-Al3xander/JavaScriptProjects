import alphabet from "./alpha";


function getRandomX() {
    return Math.floor(Math.random() * (10 - 1) + 1);
}

function getRandomY() {    
    let num =  Math.floor(Math.random() * ((alphabet.length-1) - 0) + 0);

    return alphabet[num];
}

export {getRandomX, getRandomY};


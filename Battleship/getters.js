import alphabet from "./alpha.js";



function getById(id) {
    let obj = document.getElementById(id);
    return obj;
}


function getByClass(objClass) {
    let obj = document.querySelector(`.${objClass}`)
    return obj;
}


function getRandomStartNum() {
    return Math.floor(Math.random() * (10 - 1) + 1);
}

function getRandomLetter() {    
    let num =  Math.floor(Math.random() * ((alphabet.length-1) - 0) + 0);

    return alphabet[num];
}

function getRandomDir() {
    let num = Math.floor(Math.random() * 2)-1;
    if(num == 0) {
        return "hor"
    } else {
        return "vert";
    }
}

function getLastItem(array) {
    return array[array.length-1];
}

function getMiddleItem(array) {
    return array[Math.floor((array.length - 1) / 2)];
}


function getCell(coord) {    
    let id = "p-"+coord.toString().replace(",", "");
    let obj = getById(id);    

    return obj
}

export {getRandomStartNum, getRandomLetter, getRandomDir, getLastItem, getMiddleItem,getByClass, getById ,getCell };


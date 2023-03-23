import { getFromStorage, setToStorage } from "./getters.js";

function getCount() {
    let obj = getFromStorage("count");

    return obj
}

function incrementCount() {
    let obj = getCount();
    obj = obj + 1;
    setToStorage("count", obj);
    
}

function reduceCount() {
    let obj = getCount();
    obj = obj - 1;
    setToStorage("count", obj);    
}


export {getCount, incrementCount, reduceCount}
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// Knight have start and end.
//First item's "Y" coordinate must be greater by 2 of second item;
//And second item's "X" coordinate must be greater by 1 of first item;




function knightMoves(start, end) {    
    let current =  start;
    let next = current;  
    
    let invalid = start.some(num => num > 8 || num <= 0) || end.some(num => num > 8 || num <= 0);
    if(invalid) {
        return false;
    }  

    let validMove = 
    (current[0]+2 == next[0] && current[1]-1 == next[1]) ||  
    (current[0]+2 == next[0] && current[1]+1 == next[1]) || 
    (current[0]+1 == next[0] && current[1]+2 == next[1]) ||
    (current[0]-1 == next[0] && current[1]+2 == next[1]) ||
    (current[0]-2 == next[0] && current[1]+1 == next[1]) ||
    (current[0]-2 == next[0] && current[1]-1 == next[1]) ||
    (current[0]-1 == next[0] && current[1]-2 == next[1]) ||
    (current[0]+1 == next[0] && current[1]-2 == next[1]);
    console.log(next);
    
    console.log(current);
    if(!validMove) {
        return validMove;
    } else {
        return true;
    }

}


console.log(knightMoves([1, 3], [3,4]));
/******/ })()
;
//# sourceMappingURL=bundle304281be5b450ba16640.js.map
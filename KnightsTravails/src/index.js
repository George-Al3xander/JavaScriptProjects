// Knight have start and end.
//First item's "Y" coordinate must be greater by 2 of second item;
//And second item's "X" coordinate must be greater by 1 of first item;




function knightMoves(start, end) {    
    
    let invalid = start.some(num => num > 8 || num <= 0) || end.some(num => num > 8 || num <= 0);
    if(invalid) {
        return false;
    }  
    let current =  start;
    let next = end;  

    let validMove = 
    (current[0]+2 == next[0] && current[1]-1 == next[1]) ||  
    (current[0]+2 == next[0] && current[1]+1 == next[1]) || 
    (current[0]+1 == next[0] && current[1]+2 == next[1]) ||
    (current[0]-1 == next[0] && current[1]+2 == next[1]) ||
    (current[0]-2 == next[0] && current[1]+1 == next[1]) ||
    (current[0]-2 == next[0] && current[1]-1 == next[1]) ||
    (current[0]-1 == next[0] && current[1]-2 == next[1]) ||
    (current[0]+1 == next[0] && current[1]-2 == next[1]);   
    if(!validMove) {
        return validMove;
    } else {
        return true;
    }

}


console.log(knightMoves([1, 1], [2,3]));
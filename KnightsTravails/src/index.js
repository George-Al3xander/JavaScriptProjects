// Knight have start and end.
//First item's "Y" coordinate must be greater by 2 of second item;
//And second item's "X" coordinate must be greater by 1 of first item;


function makeMove(current) {
    let num = Math.floor(Math.random() * (7 - 0) + 0);
    let next;
    if(num == 0) {
        next = [current[0]+2,current[1]-1];
    } 
    else if(num == 1) {
        next = [current[0]+2,current[1]+1];
    } 
    else if(num == 2) {
        next = [current[0]+1,current[1]+2];
    }
    else if(num == 3) {
        next = [current[0]-1,current[1]+2];
    }
    else if(num == 4) {
        next = [current[0]-2,current[1]+1];
    }
    else if(num == 5) {
        next = [current[0]-2,current[1]-1];
    }
    else if(num == 6) {
        next = [current[0]-1,current[1]-2];
    }
    else if(num == 7) {
        next = [current[0]+1,current[1]-2];
    }
    let invalid = current.some(num => num > 8 || num <= 0) || next.some(num => num > 8 || num <= 0);    
    if(invalid) {
        return makeMove(current);
    }

    return next;
}


function knightMoves(start, end) {    
    
    let invalid = start.some(num => num > 8 || num <= 0) || end.some(num => num > 8 || num <= 0);
    if(invalid) {
        return false;
    }  
    let current =  start;
    let next = makeMove(start);  
    console.log(next);
    current = next;
    if(current[0] == end[0] && current[1] == end[1]) {
        console.log("We home")
        return true;
    } else {
        return knightMoves(next,end);
    }
}

//console.log(makeMove([4, 4]));
console.log(knightMoves([1, 1], [4,6]));
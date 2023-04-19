// Knight have start and end.
//First item's "Y" coordinate must be greater by 2 of second item;
//And second item's "X" coordinate must be greater by 1 of first item;

import Node from "./node";


function makeMove(current) {
    let max = current.next.length;     
    let num = Math.floor(Math.random() * (max - 0) + 0);
    let next = current.next[num];     
    next = new Node(next,current.data);    
    if(current.prev != null) {       
        if(current.prev[0] == next.data[0] && current.prev[1] == next.data[1]) {
            return makeMove(current);
        } 
    }
    return  next;
}



function knightMoves(start, end) { 
    let moves = [];
    moves.push(start);
    
    
    if(start.data[0] < end[0] && start.data[1] < end[1]) {
        let tempArray = [];
        for(let nxtItem of start.next) {            
            if(nxtItem[0] > start.data[0] && nxtItem[1] > start.data[1]) {
                tempArray.push(nxtItem);
            }
        }
        start.next = tempArray;
    } 
    else if(start.data[0] > end[0] && start.data[1] < end[1]) {
        let tempArray = [];
        for(let nxtItem of start.next) {           
            if(nxtItem[0] < start.data[0] && nxtItem[1] > start.data[1]) {
                tempArray.push(nxtItem);
            }
        }
        start.next = tempArray;
    } 
    else if(start.data[0] > end[0] && start.data[1] == end[1]) {
        let tempArray = [];
        for(let nxtItem of start.next) {            
            if(nxtItem[0] < start.data[0]) {
                tempArray.push(nxtItem);
            }
        }
        start.next = tempArray;
    } 
    else if(start.data[0] > end[0] && start.data[1] > end[1]) {
        let tempArray = [];
        for(let nxtItem of start.next) {            
            if(nxtItem[0] < start.data[0] && nxtItem[1] < start.data[1]) {
                tempArray.push(nxtItem);
            }
        }
        start.next = tempArray;
    } 
    else if(start.data[0] == end[0] && start.data[1] > end[1]) {
        let tempArray = [];
        for(let nxtItem of start.next) {            
            if(nxtItem[1] < start.data[1]) {
                tempArray.push(nxtItem);
            }
        }
        start.next = tempArray;
    }
    else if(start.data[0] == end[0] && start.data[1] < end[1]) {
        let tempArray = [];
        for(let nxtItem of start.next) {            
            if(Math.abs(nxtItem[1] - start.data[1]) == 1) {
                tempArray.push(nxtItem);
            }
        }
        start.next = tempArray;
    }
    else if(start.data[0] < end[0] && start.data[1] == end[1]) {
        let tempArray = [];
        for(let nxtItem of start.next) {           
            if(nxtItem[0] > start.data[0]) {
                tempArray.push(nxtItem);
            }
        }
        start.next = tempArray;
    }  
    else if(Math.abs(start.data[0] - end[0]) == 1 || start.data[1] - end[1] == 0) {
        let tempArray = [];
        for(let nxtItem of start.next) {            
            tempArray.push(nxtItem);           
        }
        start.next = tempArray;
    }  

    else if(Math.abs(start.data[0] - end[0]) == 1 && Math.abs(start.data[1] - end[1]) == 1) {
        let tempArray = [];
        for(let nxtItem of start.next) {            
            tempArray.push(nxtItem);           
        }
        start.next = tempArray;
    }  
    
    for(let nxtItem of start.next) {        
        if(nxtItem[0] == end[0] && nxtItem[1] == end[1]) {
            moves.push(new Node(nxtItem));            
            return moves.flat();
        } 
    }
    
    let next = makeMove(start);    
    let item = knightMoves(next, end);    
    moves.push(item);
    
    return moves.flat();
}

function showRes(array) {
    for(let item of array) {
        console.log(item.data);
    }
}



let test = knightMoves(new Node([1,1]), [1,8])
console.log();

showRes(test);


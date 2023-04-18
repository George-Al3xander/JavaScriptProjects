// Knight have start and end.
//First item's "Y" coordinate must be greater by 2 of second item;
//And second item's "X" coordinate must be greater by 1 of first item;

class Node{
    constructor(data, prev = null) {
        this.data = data;
        this.prev = prev;
        this.next = [];
        this.setNext();
            
        
    }

    setNext(current = this.data) {
        let item;
        let invalid;
        for(let num = 0; num < 8; num++) {
            if(num == 0) {
                item = [current[0]+2,current[1]-1]                
            } 
            else if(num == 1) {
                item = [current[0]+2,current[1]+1]                
            } 
            else if(num == 2) {
                item = [current[0]+1,current[1]+2]                
            }
            else if(num == 3) {
                item = [current[0]-1,current[1]+2]                
            }
            else if(num == 4) {
                item = [current[0]-2,current[1]+1]                
            }
            else if(num == 5) {
                item = [current[0]-2,current[1]-1]                
            }
            else if(num == 6) {
                item = [current[0]-1,current[1]-2]                
            }
            else if(num == 7) {
                item = [current[0]+1,current[1]-2]
            }
            invalid = item.some(num => num > 8 || num <= 0);
            if(!invalid) {                
                this.next.push(item);
            }
                        
        }

    }

    getData() {
        return this.next;
    }
}



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
    // let invalid = start.some(num => num > 8 || num <= 0) || end.some(num => num > 8 || num <= 0);
    // if(invalid) {
    //     return false;
    // } 
    let moves = [] ;
    for(let nxtItem of start.next) {
        //console.log(nxtItem);
        if(nxtItem[0] == end[0] && nxtItem[1] == end[1]) {
            moves.push(nxtItem);
            return moves;
        }
    }
    if(start.data[0] < end[0] && start.data[1] < end[1]) {
        let tempArray = [];
        for(let nxtItem of start.next) {
            //console.log(nxtItem);
            if(nxtItem[0] > start.data[0] && nxtItem[1] > start.data[1]) {
                tempArray.push(nxtItem);
            }
        }
        start.next = tempArray;
    } else if(start.data[0] > end[0] && start.data[1] < end[1]) {
        let tempArray = [];
        for(let nxtItem of start.next) {
            //console.log(nxtItem);
            if(nxtItem[0] < start.data[0] && nxtItem[1] > start.data[1]) {
                tempArray.push(nxtItem);
            }
        }
        start.next = tempArray;
    } else if(start.data[0] > end[0] && start.data[1] == end[1]) {
        let tempArray = [];
        for(let nxtItem of start.next) {
            //console.log(nxtItem);
            if(nxtItem[0] < start.data[0]) {
                tempArray.push(nxtItem);
            }
        }
        start.next = tempArray;
    } else if(start.data[0] > end[0] && start.data[1] > end[1]) {
        let tempArray = [];
        for(let nxtItem of start.next) {
            //console.log(nxtItem);
            if(nxtItem[0] < start.data[0] && nxtItem[1] < start.data[1]) {
                tempArray.push(nxtItem);
            }
        }
        start.next = tempArray;
    } else if(start.data[0] == end[0] && start.data[1] > end[1]) {
        let tempArray = [];
        for(let nxtItem of start.next) {
            //console.log(nxtItem);
            if(nxtItem[1] < start.data[1]) {
                tempArray.push(nxtItem);
            }
        }
        start.next = tempArray;
    }

    else if(start.data[0] < end[0] && start.data[1] == end[1]) {
        let tempArray = [];
        for(let nxtItem of start.next) {
            //console.log(nxtItem);
            if(nxtItem[0] > start.data[0]) {
                tempArray.push(nxtItem);
            }
        }
        start.next = tempArray;
    }  else if(Math.abs(start.data[1] - end[1]) == 1) {
        let tempArray = [];
        for(let nxtItem of start.next) {
            //console.log(nxtItem);
            tempArray.push(nxtItem);           
        }
        start.next = tempArray;
    }   
    
       
    console.log(start.data);
    next = makeMove(start); 
    moves.push(next.data);
    if(next.data[0] == end[0] && next.data[1] == end[1]) {
        console.log("We home");         
        return moves;         
    } else {
        moves.push(knightMoves(next, end));
             
    }       
    return next.data; 
}



//console.log(makeMove([4, 4]));
console.log(knightMoves(new Node([1,1]), [4,6]));



// let start = new Node([5,4]);

// for(let i = 0; i < 5; i++) {
//     console.log(start.data);
//     start = makeMove(start);
// }



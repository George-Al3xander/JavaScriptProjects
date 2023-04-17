// Knight have start and end.
//First item's "Y" coordinate must be greater by 2 of second item;
//And second item's "X" coordinate must be greater by 1 of first item;

class Node{
    constructor(data, prev = null) {
        this.data = data;
        this.prev = prev;
        this.next = [];
       this.setNext();
        //let invalid = data.some(num => num > 8 || num <= 0) || next.some(num => num > 8 || num <= 0);    
        
    }

    setNext(current = this.data) {
        let item;
        let invalid ;//= item.some(num => num > 8 || num <= 0);

        for(let num = 0; num < 7; num++) {
            if(num == 0) {
                item = [current[0]+2,current[1]-1];
                invalid = item.some(num => num > 8 || num <= 0);
                
                if(!invalid) {
                    this.next.push(item);
                }
            } 
            else if(num == 1) {
                item = [current[0]+2,current[1]+1];
                invalid = item.some(num => num > 8 || num <= 0);
                
                if(!invalid) {
                    this.next.push(item);
                }
            } 
            else if(num == 2) {
                item = [current[0]+1,current[1]+2]
                invalid = item.some(num => num > 8 || num <= 0);
                
                if(!invalid) {
                    this.next.push(item);
                }
            }
            else if(num == 3) {
                item = [current[0]-1,current[1]+2]
                invalid = item.some(num => num > 8 || num <= 0);
                
                if(!invalid) {
                    this.next.push(item);
                }
            }
            else if(num == 4) {
                item = [current[0]-2,current[1]+1]
                invalid = item.some(num => num > 8 || num <= 0);
                
                if(!invalid) {
                    this.next.push(item);
                }
            }
            else if(num == 5) {
                item = [current[0]-2,current[1]-1]
                invalid = item.some(num => num > 8 || num <= 0);
                
                if(!invalid) {
                    this.next.push(item);
                }
            }
            else if(num == 6) {
                item = [current[0]-1,current[1]-2]
                invalid = item.some(num => num > 8 || num <= 0);
                
                if(!invalid) {
                    this.next.push(item);
                }
            }
            else if(num == 7) {
                item = [current[0]+1,current[1]-2]
                invalid = item.some(num => num > 8 || num <= 0);
                
                if(!invalid) {
                    this.next.push(item);
                }
            }            
        }

    }

    getData() {
        return this.next;
    }
}


function createChessBoard() {
    for(let i =0; i < 7; i++) {

    }


}

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
    
    let moves = [];
    let invalid = start.some(num => num > 8 || num <= 0) || end.some(num => num > 8 || num <= 0);
    if(invalid) {
        return false;
    }  
    let current =  start;
    let next = makeMove(start);  
    
    current = next;
    console.log(current);
    moves.push(current);

    if(current[0] == end[0] && current[1] == end[1]) {
        console.log("We home");
        //moves.push(current);
        
        console.log(moves);
        return current;
    } else {       
       
        moves.push(knightMoves(next,end));
    }  
    
    return moves;
    
}



//console.log(makeMove([4, 4]));
//console.log(knightMoves([1, 1], [4,6]));
let start = new Node([1,1]);
console.log(start.getData());
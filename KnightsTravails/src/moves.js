import Node from "./node";

//Function that makes knight to do 1 legit move, it's have "prev" parameter that doesn't allow to knight go back to the same square which he came from.
function makeMove(current) {
    
    //Choosing one random legit move from node's "next" parameter
    let max = current.next.length;     
    let num = Math.floor(Math.random() * (max - 0) + 0);

    //Making node from that move
    let next = current.next[num];     
    next = new Node(next,current.data); 

    //Setting prev parameter, only if it's not the first step   
    if(current.prev != null) {       
        if(current.prev[0] == next.data[0] && current.prev[1] == next.data[1]) {
            return makeMove(current);
        } 
    }
    
    return  next;
}

function move(start, end) {
    let moves = [];
    moves.push(start);    
    
    //Additional stuff

    // if(start.data[0] < end[0] && start.data[1] < end[1]) {
    //     let tempArray = [];
    //     for(let nxtItem of start.next) {            
    //         if(nxtItem[0] > start.data[0] && nxtItem[1] > start.data[1]) {
    //             tempArray.push(nxtItem);
    //         }
    //     }
    //     start.next = tempArray;
    // } 
    // else if(start.data[0] > end[0] && start.data[1] < end[1]) {
    //     let tempArray = [];
    //     for(let nxtItem of start.next) {           
    //         if(nxtItem[0] < start.data[0] && nxtItem[1] > start.data[1]) {
    //             tempArray.push(nxtItem);
    //         }
    //     }
    //     start.next = tempArray;
    // } 
    // else if(start.data[0] > end[0] && start.data[1] == end[1]) {
    //     let tempArray = [];
    //     for(let nxtItem of start.next) {            
    //         if(nxtItem[0] < start.data[0]) {
    //             tempArray.push(nxtItem);
    //         }
    //     }
    //     start.next = tempArray;
    // } 
    // else if(start.data[0] > end[0] && start.data[1] > end[1]) {
    //     let tempArray = [];
    //     for(let nxtItem of start.next) {            
    //         if(nxtItem[0] < start.data[0] && nxtItem[1] < start.data[1]) {
    //             tempArray.push(nxtItem);
    //         }
    //     }
    //     start.next = tempArray;
    // } 
    // else if(start.data[0] == end[0] && start.data[1] > end[1]) {
    //     let tempArray = [];
    //     for(let nxtItem of start.next) {            
    //         if(nxtItem[1] < start.data[1]) {
    //             tempArray.push(nxtItem);
    //         }
    //     }
    //     start.next = tempArray;
    // }
    // else if(start.data[0] == end[0] && start.data[1] < end[1]) {
    //     let tempArray = [];
    //     for(let nxtItem of start.next) {            
    //         if(Math.abs(nxtItem[1] - start.data[1]) == 1) {
    //             tempArray.push(nxtItem);
    //         }
    //     }
    //     start.next = tempArray;
    // }
    // else if(start.data[0] < end[0] && start.data[1] == end[1]) {
    //     let tempArray = [];
    //     for(let nxtItem of start.next) {           
    //         if(nxtItem[0] > start.data[0]) {
    //             tempArray.push(nxtItem);
    //         }
    //     }
    //     start.next = tempArray;
    // }  
    // else if(Math.abs(start.data[0] - end[0]) == 1 || start.data[1] - end[1] == 0) {
    //     let tempArray = [];
    //     for(let nxtItem of start.next) {            
    //         tempArray.push(nxtItem);           
    //     }
    //     start.next = tempArray;
    // }  

    
    //Checking if current node doesn't have our destination in his "next" parameter
    for(let nxtItem of start.next) {        
        if(nxtItem[0] == end[0] && nxtItem[1] == end[1]) {
            moves.push(new Node(nxtItem));            
            return moves.flat();
        } 
    }
    //Reccursion, until we find our end
    let next = makeMove(start);    
    let item = move(next, end);    
    moves.push(item);
    
    return moves.flat();
}

export default move
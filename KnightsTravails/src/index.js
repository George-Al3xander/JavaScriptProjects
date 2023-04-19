// Knight has start and end.
//First item's "Y" coordinate must be greater by 2 of second item;
//And second item's "X" coordinate must be greater by 1 of first item;

import Node from "./node";
import move from "./moves";



//Function that summarise all pieces of "code"(because it's very inefficient and messy)
function knightMoves(start, end) { 
    let tempArray = [];
    let tempArray2 = [];


    //Doing 100 repitions of "finding path from start to end"
    for(let i = 0; i < 100;i++) {            
        try {
            tempArray.push(move(start, end));
        } catch (error) {
            continue;
        }
        
    }    

    //Then finding the shortest one
    for(let item of tempArray) {
        tempArray2.push(item.length);    
    }
    let num = tempArray2.indexOf(Math.min(...tempArray2));
    tempArray = tempArray[num];    

    // And outputting it
    console.log(`You made it in ${tempArray.length-1} moves!  Here's your path`);
    for(let i = 1; i < tempArray.length; i++) {
        console.log(tempArray[i].data); 
    }
}


    let test = knightMoves(new Node([8,3]), [1,7])
    




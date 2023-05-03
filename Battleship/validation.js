import alphabet from "./alpha.js";
import { getLastItem, getMiddleItem ,  getRandomLetter ,getRandomStartNum} from "./getters.js";



// function validate(array) {
//     //array = array[1];

//     for(let item of array) {
//         let coords = item[1];
//         console.log("First ship");
//         for(let coord of coords ) {
//             console.log(coord.toString());
//         }
//         //if(letter1 == letter2 && ) {
    
//        // }
//     }

//     console.log("");
//     console.log("");
//     console.log("");

//     for(let i=0; i < array.length; i++) {
//         console.log("First ship");
//         let curr = array[i][1];
//         let next = array[i+1][1];
//         //console.log(item);
//         //console.log(coord);
//         for(let x = 0; x < curr.length; x++) {
//             if(next[x] != undefined) {
//                 console.log(curr[x].toString() ,next[x].toString() );
//             }
//         }
//     }
   

// }


function checkTwoCoord(first, second) {
    let isStartValid = (Math.abs(first[1] - second[1])) >= 2;
    let isLetterValid = (Math.abs(alphabet.indexOf(first[0]) - alphabet.indexOf(second[0]))) >= 2;

    //Same starting num
    if(first[1] == second[1]) {
        if(isLetterValid) {
            return true;
        } else {
            return false;
        }
    } 
    //Same letter
    else if (first[0] == second[0]) {
        if(isStartValid) {
            return true;
        } else {
            return false;
        }

    //All different
    } else if (first[0] != second[0] && first[1] != second[1]) {
        if(isStartValid && first[1] != second[1]) {
            return true
        }
        else if(isLetterValid && first[1] != second[1]) {
            return true
        } 
        else {
            return false;
        }
    } else {
        return false;
    }
}





function checkGameboardValid(array) {
    let finalArr = [];
    let letters = /^[A-Ja-j]+$/;
    array.forEach(ship => {        
        for(let i =0; i < array.length-1; i++) {

           for(let coord of ship[1]) {
                //for(let smallCoord of coord) {
                    //console.log();
                    finalArr.push(letters.test(coord[0]));                      
                    finalArr.push(coord[1] > 0 && coord[1] <=10)                 
                //}
           }
            if(array.indexOf(ship) == i) {
                continue;
            }
            let item1 = ship[1];
            let item2 = array[i][1];            
            
            finalArr.push(checkTwoCoord(item1[0], item2[0]));
            finalArr.push(checkTwoCoord(getMiddleItem(item1), getMiddleItem(item2)));
            finalArr.push(checkTwoCoord(getLastItem(item1), getLastItem(item2)));

            finalArr.push(checkTwoCoord(item1[0], getLastItem(item2)));
            finalArr.push(checkTwoCoord(item1[0], getMiddleItem(item2)));
            finalArr.push(checkTwoCoord(item2[0], getMiddleItem(item1)));
            finalArr.push(checkTwoCoord(getLastItem(item1), item2[0]));

            finalArr.push(checkTwoCoord(getLastItem(item1), getMiddleItem(item2)));
            finalArr.push(checkTwoCoord(getLastItem(item2), getMiddleItem(item1)));
            //finalArr.test()

        }            
    });   
    if(finalArr.includes(false)) {
        return false;
    } else {
        return true;
    }
}

function checkCoord(coord, obj) {
    while(obj.getHit().every((hit) => {
        return hit.toString() != coord.toString();
    }) == false) {        
        coord = [getRandomLetter(), getRandomStartNum()];
    };

    while(obj.getMissed().every((miss) => {
        return miss.toString() != coord.toString()
    }) == false) {           
        coord = [getRandomLetter(), getRandomStartNum()];            
    };
    if(coord[1] > 10 || coord[1] < 0) {
        coord = [coord[0], getRandomStartNum()]; 
    }
    return coord
}


function decideTwoCoordsMove(coord1, coord2, obj) {
    let tempCoord;    
    tempCoord = coord1;        
    coord1 = checkCoord(coord1,obj);
    if(coord1.toString() == tempCoord.toString()) {
       return coord1 
    } else {       
        tempCoord = coord2;
        coord2 = checkCoord(coord2, obj);
        if(coord2.toString() == tempCoord.toString()) {
            return coord2;
        } 
        else {
            return checkCoord([getRandomLetter(), getRandomStartNum()],obj);
        }
    }
}

function checkNear(obj, dir) {
    let missed = obj.getMissed();
    let lastHit = obj.getHit()[obj.getHit().length-1];
            
    let item1;
    let item2;
    if(dir == "hor") {
        item1 = [lastHit[0], lastHit[1]+1];
        item2 = [lastHit[0], lastHit[1]-1];  
    } 
    else if(dir == "vert") {
        item1= [alphabet[alphabet.indexOf(lastHit[0])+1], lastHit[1]]
        item2= [alphabet[alphabet.indexOf(lastHit[0])-1], lastHit[1]];
    }
    
    console.log(lastHit);
    //[lastHit[0], lastHit[1]+1]
    let cond1 = false;
    let cond2 = true;
    for(let miss of missed) {
        if(miss[0] == item1[0] && miss[1] == item1[1]) {
            cond1 = true;
        }
        if(miss[0] == item2[0] && miss[1] == item2[1]) {
            cond2 = true;
        }
    }    
    if(cond1 == true &&  cond2 == true) {
        return true
    } else  {
        return false;
    }
}


function checkMissIncludes(obj, coord) {
    for(let miss of obj.getMissed()) {
        if(miss[0] == coord[0] && miss[1] == coord[1]) {
            return true
        }
    }
    return false;
}



function checkHitIncludes(obj, coord) {
    for(let hit of obj.getHit()) {
        if(hit[0] == coord[0] && hit[1] == coord[1]) {
            return true
        }
    }
    return false;
}



export {checkTwoCoord, checkGameboardValid, checkCoord, decideTwoCoordsMove, checkNear, checkMissIncludes, checkHitIncludes, }



//If direction of ships are same:
// 
//Case 1(same starting num): 
//  Math.abs(alphabet.indexOf(letterShip1) - alphabet.indexOf(letterShip2) >= 2);
//
//Case 2(same letter): 
//  Math.abs(
//  alphabet.indexOf(startingNumShip1) - alphabet.indexOf(startingNumShip2) >= 2
//  );
//
//Case 3(Nothing are the same):
//  Case 1 and Case 2 requirements are must completed both!
//
//
//
//
//
//
//
//
//
//
//
//
import alphabet from "./alpha.js";
import { getLastItem, getMiddleItem } from "./getters.js";



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
    array.forEach(ship => {        
        for(let i =0; i < array.length-1; i++) {
            if(array.indexOf(ship) == i) {
                continue;
            }
            let item1 = ship[1];
            let item2 = array[i][1];
            
            
            finalArr.push(checkTwoCoord(item1[0], item2[0]));
            finalArr.push(checkTwoCoord(getMiddleItem(item1), getMiddleItem(item2)));
            finalArr.push(checkTwoCoord(getLastItem(item1), getLastItem(item2)));
        }            
    });   
    if(finalArr.includes(false)) {
        return false;
    } else {
        return true;
    }
}

export {checkTwoCoord, checkGameboardValid}



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
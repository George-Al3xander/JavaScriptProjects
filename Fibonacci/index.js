// function fib(n) {
//     n = n-2;
//     let array = [0, 1]; 
    
//     for(let i=0; i < n; i++) {        
//         let item1 = array[array.length-1];
//         let item2 = array[array.length-2];
        
//         let num = item1 + item2;
//         array.push(num);
//     }
//     return array
// }

// function fibRec(n) {
//     n = n - 2;
//     let array = [0, 1];
//      for(let i=0; i < n; i++) {        
//         array.push(array[i] + array[i+1]) ;               
//     }
//     console.log(array);
// }


// console.log(fib(13));
// console.log(fibRec(13))

//[12, 4 , 1, 2, 8]
//[4, 12 , 1, 2, 8]
//[4, 1 , 12, 2, 8]
//[4, 1 , 2, 12, 8]

//[4, 1 , 2, 8, 12]
//Way when we skip number after replacement
//[41, 21, 32, 2, 3, 39, 36]
//[21, 41, 32, 2, 3, 39, 36]
//[21, 41, 32, 2, 3, 39, 36]
//[2, 41, 32, 21, 3, 39, 36]
//[2, 41, 32, 21, 3, 39, 36]
//[2, 41, 32, 21, 3, 39, 36]
//[2, 41, 32, 21, 3, 39, 36]
//[2, 41, 32, 21, 3, 39, 36]

//[2, 41, 32, 21, 3, 39, 36]
//[2, 32, 41, 21, 3, 39, 36] 

//[2, 32, 41, 21, 3, 39, 36]
//[2, 32, 41, 21, 3, 39, 36]
//[2, 32, 41, 21, 3, 39, 36]
//[2, 21, 41, 32, 3, 39, 36]

//[2, 21, 41, 32, 3, 39, 36]
//[2, 21, 41, 32, 3, 39, 36]
//[2, 21, 32, 41, 3, 39, 36]
//[2, 21, 32, 41, 3, 39, 36]
//[2, 21, 32, 41, 3, 39, 36]
//[2, 21, 32, 41, 3, 39, 36]
//[2, 21, 32, 3, 41, 39, 36]
//[2, 21, 32, 3, 41, 39, 36]
//[2, 21, 32, 3, 39, 41, 36]
//[2, 21, 32, 3, 41, 39, 36]
//[2, 21, 32, 3, 36, 39, 41]

//another function call and cicle

// small num must be in left side
//[2, 21, 32, 3, 36, 39, 41]
//nothing changes with 2 cicle

//[2, 21, 32, 3, 36, 39, 41]
//[2, 21, 32, 3, 36, 39, 41]
//[2, 21, 32, 3, 36, 39, 41]
//[2, 3, 32, 21, 36, 39, 41]
//[2, 3, 32, 21, 36, 39, 41]

//Starting array
//[41, 21, 32, 2, 3, 39, 36]

//Final result
//[2, 3, 21, 32, 36, 39, 41]





//Way when we don't skip number after replacement
//Numbers to the right must me bigger than compareble number
//[41, 21, 32, 2, 3, 39, 36]
//[21, 41, 32, 2, 3, 39, 36]
//[2, 41, 32, 21, 3, 39, 36]
//[2, 32, 41, 21, 3, 39, 36]
//[2, 21, 41, 32, 3, 39, 36]
//[2, 3, 41, 32, 21, 39, 36]
//[2, 3, 32, 41, 21, 39, 36]
//[2, 3, 21, 41, 32, 39, 36]
//[2, 3, 21, 32, 41, 39, 36]
//[2, 3, 21, 32, 39, 41, 36]
//[2, 3, 21, 32, 39, 36, 41]

//another cyclle
//[2, 3, 21, 32, 39, 36, 41]
//[2, 3, 21, 32, 36, 39, 41]



//We make function that iterates first array item through whole array not stopping even if the number being replaced, func stops(meaning continues to do but on the second item and so on until array finishes) only when iterates through whole array without being replace

let arrayTest = [511,122,3];
// arrayTest = [7, 1]
//console.log(arrayTest.slice(1))

function mergeSort(array) {
    for(let i = 0; i < array.length; i++) {
                    //85 
        let item = array[i];  

          for(let x = i + 1; x <=array.length; x++) { 

                  //85   //45              
              if(item > array[x]) {

                  //85 takes 45 place
                  array[i] = array[x]; 
                  //45 becomes item in that case thats 45             
                  array[x] = item;
                  //item becomes 45
                  item = array[i]; 
                  //and then whole procces repeats but starting with second number       
                  mergeSort(array.slice(i));
              } 
          }     
     }
    return array
}






// function mergeSort(array) {
//     for(let i = 0; i < array.length; i++) {
//         let item1 = array[i]; 
//         for       
      

//     }
//     return array
// }


console.log(mergeSort(arrayTest));
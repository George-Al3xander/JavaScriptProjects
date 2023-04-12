function mergeSort(array) {
    for(let i = 0; i < array.length; i++) {
        let item = array[i];  

          for(let x = i + 1; x <=array.length; x++) {             
              if(item > array[x]) {                
                  array[i] = array[x];                              
                  array[x] = item;                  
                  item = array[i];                       
                  mergeSort(array.slice(i));
              } 
          }     
     }
    return array
}

function noDuplicats(array) {
    let tempArray = [];

    for(let i = 0; i < array.length; i++) {
        let item = array[i];
        let item2 = array[i+1];        
        if( item != item2 ) {
            tempArray.push(item);
        }        
    }

    return tempArray;
}


function sort(array) {
    array = mergeSort(array);
              
      
    return noDuplicats(array);
}


export default sort
export {noDuplicats}
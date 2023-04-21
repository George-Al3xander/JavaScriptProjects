function capitalize(value) {
    return value.replace(value.charAt(0), value.charAt(0).toUpperCase());
}

function reverseString(value) {
    let res = "";

    for(let i = value.length-1; i >= 0; i--) {
        res += value.charAt(i)
    }
    return res;
}

const calculator = {
    add: (a, b) => a + b,
    substract: (a, b) => a - b,
    divide: (a, b) =>  b == 0 ? "Cant divide by 0!" :  a / b  ,    
    multiply: (a, b) => a * b,
}

function caesarCipher(value) {
    const alpha = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ];
    let res = "";
    for(let i = 0; i < value.length; i++) {
        let letter = value.charAt(i);
        let item;
        let index;        
        for(let x = 0; x < alpha.length-1; x++) {
            if(letter.toUpperCase() == alpha[x]) {
                index = alpha.indexOf(alpha[x]);                                
            } 
        }
        if(index == alpha.length-1) {
            item = alpha[0]; 
        } else if(index == alpha.length-2) {
            item = alpha[1]; 
        } 
        else if(index == alpha.length-3) {
            item = alpha[2]; 
        } 
        else {
            item = alpha[index+3];
        }     
        if(!letter.match(/[A-Z]/)) {
            item = item.toLocaleLowerCase();   
        } 
        res += item;
    }
    return res;
    }


    function analyzeArray(array) { 
        return {
            average :  Math.floor(array.reduce((total, num) => {
                return total + num;
            }, 0)/ 6),
            min  : Math.min( ...array),
            max : Math.max( ...array),
            length : array.length ,
        }
        
        
    }

        
    


module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};




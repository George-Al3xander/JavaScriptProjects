import sort from "./sort";

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
       return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }



class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }    
}



class Tree {
    //Dont forget to create "root" attribute  
    constructor(array) {
        this.array = array;
        this.root = null  
    }

    buildTree() {
        array = sort(array);        
        let num;
        if(array.length % 2 == 1) {
            num = Math.floor(array.length / 2);         
        } else {
            num = Math.floor((array.length - 1) / 2);
        }        
        this.root = new Node(array[num], new Node(array[num-2]),new Node(array[num+2])); 
        
        let current = this.root;  
        
        console.log("Right");        
        for(let i = num; i < array.length; i+=2) {             
            if(i == num) {                 
                continue;
            };


            current = current.right;            
            if(array[i+1] == undefined) {
                current.right = new Node(array[i-1], new Node(array[i]));  
            } else  {
                current.right = new Node(array[i], new Node(array[i-1]), new Node(array[i+1])); 
            }   
            //console.log(`Item: ${array[i]}, left: ${array[i-1]}, right:  ${array[i+1]}`);
            
            console.log(array[i]);
            //console.log(i);   
                       
        }
        console.log("Left");         
        current = this.root;
        for(let i = num; i > 0; i-=2) {              
            if(i == num) {                
                continue;
            }     
            
            current = current.left;            

             if(array[i-1] == undefined) {
                current.left = new Node(array[i+1], null ,new Node(array[i])); 
            } else  {
                current.left = new Node(array[i], new Node(array[i-1]), new Node(array[i+1]));  
            }
            //current.left  = current; 
            console.log(array[i]);
        }
        
        console.log(`Final root: `);
        console.log(this.root);
        console.log(`Final root.`);        
        return this.root;
    }

}

//           0   1   2   3   4   5   6   7  8   9  10   11  
let array = [1, 10, 11, 17, 19, 30, 31, 37, 38, 40, 44, 59]; // Length = 12;



let tree = new Tree(array);

let item = tree.buildTree();

console.log(item);

prettyPrint(item);


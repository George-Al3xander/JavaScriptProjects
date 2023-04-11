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
        this.root = null;
    }

    buildTree(arr = this.array, left = 0, right = arr.length - 1) {
        arr = sort(arr);
        if(left > right) return null;

        let mid = Math.floor((left + right) / 2);
        this.root = new Node(arr[mid]);

        this.root.left = new Tree().buildTree(arr, left, mid - 1);
        this.root.right = new Tree().buildTree(arr, mid + 1, right);

    return this.root;
    }

    
    
    insert(value, current) {
        if(current.right.right == null) {
            //current.right = value;
            console.log(current.data);
            let node = new Node(value,null,current.right);
            current = node;
            console.log("Passed " + value);
            console.log("that's the end!");
            return;
        }

        if(current.left.left == null) {
            
            let node = new Node(value, current.right);

            current = node;

            console.log("Passed " + value);
            console.log("that's the end!");
            return;
        }
        
        let data = current;      
        data = data.data;        
        if(value > data) {
            console.log("Yes");
            current = current.right;
            this.insert(value,current);
        } else if(value < data){
            console.log("Nah");
            current = current.left;
            this.insert(value,current);
        } 
        //console.log(current);
    }

    

    
}

//           0   1   2   3   4   5   6     7  8   9  10   11  
let array = [19, 1, 10, 11, 17,  30, 321, 37, 38, 40, 44, 59]; // Length = 12;










let tree = new Tree(array);
let item = tree.buildTree();
prettyPrint(item);
tree.insert(54, tree.root);
//console.log(item);
prettyPrint(item);
//prettyPrint(arrayToBST(array));



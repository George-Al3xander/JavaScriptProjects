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

    
    
    insert(value, root = this.root) {
        
        if(root == null) {
            root = new Node(value);
            return root;            
        }

        if(value < root.data) {
            console.log(root.right);            
            root.left = this.insert(value, root.left);             
        } 
        else if(value > root.data) {
            console.log(root.left);            
            root.right = this.insert(value, root.right);
        }
        
        return root;        
    }

    delete(value, root = this.root) {
        if(root == null) {
            return root;
        }

        if(value < root.data) {
            root.left = this.delete(value, root.left);
        } else if(value > root.data) {
            root.right = this.delete(value, root.right);
        } else {
            if(root.left == null) {
                return root.right;
            } else if(root.right == null) {
                return root.left;
            } 

            root.data = minValue(root.right);

            root.right = this.delete(value, root.right);
        }

        return root;
    }


    minValue(root) {
        let minv = root.data;
        while(root.left != null) {
            minv = root.left.data;
            root = root.left;
        }
        return minv
    }
    
    find(value, root = this.root) {       
        if (root == null ||
            root.data == value) {
                return root;

             }

    if (root.data < value) {
        return this.find(value, root.right);
    }

    return this.find(value, root.left);
    }

    levelOrder(func) {

    }

    
    getRoot() {        
        console.log(this.root)
    }
    
}

//           0   1   2   3   4   5   6     7  8   9  10   11  
let array = [19, 1, 10, 11, 17,  30, 321, 37, 38, 40, 44, 59]; // Length = 12;










let tree = new Tree(array);
let item = tree.buildTree();


prettyPrint(item);
tree.getRoot();
//console.log(item);
//prettyPrint(arrayToBST(array));




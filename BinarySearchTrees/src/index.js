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
    constructor(array) {      
        this.array =  [...new Set(array)].sort((a, b) => a - b);          
        this.root = null;
        this.insertArray = []
    }

    buildTree(arr = this.array, left = 0, right = arr.length - 1) {
        
        
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
            this.insertArray.push(root.data);
            return root;            
        }

        if(value < root.data) {                       
            root.left = this.insert(value, root.left);             
        } 
        else if(value > root.data) {                       
            root.right = this.insert(value, root.right);
        }
        
        return root;        
    }

    delete(value, root = this.root) {   
        if(root == null) {
            return root;
        }
        let tempArray = [];    
        for(let i =0; i < this.insertArray.length; i++) {
            if(this.insertArray[i] != value) {
                tempArray.push(this.insertArray[i]);
            }
        }
        this.insertArray = tempArray;

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

    levelOrder(func, root = this.root) {
        
        let array = [];        
        let h = this.height(root);
        let i;
        for(i = 1; i <= h; i++) {
            let item = this.currentLevel(root, i);
            array.push(item);
        }
        array = array.flat(h);
        if(func == undefined) {
            return array;
        } else {
            for(let item of array) {
                console.log(func(item));
            }
        }
    }

    height(root = this.root) {
        if(root == null) {
            return 0;
        }

        else {
            let lheight = this.height(root.left);
            let rheight = this.height(root.right);

            if(lheight > rheight) {
                return (lheight + 1)
            }
            else {
                return (rheight + 1);
            }
        }
    }

    currentLevel(root, level) {
        let array = [];
        if(root == null) {
            return array;
        }

        if(level == 1) {           
            array.push(root.data);
        }
        else if(level > 1) {            
           array.push(this.currentLevel(root.left, level - 1));
           array.push(this.currentLevel(root.right, level - 1));
        }

        return array;
    }

    preorder(root = this.root, func) {
        let tempArray = [];
        let current = root;
        let queue = [];
        let previous = current;        
        tempArray.push(current.data);
        
        while(current.left != null) {
            previous = current;            
            queue.push(previous);
            current = current.left;           
            tempArray.push(current.data);
        }
       
        if(current.left == null && current.right == null) {            
            for(let i = queue.length-1; i >= 0; i--) { 
                tempArray.push(this.preorder(queue[i].right));
            }                      
        } else if(current.right != null) {
            tempArray.push(current.right.data);
            for(let i = queue.length-1; i >= 0; i--) { 
                tempArray.push(this.preorder(queue[i].right));
            }
        }
        tempArray = tempArray.flat();          
        if(func == undefined) {
            return  tempArray;
        } else if(func != undefined){
            for(let item of tempArray) {
                console.log(func(item));
            }
        }
    }


    inorder(root = this.root, func) {
        let pointer = root;       
        let array = [];
        let previous;
        let queue = [];
        if(pointer.right == null && pointer.left == null) {
            array.push(pointer.data);
            return array;
        }  
        while(pointer.left != null) {            
            queue.push(pointer);
            previous = pointer;
            pointer = pointer.left;
        };       
        if(pointer.left == null && pointer.right != null) {           
            array.push(pointer.data);          
            for(let i = queue.length-1; i >= 0; i--) {
                array.push(pointer.right.data);
                array.push(queue[i].data);               
                array.push(this.inorder(queue[i].right));
            }
        }  else if(pointer.left == null && pointer.right == null) {           
            array.push(pointer.data);          
            for(let i = queue.length-1; i >= 0; i--) {                
                array.push(queue[i].data);               
                array.push(this.inorder(queue[i].right));
            }
        }   

        array = array.flat();
        array =  [...new Set(array)];
        if(func == undefined) {
            return array;
        } else if(func != undefined){           
            for(let num of  array) {
                console.log(func(num));
            }
        }
    }

    postorder(root = this.root, func) {
        let pointer =  root;   
        let array = [];   
        let queue = [];
        let previous;
        if(pointer.right == null) {
            return pointer.data;
        }
        while(pointer.left != null) {
            previous = pointer;
            queue.push(previous);
            pointer = pointer.left;
        }
        if(pointer.left == null && pointer.right != null) {           
            array.push(pointer.right.data);
        }
        if(pointer.left == null) {
            array.push(pointer.data);
        }
        
        for(let i = queue.length-1; i >= 0; i--) {           
           array.push(this.postorder(queue[i].right));
           array.push(queue[i].data);
        }
       
        array = array.flat();
        if(func == undefined) {
            return array;
        } else if(func != undefined){           
            for(let num of  array) {
                console.log(func(num));
            }
        }
    }
    depth(node , root = this.root) {          
        if(node == null) {
            return null;
        }

       let counter = 0;
       let current = root;
    
       if(current.data == node.data) {
           return counter;
        } 

       if(node.data < root.data) {            
            counter++;
            current = current.left;   
            counter += this.depth(node, current);            
       } else if(node.data > root.data){            
            counter++;
            current = current.right;
            counter += this.depth(node, current);
           
       } 
       return counter;      
    }
    
    
    getRoot() {        
        console.log(this.root)
    }

    isBalanced() {
        let left = this.height(this.root.left);
        let right = this.height(this.root.right); 
        if(Math.abs(left-right) == 1  || left == right) {
            return true;
        } else  {
            return false;
        }

    }

    rebalance () {
        let valid = this.isBalanced();
        if(valid == false) {
            for(let item of this.insertArray) {
                this.array.push(item);
            }
            this.array = this.array.flat().sort((a, b) => a - b);            
            this.buildTree(this.array);            
        } 
        this.tempArray = [];
    }
    
}

//           0   1   2   3   4   5   6     7  8   9   10  11  12  13
let array =[19, 1, 10, 12,11, 17,  30, 321, 37, 38, 40, 122, 44, 59,325,154,22,23,24,21]; // Length = 14;


function toSquare(num) {
    num = num * num;

    return num
}


let tree = new Tree(array);
tree.buildTree();
prettyPrint(tree.root);






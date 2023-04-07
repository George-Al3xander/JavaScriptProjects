
class Node {
    constructor(data = null, next = null) {
        this.data = data; 
        this.next = next;       
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        let node = new Node(data);
        let current;
        
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    
    prepend(data) {
        this.head = new Node(data, this.head);
        this.size++;
    } 

    getSize() {
       return this.size;

    }

    getHead() {
        return this.head;
    }

    tail() {
        let current = this.head;
        
        while(current) {
            current= current.next;
            if(current.next == null) {
                return current
            }
        }
    }
    at(index) {
        let count = 0;
        let current = this.head;
        while(true) {
            if(count == index) {
                return current;
            }          
            current = current.next;  
            count++;
        }
    }

    pop () {
        let current = this.head;
        let count = 0;
        while(true) {   
            if(count+2 == this.size) {
                current.next = null;
                return;
            }
            current = current.next;      
            count++;
        }
    }

    contain(value) {
        let count = 0;
        let current = this.head;

        while(count < this.size) {
            if(current.data == value) {
                return true;
            }
            current = current.next;
            count++;
            }
        return false;
    }

    find(value) {
        let count = 0;
        let current = this.head;

        while(count < this.size) {
            if(current.data == value) {
                return count;
            }
            current = current.next;
            count++;
            }
        return null;

    }
    
    toString() {
        let count = 0;
        let current = this.head;
        let str = "";
        while(count < this.size) {
            if(current.next == null) {
                str += `( ${current.data} ) -> null`;
                return str;
                
            }
            str += `( ${current.data} ) ->`;
            current = current.next;            
        }
    }
    
    insertAt(data, index) {
        if(index > 0 && index > this.size) {
            return;            
        }

        if( index == 0) {
            this.prepend(data);
            return;
        }
        let node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current;
            count++;
            current = current.next; 
        }
        node.next = current;
        previous.next = node;

        this.size++;
    }

    removeAt(index) {
        let count = 0;
        let current, previous,next;
        current = this.head; 

        if(index == this.size-1) {
            this.pop(); 
            this.size--;
            return ; 
        }
        
        if(index == 0) { 
            

            this.head = current.next;
            
        }
        else {           
            while(count <index) {
                previous = current;
                count++;
                current = current.next;          
                if(count == index) {              
                    next= current.next;
                    previous.next = next;               
                    }            
                }
        }
        
    this.size--;
}

       
    printList() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

}
let list1 = new LinkedList();

list1.append(100);
list1.append(200);
list1.append(300);
list1.append(400);
console.log(list1.toString());
list1.removeAt(3);
console.log(list1.toString());
console.log(list1.size)



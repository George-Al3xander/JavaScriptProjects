class Node{
    constructor(data, prev = null) {
        this.data = data;
        this.prev = prev;
        this.next = [];
        this.setNext();
            
        
    }

    setNext(current = this.data) {        
        let item;
        let invalid;
        for(let num = 0; num < 8; num++) {
            if(num == 0) {
                item = [current[0]+2,current[1]-1]                
            } 
            else if(num == 1) {
                item = [current[0]+2,current[1]+1]                
            } 
            else if(num == 2) {
                item = [current[0]+1,current[1]+2]                
            }
            else if(num == 3) {
                item = [current[0]-1,current[1]+2]                
            }
            else if(num == 4) {
                item = [current[0]-2,current[1]+1]                
            }
            else if(num == 5) {
                item = [current[0]-2,current[1]-1]                
            }
            else if(num == 6) {
                item = [current[0]-1,current[1]-2]                
            }
            else if(num == 7) {
                item = [current[0]+1,current[1]-2]
            }
            invalid = item.some(num => num > 8 || num <= 0);
            if(!invalid) {                
                this.next.push(item);
            }                        
        }
    }
    getData() {
        return this.next;
    }
}

export default Node
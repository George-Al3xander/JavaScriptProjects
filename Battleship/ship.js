let newShip = function(length) {
    let timesHit =  0;
    let isSunk = false;  

    const getTimesHit = () => timesHit;
    const getIsSunk  = () => isSunk;  

    const hit = () => {
        timesHit++;
        if(getTimesHit() == length) {
            isSunk = true;
        }          
    }
    
    return {hit, getIsSunk}
}


export default newShip
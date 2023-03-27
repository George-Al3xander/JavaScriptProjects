import {getById, getByClass,getData, getFromStorage, setToStorage} from "./getters.js";
import { cancel } from "./change.js";
//if nothing passed
// priority   date
// null ------ ""


function acceptChanges(num) {
    let name = `task${num}`;
    let taskDiv = getById(name);
    let taskStorage = getFromStorage(name);
    let form = getById(`form-changes${num}`);
    let formData = new FormData(form);
    let priority = formData.get("priority");
    let date = formData.get("date");

    //No changes 
    if(priority != null && date != "") {
        setToStorage(name,[taskStorage[0], taskStorage[1], date, priority, taskStorage[4], taskStorage[5]]);        
    }
    //Priority not changed
    else if(priority === null) {
        setToStorage(name,[taskStorage[0], taskStorage[1], date, taskStorage[3], taskStorage[4], taskStorage[5]]);         
    }    
    //Date not changed
    else if(date == "") {
        setToStorage(name,[taskStorage[0], taskStorage[1], taskStorage[2], priority, taskStorage[4], taskStorage[5]]);  
        taskDiv.className = `task ${priority}`;     
    }
    cancel(num);    
}

export default acceptChanges
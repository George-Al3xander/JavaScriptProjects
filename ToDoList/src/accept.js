import {getById, getFromStorage, setToStorage} from "./getters.js";
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
    

    let descriptionForm = getById(`descriptionForm${num}`);
    let titleForm = getById(`titleForm${num}`);
    

    

    let formDataTitle = new FormData(titleForm);
    let formDataDescription = new FormData(descriptionForm);

    let title = formDataTitle.get("title");
    let project = formDataTitle.get("project");
    let description = formDataDescription.get("description");


    console.log(`Title: ${title}`);
    console.log(`Desc: ${description}`);
    console.log(`Prior: ${priority}`);
    console.log(`Date: ${date}`);
    console.log(`project: ${project}`);
    
    
    taskStorage[1] = description;

    //Date changed
    if(title !== "") {
        taskStorage[0] = title;              
    }   
    
    if(date !== "") {
        taskStorage[2] = date;              
    }  

    if(project !== null || project != "") {
        taskStorage[4] = project;              
    } 
        
    //Priority changed
    if(priority != null) {
        taskStorage[3] = priority;  
        taskDiv.className = `task ${priority}`;     
    }
    setToStorage(name, taskStorage);
    let svgDots = getById(`svgDots${num}`);
    svgDots.setAttribute("onclick",`showDescription(${num})`);
    svgDots.style.cursor = "pointer";
    cancel(num);    
}

export default acceptChanges
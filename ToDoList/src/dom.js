
import { getByClass, getFromStorage} from "./getters.js";
import { form } from "./newTask.js";
import { createOption } from "./create.js";


let listMiddle = getByClass("list-middle");

function setProjectsOption(whereToDisplay) {    
    let storageArray = getFromStorage("projects");    
    for(let i=0; i < storageArray.length;i++) {          
        let option = createOption(storageArray[i]); 
        whereToDisplay.appendChild(option); 
       
    };
}

function hideMenu() {
    let mainDiv = getByClass("main-absolute");
    let background = getByClass("background-color");
    let newTaskForm = getByClass("new-task-form");
    mainDiv.style.visibility = "hidden";
    background.style.visibility = "hidden";
    newTaskForm.style.visibility = "hidden";
    let newProjectForm = getByClass("new-project-form");
    newProjectForm.style.visibility = "hidden";
    form.reset();
}

function showElement(el) {
    let name = getByClass(el);
    name.style.visibility = "visible";
}

function hideElement(el) {
    let name = getByClass(el);
    name.style.visibility = "hidden";
}


export { listMiddle, showElement, hideElement, hideMenu,setProjectsOption}




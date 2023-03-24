import { createDiv, createEl, createSvg } from "./create.js";
import { getByClass, getFromStorage, setToStorage} from "./getters.js";
import { form } from "./newTask.js";
import { getCount } from "./count.js";


let listMiddle = getByClass("list-middle");


function showTask(count, name, description, date, priority, project) {
    
    let taskId=`task${count}`;
    let taskDiv = createDiv();
    taskDiv.className = `task ${priority}`;
    taskDiv.setAttribute("id",taskId);

    let taskMainDiv = createDiv();
    taskMainDiv.className = "task-main";
    

    let topDiv = createDiv();

    let svgDone = createSvg("M600 816v-80h160v80H600Zm0-320v-80h280v80H600Zm0 160v-80h240v80H600ZM120 416H80v-80h160v-60h160v60h160v80h-40v360q0 33-23.5 56.5T440 856H200q-33 0-56.5-23.5T120 776V416Zm80 0v360h240V416H200Zm0 0v360-360Z");
    svgDone.setAttribute("class", "tick");
    svgDone.setAttribute("onclick", `removeTask(${count})`);
    let taskName = createEl("p",name);
    topDiv.appendChild(svgDone);
    topDiv.appendChild(taskName);

    if(project !== "" || project !== null) {
        let projectDiv = createDiv();
        projectDiv.className = `project project${count}`;
        let projectP = createEl("p" , `${project} project`);
        projectDiv.appendChild(projectP);
        topDiv.appendChild(projectDiv);
    }

    let bottomDiv = createDiv();  
    
    let para = createEl("p","");
    para.setAttribute("class","info")
    let span = createEl("span",priority);
    let priorText = document.createTextNode("priority");
    let br = createEl("br","");
    let dateSpan = document.createTextNode(`due to ${date}`);

    para.appendChild(span);
    para.appendChild(priorText);
    para.appendChild(br);
    para.appendChild(dateSpan); 

    let svgDots = createSvg("M120 816v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"); 
    bottomDiv.appendChild(para);
    bottomDiv.appendChild(svgDots);
    taskMainDiv.appendChild(topDiv);
    taskMainDiv.appendChild(bottomDiv);
    taskDiv.appendChild(taskMainDiv);
    if(description != "") {          
        svgDots.setAttribute("onclick",`showDescription(${count})`);
        let descriptionDiv = createDiv();
        descriptionDiv.setAttribute("tabindex","-1")
    
        descriptionDiv.className = `description description${count}`;
        let descPara = createEl("p",description);
        descriptionDiv.appendChild(descPara);
        taskDiv.appendChild(descriptionDiv);
    
        listMiddle.appendChild(taskDiv);
    } else if (description === "") {
        svgDots.setAttribute("onclick","message()");        
    }
    listMiddle.appendChild(taskDiv);
}

function showDescription(num) {   
        let project = getByClass(`project${num}`);
        let isShownObj = getFromStorage(`task${num}`); 
        let projectCheck = isShownObj[4];

        if( projectCheck != "") {
            let isShown = isShownObj[5];  
            let name = `description${num}`;        
            let desc = getByClass(`${name}`);
            if(isShown == false) {               
            desc.style.display = "inline";  
            project.style.display = "none";      
            isShown = true;
            setToStorage(`task${num}`,[isShownObj[0],isShownObj[1],isShownObj[2],isShownObj[3],isShownObj[4],isShown]);
            }
    
            else if(isShown == true) { 
            desc.style.display = "none";
            project.style.display = "inline";
            isShown = false; 
            setToStorage(`task${num}`,[isShownObj[0],isShownObj[1],isShownObj[2],isShownObj[3],isShownObj[4],isShown]);       
            } 
        } else if(projectCheck == "") {
            let isShown = isShownObj[5];  
            let name = `description${num}`;        
            let desc = getByClass(`${name}`);
            if(isShown == false) {               
            desc.style.display = "inline";                  
            isShown = true;
            setToStorage(`task${num}`,[isShownObj[0],isShownObj[1],isShownObj[2],isShownObj[3],isShownObj[4],isShown]);
            }
    
            else if(isShown == true) { 
            desc.style.display = "none";            
            isShown = false; 
            setToStorage(`task${num}`,[isShownObj[0],isShownObj[1],isShownObj[2],isShownObj[3],isShownObj[4],isShown]);       
            } 
        }
        
}

function displayTasks() {
    let count = getCount();
    for(let i=1; i<=count;i++) {
        let storageItem = getFromStorage(`task${i}`);
        showTask(i, storageItem[0], storageItem[1], storageItem[2], storageItem[3], storageItem[4]);
        setToStorage(`task${i}`,[storageItem[0], storageItem[1], storageItem[2], storageItem[3], storageItem[4], false]);        
    };
}

function hideMenu() {
    let mainDiv = getByClass("main-absolute");
    let background = getByClass("background-color");
    let newTaskForm = getByClass("new-task-form");
    mainDiv.style.visibility = "hidden";
    background.style.visibility = "hidden";
    newTaskForm.style.visibility = "hidden";
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

export {showTask, showElement, hideElement, showDescription, hideMenu, displayTasks}
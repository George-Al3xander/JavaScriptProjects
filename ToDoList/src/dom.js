import { createDiv, createEl, createSvg } from "./create.js";
import { getByClass, getById, getFromStorage, setToStorage} from "./getters.js";
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

    if(project !== null) {
        let projectDiv = createDiv();
        projectDiv.className = `project project${count}`;
        let projectP = createEl("p" , `${project} project`);
        projectDiv.appendChild(projectP);
        topDiv.appendChild(projectDiv);
    }

    let bottomDiv = createDiv();  
    
    let para = createEl("p","");
    para.setAttribute("class",`info info${count}`)
    let span = createEl("span",priority);
    let priorText = document.createTextNode("priority");
    let br = createEl("br","");
    let dateSpan = document.createTextNode(`due to ${date}`);

    para.appendChild(span);
    para.appendChild(priorText);
    para.appendChild(br);
    para.appendChild(dateSpan); 

    let svgDots = createSvg("M240 656q-33 0-56.5-23.5T160 576q0-33 23.5-56.5T240 496q33 0 56.5 23.5T320 576q0 33-23.5 56.5T240 656Zm240 0q-33 0-56.5-23.5T400 576q0-33 23.5-56.5T480 496q33 0 56.5 23.5T560 576q0 33-23.5 56.5T480 656Zm240 0q-33 0-56.5-23.5T640 576q0-33 23.5-56.5T720 496q33 0 56.5 23.5T800 576q0 33-23.5 56.5T720 656Z"); 
    let svgEdit = createSvg("M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z");
    svgEdit.setAttribute("onclick", `editTask(${count})`);
    let svgDiv = createDiv();
    svgDiv.className = "svg-div";
    svgDiv.appendChild(svgDots);
    svgDiv.appendChild(svgEdit);
    bottomDiv.appendChild(para);
    bottomDiv.appendChild(svgDiv);
    taskMainDiv.appendChild(topDiv);
    taskMainDiv.appendChild(bottomDiv);
    taskDiv.appendChild(taskMainDiv);
    if(description != "") {          
        svgDots.setAttribute("onclick",`showDescription(${count})`);        
        let descriptionDiv = createDiv();
        descriptionDiv.setAttribute("tabindex","-1");
    
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

        if( projectCheck !== null) {
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
        } else if(projectCheck == null) {
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
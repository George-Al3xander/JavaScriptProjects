import { listMiddle } from "./dom.js";
import { createEl,createDiv,createSvg } from "./create.js";
import { getFromStorage, setToStorage, getByClass } from "./getters.js";
import { getCount} from "./count.js";
import { cancel } from "./change.js";

function showTask(whereToDisplay ,count, name, description, date, priority, project) {
    
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
        projectDiv.className = `task-project task-project${count}`;
        let projectP = createEl("p" , `${project} project`);
        projectDiv.appendChild(projectP);
        topDiv.appendChild(projectDiv);
    }

    let bottomDiv = createDiv();  
    
    let para = createEl("p","");
    para.setAttribute("class",`info info${count}`);
    let span = createEl("span",priority);
    let priorText = document.createTextNode("priority");
    let br = createEl("br","");
    let dateSpan = document.createTextNode(`due to ${date}`);

    para.appendChild(span);
    para.appendChild(priorText);
    para.appendChild(br);
    para.appendChild(dateSpan); 

    let svgDots = createSvg("m298 794-56-56 121-122H80v-80h283L242 414l56-56 218 218-218 218Zm222-18v-80h360v80H520Zm0-320v-80h360v80H520Zm120 160v-80h240v80H640Z"); 
    let svgEdit = createSvg("M440 936V696h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160V216h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z");
    svgEdit.setAttribute("onclick", `editTask(${count})`);
    let svgDiv = createDiv();
    svgDiv.className = "svg-div";
    svgDiv.appendChild(svgDots);
    //svgDiv.appendChild(svgEdit);
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
        descriptionDiv.appendChild(svgEdit);        
        
        taskDiv.appendChild(descriptionDiv);
    
       
    } else if (description === "") {
        svgDots.setAttribute("onclick","message()");        
    }
    whereToDisplay.appendChild(taskDiv);
}

function showDescription(num) {   
        let project = getByClass(`task-project${num}`);
        let isShownObj = getFromStorage(`task${num}`); 
        let projectCheck = isShownObj[4];  

        if( projectCheck !== null) {
            let isShown = isShownObj[5];  
            let name = `description${num}`;        
            let desc = getByClass(`${name}`);
            if(isShown == false) {               
            desc.style.display = "flex";  
            project.style.display = "none";      
            isShown = true;
            setToStorage(`task${num}`,[isShownObj[0],isShownObj[1],isShownObj[2],isShownObj[3],isShownObj[4],isShown]);
            }
    
            else if(isShown == true) { 
            desc.style.display = "none";
            project.style.display = "inline";
            isShown = false; 
            setToStorage(`task${num}`,[isShownObj[0],isShownObj[1],isShownObj[2],isShownObj[3],isShownObj[4],isShown]);  
            cancel(num);    
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
            cancel(num);      
            } 
        }        
}
function displayAllTasks() {
    let count = getCount();
    for(let i=1; i<=count;i++) {
        let storageItem = getFromStorage(`task${i}`);
        showTask(listMiddle,i, storageItem[0], storageItem[1], storageItem[2], storageItem[3], storageItem[4]);
        setToStorage(`task${i}`,[storageItem[0], storageItem[1], storageItem[2], storageItem[3], storageItem[4], false]);        
    };
}

export {showTask, showDescription,displayAllTasks};
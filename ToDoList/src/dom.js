import { createDiv, createEl, createSvg } from "./create.js";
import { getByClass} from "./getters.js";

let listMiddle = getByClass("list-middle");
let isShown = false;

function showTask(count, name, description, date, priority, project) {
    
    let taskId=`task${count}`;
    let taskDiv = createDiv();
    taskDiv.className = `task ${priority} ${project.toLowerCase()}`;
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
    svgDots.setAttribute("onclick",`showDescription(${count})`);

    bottomDiv.appendChild(para);
    bottomDiv.appendChild(svgDots);

     
    taskMainDiv.appendChild(topDiv);
    taskMainDiv.appendChild(bottomDiv);
    taskDiv.appendChild(taskMainDiv);


    let descriptionDiv = createDiv();
    descriptionDiv.setAttribute("tabindex","-1")

    descriptionDiv.className = `description description${count}`;
    let descPara = createEl("p",description);
    descriptionDiv.appendChild(descPara);
    taskDiv.appendChild(descriptionDiv);

    listMiddle.appendChild(taskDiv);
}

function showDescription(num) {    
    let name = `description${num}`;
    let descAll = document.querySelectorAll(".description");    
    let desc = getByClass(`${name}`);

   
   
    if(!isShown) {  
        descAll.forEach(task =>  {
            task.style.display = "none";           
        }); 
        desc.style.display = "inline";        
        isShown = true;
    }

    else if(isShown) {                   
        descAll.forEach(task =>  {
            task.style.display = "none";           
        });               
        isShown = false;
       
        
    } 

    
    // if(!isShown) {               
    //     desc.style.display = "inline";        
    //     isShown = true;
    // }

    // else if(isShown) { 
    //     isShown = false;        
    // } 
    


   





    
    
    console.log(isShown);
    desc.focus(); 
}

function showElement(el) {
    let name = getByClass(el);
    name.style.visibility = "visible";
}

function hideElement(el) {
    let name = getByClass(el);
    name.style.visibility = "hidden";
}

export {showTask, showDescription, showElement, hideElement}
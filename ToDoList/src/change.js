import {getByClass, getFromStorage,setToStorage,getById } from "./getters.js";
import { createDateForm, createPriorityForm, createEl, createDiv, createDescriptionForm, createTitleForm, createSvg, changeSvgIcon} from "./create.js";
import { setProjectsOption } from "./dom.js";




function editTask(num) {   
    let isShownObj = getFromStorage(`task${num}`); 
    let oldDescValue = isShownObj[1];
    let isShown = isShownObj[5];
    let taskName = getByClass(`taskName${num}`);   
    let taskNameP = getByClass(`taskName${num} p`);                    
    taskNameP.remove();
   
    isShown = true;
    setToStorage(`task${num}`,[isShownObj[0],isShownObj[1],isShownObj[2],isShownObj[3],isShownObj[4],isShown]);
    
    
    let info = getByClass(`info${num}`);   
    info.innerHTML = "";
    
    let svgDots = changeSvgIcon(num, false);
    svgDots.setAttribute("onclick","");
    svgDots.style.cursor = "not-allowed";
    
    

    let newDescription = createDescriptionForm(oldDescValue, num);
    newDescription.setAttribute("class","description-form");
    let descErase = createSvg("M280 936q-33 0-56.5-23.5T200 856V336h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680 936H280Zm400-600H280v520h400V336ZM360 776h80V416h-80v360Zm160 0h80V416h-80v360ZM280 336v520-520Z");
    descErase.setAttribute("onclick",`clearDescription(${num})`);
    let descRedo = createSvg("M280 856v-80h284q63 0 109.5-40T720 636q0-60-46.5-100T564 496H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800 636q0 94-69.5 157T564 856H280Z");
    descErase.setAttribute("onclick",`clearDescription(${num})`);
    descErase.setAttribute("class", "btn-description-clear");
    descRedo.setAttribute("onclick",`redoDescription(${num})`);
    descRedo.setAttribute("class", "btn-description-redo");
    newDescription.appendChild(descErase);
    newDescription.appendChild(descRedo);
    newDescription.style.marginLeft = "40px";



    let newTitle = createTitleForm(num);
    newTitle.setAttribute("class","title-form")

    let projectSelect = createEl("select","");
    projectSelect.setAttribute("name","project");
    let defaultSelect = createEl("option", "None");
    defaultSelect.setAttribute("value", "");    
    projectSelect.appendChild(defaultSelect);
    setProjectsOption(projectSelect);
    newTitle.appendChild(projectSelect);


    taskName.appendChild(newTitle);


    let form = createPriorityForm(num);
    form.setAttribute("id",`form-changes${num}`);
    let date = createDateForm(num);
    let acceptBtn = createEl("input","");
    acceptBtn.setAttribute("type","submit");
    acceptBtn.setAttribute("onclick",`acceptChanges(${num})`);
    acceptBtn.setAttribute("value","Accept");
    let buttonDiv = createDiv();
    
    let cancelBtn = createEl("button","cancel");
    cancelBtn.setAttribute("onclick",`cancel(${num})`);
    
    buttonDiv.appendChild(acceptBtn);
    buttonDiv.appendChild(cancelBtn);
    buttonDiv.setAttribute("class","edit-buttons");

    form.appendChild(date);
    form.appendChild(buttonDiv);    
    info.appendChild(form);
    info.style.backgroundColor = "lightgrey";  

    let descriptionDiv;

    if(isShownObj[1] != "") {
        descriptionDiv = getByClass(`description${num}`);
        descriptionDiv.innerHTML = "";
        descriptionDiv.appendChild(newDescription);
    } 
    else if (isShownObj[1] == "") {
        descriptionDiv = createDiv();
        let taskDom = getById(`task${num}`);
        descriptionDiv.className = `description description${num}`;
        descriptionDiv.appendChild(newDescription); 
        taskDom.appendChild(descriptionDiv);
    }

    descriptionDiv.style.display = "flex"; 

    if(isShownObj[4] != null && isShownObj[4] != "") {
        let taskProject = getByClass(`task-project${num}`);  
        taskProject.remove();
        let options = document.querySelectorAll(`#titleForm${num}  select option`);
        let projectSelected = taskProject.innerHTML.replaceAll("<p>", "").replaceAll("</p>","").replaceAll(" project", "");
        for(let option of options) {
            if( projectSelected == option.innerHTML) {
                option.setAttribute("selected",true);
    
            }
        }
    } 
}

function cancel(num) {
    let oldInfo = getByClass(`info${num}`);
    let storageTask = getFromStorage(`task${num}`);
    let date = storageTask[2];
    let priority = storageTask[3];
    oldInfo.innerHTML = "";
    oldInfo.style.backgroundColor = "transparent";
    
    let span = createEl("span",priority);
    let priorText = document.createTextNode("priority");
    let br = createEl("br","");
    let dateSpan = document.createTextNode(`due to ${date}`);

    oldInfo.appendChild(span);
    oldInfo.appendChild(priorText);
    oldInfo.appendChild(br);
    oldInfo.appendChild(dateSpan);   
    
    let topDiv = getByClass(`taskName${num}`);
    let taskName = createEl("p",storageTask[0]);
    topDiv.appendChild(taskName);
    
    if(storageTask[4] !== null && storageTask[4] != "") {
        let projectDiv = createDiv();
        projectDiv.className = `task-project task-project${num}`;
        let projectP = createEl("p" , `${storageTask[4]} project`);
        projectDiv.appendChild(projectP);
        topDiv.appendChild(projectDiv);
    } 
    
    let formTitle = getById(`titleForm${num}`);
    formTitle.remove();
    let svgIcon = changeSvgIcon(num, false);   

    if(storageTask[1] != "" ) {
        let taskDesc = getByClass(`description${num}`);    
        let oldDesc = createEl("p",storageTask[1]);
        taskDesc.innerHTML = "";
        taskDesc.appendChild(oldDesc);
        svgIcon.setAttribute("onclick",`showDescription(${num})`);
        taskDesc.style.display = "none";
    } 

    else if (storageTask[1] == "") {
        let taskDesc = getByClass(`description${num}`);  
        svgIcon.setAttribute("onclick",`message()`);
        taskDesc.remove();
    }
}

function clearDescription(num) {    
    let inputValue = document.querySelector(`#descriptionForm${num} textarea`);
    inputValue.innerHTML = "";  
}

function redoDescription(num) {    
    let inputValue = document.querySelector(`#descriptionForm${num} textarea`);
    let storageItem = getFromStorage(`task${num}`);
    inputValue.innerHTML = storageItem[1];  
}

export default editTask
export {cancel, clearDescription, redoDescription};

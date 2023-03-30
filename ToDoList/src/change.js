import {getByClass, getFromStorage,setToStorage,getById } from "./getters.js";
import { createDateForm, createPriorityForm, createEl, createDiv, createDescriptionForm, createTitleForm} from "./create.js";



function editTask(num) {   
    let isShownObj = getFromStorage(`task${num}`); 
    let oldDescValue = isShownObj[1];
    let isShown = isShownObj[5];
    let descriptionDiv = getByClass(`description${num}`);
    let taskName = getByClass(`taskName${num}`);   
    let taskNameP = getByClass(`taskName${num} p`);                    
    descriptionDiv.style.display = "flex"; 
    isShown = true;
    setToStorage(`task${num}`,[isShownObj[0],isShownObj[1],isShownObj[2],isShownObj[3],isShownObj[4],isShown]);

    let info = getByClass(`info${num}`);   
    info.innerHTML = "";
    descriptionDiv.innerHTML = "";
    taskNameP.remove();

    let newDescription = createDescriptionForm(oldDescValue, num);
    let newTitle = createTitleForm(num);

    descriptionDiv.appendChild(newDescription);
    taskName.appendChild(newTitle);


    let form = createPriorityForm();
    form.setAttribute("id",`form-changes${num}`);
    let date = createDateForm();
    let acceptBtn = createEl("input","");
    acceptBtn.setAttribute("type","submit");
    acceptBtn.setAttribute("onclick",`acceptChanges(${num})`);
    acceptBtn.setAttribute("value","Accept");
    let buttonDiv = createDiv();
    
    let cancelBtn = createEl("button","cancel");
    cancelBtn.setAttribute("onclick",`cancel(${num})`)
    
    buttonDiv.appendChild(acceptBtn);
    buttonDiv.appendChild(cancelBtn);
    buttonDiv.setAttribute("class","edit-buttons");

    form.appendChild(date);
    form.appendChild(buttonDiv);    
    info.appendChild(form);
    info.style.backgroundColor = "lightgrey";   
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

    let taskDesc = getByClass(`description${num}`);    
    let oldDesc = createEl("p",storageTask[1]);
    let formTitle = getById(`titleForm${num}`);
    formTitle.remove();
    taskDesc.innerHTML = "";
    taskDesc.appendChild(oldDesc);
}

export default editTask
export {cancel};
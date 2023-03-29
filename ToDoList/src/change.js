import {getByClass, getFromStorage } from "./getters.js";
import { createDateForm, createPriorityForm, createEl, createDiv } from "./create.js";

function editTask(num) {
    let info = getByClass(`info${num}`);   
    info.innerHTML = "";

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
}

export default editTask
export {cancel};
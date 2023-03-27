import {getByClass, getById, getData } from "./getters.js";
import { createDateForm, createPriorityForm, createEl } from "./create.js";






function editTask(num) {
    let info = getByClass(`info${num}`);
    let priority = getByClass(`info${num} span`);
    info.innerHTML = "";

    let form = createPriorityForm();
    let date = createDateForm();
    let acceptBtn = createEl("input","");
    acceptBtn.setAttribute("type","submit");
    acceptBtn.setAttribute("onclick","passNewData()");
    acceptBtn.setAttribute("value","Accept");


    form.appendChild(date);
    form.appendChild(acceptBtn);
    info.appendChild(form);
    info.style.backgroundColor = "lightgrey";
    console.log(info);
    
    
}


export default editTask
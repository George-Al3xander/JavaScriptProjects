import { setToday } from "./date.js";
import { getById, getByClass, getFromStorage } from "./getters.js";

function createEl(type,text) {
    let obj = document.createElement(type);
    let content = document.createTextNode(text);
    obj.appendChild(content);

    return obj
}


function createDiv() {
     let obj = createEl("div","");

     return obj
}

function createSvg(pathD) {
    let svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
    svg.setAttribute("height","24");
    svg.setAttribute("viewBox","0 96 960 960");
    svg.setAttribute("width","24");    

    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d",pathD);

    svg.appendChild(path);
   
    return svg
}

  
function createOption(value) {
    let obj = createEl("option", value);
    obj.setAttribute("value", value);

    return obj
}

function createPriorityForm(num) {
    let form = createEl("form","");
    let select = createEl("select","");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
    });
    
    select.setAttribute("name","priority");
    
    let test = createOption("Select priority");
    select.appendChild(test);
    test.setAttribute("disabled","");
    //test.setAttribute("selected","true");
    
    let storageTask = getFromStorage(`task${num}`);
    let storagePriority = storageTask[3];
    let priorities = ["low","medium","high","critical"];

    for(let i =0; i<priorities.length; i++) {
        let option = createOption(priorities[i]);
        option.className = priorities[i];
        select.appendChild(option);        
        if(priorities[i] == storagePriority) {
            option.setAttribute("selected","true")
        }

    }
    form.appendChild(select);

    return form
}

function createInput(type, name, value) {
    let input = createEl("input","");
    input.setAttribute("type", type);
    input.setAttribute("name", name);

    if(value != undefined) {
        input.setAttribute("value", value);
    }
    
    return input
}


function createDateForm(num) {    
    let dateInput = createInput("date","date");    
    setToday(dateInput);
    let storageTask = getFromStorage(`task${num}`);
    storageTask = storageTask[2];
    dateInput.setAttribute("value",storageTask) ;   
    return dateInput
}

//<textarea name="description" cols="20" rows="3"></textarea>


function createDescriptionForm(oldValue, num) {
    let form = createEl("form",""); 
    form.setAttribute("id",`descriptionForm${num}`)
    let input = createEl("textarea","");
    input.setAttribute("name","description");
    input.setAttribute("cols","20");
    input.setAttribute("rows","3");    
    input.innerHTML = oldValue;
    form.appendChild(input);

    return form    
}


function createTitleForm(num) {
    let form = createEl("form",""); 
    form.setAttribute("id",`titleForm${num}`);
    let input = createInput("text","title"); 
    let storageTask = getFromStorage(`task${num}`);
    storageTask = storageTask[0];
    input.setAttribute("value",storageTask);
    form.appendChild(input);

    return form    
}



function changeSvgIcon(num, isOpen) {
    let svgOld = getById(`svgDots${num}`);
    let svgDiv= getByClass(`svg-div${num}`);
    let svgNew;
    if( isOpen == false) {
        svgNew = createSvg("m296 711-56-56 240-240 240 240-56 56-184-184-184 184Z");
    } 
    else if( isOpen == true) {
        svgNew = createSvg("M480 711 240 471l56-56 184 184 184-184 56 56-240 240Z");
    }     
    svgOld.remove();
    svgNew.setAttribute("id", `svgDots${num}`); 
    svgDiv.appendChild(svgNew);

    return svgNew
}


function createRemoveProjectForm(num) {
    let mainDiv = createDiv();
    mainDiv.setAttribute("class", "remove-project-warning");
    let form = createEl("form","");
    form.addEventListener("submit",(e)=> {
        e.preventDefault();
    })
    form.setAttribute("id",`removeProjectForm${num}`);
    //let fieldset = createEl("fieldset","");

    
    let allDiv = createDiv();
    let projectDiv = createDiv();

    allDiv.innerHTML = "Project and TASKS";
    projectDiv.innerHTML = "Just the project";
    
    form.appendChild(projectDiv);
    form.appendChild(allDiv);
    let radio1 = createInput("radio","project-decision","all");
    
    let radio2 = createInput("radio","project-decision","project");
    radio2.checked = true;
    
    allDiv.appendChild(radio1);
    allDiv.className = "tasks-div";
    projectDiv.appendChild(radio2);
    projectDiv.className = "just-project-div";
    
    let submit = createInput("submit","Submit", "Submit");
    submit.className = "btn-warning-submit";
    submit.setAttribute("onclick",`acceptDelete(${num})`);
    let cancelBtn = createEl("button", "Cancel");
    cancelBtn.setAttribute("class","btn-warning-cancel");
    cancelBtn.setAttribute("onclick",`cancelDelete()`);
    
    form.appendChild(submit);
    form.appendChild(cancelBtn);

    let messageDiv = createDiv();    
    let heading = createEl("h1","Quick question"); 
    let taskName = getFromStorage(`projects`);   
    taskName = taskName[num-1];
    let message = createEl("p",`Do you want to do delete just the "${taskName}" project or project and it's tasks?`);
    messageDiv.appendChild(heading);
    messageDiv.appendChild(message);
    
    mainDiv.appendChild(messageDiv);
    mainDiv.appendChild(form);


    let icons = document.querySelectorAll(".tick");
    icons.forEach(icon => icon.setAttribute("onclick","message3()"));

    
    return mainDiv
    
}


export {createEl, createSvg, createDiv, createOption, createDateForm, createPriorityForm,createDescriptionForm, createTitleForm, changeSvgIcon, createRemoveProjectForm}
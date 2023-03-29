import { setToday } from "./date.js";

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

function createPriorityForm() {
    let form = createEl("form","");
    let select = createEl("select","");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
    });
    
    select.setAttribute("name","priority");
    
    let test = createOption("Select priority");
    test.setAttribute("selected","true");
    test.setAttribute("disabled","");
       
    let low = createOption("low");
    low.className = "low"
    let medium = createOption("medium");
    medium.className = "medium"
    let high = createOption("high");
    high.className = "high"
    let critical = createOption("critical");
    critical.className = "critical"
        
    form.appendChild(select);
    select.appendChild(test);
    select.appendChild(low);
    select.appendChild(medium);
    select.appendChild(high);
    select.appendChild(critical);

    return form
}

function createDateForm() {    
    let dateInput = createEl("input","");
    dateInput.setAttribute("name","date");
    dateInput.setAttribute("type","date");
    setToday(dateInput);
        
    return dateInput
}

export {createEl, createSvg, createDiv, createOption, createDateForm, createPriorityForm}
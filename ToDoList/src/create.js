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



export {createEl, createSvg, createDiv, createOption}
import { listMiddle } from "./dom.js";
import { createEl,createDiv,createSvg } from "./create.js";
import { getFromStorage, setToStorage, getByClass} from "./getters.js";
import { getCount} from "./count.js";
import { showTask } from "./task.js";

function placeProjectTasks(name, whereToDisplay) {
    let count = getCount();
    let array = [];           
    for(let i=1; i<=count;i++) {
        let storageItem = getFromStorage(`task${i}`);
        let storageProjectName = storageItem[4];
        if(name == storageProjectName) {
            array.push([storageItem,i]);                
        }       
    }; 
    
    for(let i=0; i<array.length;i++) {
            let arrayBig = array[i];
            let arrayItem = arrayBig[0];        
            let arrayNum = arrayBig[1];
            showTask(whereToDisplay,arrayNum , arrayItem[0], arrayItem[1], arrayItem[2], arrayItem[3],arrayItem[4]);
    }
}




function showProject(whereToDisplay, name, num) {      
    let mainDiv = createDiv();
    mainDiv.className = `project`; 
    let divTop = createDiv();
    divTop.className = "project-top"
    let divHidden = createDiv();

    let divH = createDiv();
    let header = createEl("h1", name);
    divH.appendChild(header);    
    divTop.appendChild(divH);

    let svgDiv = createDiv();
    svgDiv.className = `project-icon${num}`;
    let svgIcon = createSvg("M480 711 240 471l56-56 184 184 184-184 56 56-240 240Z");
    svgIcon.setAttribute("onclick", `showProjectTasks(${num})`);
    svgDiv.appendChild(svgIcon);
    divTop.appendChild(svgDiv);
    
    mainDiv.appendChild(divTop);
    mainDiv.appendChild(divHidden);
    divHidden.className = `project-hidden project-hidden${num}`;
    whereToDisplay.appendChild(mainDiv);

    placeProjectTasks(name, divHidden);

    
}

function displayAllProjects() {
    let projects = getFromStorage("projects");
    let array = [];
    for(let i=0;i<projects.length;i++) {
        let name = projects[i];       
        showProject(listMiddle,name, i+1);  
        array.push(false);                      
    }
    setToStorage("isProjectsShown",array);
}

function showProjectTasks(num) {    
    let storageNum = num-1;
    console.log(storageNum);
    let isProjectsShown = getFromStorage("isProjectsShown");
    let isTasksShown = isProjectsShown[storageNum];    
    let hidden = getByClass(`project-hidden${num}`);
    let icon = getByClass(`project-icon${num}`);
    icon.innerHTML = "";

    if(isTasksShown == false) {
        let svgIcon = createSvg("m296 711-56-56 240-240 240 240-56 56-184-184-184 184Z");
        svgIcon.setAttribute("onclick", `showProjectTasks(${num})`);
        icon.appendChild(svgIcon);

        hidden.style.display = "block";
        isTasksShown = true;        
        isProjectsShown[storageNum] = isTasksShown;
        setToStorage("isProjectsShown", isProjectsShown);
    }

    else if(isTasksShown == true) {        
        let svgIcon = createSvg("M480 711 240 471l56-56 184 184 184-184 56 56-240 240Z");
        svgIcon.setAttribute("onclick", `showProjectTasks(${num})`);
        icon.appendChild(svgIcon);


        hidden.style.display = "none";
        isTasksShown = false;
        isProjectsShown[storageNum] = isTasksShown;
        setToStorage("isProjectsShown", isProjectsShown);
    }
}
export {displayAllProjects,showProjectTasks,placeProjectTasks}
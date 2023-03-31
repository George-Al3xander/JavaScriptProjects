import { listMiddle } from "./dom.js";
import { createEl,createDiv,createSvg , createRemoveProjectForm} from "./create.js";
import { getFromStorage, setToStorage, getByClass, getById} from "./getters.js";
import { getCount} from "./count.js";
import { showTask } from "./task.js";




function getSameProjectTasks(name) {
    let array = [];
    let count = getCount();
    for(let i=1; i<=count;i++) {
        let storageItem = getFromStorage(`task${i}`);
        let storageProjectName = storageItem[4];
        if(name == storageProjectName) {
            array.push([storageItem,i]);                
        }       
    };
    return array
}


function placeProjectTasks(name, whereToDisplay) {
    
    let array = getSameProjectTasks(name);           
     
    
    for(let i=0; i<array.length;i++) {
            let arrayBig = array[i];
            let arrayItem = arrayBig[0];        
            let arrayNum = arrayBig[1];
            showTask(whereToDisplay,arrayNum , arrayItem[0], arrayItem[1], arrayItem[2], arrayItem[3],arrayItem[4]);
    }


    if(array.length == 0) {
        let svg = getByClass(`${name.replaceAll(" ", "-")} .project-top`).children[2];
        svg.setAttribute("onclick" , "message2()");    
        // let emptyCheckArray = getFromStorage("isProjectEmpy");
        // emptyCheckArray.push(true);
        // setToStorage("isProjectEmpy", emptyCheckArray);        
    } //else if(array.length > 0) {
    //     let emptyCheckArray = getFromStorage("isProjectEmpy");
    //     emptyCheckArray.push(false);
    //     setToStorage("isProjectEmpy", emptyCheckArray);   
    // }
}

function showProject(whereToDisplay, name, num) {      
    let mainDiv = createDiv();
    mainDiv.className = `project ${name.replaceAll(" ", "-")}`; 
    let divTop = createDiv();
    divTop.className = "project-top"
    let divHidden = createDiv();

    let divH = createDiv();
    let header = createEl("h1", name);
    divH.appendChild(header); 
    
    let svgDelete = createSvg("M600 816v-80h160v80H600Zm0-320v-80h280v80H600Zm0 160v-80h240v80H600ZM120 416H80v-80h160v-60h160v60h160v80h-40v360q0 33-23.5 56.5T440 856H200q-33 0-56.5-23.5T120 776V416Zm80 0v360h240V416H200Zm0 0v360-360Z");
    svgDelete.setAttribute("class", "tick");
    svgDelete.setAttribute("onclick", `removeProject(${num})`);
    divTop.appendChild(svgDelete);
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


function removeProject(num) {
    let form = createRemoveProjectForm(num);
    let message = document.body.appendChild(form);
    message.focus();
}

function acceptDelete(num) {
    let numArray = num-1;
    let form = getById(`removeProjectForm${num}`);
    let formData = new FormData(form);

    let decision = formData.get("project-decision");
    console.log(decision);

    let storageProjectsArray = getFromStorage("projects");

    

    //let tasks = getSameProjectTasks(storageProjectsArray[numArray ]);
    console.log(tasks);
    storageProjectsArray.splice(numArray, 1);
    if(decision == "project") {
        console.log(storageProjectsArray);

    } 

    else if (decision == "all") {
        let count = getCount();
        for(let i=1; i<=count;i++) {
            let storageItem = getFromStorage(`task${i}`);
            let storageProjectName = storageItem[4];
            if( storageProjectsArray[numArray] == storageProjectName) {
                                
            }       
        };
    }
}

export {displayAllProjects,showProjectTasks,placeProjectTasks, getSameProjectTasks, removeProject,acceptDelete}
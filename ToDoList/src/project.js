import { listMiddle } from "./dom.js";
import { createEl,createDiv,createSvg , createRemoveProjectForm} from "./create.js";
import { getFromStorage, setToStorage, getByClass, getById} from "./getters.js";
import { getCount, reduceCount} from "./count.js";
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
    } 
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
    svgDelete.setAttribute("id",`removeProjectBtn${num}`);
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
    
}
function cancelDelete() {
    let message = getByClass("remove-project-warning");
    listMiddle.innerHTML = "";
    message.remove();
    displayAllProjects(); 
    let projects = getFromStorage("projects");
    for(let i=1; i<=projects.length;i++) {
        let taskBtn = getById(`removeProjectBtn${i}`);
        taskBtn.setAttribute("onclick", `removeProject(${i})`);
    }
}

function acceptDelete(num) {
    let numArray = num-1;
    console.log(numArray);
    let form = getById(`removeProjectForm${num}`);
    let formData = new FormData(form);

    let decision = formData.get("project-decision");
    console.log(decision);

    let storageProjectsArray = getFromStorage("projects");
    
    let project = storageProjectsArray[numArray]
    console.log(project);
    
    storageProjectsArray.splice(numArray, 1);
    setToStorage("projects",storageProjectsArray);
    if(decision == "project") {
        let count = getCount();        
        for(let i=1; i<=count;i++) {
            let storageItem = getFromStorage(`task${i}`);
            console.log(`Project from tasks: ${storageItem[4]} and project from project array: ${project}`);            
            if(project == storageItem[4]) {
                storageItem[4] = "";   
                setToStorage(`task${i}`,storageItem);    
            }       
        };
    } 

    else if (decision == "all") {
        let count = getCount();
        let array = [];
        for(let i=1; i<=count;i++) {            
        let storageItem = getFromStorage(`task${i}`);
            let storageProjectName = storageItem[4];
            if( project == storageProjectName) {
                console.log(`StorageItemName: [${storageItem}] and I: ${i}`);  
                  
                array.push([storageItem,i]);
            }       
        };
        for(let item of array) {
            let num = item[1];
            let removingItemName = `task${num}`;
            localStorage.removeItem(removingItemName); 
            reduceCount();
        } 

        let array2 = [];
        for(let i=1; i<=count;i++){        
            let itemName = `task${i}`;
            let itemStorage = getFromStorage(itemName);
            if(itemStorage != null) {
            array2.push(itemStorage);
            localStorage.removeItem(itemName); 

        }; 
    }
    console.log(array2);
        for(let i=0; i<array2.length;i++) {
            setToStorage(`task${i+1}`,array2[i]);
        }        
        
        
    }
    cancelDelete();
}   



export {displayAllProjects,showProjectTasks,placeProjectTasks, getSameProjectTasks, removeProject,acceptDelete, cancelDelete}
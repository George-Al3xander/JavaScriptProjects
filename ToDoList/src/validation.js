import { getFromStorage, setToStorage } from "./getters";
import { getSameProjectTasks } from "./project.js";

function checkData(title,date,priority) {
    return new Promise((resolve,reject)=>{
        if(title === "" || date === "" || priority == null ) {
            reject("Fill all required fields!");
        } else {
            resolve("");
        }
    })
}

function checkProject(name, compareName) {    
    return new Promise((resolve,reject)=>{
        if((name.toLowerCase() === compareName.toLowerCase()) || (name == "")) {
            reject("Can't be blank or you already have that project!");
        } else {
            resolve(name);
        }
    })
}

function projectDisable() {
    let projects = getFromStorage("projects");
    for(let i=0; i<projects.length;i++){
        let name = projects[i];
        let array = getSameProjectTasks(name);
        if(array.length == 0) {
            let options = document.querySelectorAll(`.nav option`);
            options.forEach(option => {
                if(option.innerHTML == name) {
                    option.style.color = "grey";
                    option.setAttribute("disabled","");
                }
            }); 
        }
    }        
}

function checkRequiredStorageSettings() {
    let count = getFromStorage("count");
    let projects = getFromStorage("projects");
    let isProjectsShown = getFromStorage("isProjectsShown");

    if(count == null) {
        setToStorage("count",0);
    }

    if(projects == null) {
        setToStorage("projects", []);
    }
    
    if(isProjectsShown == null) {
        setToStorage("isProjectsShown",[]);
    }
}

export default checkData
export {checkProject, projectDisable,checkRequiredStorageSettings}
import {newProject,newTask , removeTask } from "./newTask.js";
import { setToStorage,getFromStorage,getById, getByClass } from "./getters.js";
import {showElement, hideElement, hideMenu,listMiddle} from "./dom.js";
import { showTask } from "./task.js";
import { createOption } from "./create.js";
import { setToday } from "./date.js";
import editTask from "./change.js";
import { cancel } from "./change.js";
import acceptChanges from "./accept.js";
import selectProject from "./selectProject.js";
import { showDescription, displayAllTasks } from "./task.js";
import { displayAllProjects,showProjectTasks,placeProjectTasks } from "./project.js";




// Setting today's date
let today = getByClass("dateToday");
setToday(today);



window.newTask = newTask;
window.newProject = newProject;
window.showDescription = showDescription;
window.showElement = showElement;
window.hideElement = hideElement;
window.removeTask = removeTask;
window.editTask = editTask;
window.cancel = cancel;
window.acceptChanges = acceptChanges;
window.showProjectTasks = showProjectTasks;
window.selectProject = selectProject;
window.hideMenu = hideMenu;

let nav = getByClass("nav");
let slideUl = document.getElementById("slide-ul").children;
let dropdownLi = getById("dropdown-li");
let value;
nav.addEventListener("click", (e)=> {
    let name = e.target.innerHTML;    
    if(name == "all") {
        for(let task of slideUl) {
             task.setAttribute("class", "");
        }
        e.target.setAttribute("class", "current-slide");
        listMiddle.innerHTML = "";
        displayAllTasks();  
        
    }
    else  if(name == "projects") {
        for(let task of slideUl) {
             task.setAttribute("class", "");
        }
        e.target.setAttribute("class", "current-slide");  
        listMiddle.innerHTML = "";  
        displayAllProjects();         
    }
    else if (e.target.id == "dropdown-projects") {
        for(let task of slideUl) {
            task.setAttribute("class", "");
       }
       dropdownLi.setAttribute("class", "current-slide"); 
       listMiddle.innerHTML = ""; 
       let dropdownForm = getById("dropdown-projects");
       dropdownForm.addEventListener("input", ()=> {
        value = dropdownForm.options[dropdownForm.selectedIndex].value;
       })
       selectProject(value, listMiddle);
    }
}); 

let newTaskBtn = getById("newTaskBtn");
let newProjectBtn = getById("newProjectBtn");
let mainDiv = getByClass("main-absolute");
let background = getByClass("background-color");
let newTaskForm = getByClass("new-task-form");
let newProjectForm = getByClass("new-project-form");


//Message when task doesn't have a description
function message() {
    alert("Sorry no description for that task :(")
};
window.message = message;


//Shows new task form
newTaskBtn.addEventListener("click", ()=> { 
    mainDiv.style.visibility = "visible";
    background.style.visibility = "visible";
    newTaskForm.style.visibility = "visible";
});

//Hides everything
background.addEventListener("click", ()=> {
    mainDiv.style.visibility = "hidden";
    background.style.visibility = "hidden";
    newTaskForm.style.visibility = "hidden";
    newProjectForm.style.visibility = "hidden";
});


//Shows new project form
newProjectBtn.addEventListener("click", ()=> { 
    mainDiv.style.visibility = "visible";
    background.style.visibility = "visible";
    newProjectForm.style.visibility = "visible";
});

//Displaying all tasks
(function () {
    displayAllTasks();   
}());


//Adding projects to dom select form inputs
let projectSelect = getByClass("select-project-nav-select");   
let formSelect = getByClass("select-project-form"); 
let storageArray = getFromStorage("projects");    
    for(let i=0; i < storageArray.length;i++) {          
        let option = createOption(storageArray[i]);      
        let option2 = createOption(storageArray[i]);
        projectSelect.appendChild(option); 
        formSelect.appendChild(option2);  
    };  

    

   


    
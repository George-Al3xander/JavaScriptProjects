import { getCount} from "./count.js";
import {newProject,newTask , showTask, removeTask } from "./newTask.js";
import { setToStorage,getFromStorage,getById, getByClass } from "./getters.js";
import {showElement, hideElement, showDescription,displayTasks,listMiddle } from "./dom.js";
import { createOption } from "./create.js";
import { setToday } from "./date.js";
import editTask from "./change.js";
import { cancel } from "./change.js";
import acceptChanges from "./accept.js";


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

let nav = getByClass("nav");
let slideUl = document.getElementById("slide-ul").children;

nav.addEventListener("click", (e)=> {
    let name = e.target.innerHTML;
    

    if(name == "all") {
        for(let task of slideUl) {
             task.setAttribute("class", "");
        }
        e.target.setAttribute("class", "current-slide");
        listMiddle.innerHTML = "";
        displayTasks();  
    }
    else  if(name == "projects") {
        for(let task of slideUl) {
             task.setAttribute("class", "");
        }
        e.target.setAttribute("class", "current-slide");  
        listMiddle.innerHTML = "";   
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
    //displayTasks();
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



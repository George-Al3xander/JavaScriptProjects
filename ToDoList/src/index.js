import {newTask } from "./newTask.js";
import { getCount} from "./count.js";
import { showTask, removeTask } from "./newTask.js";
import { setToStorage,getFromStorage,getById, getByClass } from "./getters.js";
import {showElement, hideElement, showDescription } from "./dom.js";



window.newTask = newTask;
window.showDescription = showDescription;
window.showElement = showElement;
window.hideElement = hideElement;
window.removeTask = removeTask;

let newTaskBtn = getById("newTaskBtn");
let newProjectBtn = getById("newProjectBtn");
let mainDiv = getByClass("main-absolute");
let background = getByClass("background-color");
let newTaskForm = getByClass("new-task-form");

function message() {
    alert("Sorry no description for that task :(")
}

window.message = message;

newTaskBtn.addEventListener("click", ()=> {
    

    mainDiv.style.visibility = "visible";
    background.style.visibility = "visible";
    newTaskForm.style.visibility = "visible";
});

background.addEventListener("click", ()=> {

    mainDiv.style.visibility = "hidden";
    background.style.visibility = "hidden";
    newTaskForm.style.visibility = "hidden";
});




(function () {
    let count = getCount();
    for(let i=1; i<=count;i++) {
        let storageItem = getFromStorage(`task${i}`);
        showTask(i, storageItem[0], storageItem[1], storageItem[2], storageItem[3], storageItem[4]);
        setToStorage(`task${i}`,[storageItem[0], storageItem[1], storageItem[2], storageItem[3], storageItem[4], false]);        
    };
}());






// CONCEPT OF DESCRIPTION SHOWING

// isShown = false;

// function test() {
//     if(!isShown) {
//         desc.style.display = "inline";        
//         isShown = true;
//     }

//     else if(isShown) {
//         desc.style.display = "none";        
//         isShown = false;
//     }
    
// }


// let tasks = document.querySelectorAll("svg");

// tasks.forEach(task=> task.addEventListener("click",(e)=>{
//     console.log(e.value);
// })


import {getById, getData } from "./getters.js";
import {getCount, incrementCount, reduceCount} from "./count.js";
import {setToStorage, getFromStorage } from "./getters.js";
import {showTask, hideMenu} from "./dom.js"
import checkData from "./validation.js";
import {checkProject} from "./validation.js";
import { createEl } from "./create.js";
   

let form = getById("task-form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();    
});


let form2 = getById("project-form");
form2.addEventListener("submit", (e)=>{
    e.preventDefault();    
});




// locale storage proto
//              0       1           2       3       4           5 
// task+num | [name, description, date, priority, project, desc showStatus]





async function newTask() { 
    try {
        let data = getData(form);
        await checkData(data[0],data[2],data[3]);
        incrementCount();
        let count = getCount(); 
        let taskId=`task${count}`;
        setToStorage(taskId, data);
        showTask(count, data[0], data[1], data[2], data[3], data[4]);    
        hideMenu();        
    } catch (error) {
        alert(error);
    }
}

async function newProject() {    
    let formData = new FormData(form2);
    try {
        let name = formData.get("title");
        let storageArray = getFromStorage("projects");
        for(let i=0; i<=storageArray.length;i++) {          
            await checkProject(name,storageArray[i]); 
         };  
        storageArray.push(name);
        setToStorage("projects",storageArray); 
        hideMenu();          
    } catch (error) {
        alert(error);        
    }
}

function removeTask(num) {    
    let count = getCount();
    let removingItemName = `task${num}`;  
    let lastItemName = `task${count}`;
    localStorage.removeItem(removingItemName);
    let lastTask = getFromStorage(lastItemName);
    setToStorage(removingItemName,  lastTask);
    localStorage.removeItem(lastItemName);        
    let taskDom = getById(removingItemName);
    taskDom.remove();
    reduceCount();
}


export {form, newTask, newProject, showTask, removeTask}
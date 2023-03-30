import {getById, getData } from "./getters.js";
import {getCount, incrementCount, reduceCount} from "./count.js";
import {setToStorage, getFromStorage } from "./getters.js";
import {hideMenu, listMiddle} from "./dom.js";
import {showTask} from "./task.js";
import checkData from "./validation.js";
import {checkProject} from "./validation.js";



   

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
        showTask(listMiddle,count, data[0], data[1], data[2], data[3], data[4]);    
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
        for(let i=0; i<storageArray.length;i++) {          
            await checkProject(name,storageArray[i]); 
         };  
        storageArray.push(name);
        setToStorage("projects",storageArray); 
        hideMenu();          
    } catch (error) {
        alert(error);        
    }
}
//[0 - 5]

function removeTask(num) {    
    let count = getCount();
    let removingItemName = `task${num}`;  
    let lastItemName = `task${count}`;       
    let taskDomRemove = getById(removingItemName);
    let taskDomLast = getById(lastItemName);    
    if(count != num) {
        let lastTask = getFromStorage(lastItemName);
        showTask(listMiddle, num, lastTask[0], lastTask[1], lastTask[2], lastTask[3], lastTask[4], lastTask[5]);
        localStorage.removeItem(lastItemName);        
        setToStorage(removingItemName,  lastTask);
        console.log(lastTask);        
        taskDomLast.remove();
    } else if(count == num) {
        localStorage.removeItem(removingItemName);        
    }    
    taskDomRemove.remove();
    reduceCount();
}


export {form, newTask, newProject,  removeTask}
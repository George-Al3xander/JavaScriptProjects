import {getById,getByClass ,getData } from "./getters.js";
import {getCount, incrementCount} from "./count.js";
import {setToStorage } from "./getters.js";
import {showTask} from "./dom.js"
   

let form = getById("task-form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();    
});




// locale storage proto
//              0       1           2       3       4       
// task+num | [name, description, date, priority, project]





function newTask() {
    incrementCount();
    let count = getCount(); 
    let data = getData(form);
    let taskId=`task${count}`;
    setToStorage(taskId, data);

    showTask(count, data[0], data[1], data[2], data[3], data[4]);    
    let mainDiv = getByClass("main-absolute");
    let background = getByClass("background-color");
    let newTaskForm = getByClass("new-task-form");
    mainDiv.style.visibility = "hidden";
    background.style.visibility = "hidden";
    newTaskForm.style.visibility = "hidden";
    form.reset();


}

function removeTask(num) {    
    let name = `task${num}`;    
    let taskDom = getById(name);
    taskDom.remove();
}
  


export {form, newTask, showTask, removeTask}
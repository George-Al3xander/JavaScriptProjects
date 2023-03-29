import { createDiv, createEl, createSvg } from "./create.js";
import { getByClass, getById, getFromStorage, setToStorage} from "./getters.js";
import { form } from "./newTask.js";
import { getCount } from "./count.js";


let listMiddle = getByClass("list-middle");




function hideMenu() {
    let mainDiv = getByClass("main-absolute");
    let background = getByClass("background-color");
    let newTaskForm = getByClass("new-task-form");
    mainDiv.style.visibility = "hidden";
    background.style.visibility = "hidden";
    newTaskForm.style.visibility = "hidden";
    let newProjectForm = getByClass("new-project-form");
    newProjectForm.style.visibility = "hidden";
    form.reset();
}

function showElement(el) {
    let name = getByClass(el);
    name.style.visibility = "visible";
}

function hideElement(el) {
    let name = getByClass(el);
    name.style.visibility = "hidden";
}

export { listMiddle, showElement, hideElement, hideMenu}




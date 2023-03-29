import { placeProjectTasks } from "./project.js";



function selectProject(project, whereToDisplay) {
    whereToDisplay.innerHTML = ""; 
    project = project.replaceAll("-", " ")
    placeProjectTasks(project, whereToDisplay);
}   


export default selectProject
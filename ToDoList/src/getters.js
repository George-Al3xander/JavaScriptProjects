function getById(id) {
    let obj = document.getElementById(id);
    return obj;
}


function getByClass(objClass) {
    let obj = document.querySelector(`.${objClass}`)
    return obj;
}


function getData(form) {
    let formData = new FormData(form);
    let title = formData.get("title");
    let description = formData.get("description");
    let date  = formData.get("date");
    let priority  = formData.get("priority");
    let project  = formData.get("project");

    return [title,description,date,priority,project,false];
}

function getFromStorage(key) {
    let obj = JSON.parse(localStorage.getItem(key));    
    return obj
}

function setToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));    
}


export {getById, getByClass,getData, getFromStorage, setToStorage}


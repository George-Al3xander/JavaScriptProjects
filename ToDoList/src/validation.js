

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
            resolve("");
        }
    })
}

export default checkData
export {checkProject}
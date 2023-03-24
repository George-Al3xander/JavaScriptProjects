

function checkData(title,date,priority) {
    return new Promise((resolve,reject)=>{
        if(title === "" || date === "" || priority == null ) {
            reject("Fill all required fields!")
        } else {
            resolve("");
        }
    })
}

export default checkData
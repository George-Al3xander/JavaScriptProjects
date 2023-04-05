
function getByClass(name) {
    let obj = document.querySelector(`.${name}`);

    return obj
}

function getById(name) {
    let obj = document.getElementById(name);

    return obj
}


function getWeekdayName(date) {
    const options = { weekday: "long" };
    const day = new Date(date);
        let name = (new Intl.DateTimeFormat("ua", options)).format(day);
        
        return name
}

function getWeekdayDate(date) {
    let options = {  month: 'long', day: 'numeric' };
    let day  = new Date(date);
        let name = day.toLocaleDateString("en-GB", options);

    return name
}





export {getByClass, getById,  getWeekdayName , getWeekdayDate}
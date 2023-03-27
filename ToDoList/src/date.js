let today = new Date();

let yy = today.getFullYear();
let dd = today.getDate();
let mm = today.getMonth()+1;

if(dd < 10) {
    dd = `0${dd}`    
}

if(mm < 10) {
    mm = `0${mm}`    
}
let finalDate = `${yy}-${mm}-${dd}`;

function setToday(domObj) {
    domObj.setAttribute("min",finalDate);
}

export {setToday}
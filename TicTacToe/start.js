let startMenu = document.querySelector(".start-menu");
let form = document.getElementById("form");
let p1 = document.getElementById("first-player");
let p2 = document.getElementById("second-player");
let firstPlayer;
let secondPlayer;


function hideElement(el) {
	el.style.visibility = "hidden";
}

function checkNames(name1 , name2){	
    return new Promise((resolve,reject) => {	
        if((name1.value === "" || name1.value === null) || (name2.value === "" || name2.value === null)) {
            reject("Enter all names !")
        } 
        else {
            resolve([name1, name2]);
        }
    })
}

async function startGame() {
    const formData = new FormData(form);
        firstPlayer = formData.get("name1");
        secondPlayer = formData.get("name2");		
        try {
            const res = await checkNames(p1,p2);
            hideElement(startMenu);		
        } catch(err) {
            alert(err);
        }
}


export default startGame
export {form, firstPlayer, secondPlayer, p1, p2}
import "./styles.css";
import makeHome from "./home";
import makeMenu from "./menu";
import makeContact from "./contact";


let home = document.getElementById("home");
let menu = document.getElementById("menu");
let contact = document.getElementById("contact");
home.style.backgroundColor = "rgb(247, 241, 229)";

function createEl(type,text) {
    let obj = document.createElement(type);
    let content = document.createTextNode(text);
    obj.appendChild(content);
    
    return obj
}

let nav = document.getElementById("nav");
let contentBlock = document.getElementById("content")

nav.addEventListener("click", (e) => {
    let page = e.target.innerHTML.toLowerCase();
    
    if(page === "home") {         
        makeHome(contentBlock);              
        
        home.style.backgroundColor = "rgb(247, 241, 229)";
        menu.style.backgroundColor = "rgb(231, 177, 10)";
        contact.style.backgroundColor = "rgb(231, 177, 10)";        
    }
    else if(page === "menu") {        
        makeMenu(contentBlock);
        home.style.backgroundColor = "rgb(231, 177, 10)";
        menu.style.backgroundColor = "rgb(247, 241, 229)";
        contact.style.backgroundColor = "rgb(231, 177, 10)";
    }

    else if(page === "contact") {        
        makeContact(contentBlock);
        home.style.backgroundColor = "rgb(231, 177, 10)";
        menu.style.backgroundColor = "rgb(231, 177, 10)";
        contact.style.backgroundColor = "rgb(247, 241, 229)";
    }
})



export {createEl}
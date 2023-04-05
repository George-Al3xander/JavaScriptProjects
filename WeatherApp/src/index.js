import { getApiData } from "./api.js";
import { getById , getByClass} from "./getters.js";
import "./styles.css";


let containerBig = getByClass("container-big");
let containerSmall = getByClass("container-small");
let form = getById("form");
form.addEventListener("submit",(e)=> {
    e.preventDefault();
});



let url = `https://api.weatherapi.com/v1/forecast.json?key=3fbb4cbe52464ff595894916230404&q=luhansk&days=8`;
getApiData(url, "Luhansk");


function showWeather() {
    containerBig.innerHTML = "";
    containerSmall.innerHTML = "";

    let formData = new FormData(form);
    let city = formData.get("city");
    console.log(city);    
    form.reset();

    if(city == "dnipro") {
        city = "dnepropetrovsk";
    }
    
    let url = `https://api.weatherapi.com/v1/forecast.json?key=3fbb4cbe52464ff595894916230404&q=${city}&days=8`;

    getApiData(url, city);
}
window.showWeather = showWeather;

export {containerBig, containerSmall};



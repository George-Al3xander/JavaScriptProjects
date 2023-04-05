import { getWeekdayName,getWeekdayDate } from "./getters.js";

function createEl(type, content) {
    let obj = document.createElement(type);
    
    if(content != undefined) {
        let text = document.createTextNode(content);
        obj.appendChild(text);
    }

    return obj
}

function createImg(src) {
    let pic = createEl("img");
    pic.setAttribute("src", src);
    
    return pic
}

function createCelcSign() {
    let obj =createEl("span");
    obj.innerHTML = "&#8451";

    return obj
}


 function createToday(cityName, averageTemp, weatherDesc, imgSrc, minTemp, maxTemp) {
    let signCelc1 = createCelcSign();   
    let signCelc2 = createCelcSign();
    let signCelc3 = createCelcSign();

    
    let mainDiv = createEl("div");
    mainDiv.className = "weather-today";
    let city = createEl("h2",cityName);
    let mainTemp = createEl("h1", averageTemp);
    mainTemp.appendChild(signCelc1);

    let imgDiv = createEl("div");
    imgDiv.className = "img-div";
    let desc =  createEl("h3",weatherDesc);
    let pic =  createImg(imgSrc);
    imgDiv.appendChild(desc);
    imgDiv.appendChild(pic);

    let minMaxHeading = createEl("h4");

    let spanMax = createEl("span",`Max: ${maxTemp}`);
    spanMax.appendChild(signCelc2);

    let spanMin = createEl("span",`Min: ${minTemp}`);
    spanMin.appendChild(signCelc3);

    minMaxHeading.appendChild(spanMax);
    minMaxHeading.appendChild(spanMin);

    mainDiv.appendChild(city);
    mainDiv.appendChild(mainTemp);
    mainDiv.appendChild(imgDiv);
    mainDiv.appendChild(minMaxHeading);

    return mainDiv

}


function createWeekday(date, averageTemp, minTemp, maxTemp) {
    let dayName = getWeekdayName(date);
    let dayDate = getWeekdayDate(date);

    let signCelc1 = createCelcSign();   
    let signCelc2 = createCelcSign();
    let signCelc3 = createCelcSign();
    let mainDiv = createEl("div");
    mainDiv.className = "weekday";
    let weekday = createEl("h1",dayName);
    
    let dateHeading = createEl("h3", dayDate);

    let mainTemp = createEl("h1",averageTemp);
    mainTemp.appendChild(signCelc1);


    let minMaxHeading = createEl("h4");

    let spanMax = createEl("span",`Max: ${maxTemp}`);
    spanMax.appendChild(signCelc2);

    let spanMin = createEl("span",`Min: ${minTemp}`);
    spanMin.appendChild(signCelc3);

    minMaxHeading.appendChild(spanMin);
    minMaxHeading.appendChild(spanMax);

    mainDiv.appendChild(weekday);
    mainDiv.appendChild(dateHeading);
    mainDiv.appendChild(mainTemp);
    mainDiv.appendChild(minMaxHeading);

    return mainDiv
}


export {createToday, createWeekday}
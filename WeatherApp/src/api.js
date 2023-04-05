import { createToday, createWeekday } from "./create.js";
import { getWeekdayName } from "./getters.js";
import { containerBig, containerSmall } from "./index.js";


function getCity() {
    let city = prompt("Enter the city");
    city = city.toLowerCase();  
    return city;   
}


// let city = "dnipro";
// console.log(city);




//Sort days array
//[date, averageTemp, maxTemp, minTemp]
async function sortDays(data) {  
    data = await data.forecast.forecastday;
    let array = [];
    
    for(let i = 0;i <=7;i++) {
        let weekday = await data[i];
        
        let date = await weekday.date;
        
        let averageTemp = await weekday.day.avgtemp_c
        let maxTemp = await weekday.day.maxtemp_c;
        let minTemp = await weekday.day.mintemp_c;
        
        
        let item = [date,averageTemp,maxTemp,minTemp];
        array.push(item);
    }
    console.log(array);

    return array
}

async function getImageSrc(data) {
    let src = await data.current.condition.icon;    
    console.log(src);
    return src
}


async function getWeatherDesc(data) {
    let text = await data.current.condition.text;    
    console.log(text);    
    return text
}


async function getApiData(url,city) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let days = await sortDays(data);    
    let todayArr = days[0];
    console.log(todayArr);
    let desc = await getWeatherDesc(data);
    let src = await getImageSrc(data);
    let today = createToday(city, todayArr[1], desc,src,todayArr[3],todayArr[2]);
    containerBig.appendChild(today);
    for(let i = 1; i<=7;i++) {
        let day = days[i];
        
        let dayDom = createWeekday(day[0], day[1],day[3],day[2]);
        containerSmall.appendChild(dayDom);
    }
}

//let days = getApiData(url);




export {getApiData}





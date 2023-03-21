import {createEl } from './index.js';

function createFood(header, content, src, extra) {
    let mainDiv = createEl("div","");    
    let foodDiv = createEl("div","");
    mainDiv.appendChild(foodDiv);

    foodDiv.setAttribute("class","food");

    let textDiv = createEl("div","");

    let h = createEl("h2",header);    

    let p = createEl("p",content);

    let extraP = createEl("p",extra);
    
    textDiv.appendChild(h);
    textDiv.appendChild(p); 
    textDiv.appendChild(extraP);

    let img = createEl("img","");
    img.setAttribute("src",src);
    foodDiv.appendChild(textDiv);
    foodDiv.appendChild(img);

    return foodDiv
}

function createHeader(content) {
    let div = createEl("div","");
    div.setAttribute("class", "header");
    let h = createEl("h2",content.toUpperCase());

    div.appendChild(h);

    return div
};


function makeMenu(mainBlock) {
    mainBlock.innerHTML = " ";
    let header1 = createHeader("burgers");
    let header2 = createHeader("wings");
    let mainHeading = createEl("h1","Benny's menu");
    mainBlock.appendChild(mainHeading);

    let burger1 = createFood("SIGNATURE BBQ BURGER","House-smoked pulled pork, cheddar, coleslaw, fried pickles, Memphis Seasoning, and KC BBQ Sauce. Served with your choice of 1 side.","https://smokeybones.com/wp-content/uploads/2022/05/bacon-cheeseburger.jpg","");

    let burger2 = createFood("BACON CHEESEBURGER","Bacon, American cheese, lettuce, tomato, red onion, and pickles.Served with your choice of 1 side.","https://smokeybones.com/wp-content/uploads/2022/05/Good-Seed-veggie-burger.jpg","");

    let burger3 = createFood("MORNING GLORY BURGER","Fried egg, bacon, American cheese, and chipotle ketchup. Served with your choice of 1 side.","https://smokeybones.com/wp-content/uploads/2022/05/morning-glory-burger.jpg","");


    let section1 = createEl("section", "");
    section1.appendChild(burger1);
    section1.appendChild(burger2);
    section1.appendChild(burger3);


    let wings1 = createFood("BONELESS WINGS","HCrispy boneless wings tossed in your choice of sauce or dry rub. Get them the Bones Way, dusted with our house seasoning and drizzled with sweet bbq glaze.","https://www.foodnetwork.com/content/dam/images/food/fullset/2019/2/19/1/FN_Air-Fryer-Chicken-Wings-H_s4x3.jpg", "");

    let wings2 = createFood("JUMBO WINGS","Giant, juicy, rubbed, golden fried wings tossed in your choice of sauce or dry rub. Get them the Bones Way, dusted with our house seasoning and drizzled with sweet bbq glaze.","https://www.seriouseats.com/thmb/zNzv_FjRF4hEbpawVKJDC-JU0g8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-buffalo-wings-oven-fried-wings-recipe-hero-dcc412b6e26444b4a2112d4402f039ae.JPG", "");

    let wings3 = createFood("JUMBO SMOKED WINGS","House smoked wings tossed in your choice of sauce or dry rub. Get them the Bones Way, dusted with our house seasoning and drizzled with sweet bbq glaze.","https://rec-origin-graphics.s3.amazonaws.com/0_GraphicsRecipes/5607_4k.jpg", "");


    let section2 = createEl("section", "");
    section2.appendChild(wings1);
    section2.appendChild(wings2);
    section2.appendChild(wings3);

    

    mainBlock.appendChild(header1);
    mainBlock.appendChild(section1);

    mainBlock.appendChild(header2);
    mainBlock.appendChild(section2);

   
}

export default makeMenu
export {createFood}
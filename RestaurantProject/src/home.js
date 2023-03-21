import {createEl } from './index.js';

function makeHome(mainBlock) {
    mainBlock.innerHTML = " ";
    let mainHeading = createEl("h1","Benny's Barbeque Shelter");
    mainBlock.appendChild(mainHeading);

    let section1 = createEl("section","");    
    let s1h = createEl("h2","About us");
    let s1p = createEl("p","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam assumenda rem nisi ipsam sunt? Consectetur, pariatur? Consequuntur vel voluptatem totam placeat. Cupiditate dolore expedita obcaecati est accusantium doloribus magni? Officia laborum eveniet corrupti quia quibusdam illo? Et nam odit ab vitae maiores assumenda aut, non tenetur perspiciatis molestiae possimus quia.");
    section1.appendChild(s1h);
    section1.appendChild(s1p);

    let section2 = createEl("section","");
    let s2h = createEl("h2","Hours");
    let s2ul = createEl("ul","");

    let li1 = createEl("li" , "Sunday: 8am - 8pm");
    let li2 = createEl("li" , "Monday: 6am - 6pm");
    let li3 = createEl("li" , "Tuesday: 6am - 6pm");
    let li4 = createEl("li" , "Wednesday: 6am - 6pm");
    let li5 = createEl("li" , "Thursday: 6am - 10pm");
    let li6 = createEl("li" , "Friday: 6am - 10pm");
    let li7 = createEl("li" , "Saturday: 8am - 10pm");

   s2ul.appendChild(li1);
   s2ul.appendChild(li2);
   s2ul.appendChild(li3);
   s2ul.appendChild(li4);
   s2ul.appendChild(li5);
   s2ul.appendChild(li6);
   s2ul.appendChild(li7);

   section2.appendChild(s2h);
   section2.appendChild(s2ul);

    let section3 = createEl("section","");
    let s3h = createEl("h2","Location");
    let s3p = createEl("p","123 Chicken Drive, Bennyville, Babe");
    section3.appendChild(s3h);
    section3.appendChild(s3p);

    mainBlock.appendChild(section1);
    mainBlock.appendChild(section2);
    mainBlock.appendChild(section3);
}

export default makeHome
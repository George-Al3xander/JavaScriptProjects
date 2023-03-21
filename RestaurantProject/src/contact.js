import {createEl } from './index.js';
import { createFood } from './menu.js';

function makeContact(mainBlock) {
    mainBlock.innerHTML = " ";    

    let section = createEl("section","");
    
    let ceo = createFood("Jeremie Damon Pennick","CEO AND OWNER OF OUR CHAIN","https://yt3.googleusercontent.com/ytc/AL5GRJV-ISm0037sG74VN-K0ToSWaeuvQjyCCqcotIRs=s900-c-k-c0x00ffffff-no-rj","+380 95 35 54 21");
    // let ceoAdd =createEl("p",);
    // ceo.appendChild(ceoAdd);

    let chef = createFood("Beeba and Boba Ramsey","Our chef family","https://www.essence.com/wp-content/uploads/2017/04/ayesha-curry-600x800-900x600.jpg","coocker@email.com");
    // let chefAdd =createEl("p");
    // chef.appendChild(chefAdd);

    let manager = createFood("Rosmary James","Our main manager","https://pbs.twimg.com/profile_images/1574088378257182721/Ocjbkn0j_400x400.jpg","figgybaby.com");
    // let managerAdd =createEl("p");
    // manager.appendChild(managerAdd);
    
    section.appendChild(ceo);
    section.appendChild(chef);
    section.appendChild(manager);
    mainBlock.appendChild(section);
}


export default  makeContact
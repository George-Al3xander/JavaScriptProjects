


function getById(id) {
    let obj = document.getElementById(id);

    return obj
}


let form = getById("form");


let inputEmail = getById("input-email");
let inputCountry = getById("input-country");
let inputZip = getById("input-zip");
let inputPassword = getById("input-password");
let inputPasswordConfirm = getById("input-password-confirm");

let errorEmail = getById("error-email");
let errorCountry = getById("error-country");
let errorZip = getById("error-zip");
let errorPassword = getById("error-password");
let errorPasswordConfirm = getById("error-password-confirm");

let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
let regexZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
let regexCountry = /[A-Za-z].{3,20}$/;




form.addEventListener("submit",(e)=>{
    e.preventDefault();
});

let validEmail;
let validCountry;
let validZip;
let validPassword;
let password;
let validPasswordConfirm;



inputEmail.addEventListener("input", (e)=> {
    console.log(e.target.value);
    validEmail = regexEmail.test(e.target.value);
    if(validEmail) {
        errorEmail.style.display = "none";       
    }
    else if(!validEmail) {
        errorEmail.style.display = "block";       
    }
});
inputCountry.addEventListener("input", (e)=> {
    console.log(e.target.value);
    validCountry = regexCountry.test(e.target.value);
    if(validCountry) {
        errorCountry.style.display = "none";       
    }
    else if(!validCountry) {
        errorCountry.style.display = "block";       
    }
});
inputZip.addEventListener("input", (e)=> {
    console.log(e.target.value);
    validZip = regexZip.test(e.target.value);
    if(validZip) {
        errorZip.style.display = "none";       
    }
    else if(!validZip) {
        errorZip.style.display = "block";       
    }
});
inputPassword.addEventListener("input", (e)=> {
    validPassword = regexPassword.test(e.target.value);
    if(validPassword) {
        errorPassword.style.display = "none";       
    }
    else if(!validPassword) {
        errorPassword.style.display = "block";       
    }
    password = e.target.value
})
inputPasswordConfirm.addEventListener("input", (e)=> {
    console.log(e.target.value);
    let valid = e.target.value == password;
    if(!valid) {
        validPasswordConfirm = false;  
        errorPasswordConfirm.style.display = "block"; 
    }
    else if(valid) {
        validPasswordConfirm = true;
        errorPasswordConfirm.style.display = "none";        
    }
});


function checkInputs() {
    if((validEmail ==  false) || (validCountry ==  false) || (validZip ==  false) || (validPassword ==  false) || (validPasswordConfirm ==  false))  {
        alert("Enter all fields in valid format!");
    }   
}
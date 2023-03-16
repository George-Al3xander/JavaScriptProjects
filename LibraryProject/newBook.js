import Book from "./main.js"
import {getCount} from "./getters.js"
import {checkBook,checkInputs} from "./validation.js"

async function addNewBook() {	
	let bookTitle;
	let bookAuthor;
	let bookPages;
	let bookReadStatus;
	let count = getCount();	
	let formBook = document.getElementById('formBook');
	formBook.addEventListener("submit", async function(e) {
		e.preventDefault();
		const formData =  new FormData(formBook);
		bookTitle = formData.get("title");
		bookAuthor = formData.get("author");
		bookPages = formData.get("pages");				
	let yes = document.getElementById("yes");
	let no = document.getElementById("no");
	if(yes.checked) {
		bookReadStatus = "read";
	}  if(no.checked) {
		bookReadStatus = "unread";	
	}
	try {		
		let res = await checkInputs(bookTitle,bookAuthor,bookPages);
		await checkBook(res);
			localStorage.setItem("book-" + (count+1),JSON.stringify(new Book(bookTitle,bookAuthor,bookPages,bookReadStatus,(count+1))));
			localStorage.setItem("count" ,JSON.stringify(count+1));			
			alert("Book added!");		
			formBook.reset();	
			closeForm();				
	} catch(error) {
		alert(error)	
	}		
	});	
}

function showForm() {
    let formDiv = document.querySelector(".book-form");
    let backgroundDiv = document.querySelector(".book-background");
    formDiv.style.scale = "1";
    backgroundDiv.style.visibility = "visible";	
}

function closeForm() {
	let formDiv = document.querySelector(".book-form");
	let backgroundDiv = document.querySelector(".book-background");
	formDiv.style.scale = "0";
	setTimeout(()=>{
		backgroundDiv.style.visibility = "hidden";
	},300);    
	let formBook = document.getElementById('formBook');
	formBook.addEventListener("submit",function(e) {
		e.preventDefault();
	})    
}    

export {addNewBook, closeForm,showForm}
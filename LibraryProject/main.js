import {getBody, getCount, getFromStorage} from "./getters.js"
import {addNewBook, closeForm,showForm} from "./newBook.js"
import {removeBook, changeReadStatus} from "./book-buttons.js"

window.removeBook = removeBook;
window.changeReadStatus = changeReadStatus;
window.addNewBook = addNewBook;
window.closeForm = closeForm;
window.showForm = showForm;

let library = [];

class Book {
	constructor(title,author,pages,readStatus, number) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.readStatus = readStatus;	
		this.number = number;
		library.push(this);	

		let newDiv = document.createElement("div");	
		getBody.appendChild(newDiv);	
		newDiv.setAttribute("class","book");
		newDiv.setAttribute("id","book-" + number);		

		//Title signin
		let bookTitle = title;	
		let newTitle= document.createElement("h3");	
		newDiv.appendChild(newTitle);	
		let titleSpan = document.createElement("span");
		let fullTitleSpan = document.createTextNode(bookTitle);	
		titleSpan.appendChild(fullTitleSpan);		
		let fullTitle = document.createTextNode("Tittle: ");		
		newTitle.appendChild(fullTitle);
		newTitle.appendChild(titleSpan);

		//Author signin
		let bookAuthor = author;	
		let newAuthor= document.createElement("h3");	
		newDiv.appendChild(newAuthor);			
		let fullAuthor = document.createTextNode("By " + bookAuthor );		
		newAuthor.appendChild(fullAuthor);

		//Pages signin
		let bookPages = pages;	
		let newPages= document.createElement("h4");	
		newDiv.appendChild(newPages);	
		let pagesSpan = document.createElement("span");
		let fullPagesSpan = document.createTextNode(bookPages);	
		pagesSpan.appendChild(fullPagesSpan);		
		let fullPages = document.createTextNode("Pages: " );		
		newPages.appendChild(fullPages);
		newPages.appendChild(pagesSpan);

		//Read status button	
		let newReadButton = document.createElement("button");
		newReadButton.setAttribute('onclick','changeReadStatus("book-'+number+'","button-' + number +'")');
		newReadButton.setAttribute('id', ("button-" +number));
		let buttonDiv = document.createElement("div");
		newDiv.appendChild(buttonDiv);
		buttonDiv.appendChild(newReadButton);
		buttonDiv.setAttribute("class","buttons");		
		let fullReadButton;

		if(readStatus=="unread") {
			newReadButton.style.color = "red";	
			fullReadButton = document.createTextNode("unread");
			
		} else if (readStatus=="read") {
			 newReadButton.style.color = "lime";
			 fullReadButton = document.createTextNode("read");
			
		}		
		newReadButton.appendChild(fullReadButton);

		//Remove button		
		let newRemoveButton = document.createElement("button");
		newRemoveButton.setAttribute('onclick','removeBook("book-'+number+'")');		
		let fullRemoveButton =document.createTextNode("remove");
		newRemoveButton.appendChild(fullRemoveButton);
		buttonDiv.appendChild(newRemoveButton);				
	}	
}

(function() {	
	let count = getCount();
	for(let i=1;i<=count;i++) {
	let storageItem = getFromStorage("book-" + i);		
	  new Book(storageItem.title,storageItem.author,storageItem.pages,storageItem.readStatus,i);
	}
})();

export default Book

	

	
	
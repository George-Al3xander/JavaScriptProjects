let library = [];
let getBody = document.body;

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
		let bookReadStatus = readStatus;
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

function removeBook(bookId) {		
	let count = JSON.parse(localStorage.getItem("count"));	
	let lastBook = JSON.parse(localStorage.getItem("book-" + count));
	let lastBookId = ("book-" + count);
	localStorage.removeItem(bookId);
	localStorage.setItem(bookId ,JSON.stringify(lastBook));
	localStorage.removeItem(lastBookId);
	let bookDiv = document.getElementById(lastBookId);
	bookDiv.remove();
	localStorage.setItem("count" ,JSON.stringify(count-1));
}

function changeReadStatus (bookId,buttonId) {	
	let book = JSON.parse(localStorage.getItem(bookId));
	let readStatusCheck = book.readStatus;
	let buttonText = document.getElementById(buttonId);	

	if(readStatusCheck=="read") {
		book.readStatus = "unread";	

		buttonText.innerHTML ="unread";
		buttonText.style.color = "red";
	}
	else if(readStatusCheck=="unread") {
		book.readStatus = "read";	
		buttonText.innerHTML ="read";
		buttonText.style.color = "lime";
	}
	localStorage.setItem(bookId ,JSON.stringify(book));
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

function showForm() {
	let formDiv = document.querySelector(".book-form");
	let backgroundDiv = document.querySelector(".book-background");
	formDiv.style.scale = "1";
	backgroundDiv.style.visibility = "visible";	
}

function addNewBook() {	

	let count = JSON.parse(localStorage.getItem("count"));

	function checkInputs(title,author,pages) {		
		return new Promise(function(resolve,reject) {
			for(let i=1;i<=count;i++) {
				let storageItem = JSON.parse(localStorage.getItem(("book-" + i)));	
				let storageTitle = storageItem.author.toLowerCase();
					if(( storageTitle == title || title === "" || author === "" || pages === ""  || pages === "") && (pages <=0 )) {				
						reject("                                     CHECK ENTRED INFO AGAIN! \n \n Maybe you missing something  or you already have that book in your library?")
					} 
					else if( storageTitle == title || title === "" || author === "" || pages === ""  || pages === "" || pages <=0 ) {				
						reject("Check entred info again!")
					}
					else {
						resolve(title,author,pages);
					}
				}					
			}
		)
	}	
	let bookTitle = document.getElementById("bookTitle").value;
	let bookAuthor = document.getElementById("bookAuthor").value;
	let bookPages = document.getElementById("bookPages").value;
	let bookReadStatus;	
	let yes = document.getElementById("yes");
	let no = document.getElementById("no");

	if(yes.checked) {
		bookReadStatus = "read";
	}  if(no.checked) {
		bookReadStatus = "unread";	
	}
	
	checkInputs(bookTitle,bookAuthor,bookPages)
	.then(()=>{		
	localStorage.setItem("book-" + (count+1),JSON.stringify(new Book(bookTitle,bookAuthor,bookPages,bookReadStatus,(count+1))));
	localStorage.setItem("count" ,JSON.stringify(count+1));			
	alert("Book added!");		
	formBook.reset();	
	closeForm();
	},
	(data)=>{alert(data)}
	);
	let formBook = document.getElementById('formBook');
	formBook.addEventListener("submit",function(e) {
		e.preventDefault();
	});	
}

(function() {	
	let count = JSON.parse(localStorage.getItem("count"));
	for(let i=1;i<=count;i++) {
	let storageItem = JSON.parse(localStorage.getItem(("book-" + i)));		
	  new Book(storageItem.title,storageItem.author,storageItem.pages,storageItem.readStatus,i);
	}
})();
	
	

	
	
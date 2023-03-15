let library = [];
let getBody = document.body;


function getCount() {
	let count = JSON.parse(localStorage.getItem("count"));
	return count
}

function getFromStorage(name) {
	let obj = JSON.parse(localStorage.getItem(name));
	return obj
}


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

function removeBook(bookId) {		
	let count = getCount();	
	console.log(count);
	let lastBook = JSON.parse(localStorage.getItem("book-" + count));
	console.log(lastBook);
	let lastBookId = ("book-" + count);
	console.log(lastBookId);
	localStorage.removeItem(bookId);
	localStorage.setItem(bookId ,JSON.stringify(lastBook));
	localStorage.removeItem(lastBookId);
	let bookDiv = document.getElementById(bookId);
	bookDiv.remove();
	localStorage.setItem("count" ,JSON.stringify(count-1));
}

function changeReadStatus (bookId,buttonId) {	
	let book = getFromStorage(bookId);
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

function checkInputs(title,author,pages) {		
	return new Promise(function(resolve,reject) {				
				if(( title === "" || author === "" || pages === ""  || pages === "") && (pages <=0 )) {				
					reject("Please, fill ALL the textfields")
				} 
				else if(title === "" || author === "" || pages === ""  || pages === "" || pages <=0 ) {				
					reject("Check entred info again!")
				}
				else {
					resolve([title,author]);
				}									
		}
	)
}	

function checkBook(array){
	let isBookExist = false;
	let count = getCount();
	let title = array[0].toLowerCase();	
	let author = array[1].toLowerCase();		
	return new Promise((resolve,reject)=>{		
		for(let i=1;i<=count;i++) {
				let storageItem = JSON.parse(localStorage.getItem(("book-" + i)));	
				let storageTitle = storageItem.title.toLowerCase();	
				let storageAuthor = storageItem.author.toLowerCase();	
			if(title == storageTitle && author == storageAuthor) {
				isBookExist = true;					
				console.log(isBookExist);				
				break;
			} else if(author != storageAuthor) {
				isBookExist = false;				
				console.log(isBookExist);				
			}
		}

		if(isBookExist) {
			reject("You already have that book in your library!");	
			console.log(isBookExist);
		} else if(!isBookExist) {
			resolve();
			console.log(isBookExist);
		}
	});	
}

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

(function() {	
	let count = getCount();
	for(let i=1;i<=count;i++) {
	let storageItem = getFromStorage("book-" + i);		
	  new Book(storageItem.title,storageItem.author,storageItem.pages,storageItem.readStatus,i);
	}
})();




	

	
	
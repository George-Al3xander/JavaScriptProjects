import { getCount, getFromStorage} from "./getters.js"

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

export {removeBook, changeReadStatus}
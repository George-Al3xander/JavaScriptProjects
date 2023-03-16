import {getCount} from "./getters.js"

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

export {checkBook, checkInputs}
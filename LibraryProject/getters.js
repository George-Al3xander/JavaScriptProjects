let getBody = document.body;


function getCount() {
	let count = JSON.parse(localStorage.getItem("count"));
	return count
}

function getFromStorage(name) {
	let obj = JSON.parse(localStorage.getItem(name));
	return obj
}

export {getBody, getCount, getFromStorage}

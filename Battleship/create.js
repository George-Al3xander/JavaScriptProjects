function createEl(type, content) {
    let obj = document.createElement(type);

    if(content != undefined) {
        let text = document.createTextNode(content);
        obj.appendChild(text);
    }

    return obj;
}

export {createEl}
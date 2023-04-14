function getRandomArray() {
    let length = Math.floor(Math.random() * (15 - 5) + 5);
    let array = [];
    for(let i = 0; i<length;i++) {
        array.push(Math.floor(Math.random() * 100));
    }

    return array;
}

export default getRandomArray
function countWords(list){
    let count = 0;
    for (value of list){
        if (value.toLowerCase() !== "default"){
            count += 1;
        }
    }
    return count
}

console.log(countWords(list))
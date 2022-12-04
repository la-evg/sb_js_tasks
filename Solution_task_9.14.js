let numbers_list = [];

for(let i = 0; i < list.length && list[i] !== false; i++){
    if ((typeof list[i]) == "number"){
        numbers_list.push(list[i])
    }
}

console.log(numbers_list)
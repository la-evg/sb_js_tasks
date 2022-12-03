sum = 0;
for(let i = 0; i < list.length && typeof(list[i]) !== "boolean"; i++){
    sum += list[i]
}

console.log(sum)
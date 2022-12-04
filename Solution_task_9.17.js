fruits = Object.values(obj);
const countFruits = {};

for(fruit of fruits){
    countFruits[fruit] = countFruits[fruit] ? countFruits[fruit] + 1 : 1;
}

console.log(countFruits)
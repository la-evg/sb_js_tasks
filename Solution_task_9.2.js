let count = 0;
let word = "";
for (let item of list){
  if (item.length>count){
    count = item.length;
    word = item;
  }
  
}
console.log(word);
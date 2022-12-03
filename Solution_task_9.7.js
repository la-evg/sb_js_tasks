let max = 0;

for (num of list) {
  if (num > max){
    max = num;
  }
}

let min = max;

for(num of list){
  if (num < min){
    min = num
  }
}

console.log(min*max)